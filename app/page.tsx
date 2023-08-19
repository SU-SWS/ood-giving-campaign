import { Metadata } from 'next';
import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetadata } from '@/utilities/getPageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await fetchData();
  const blok = data.story.content;

  const meta = getPageMetadata({ blok, slug: '' });

  return meta;
}

export default async function Home() {
  const { data } = await fetchData();
  const bridgeOptions = { resolveRelations };

  return (
    <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} />
  );
}

// Make sure to not export this function otherwise there will be a typescript error
// https://github.com/vercel/next.js/discussions/48724
async function fetchData() {
  const activeEnv = process.env.NODE_ENV || 'development';

  const sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    resolve_relations: resolveRelations,
    cv: activeEnv === 'development' ? Date.now() : undefined,
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi?.get('cdn/stories/home', sbParams);
}
