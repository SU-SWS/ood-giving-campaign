import { MetadataRoute } from 'next';
import StoryblokClient from 'storyblok-js-client';
import { ISbStoriesParams } from '@storyblok/react/rsc';
import { isProduction } from '@/utilities/getActiveEnv';
import { getSlugPrefix } from '@/utilities/getSlugPrefix';
import { sbStripSlugURL } from '@/utilities/sbStripSlugUrl';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const storyblokClient = new StoryblokClient({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    cache: {
      clear: 'auto',
      type: 'memory',
    },
    region: 'us',
  });

  const isProd = isProduction();
  // Fetch new content from storyblok.
  let sbParams: ISbStoriesParams = {
    version: isProd ? 'published' : 'draft',
    cv: Date.now(),
    resolve_links: '0',
    resolve_assets: 0,
    per_page: 100,
    starts_with: getSlugPrefix() + '/',
  };

  // Fetch all the stories from SB.
  // We use the `cdn/stories` endpoint because it has the last published time which `cdn/links` does not.
  const response = await storyblokClient.getAll('cdn/stories', sbParams);

  // Exclude any stories with noindex set to true and those inside the Global Components or Test folders in Storyblok
  const indexStories = response.filter(
    (story) => {
      if (story.content?.noindex) {
        return false;
      }

      if (story.full_slug.includes('/global-components/') || story.full_slug.includes('/test/')) {
        return false;
      }

      return true;
    },
  );
  const currentURL = process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://momentum.stanford.edu';

  const ret = indexStories.map((story) => {
    const url =  `${currentURL}/${sbStripSlugURL(story.full_slug)}`;
    return {
      url: url.replace(/\/+$/, ''),
      lastModified: new Date(story.published_at),
      changeFrequency: 'daily' as const,
      priority: 0.5,
    };
  });

  return ret;
}
