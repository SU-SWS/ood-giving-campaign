import StoryblokClient from 'storyblok-js-client';
import FiltersComponent from '@/app/(test)/taxonomy/components/Filters/FiltersComponent';

type filterParams = {
  topics?: string[] | string;
  themes?: string[] | string;
  initiatives?: string[] | string;
  schools?: string[] | string;
};

type PageProps = {
  searchParams: URLSearchParams & filterParams;
};

/**
 * The page component.
 */
export default async function FiltersServerComponent({searchParams}: PageProps) {
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
    <FiltersComponent themes={themesOptions} topics={topicOptions} initiatives={initiativesOptions} schools={schoolsOptions} />
  );
};
