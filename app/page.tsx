import { Metadata } from 'next';
import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetaData } from '@/utilities/getPageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await fetchData();
  const story = data.story;
  const blok = data.story.content;
  const meta = getPageMetaData({ story, blok });

  return meta;
}

export default async function Home() {
  const { data } = await fetchData();

  return (
    <StoryblokStory story={data.story} />
  );
}

// Make sure to not export this function otherwise there will be a typescript error
// https://github.com/vercel/next.js/discussions/48724
async function fetchData() {
  const activeEnv = process.env.NODE_ENV || 'development';

  const sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    resolve_relations: resolveRelations,
    cv: Date.now(),
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi?.get('cdn/stories/home', sbParams);
}
