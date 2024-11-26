import React from 'react';
import StoryblokProvider from '@/components/StoryblokProvider';
import {
  ISbStoriesParams, getStoryblokApi, storyblokInit, apiPlugin, StoryblokStory, StoryblokClient,
} from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { ComponentNotFound } from '@/components/Storyblok/ComponentNotFound';
import { isProduction } from '@/utilities/getActiveEnv';
import { getSlugPrefix } from '@/utilities/getSlugPrefix';
import { Metadata } from 'next';
import { getStoryDataCached } from '@/utilities/data/getStoryData';
import { getConfigBlokCached } from '@/utilities/data/getConfigBlok';
import { getPageMetadata } from '@/utilities/getPageMetadata';

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
async function getStoryData(slug = 'momentum/page-not-found') {
  const isProd = isProduction();
  const storyblokApi: StoryblokClient = getStoryblokApi();
  const sbParams: ISbStoriesParams = {
    version: isProd ? 'published' : 'draft',
    resolve_relations: resolveRelations,
  };

  try {
    const story = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    return story;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {

    if (error && error.status && error.status === 404) {
      return { data: 404 };
    }

    throw error;
  }
};

/**
 * Generate the SEO metadata for the page.
 */
export async function generateMetadata(): Promise<Metadata> {

  const slugPrefix = getSlugPrefix();
  const prefixedSlug = slugPrefix + '/page-not-found';
  const config = await getConfigBlokCached();


  // Get the story data.
  const { data: { story } } = await getStoryDataCached({ path: prefixedSlug });

  // Generate the metadata.
  const meta = getPageMetadata({ story, sbConfig: config, slug: prefixedSlug });
  return meta;
}

export default async function PageNotFound() {
  const { data } = await getStoryData();

  if (data === 404) {
    return (
      <>
        <h1>Error: Could not find page</h1>
        <p>Slug <code><b>page-not-found</b></code> could not be found in the CMS.</p>
      </>
    );
  }

  return (
    <StoryblokProvider>
      <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} />
    </StoryblokProvider>
  );
}
