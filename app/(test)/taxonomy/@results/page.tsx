import StoryblokClient from 'storyblok-js-client';
import normalizeSearchParam from '@/utilities/normalizeSearchParam';
import ResultsComponent from '@/app/(test)/taxonomy/components/ResultsComponent';

type filterParams = {
  topics?: string[] | string;
  themes?: string[] | string;
  initiatives?: string[] | string;
  schools?: string[] | string;
};

type filterQuery = {
  topics?: { any_in_array: string };
  themes?: { any_in_array: string };
  initiatives?: { any_in_array: string };
  schools?: { any_in_array: string };
  component?: { in: string };
};

type PageProps = {
  searchParams: URLSearchParams & filterParams;
};


// Nextjs Route Options.
// ---------------------------------------------------------------------------------------------
export const revalidate = 0;
// ---------------------------------------------------------------------------------------------

/**
 * The page component.
 */
export default async function Page({searchParams}: PageProps) {
  const {
    topics, themes, initiatives, schools,
  } = searchParams;

  const storyblokApi = new StoryblokClient({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    region: 'us',
  });

  // Construct a filter for getting content.
  const filters:filterQuery = {
    component: { in: 'sbStory,sbStoryMVP' },
  };
  if (topics) filters.topics = { any_in_array: normalizeSearchParam(topics) };
  if (themes) filters.themes = { any_in_array: normalizeSearchParam(themes) };
  if (initiatives) filters.initiatives = { any_in_array: normalizeSearchParam(initiatives) };
  if (schools) filters.schools = { any_in_array: normalizeSearchParam(schools) };

  // Get Story Data. Don't cache this because it's a search.
  const { data } = await storyblokApi.getStories(
    {
      filter_query: filters,
      version: 'draft',
    },
    {
      cache: 'no-cache',
    },
  );

  // No results found.
  if (!data.stories.length) return <p>No Results Found</p>;

  return (
    <ResultsComponent stories={data.stories} />
  );
};
