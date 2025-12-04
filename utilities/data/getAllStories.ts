import {
  ISbStoriesParams, getStoryblokApi, StoryblokClient,
} from '@storyblok/react/rsc';
import { isProduction } from '@/utilities/getActiveEnv';
import { getSlugPrefix } from '@/utilities/getSlugPrefix';

/**
 * Fetches all stories from Storyblok.
 *
 * **Version Strategy (Next.js 16)**:
 * - Production builds: Always fetches `version: 'published'` content
 * - Used by generateStaticParams for static page generation
 * - Visual editor bypasses this via client-side draft fetching
 *
 * **Caching Strategy**:
 * - Uses Next.js 16's `use cache` directive for automatic caching
 * - Storyblok SDK uses built-in rate limiting (6 RPS)
 * - Cache entries are stored in-memory and respect the default cacheLife profile
 * - Uses `cdn/links` endpoint for efficient slug retrieval without full content
 */
export async function getAllStories() {
  const isProd = isProduction();
  // Fetch new content from storyblok.
  const storyblokApi: StoryblokClient = getStoryblokApi();
  const sbParams: ISbStoriesParams = {
    version: isProd ? 'published' : 'draft',
    resolve_links: '0',
    resolve_assets: 0,
    starts_with: getSlugPrefix() + '/',
  };

  // Use the `cdn/links` endpoint to get a list of all stories without all the extra data.
  const response = await storyblokApi.getAll('cdn/links', sbParams);

  return response;
}
