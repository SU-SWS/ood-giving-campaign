'use client';
import { FlexBox } from '@/components/FlexBox';
import useSWR from 'swr';
import { ISbStoryData } from 'storyblok-js-client';
import { Container } from '@/components/Container';

const ResultsComponent = () => {
  async function api<T>(url:string) { return fetch(url).then(r => r.json() as Promise<T>); };
  const { data, error, isLoading } = useSWR('/api/storyblok/stories', api<ISbStoryData[]>);

  if (error) return <div>Failed to fetch filters.</div>;
  if (isLoading) return <h2>Loading...</h2>;
  if (!data) return <h2>No data</h2>;

  return (
    <Container width='site' pb={2}>
      <FlexBox gap direction='row' wrap='wrap'>
        {data.map((story) => {
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
    </Container>
  );
};

export default ResultsComponent;