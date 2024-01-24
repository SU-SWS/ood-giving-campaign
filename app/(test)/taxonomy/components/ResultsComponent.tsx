import { ISbStoryData } from 'storyblok-js-client';
import { FlexBox } from '@/components/FlexBox';

export type ResultsComponentProps = {
  stories: ISbStoryData[];
};

const ResultsComponent = ({ stories }: ResultsComponentProps) => {
  if (!stories) return null;
  return (
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
  );
};

export default ResultsComponent;