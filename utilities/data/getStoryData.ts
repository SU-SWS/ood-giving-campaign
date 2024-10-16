import type { getStoryDataProps } from '@/utilities/data/types';
import type { ISbStoriesParams, ISbResult } from '@storyblok/react';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getStoryblokApi, StoryblokClient } from '@storyblok/react/rsc';
import { isProduction } from '../getActiveEnv';

/**
 * Get the data out of the Storyblok API for the page.
 */
async function getStoryData({ path, isEditor = false }: getStoryDataProps): Promise<ISbResult | { data: 404 }> {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  const isProd = isProduction();

  let sbParams: ISbStoriesParams = {
    version: isProd && !isEditor ? 'published' : 'draft',
    cv: isEditor ? Date.now() : undefined,
    resolve_relations: resolveRelations,
    token: isEditor ? process.env.STORYBLOK_PREVIEW_EDITOR_TOKEN : process.env.STORYBLOK_ACCESS_TOKEN,
  };

  const slug = path.replace(/\/$/, ''); // Remove trailing slash.

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
