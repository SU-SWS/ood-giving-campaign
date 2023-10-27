import { Metadata } from 'next';
import {
  ISbStoriesParams, getStoryblokApi, storyblokInit, apiPlugin, StoryblokStory, StoryblokClient,
} from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetadata } from '@/utilities/getPageMetadata';
import { notFound } from 'next/navigation';
import ComponentNotFound from '@/components/Storyblok/ComponentNotFound';

const activeEnv = process.env.NODE_ENV || 'development';

type PageProps = {
  searchParams: {
    accessToken: string,
    path: string,
    _storyblok: string, // ID of space (eg: 1005200)
    _storyblok_c: string,
    _storyblok_version: string,
    _storyblok_lang: string,
    _storyblok_release: string, // number as a string eg: '0'
    _storyblok_rl: string, // eg: '1698435696245'
    '_storyblok_tk[space_id]': string, // eg: '1005200'
    '_storyblok_tk[timestamp]': string, // eg: '1698435695'
    '_storyblok_tk[token]': string // eg: '654efea80d36a0b2bas3640ea937b0e0d4cc0234'
  };
};

// Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
export const dynamicParams = false;

// Storyblok bridge options.
const bridgeOptions = {
  resolveRelations,
  preventClicks: true,
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
async function getStoryData({ path }: PageProps['searchParams']) {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  let sbParams: ISbStoriesParams = {
    version: 'draft',
    cv: activeEnv === 'development' ? Date.now() : undefined,
    resolve_relations: resolveRelations,
  };

  try {
    const story = await storyblokApi.get(`cdn/stories/${path}`, sbParams);
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

/**
 * Fetch the path data for the page and render it.
 */
export default async function Page({ searchParams }: PageProps) {
  const { data } = await getStoryData(searchParams);

  // Failed to fetch from API because story slug was not found.
  if (data === 404) {
    notFound();
  }

  return (
    <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} />
  );
};
