'use server';

import StoryblokClient from 'storyblok-js-client';

export type LatestStoriesServerParams = {
  slug: string;
};

const getStory = async (slug: string) => {
  // const client = new StoryblokClient({
  //   accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  // });

  // const story = await client.getStory(slug, {
  //   resolve_links: 'url',
  // });

  // console.log(story);

  const story = {
    data: {
      story: {
        name: 'Preparing Citizens',
      },
    },
  };

  return story;
};

const LatestStoriesServer = async ({ slug }:LatestStoriesServerParams) => {
  const story = await getStory('stories/list/preparing-citizens');
  return (
    <div>
      <h2>{story.data.story.name}</h2>
      <p>Server code</p>
    </div>
  );
};

export default LatestStoriesServer;
