import StoryblokClient from 'storyblok-js-client';
import normalizeSearchParam from '@/utilities/normalizeSearchParam';
import FiltersComponent from '@/app/(test)/taxonomy/components/FiltersComponent';

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
export const revalidate = 3600;
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

  // Get the datasource options. Cache this because it's a static list.
  const topicOptions = await storyblokApi.getAll(
    'cdn/datasource_entries',
    {
      datasource: 'taxonomy-topics',
    },
    null,
    { next: { revalidate: 3600 } },
  );

  const schoolsOptions = await storyblokApi.getAll(
    'cdn/datasource_entries',
    {
      datasource: 'taxonomy-schools',
    },
    null,
    { next: { revalidate: 3600 } },
  );

  const initiativesOptions = await storyblokApi.getAll(
    'cdn/datasource_entries',
    {
      datasource: 'taxonomy-initiatives',
    },
    null,
    { next: { revalidate: 3600 } },
  );

  const themesOptions = await storyblokApi.getAll(
    'cdn/datasource_entries',
    {
      datasource: 'taxonomy-themes',
    },
    null,
    { next: { revalidate: 3600 } },
  );

  // Construct a filter for getting content.
  const filters:filterQuery = {
    component: { in: 'sbStory,sbStoryMVP' },
  };
  if (topics) filters.topics = { any_in_array: normalizeSearchParam(topics) };
  if (themes) filters.themes = { any_in_array: normalizeSearchParam(themes) };
  if (initiatives) filters.initiatives = { any_in_array: normalizeSearchParam(initiatives) };
  if (schools) filters.schools = { any_in_array: normalizeSearchParam(schools) };

  return (
    <FiltersComponent themes={themesOptions} topics={topicOptions} initiatives={initiativesOptions} schools={schoolsOptions} />
  );
};
