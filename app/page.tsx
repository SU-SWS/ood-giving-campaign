import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import { resolveRelations } from '../src/utilities/resolveRelations';

export default async function Home() {
  const { data } = await fetchData();

  return (
    <StoryblokStory story={data.story} />
  );
}

// Make sure to not export this function otherwise there will be a typescript error
// https://github.com/vercel/next.js/discussions/48724
async function fetchData() {
  const sbParams: ISbStoriesParams = {
    version: 'draft',
    resolve_relations: resolveRelations,
    cv: Date.now(),
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi?.get('cdn/stories/home', sbParams);
}
