import { Metadata } from 'next';
import { getStoryblokApi, ISbStoriesParams, StoryblokClient } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetadata } from '@/utilities/getPageMetadata';

const activeEnv = process.env.NODE_ENV || 'development';

type PathsType = {
  slug: string[];
};

type ParamsType = {
  slug: string[];
};

export async function generateStaticParams() {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    cv: activeEnv === 'development' ? Date.now() : undefined,
  };

  const { data: { links } } = await storyblokApi.get('cdn/links', sbParams);
  let paths: PathsType[] = [];

  Object.keys(links).forEach((linkKey) => {
    if (links[linkKey].is_folder || links[linkKey].slug === 'home') {
      return;
    }
    const slug: string = links[linkKey].slug;
    let splittedSlug = slug.split('/');
    paths.push({ slug: splittedSlug });
  });

  return paths;
};

// Make sure to not export the below functions otherwise there will be a typescript error
// https://github.com/vercel/next.js/discussions/48724
async function getStoryData(params: { slug: string[] }) {
  let slug: string = params.slug ? params.slug.join('/') : '';
  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    cv: activeEnv === 'development' ? Date.now() : undefined,
    resolve_relations: resolveRelations,
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  const story = await storyblokApi?.get(`cdn/stories/${slug}`, sbParams);

  return story;
};

export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
  const { data } = await getStoryData(params);
  const blok = data.story.content;

  let slug: string = params.slug ? params.slug.join('/') : '';
  const meta = getPageMetadata({ blok, slug });

  return meta;
};


export default async function Page({ params }: { params: ParamsType }) {
  const { data } = await getStoryData(params);
  const bridgeOptions = { resolveRelations };
  let slug: string = params.slug ? params.slug.join('/') : '';

  return (
    <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} slug={slug} />
  );
};
