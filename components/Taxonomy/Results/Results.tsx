'use client';
import useSWR from 'swr';
import { ISbStoryData } from 'storyblok-js-client';
import { Container } from '@/components/Container';
import Masonry from 'react-masonry-css';

const ResultsComponent = () => {
  async function api<T>(url:string) { return fetch(url).then(r => r.json() as Promise<T>); };
  const { data, error, isLoading } = useSWR('/api/storyblok/stories', api<ISbStoryData[]>);

  if (error) return <div>Failed to fetch filters.</div>;
  if (isLoading) return <h2>Loading...</h2>;
  if (!data) return <h2>No data</h2>;

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (

    <Container width='site' py={2}>
      <Masonry breakpointCols={breakpointColumnsObj} className='flex'>
        {data.map((story) => {
          return (
            <div key={story.id} className='border-3 border-black rs-p-2 bg-clip-padding'>
              <h3>{story.name}</h3>
              {story.content.themes && <p><strong>themes: </strong>{story.content.themes.join(', ')}</p>}
              {story.content.topics && <p><strong>topics: </strong>{story.content.topics.join(', ')}</p>}
              {story.content.initiatives && <p><strong>initiatives: </strong>{story.content.initiatives.join(', ')}</p>}
              {story.content.schools && <p><strong>schools: </strong>{story.content.schools.join(', ')}</p>}
            </div>
            );
          },
        )}
      </Masonry>
    </Container>
  );
};

export default ResultsComponent;