import StoryblokClient from 'storyblok-js-client';
import normalizeSearchParam from '@/utilities/normalizeSearchParam';
import FiltersComponent from '@/app/(test)/taxonomy/components/FiltersComponent';
import { Suspense } from 'react';

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

  console.log('Filter searchParams', searchParams);

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

  console.log('Passed through the options now ');

  return (
    <Suspense key={searchParams.toString()}>
      <FiltersComponent themes={themesOptions} topics={topicOptions} initiatives={initiativesOptions} schools={schoolsOptions} />
    </Suspense>
  );
};
