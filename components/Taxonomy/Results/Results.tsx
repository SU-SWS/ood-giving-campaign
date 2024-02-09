'use client';
import useSWR from 'swr';
import { ISbStoryData } from 'storyblok-js-client';
import { Container } from '@/components/Container';
import Masonry from 'react-masonry-css';
import { TaxonomyContext } from '@/components/Taxonomy/Context/TaxonomyProvider';
import { useContext } from 'react';


const ResultsComponent = () => {
  async function api<T>(url:string) {
    return fetch(url)
      .then(r => r.json() as Promise<T>);
  };
  const { data, error, isLoading } = useSWR('/api/storyblok/stories', api<ISbStoryData[]>);
  const store = useContext(TaxonomyContext);

  if (error) return <div>Failed to fetch filters.</div>;
  if (isLoading) return <h2>Loading...</h2>;
  if (!data) return <h2>No data</h2>;

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  /**
   * Filter stories based on selected taxonomy.
   */
  const stories = (!Object.keys(store).length) ? data : data.filter((story) => {
    let isTheme = false;
    let isTopic = false;
    let isSchool = false;
    let isInitiative = false;

    if (store.initiatives && store.initiatives.length > 0) {
      isInitiative = story.content.initiatives.some((initiative:ISbStoryData) => store.initiatives.includes(initiative));
    }
    if (store.schools && store.schools.length > 0) {
      isSchool = story.content.schools.some((school:ISbStoryData) => store.schools.includes(school));
    }
    if (store.themes && store.themes.length > 0) {
      isTheme = story.content.themes.some((theme:ISbStoryData) => store.themes.includes(theme));
    }
    if (store.topics && store.topics.length > 0) {
      isTopic = story.content.topics.some((topic:ISbStoryData) => store.topics.includes(topic));
    }

    return isInitiative || isSchool || isTheme || isTopic;
  });

  return (

    <Container width='site' py={2}>
      <Masonry breakpointCols={breakpointColumnsObj} className='flex'>
        {stories.map((story) => {
          return (
            <div key={story.id} className='border-3 border-black rs-p-2 bg-clip-padding transition-all'>
              <h3>{story.name}</h3>
              {story.content.themes && <p><strong>themes: </strong>{story.content.themes.join(', ')}</p>}
              {story.content.topics && <p><strong>topics: </strong>{story.content.topics.join(', ')}</p>}
              {story.content.initiatives && <p><strong>initiatives: </strong>{story.content.initiatives.join(', ')}</p>}
              {story.content.schools && <p><strong>schools: </strong>{story.content.schools.join(', ')}</p>}
            </div>
            );
          },
        )}
        {stories.length === 0 && <h2>No results</h2>}
      </Masonry>
    </Container>
  );
};

export default ResultsComponent;
