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

  // Exclude any stories with noindex set to true on Storyblok
  const indexStories = response.filter((story) => !story.content?.noindex);

  const ret = indexStories.map((story) => {
    return {
      url: story.path ?? `/${story.full_slug}`,
      lastModified: new Date(story.published_at),
      changeFrequency: 'daily', // Added in 13.4.5
      priority: 0.5, // Added in 13.4.5
    };
  });

  return ret;
}
