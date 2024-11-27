import type { PageProps } from '@/utilities/data/types';
import { storyblokInit, apiPlugin, StoryblokStory } from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { notFound } from 'next/navigation';
import { ComponentNotFound } from '@/components/Storyblok/ComponentNotFound';
import { getStoryData } from '@/utilities/data/getStoryData';
import { getStoryList } from '@/utilities/data/getStoryList';

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
 * Validate the editor token.
 *
 */
const validateEditor = (searchParams: PageProps['searchParams']) => {

  // See if the token is in the query string matches the one in the environment.
  const queryAccessToken = searchParams['accessToken'];
  const validationToken = process.env.STORYBLOK_PREVIEW_EDITOR_TOKEN;

  if (queryAccessToken === validationToken) {
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
    console.error('Invalid editor token.');
    notFound();
  }

  const slug = searchParams.path.replace(/\/$/, '');

  // Get data out of the API.
  const { data } = await getStoryData({ path: slug, isEditor: true });

  // An extra container for passing along additional fetched data.
  let extra = {};

  // Get additional data for those stories that need it.
  if (data?.story?.content?.component === 'sbStoryFilterPage') {
    extra = await getStoryList(searchParams);
  }

  // Failed to fetch from API because story slug was not found.
  if (data === 404) {
    notFound();
  }

  // Return the story.
  return (
    <StoryblokStory
      story={data.story}
      extra={extra}
      bridgeOptions={bridgeOptions}
      slug={slug}
      name={data.story.name}
    />
  );
};
