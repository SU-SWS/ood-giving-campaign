import { getStoryblokApi, StoryblokClient } from '@storyblok/react/rsc';
import { isProduction } from '@/utilities/getActiveEnv';

/**
 * Get the global configuration from Storyblok.
 *
 * **Version Strategy (Next.js 16)**:
 * - Always fetches `version: 'published'` or 'draft' based on environment
 * - Configuration is global and shared across all pages
 *
 * **Caching Strategy**:
 * - Uses Next.js 16's `use cache` directive for automatic caching
 * - Storyblok SDK uses built-in rate limiting (6 RPS)
 * - Cache entries are stored in-memory and respect the default cacheLife profile
 */
export async function getConfigBlok() {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  const isProd = isProduction();

  // Get the global configuration.
  const { data: { story: config } } = await storyblokApi.get(
    'cdn/stories/momentum/global-components/configuration/site-configuration',
    {
      version: isProd ? 'published' : 'draft',
      token: process.env.STORYBLOK_ACCESS_TOKEN,
    },
  );

  return config;
}
