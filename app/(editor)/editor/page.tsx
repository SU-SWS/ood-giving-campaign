
import type { PageProps } from '@/utilities/data/types';
import { StoryblokStory } from '@storyblok/react/rsc';
import { resolveRelations } from '@/utilities/resolveRelations';
import '@/utilities/storyblok'; // Initialize API
import '@/utilities/storyblok-components'; // Register components
import { notFound } from 'next/navigation';
import { getStoryData } from '@/utilities/data/getStoryData';
import { getStoryList } from '@/utilities/data/getStoryList';

// Storyblok bridge options.
const bridgeOptions = {
  resolveRelations,
  preventClicks: true,
  resolveLinks: 'story',
};

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
export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;
  // Not a valid editor token.
  if (!validateEditor(searchParams)) {
    console.error('Invalid editor token');
    notFound();
  }

  const slug = searchParams.path ? searchParams.path : '';
  // const path = slug?.replace(/\/$/, '') ?? '';

  // Get data out of the API.
  const { data } = await getStoryData({ path: slug, isEditor: true });

  // Only fetch extra data for story filter pages
  let extra = {};
  if (data && data !== 404 && data.story?.content?.component === 'sbStoryFilterPage') {
    extra = await getStoryList({ path: slug });
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
    />
  );
};
