import React from 'react';
import StoryblokProvider from '@/components/StoryblokProvider';
import {
  storyblokInit, apiPlugin, StoryblokStory,
} from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { ComponentNotFound } from '@/components/Storyblok/ComponentNotFound';
import { getStoryDataCached } from '@/utilities/data/getStoryData';
import { getConfigBlokCached } from '@/utilities/data/getConfigBlok';
import { getSlugPrefix } from '@/utilities/getSlugPrefix';
import { getPageMetadata } from '@/utilities/getPageMetadata';
import { Metadata } from 'next';

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

/**
 * Get the story data from the Storyblok API through the cache.
 */
export default async function PageNotFound() {
  const { data } = await getStoryDataCached({ path: 'momentum/page-not-found' });

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
