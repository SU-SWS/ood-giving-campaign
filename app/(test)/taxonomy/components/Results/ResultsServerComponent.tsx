import StoryblokClient from 'storyblok-js-client';
import normalizeSearchParam from '@/utilities/normalizeSearchParam';
import ResultsComponent from '@/app/(test)/taxonomy/components/Results/ResultsComponent';

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

/**
 * The page component.
 */
export default async function ResultsServerComponent({searchParams}: PageProps) {
  console.log('searchParams', searchParams);
  const {
    topics, themes, initiatives, schools,
  } = searchParams;

  const storyblokApi = new StoryblokClient({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    region: 'us',
  });

  // wait 3 seconds
  await new Promise(resolve => setTimeout(resolve, 3000));

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

  console.log('Stories', data.stories);

  // No results found.
  if (!data.stories.length) return <p>No Results Found</p>;

  return (
    <ResultsComponent stories={data.stories} />
  );
};
