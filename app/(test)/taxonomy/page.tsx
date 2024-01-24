import StoryblokClient, { ISbStoryData } from 'storyblok-js-client';
import normalizeSearchParam from '@/utilities/normalizeSearchParam';
import { SelectInput } from '@/components/Forms/Select';
import { FlexBox } from '@/components/FlexBox';
import { revalidate } from '@/app/(storyblok)/[...slug]/page';

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

// ---------------------------------------------------------------------------------------------

export type FiltersComponentProps = {
  themes: {
    key: string;
    value: string;
    name?: string;
  }[];
  topics: {
    key: string;
    value: string;
    name?: string;
  }[];
  schools: {
    key: string;
    value: string;
    name?: string;
  }[];
  initiatives: {
    key: string;
    value: string;
    name?: string;
  }[];
};

const FiltersComponent = ({
 themes, topics, schools, initiatives,
}: FiltersComponentProps) => {
  return (
    <div>
      <h2>Filters</h2>
      <div>
        <SelectInput opts={themes} label='Themes' />
        <SelectInput opts={topics} label='Topics' />
        <SelectInput opts={schools} label='Schools' />
        <SelectInput opts={initiatives} label='Initiatives' />
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------------------------

export type ResultsComponentProps = {
  stories: ISbStoryData[];
};

const ResultsComponent = ({ stories }: ResultsComponentProps) => {
  if (!stories) return null;
  return (
    <div>
      <h2>Results</h2>
      <FlexBox gap direction='row' wrap='wrap'>
        {stories.map((story) => {
          return (
            <div key={story.id} className='w-1/4 flex-grow border-3 border-black rs-p-2'>
              <h3>{story.name}</h3>
              {story.content.themes && <p><strong>themes: </strong>{story.content.themes.join(', ')}</p>}
              {story.content.topics && <p><strong>topics: </strong>{story.content.topics.join(', ')}</p>}
              {story.content.initiatives && <p><strong>initiatives: </strong>{story.content.initiatives.join(', ')}</p>}
              {story.content.schools && <p><strong>schools: </strong>{story.content.schools.join(', ')}</p>}
            </div>
            );
          },
        )}
    </FlexBox>
    </div>
  );
};

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

    data.stories.map((story) => {
      console.log(story.content);
    });

  return (
    <>
      <h1>Page Title</h1>
      <FiltersComponent themes={themesOptions} topics={topicOptions} initiatives={initiativesOptions} schools={schoolsOptions} />
      <ResultsComponent stories={data?.stories} />
    </>
  );
};
