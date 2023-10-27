import { Metadata } from 'next';
import { ISbStoriesParams } from '@storyblok/js';
import {
 getStoryblokApi, storyblokInit, apiPlugin, StoryblokStory,
} from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetadata } from '@/utilities/getPageMetadata';
import { notFound } from 'next/navigation';

const activeEnv = process.env.NODE_ENV || 'development';

type PathsType = {
  slug: string[];
};

type ParamsType = {
  slug: string[];
};

// Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
export const dynamicParams = false;

// Storyblok bridge options.
const bridgeOptions = {
  preventClicks: true,
  resolveLinks: 'story',
};

/**
 * Init on the server.
 */
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN, // Preview token because this is in server side.
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
  components: Components,
  enableFallbackComponent: true,
  customFallbackComponent: ({blok}) => {
    return (
      <div className='rs-p-6 bg-red-600'><h2 className='text-white'>{blok.component} component is missing from the codebase.</h2><p className='text-white'>Source blok UID: {blok._uid}</p></div>
    );
  },
});

/**
 * Generate the list of stories to statically render.
 */
export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    cv: activeEnv === 'development' ? Date.now() : undefined,
  };

  // Use the `cdn/links` endpoint to get a list of all stories without all the extra data.
  const response = await storyblokApi.getAll('cdn/links', sbParams);
  const stories = response.filter((link) => link.is_folder === false);
  let paths: PathsType[] = [];

  stories.forEach((story) => {
    // If the path is explicitly set, use that, otherwise use the slug.
    const slug = story.path ?? story.slug;
    let splitSlug = slug.split('/');
    paths.push({ slug: splitSlug });
  });

  return paths;
};

/**
 * Get the data out of the Storyblok API for the page.
 *
 * Make sure to not export the below functions otherwise there will be a typescript error
 * https://github.com/vercel/next.js/discussions/48724
 */
async function getStoryData(params: { slug: string[] }) {
  const storyblokApi = getStoryblokApi();
  let slug = params.slug ? params.slug.join('/') : 'home';
  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    cv: activeEnv === 'development' ? Date.now() : undefined,
    resolve_relations: resolveRelations,
  };

  try {
    const story = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    return story;
  } catch (error) {
    if (typeof error === 'string') {
      try {
        const parsedError = JSON.parse(error);
        if (parsedError.status === 404) {
          return { data: 404 };
        }
      }
      catch (e) {
        throw error;
      }
    }
    throw error;
  }

};

/**
 * Generate the SEO metadata for the page.
 */
export async function generateMetadata({ params }: { params: ParamsType }): Promise<Metadata> {
  const { data } = await getStoryData(params);
  if (data === 404) {
    return {};
  }
  const blok = data.story.content;
  let slug = params.slug ? params.slug.join('/') : '';
  const meta = getPageMetadata({ blok, slug });
  return meta;
}

/**
 * Fetch the path data for the page and render it.
 */
export default async function Page({ params }: { params: ParamsType }) {
  const { data } = await getStoryData(params);

  // Failed to fetch from API because story slug was not found.
  if (data === 404) {
    notFound();
  }

  return (
    <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} />
  );
};
