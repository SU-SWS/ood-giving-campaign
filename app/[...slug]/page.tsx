import {
  getStoryblokApi, ISbStoriesParams, StoryblokClient,
} from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';

export default async function Page({ params }) {
  const { data } = await getStoryData(params);

  return (
    <StoryblokStory story={data.story} key={data.key} />
  );
};

export async function getStoryData(params) {
  let slug = params.slug ? params.slug.join('/') : 'home';
  let sbParams: ISbStoriesParams = {
    version: 'draft',
    cv: Date.now(),
    //resolve_relations: 'teaser:teasers',
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi?.get(`cdn/stories/${slug}`, sbParams);
};

export async function generateStaticParams() {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  let sbParams: ISbStoriesParams = { version: 'draft' };

  const { data: { links } } = await storyblokApi?.get('cdn/links', sbParams);
  const paths = [];
  Object.keys(links).forEach((linkKey) => {
    if (links[linkKey].is_folder || links[linkKey].slug === 'home') {
      return;
    }
    const slug = links[linkKey].slug;
    let splittedSlug = slug.split('/');
    paths.push({ slug: splittedSlug });
  });

  return paths;
};