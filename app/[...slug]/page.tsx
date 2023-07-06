import { getStoryblokApi, ISbStoriesParams, StoryblokClient } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
import { resolveRelations } from '@/utilities/resolveRelations';

const activeEnv = process.env.NODE_ENV || 'development';

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
  return storyblokApi?.get(`cdn/stories/${slug}`, sbParams);
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

  const { data: { links } } = storyblokApi?.get('cdn/links', sbParams);
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
