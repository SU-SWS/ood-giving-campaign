import { Metadata } from 'next';
import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
} from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';
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

/**
 * Generate the list of stories to statically render.
 */
export async function generateStaticParams() {
  // Client in the App router is tied to the front end initialization.
  const storyblokApi: StoryblokClient = getStoryblokApi();
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
  let slug = params.slug ? params.slug.join('/') : 'home';
  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    cv: activeEnv === 'development' ? Date.now() : undefined,
    resolve_relations: resolveRelations,
  };
  const storyblokApi: StoryblokClient = getStoryblokApi();

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

  const bridgeOptions = { resolveRelations };
  let slug = params.slug ? params.slug.join('/') : '';
  return (
    <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} slug={slug} />
  );
};