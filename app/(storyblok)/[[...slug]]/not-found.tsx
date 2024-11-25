import React from 'react';
import StoryblokProvider from '@/components/StoryblokProvider';
import {
  storyblokInit, apiPlugin, StoryblokStory,
} from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { ComponentNotFound } from '@/components/Storyblok/ComponentNotFound';
import { getStoryDataCached } from '@/utilities/data/getStoryData';

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
 * Get the story data from the Storyblok API through the cache.
 */
export default async function PageNotFound() {
  const { data } = await getStoryDataCached({ path: 'momentum/page-not-found'});

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
