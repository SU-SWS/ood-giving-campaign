import StoryblokClient from 'storyblok-js-client';
import validator from 'validator';
import { type NextRequest } from 'next/server';

/**
 * Fetch All the values in a datasource.
 * @param request Next Request
 * @param param
 * @returns Response
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const storyblokApi = new StoryblokClient({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    region: 'us',
  });

  if (!validator.isSlug(id)) {
    return new Response(JSON.stringify({ message: 'Invalid id' }), { status: 400 });
  }

  try {
    const response =  await storyblokApi.getAll(
      'cdn/datasource_entries',
      {
        datasource: id,
        version: 'draft',
        sort_by: 'name:asc',
      },
      null,
      {
        next: { revalidate: false }, // Cache responses as long as possible. Builds will clear the cache.
      },
    );
    return new Response(JSON.stringify(response), {status: 200} );
  }
  catch (error: Error | any) {
    return new Response(
      JSON.stringify({ message: error.response }), { status: error.status, statusText: error.message },
    );
  }
}