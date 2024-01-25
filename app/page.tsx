import { Metadata } from 'next';
import {
  ISbStoriesParams, getStoryblokApi, storyblokInit, apiPlugin, StoryblokStory, StoryblokClient,
} from '@storyblok/react/rsc';
import StoryblokProvider, { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetadata } from '@/utilities/getPageMetadata';
import ComponentNotFound from '@/components/Storyblok/ComponentNotFound';
import { notFound } from 'next/navigation';

// Bug in Safari + Netlify + Next where back button doesn't function correctly and returns the user
// back to the page they hit the back button on after scrolling or interacting with the page they went back to.
// Setting a long revalidate time patches this until Next/Netlify fix the bug in future releases of their stuff.
export const revalidate = 60 * 60 * 24 * 365;

// Storyblok bridge options.
const bridgeOptions = {
  resolveRelations,
  resolveLinks: 'story',
};

/**
 * Init on the server.
 */
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN, // Preview token because this is in server side.
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
  components: Components,
  enableFallbackComponent: true,
  customFallbackComponent: (component) => {
    return <ComponentNotFound component={component} />;
  },
});

/**
 * Get the data out of the Storyblok API for the page.
 *
 * Make sure to not export the below functions otherwise there will be a typescript error
 * https://github.com/vercel/next.js/discussions/48724
 */
async function getStoryData() {
  const activeEnv = process.env.NODE_ENV || 'development';
  const storyblokApi: StoryblokClient = getStoryblokApi();
  const slug = 'home';

  const sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    cv: activeEnv === 'development' ? Date.now() : undefined,
    resolve_relations: resolveRelations,
  };

  try {
    const story = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    return story;
  }
  catch (error) {
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

/**
 * Generate the SEO metadata for the page.
 */
export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await getStoryData();
    if (!data.story || !data.story.content) {
      throw new Error(`No story data found for home`);
    }
    const blok = data.story.content;
    const slug = 'home';
    const meta = getPageMetadata({ blok, slug });
    return meta;
  }
  catch (error) {
    console.error('Metadata error:', error);
  }

  return {};
}

/**
 * Fetch the path data for the page and render it.
 */
export default async function Page() {
  const { data } = await getStoryData();
  const slug = '/';

  if (!data.story) {
    notFound();
  }

  return (
    <StoryblokProvider>
      <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} slug={slug} />
    </StoryblokProvider>
  );
};
