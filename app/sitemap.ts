import { MetadataRoute } from 'next';
import StoryblokClient from 'storyblok-js-client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const storyblokClient = new StoryblokClient({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    cache: {
      clear: 'auto',
      type: 'memory',
    },
    region: 'us',
  });

  // Fetch all the stories from SB.
  // We use the `cdn/stories` endpoint because it has the last published time which `cdn/links` does not.
  const response = await storyblokClient.getAll('cdn/stories', {
    version: 'published',
    cv: Date.now(),
  });

  // Exclude any stories with noindex set to true and those inside the Global Components or Test folders in Storyblok
  const indexStories = response.filter((story) => (!story.content?.noindex) && !story.full_slug?.startsWith('global-components/') && !story.full_slug?.startsWith('test/'));
  const currentURL = process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://momentum.stanford.edu';

  const ret = indexStories.map((story) => {
    const url = story.path ? `${currentURL}/${story.path}` : `${currentURL}/${story.full_slug}`;
    return {
      url: url.replace(/\/+$/, ''),
      lastModified: new Date(story.published_at),
      changeFrequency: 'daily' as const, // Added in 13.4.5
      priority: 0.5, // Added in 13.4.5
    };
  });

  return ret;
}
