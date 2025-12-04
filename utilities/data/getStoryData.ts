import type { getStoryDataProps } from '@/utilities/data/types';
import type { ISbStoriesParams, ISbResult } from '@storyblok/react';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getStoryblokApi, StoryblokClient } from '@storyblok/react/rsc';
import { isProduction } from '../getActiveEnv';

/**
 * Get the data out of the Storyblok API for the page.
 *
 * **Version Strategy (Next.js 16)**:
 * - Production builds: Always fetches `version: 'published'` content
 * - Visual editor: Uses `version: 'draft'` when isEditor=true
 * - Separate dev/prod Storyblok spaces ensure correct content per environment
 *
 * **Caching Strategy**:
 * - Relies on Next.js 16's automatic fetch caching with cacheComponents enabled
 * - Storyblok SDK uses built-in rate limiting (6 RPS) and fetch-based caching
 * - No explicit 'use cache' due to large response sizes causing memory issues
 * - Static generation with on-demand revalidation via webhooks
 */
export async function getStoryData(
  { path, isEditor = false }: getStoryDataProps
): Promise<ISbResult | { data: 404 }> {
    const storyblokApi: StoryblokClient = getStoryblokApi();
    const isProd = isProduction();

    const sbParams: ISbStoriesParams = {
      version: isProd && !isEditor ? 'published' : 'draft',
      cv: isEditor ? Date.now() : undefined,
      resolve_relations: resolveRelations,
      token: isEditor ? process.env.STORYBLOK_PREVIEW_EDITOR_TOKEN : process.env.STORYBLOK_ACCESS_TOKEN,
    };

    const slug = path.replace(/\/$/, ''); // Remove trailing slash.

    try {
      const story: ISbResult = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
      return story;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error && error.status && error.status === 404) {
        return { data: 404 };
      }
      throw error;
    }
}
