import type { getStoryDataProps, FilterQuery } from '@/utilities/data/types';
import { ISbStoriesParams, getStoryblokApi, StoryblokClient } from '@storyblok/react/rsc';
import { isProduction } from '../getActiveEnv';
import { getSlugPrefix } from '../getSlugPrefix';

/**
 * Get a list of stories that are of component sbStoryMvp in reverse chronological order.
 */
async function getStoryList({ path }: getStoryDataProps) {
  const isProd = isProduction();
  const storyblokApi: StoryblokClient = getStoryblokApi();
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
        themes: {
          in_array: slug,
        },
      },
    ];
  }

  // For more related documentation see app/(storyblok)/[[...slug]]/page.tsx
  const sbParams: ISbStoriesParams = {
    version: isProd ? 'published' : 'draft',
    cv: isProd ? undefined : Date.now(),
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
  catch (error) {
    console.error('Error fetching stories:', error);
    return [];
  }
}

export default getStoryList;
