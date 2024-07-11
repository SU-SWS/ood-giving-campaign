import type { getStoryDataProps } from '@/utilities/data/types';
import type { ISbStoriesParams, ISbResult } from '@storyblok/react';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getStoryblokApi, StoryblokClient } from '@storyblok/react/rsc';

/**
 * Get the data out of the Storyblok API for the page.
 *
 * Make sure to not export the below functions otherwise there will be a typescript error
 * https://github.com/vercel/next.js/discussions/48724
 */
async function getStoryData({ path }: getStoryDataProps): Promise<ISbResult | { data: 404 }> {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  const activeEnv = process.env.NODE_ENV || 'development';
  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    cv: activeEnv === 'development' ? Date.now() : undefined,
    resolve_relations: resolveRelations,
  };

  const slug = path.replace(/\/$/, '') || 'home'; // Remove trailing slash or if no slash, use home.

  try {
    const story: ISbResult = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    return story;
  } catch (error) {
    if (typeof error === 'string') {
      try {
        const parsedError = JSON.parse(error);
        if (parsedError.status === 404) {
          return { data: 404 };
        }
      }
      catch (e) {
        throw error;
      }
    }
    throw error;
  }

};

export default getStoryData;
