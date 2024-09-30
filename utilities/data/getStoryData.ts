import type { getStoryDataProps } from '@/utilities/data/types';
import type { ISbStoriesParams, ISbResult } from '@storyblok/react';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getStoryblokApi, StoryblokClient } from '@storyblok/react/rsc';
import { getActiveEnv } from '../getActiveEnv';

/**
 * Get the data out of the Storyblok API for the page.
 *
 * Make sure to not export the below functions otherwise there will be a typescript error
 * https://github.com/vercel/next.js/discussions/48724
 */
async function getStoryData({ path, isEditor = false }: getStoryDataProps): Promise<ISbResult | { data: 404 }> {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  const activeEnv = getActiveEnv();

  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'production' && !isEditor ? 'published' : 'draft',
    cv: Date.now(),
    resolve_relations: resolveRelations,
  };

  const slug = path.replace(/\/$/, '') || 'home'; // Remove trailing slash or if no slash, use home.

  try {
    const story: ISbResult = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    return story;
  } catch (error: any) {
    if (error && error.status && error.status === 404) {
      return { data: 404 };
    }
    throw error;
  }

};

export default getStoryData;
