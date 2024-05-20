import { StoryblokComponent, type ISbStoryData } from '@storyblok/react/rsc';

type CreateStoriesProps = {
  stories: ISbStoryData[];
};

export const CreateStories = ({ stories, ...props }: CreateStoriesProps) => {
  let currStory;
  if (stories) {
    try {
      return stories.map((story) => {
        currStory = story;
        return <StoryblokComponent key={story.content._uid} blok={story.content} {...props} />;
      });
    } catch (error) {
      console.error('Could not create story', currStory);
    }
  }

  // Return null if no content provided.
  return null;
};
