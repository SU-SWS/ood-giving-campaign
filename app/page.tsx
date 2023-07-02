import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';

export default async function Home() {
  const { data } = await fetchData();

  return (
    <StoryblokStory story={data.story} key={data.key} />
  );
}

export async function fetchData() {
  const sbParams: ISbStoriesParams = { version: 'draft', cv: Date.now() };

  const storyblokApi = getStoryblokApi();
  return storyblokApi?.get('cdn/stories/home', sbParams);
}
