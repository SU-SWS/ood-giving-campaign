import type { FilterQuery } from '@/utilities/data/types';
import { cacheLife } from 'next/cache';
import { ISbStoriesParams, ISbStoryData } from '@storyblok/react/rsc';
import { isProduction } from '@/utilities/getActiveEnv';
import { getSlugPrefix } from '@/utilities/getSlugPrefix';
import { getStoryblokClient } from '@/utilities/storyblok';
import { logError, logInfo } from '@/utilities/logger';

/**
 * Get a list of stories that are of component sbStoryMvp in reverse chronological order.
 */
export const getStoryList =
  async ({ path }: { path: string }):
  Promise<ISbStoryData[]> => {
  'use cache';

  cacheLife({
    stale: 2592000, // 1 month in seconds
    revalidate: 31536000, // 1 year in seconds
    expire: 31536000, // 1 year in seconds
  });

  logInfo('Fetching story list for story filter page at runtime', { timestamp: new Date().toISOString() });

  const storyblokApi = getStoryblokClient();

  const isProd = isProduction();
  // const storyblokApi: StoryblokClient = getStoryblokApi();
  const fullslug = path.replace(/\/$/, '');

  // Get the last part of the path.
  const slug = path.split('/').pop() || '';

  let orQuery: FilterQuery[] = [];

  /**
   * If the page is inside the folder stories/list/ (story list pages filtered by taxonomy),
   * add a filter query to only return stories that has an initiative or theme that matches the slug of that story.
   * E.g., if the full slug is stories/list/preparing-citizens,
   * only return stories that have 'preparing-citizens' tagged as a theme or initiative.
   */
  if (fullslug.includes('stories/list/')) {
    orQuery = [
      {
        initiatives: {
          in_array: slug,
        },
      },
      {
        schools: {
          in_array: slug,
        },
      },
      {
        themes: {
          in_array: slug,
        },
      },
    ];
  }

  const sbParams: ISbStoriesParams = {
    version: isProd ? 'published' : 'draft',
    starts_with: `${getSlugPrefix()}/stories/`,
    sort_by: 'first_published_at:desc',
    per_page: 100,
    filter_query: {
      component: {
        in: 'sbStoryMvp',
      },
      __or: orQuery,
    },
  };

  try {
    const storyList = await storyblokApi.getAll('cdn/stories', sbParams);
    return storyList;
  }
  catch (error: unknown) {
    logError('Failed to fetch story list for story filter page from Storyblok API', error);
    return [];
  }
};
