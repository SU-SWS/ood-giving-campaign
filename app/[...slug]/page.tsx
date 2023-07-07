import { Metadata } from 'next';
import { getStoryblokApi, ISbStoriesParams, StoryblokClient } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetaData } from '@/utilities/getPageMetadata';

const activeEnv = process.env.NODE_ENV || 'development';

export async function generateMetadata({ params }): Promise<Metadata> {
  const { data } = await getStoryData(params);
  const blok = data.story.content;

  let slug: string = params.slug ? params.slug.join('/') : '';
  const meta = getPageMetaData({ blok, slug });

  return meta;
}

export default async function Page({ params }) {
  const { data } = await getStoryData(params);

  return (
    <StoryblokStory story={data.story} />
  );
};

// Make sure to not export the below functions otherwise there will be a typescript error
// https://github.com/vercel/next.js/discussions/48724
async function getStoryData(params) {
  let slug: string = params.slug ? params.slug.join('/') : 'home';
  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    cv: Date.now(),
    resolve_relations: resolveRelations,
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  const story = await storyblokApi?.get(`cdn/stories/${slug}`, sbParams);

  return story;
};

type pathsType = {
  slug: string[];
}

async function generateStaticParams() {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    cv: Date.now(),
  };

  const { data: { links } } = await storyblokApi?.get('cdn/links', sbParams);
  let paths: pathsType[] = [];

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
