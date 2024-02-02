import StoryblokClient from 'storyblok-js-client';
import { type NextRequest } from 'next/server';
import normalizeSearchParam from '@/utilities/normalizeSearchParam';

// What we can filter on.
type filterQuery = {
  topics?: { value: { any_in_array: string } };
  themes?: { value: { any_in_array: string } };
  initiatives?: { value: { any_in_array: string } };
  schools?: { value: { any_in_array: string } };
  component?: { in: string };
};

/**
 * Fetch All the values in a datasource.
 * @param request Next Request
 * @returns Response
 */
export async function GET(
  request: NextRequest,
) {

  const searchParams = request.nextUrl.searchParams;
  const topic = searchParams.getAll('topic');
  const theme = searchParams.getAll('theme');
  const initiative = searchParams.getAll('initiative');
  const school = searchParams.getAll('school');

  const storyblokApi = new StoryblokClient({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    region: 'us',
  });

  // Construct a filter for getting content.
  const filters:filterQuery = {
    component: { in: 'sbStory,sbStoryMVP' },
  };

  // Refactor this if statement set.
  if (topic?.length) filters.topics = { value: { any_in_array: normalizeSearchParam(topic) } };
  if (theme?.length) filters.themes = { value: { any_in_array: normalizeSearchParam(theme) } };
  if (initiative?.length) filters.initiatives = { value: { any_in_array: normalizeSearchParam(initiative) } };
  if (school?.length) filters.schools = { value: { any_in_array: normalizeSearchParam(school) } };

  try {
    // Get Story Data. Don't cache this because it's a search.
    const { data } = await storyblokApi.getStories(
      {
        filter_query: filters,
        version: 'draft',
        sort_by: 'created_at:desc',
      },
      {
        next: { revalidate: false }, // Cache responses as long as possible. Builds will clear the cache.
      },
    );
    return new Response(JSON.stringify(data.stories), { status: 200 });
  } catch (error: Error | any) {
    return new Response(
      JSON.stringify({ message: error.response }), { status: error.status, statusText: error.message },
    );
  }

}