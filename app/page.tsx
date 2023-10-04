import { Metadata } from 'next';
import { getStoryblokApi, ISbStoriesParams, StoryblokStory } from '@storyblok/react/rsc';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetadata } from '@/utilities/getPageMetadata';

/**
 * Fetch data from Storyblok.
 */
async function fetchData() {
  const activeEnv = process.env.NODE_ENV || 'development';
  const sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    resolve_relations: resolveRelations,
    cv: activeEnv === 'development' ? Date.now() : undefined,
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get('cdn/stories/home', sbParams);
}

/**
 * Home page.
 */
const Home = async() => {
  const { data } = await fetchData();
  const bridgeOptions = { resolveRelations };
  return <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} />;
};

/**
 * Generate metadata for the home page.
 */
export async function generateMetadata(): Promise<Metadata> {
  const { data } = await fetchData();
  const blok = data.story.content;
  const meta = getPageMetadata({ blok, slug: '' });
  return meta;
}

export default Home;