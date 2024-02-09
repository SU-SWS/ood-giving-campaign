import { type NextRequest } from 'next/server';
import { ResponseData as EndPointResponse } from '../[id]/route';

export type ResponseData = {
  school?: EndPointResponse;
  topics?: EndPointResponse;
  initiatives?: EndPointResponse;
  themes?: EndPointResponse;
  [key: string]: EndPointResponse | undefined;
};

function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    });
}

/**
 * Fetch All the values in a datasource.
 * @param request Next Request
 * @returns Response
 */
export async function GET(
  request: NextRequest,
) {
  const BASE_URL = process.env.DEPLOY_PRIME_URL || process.env.URL || 'http://localhost:3000';
  console.log('BASE_URL', BASE_URL);
  console.log('process.env.DEPLOY_PRIME_URL', process.env.DEPLOY_PRIME_URL);
  console.log('process.env.URL', process.env.URL);
  console.log('process.env.DEPLOY_URL', process.env.DEPLOY_URL);

  const requests = {
    schools: api<EndPointResponse>(`${BASE_URL}/api/storyblok/datasource/taxonomy-schools`),
    topics: api<EndPointResponse>(`${BASE_URL}/api/storyblok/datasource/taxonomy-topics`),
    initiatives: api<EndPointResponse>(`${BASE_URL}/api/storyblok/datasource/taxonomy-initiatives`),
    themes: api<EndPointResponse>(`${BASE_URL}/api/storyblok/datasource/taxonomy-themes`),
  };

  const responses = await Promise.allSettled(Object.values(requests));
  const data: ResponseData = {};
  // Loop through the responses and check if any of them failed
  // add the successful responses to the response object by key
  for (const [index, response] of responses.entries()) {
    const key = Object.keys(requests)[index];
    if (response.status === 'fulfilled') {
      data[key] = response.value;
    }
    else {
      data[key] = [];
    }
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
