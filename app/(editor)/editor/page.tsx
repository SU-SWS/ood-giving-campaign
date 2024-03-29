import crypto from 'crypto';
import {
  ISbStoriesParams, getStoryblokApi, storyblokInit, apiPlugin, StoryblokStory, StoryblokClient,
} from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { notFound } from 'next/navigation';
import ComponentNotFound from '@/components/Storyblok/ComponentNotFound';
import { ISbResult } from '@storyblok/react';

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
export const dynamic = 'force-dynamic';

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
  accessToken: process.env.STORYBLOK_PREVIEW_EDITOR_TOKEN, // Preview token because this is in server side.
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
async function getStoryData({ path }: PageProps['searchParams']): Promise<ISbResult | { data: 404 }> {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  let sbParams: ISbStoriesParams = {
    version: 'draft',
    cv: Date.now(),
    resolve_relations: resolveRelations,
  };

  const slug = path.replace(/\/$/, '') || 'home'; // Remove trailing slash or if no slash, use home.

  try {
    const story: ISbResult = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
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
 * Validate the editor token.
 *
 * Removed time limit check to support client workflows of several days, or weeks 
 * of using the preview link for review.
 */
const validateEditor = (searchParams: PageProps['searchParams']) => {
  const validationString = searchParams['_storyblok_tk[space_id]'] + ':' + process.env.STORYBLOK_PREVIEW_EDITOR_TOKEN + ':' + searchParams['_storyblok_tk[timestamp]'];
  const validationToken = crypto.createHash('sha1').update(validationString).digest('hex');
  if (searchParams['_storyblok_tk[token]'] == validationToken) {
      //You're in the edit mode.
      return true;
  }
  // Something didn't work out.
  return false;
};

/**
 * Fetch the path data for the page and render it.
 */
export default async function Page({ searchParams }: PageProps) {

  // Not a valid editor token.
  if (!validateEditor(searchParams)) {
    notFound();
  }

  const slug = searchParams.path.replace(/\/$/, '');

  // Get data out of the API.
  const { data } = await getStoryData(searchParams);

  // Failed to fetch from API because story slug was not found.
  if (data === 404) {
    notFound();
  }

  // Return the story.
  return (
    <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} slug={slug} />
  );
};
