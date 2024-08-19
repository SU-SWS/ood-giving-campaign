import { Metadata } from 'next';
import {
  ISbStoriesParams, getStoryblokApi, storyblokInit, apiPlugin, StoryblokStory, StoryblokClient,
} from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetadata } from '@/utilities/getPageMetadata';
import { ComponentNotFound } from '@/components/Storyblok/ComponentNotFound';
import { notFound } from 'next/navigation';
import getStoryData from '@/utilities/data/getStoryData';
import getStoryList from '@/utilities/data/getStoryList';

type PathsType = {
  slug: string[];
};

type ParamsType = {
  params: PathsType;
};

// Storyblok bridge options.
const bridgeOptions = {
  resolveRelations,
  resolveLinks: 'story',
};

// Force the 404 page for anything that isn't statically generated.
export const dynamicParams = false;

// Cache for one year.
// I have no concrete evidence but this seems to work best with Netlify's edge caching over caching for infinity.
export const revalidate = 31536000;

// Force static rendering.
export const dynamic = 'force-static';

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
  customFallbackComponent: (component) => {
    return <ComponentNotFound component={component} />;
  },
});

/**
 * Generate the list of stories to statically render.
 */
export async function generateStaticParams() {
  const activeEnv = process.env.NODE_ENV || 'development';
  // Fetch new content from storyblok.
  const storyblokApi: StoryblokClient = getStoryblokApi();
  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'development' ? 'draft' : 'published',
    cv: activeEnv === 'development' ? Date.now() : undefined,
    resolve_links: '0',
    resolve_assets: 0,
    per_page: 100,
  };

  // Use the `cdn/links` endpoint to get a list of all stories without all the extra data.
  const response = await storyblokApi.getAll('cdn/links', sbParams);
  const stories = response.filter((link) => link.is_folder === false);
  let paths: PathsType[] = [];

  stories.forEach((story) => {
    const slug = story.slug;
    const splitSlug = slug.split('/');
    paths.push({ slug: splitSlug });
  });

  // Add home page as index.
  paths.push({ slug: [] });

  return paths;
};

/**
 * Generate the SEO metadata for the page.
 */
export async function generateMetadata({ params }: ParamsType): Promise<Metadata> {
  try {
    const slug = params.slug ? params.slug.join('/') : 'home';
    const { data } = await getStoryData({ path: slug });
    if (!data.story || !data.story.content) {
      notFound();
    }
    const blok = data.story.content;
    const meta = getPageMetadata({ blok, slug });
    return meta;
  }
  catch (error) {
    console.log('Metadata error:', error, params.slug);
  }

  notFound();
}

/**
 * Fetch the path data for the page and render it.
 */
export default async function Page({ params }: ParamsType) {
  const slug = params.slug ? params.slug.join('/') : 'home';
  // Get data out of the API.
  const { data } = await getStoryData({ path: slug });

  // Define an additional data container to pass through server data fetch to client components.
  // as everything below the `StoryblokStory` is a client side component.
  let extra = {};

  // Get additional data for those stories that need it.
  if (data?.story?.content?.component === 'sbStoryFilterPage') {
    extra = await getStoryList({ path: slug });
  }

  // Failed to fetch from API because story slug was not found.
  if (data === 404) {
    notFound();
  }

  // Return the story.
  return (
    <StoryblokStory
      story={data.story}
      extra={extra}
      bridgeOptions={bridgeOptions}
      slug={slug}
      name={data.story.name}
    />
  );
};

