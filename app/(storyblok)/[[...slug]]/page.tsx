import { Metadata } from 'next';
import {
  ISbStoriesParams, getStoryblokApi, storyblokInit, apiPlugin, StoryblokStory, StoryblokClient,
} from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetadata } from '@/utilities/getPageMetadata';
import ComponentNotFound from '@/components/Storyblok/ComponentNotFound';
import { notFound } from 'next/navigation';
import getStoryData from '@/utilities/data/getStoryData';
import getStoryList from '@/utilities/data/getStoryList';
import { getActiveEnv } from '@/utilities/getActiveEnv';
import { getSlugPrefix } from '@/utilities/getSlugPrefix';

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
  const activeEnv = getActiveEnv();
  // Fetch new content from storyblok.
  const storyblokApi: StoryblokClient = getStoryblokApi();
  let sbParams: ISbStoriesParams = {
    version: activeEnv === 'production' ? 'published' : 'draft',
    cv: Date.now(),
    resolve_links: '0',
    resolve_assets: 0,
    per_page: 100,
    starts_with: getSlugPrefix(),
  };

  // Use the `cdn/links` endpoint to get a list of all stories without all the extra data.
  const response = await storyblokApi.getAll('cdn/links', sbParams);
  const stories = response.filter((link) => link.is_folder === false);
  let paths: PathsType[] = [];

  stories.forEach((story) => {
    const slug = story.slug;
    const splitSlug = slug.split('/');

    // Remove any empty strings.
    const cleanSlug = splitSlug.filter((s:string) => s.length);

    // Remove the first element which is the prefix.
    cleanSlug.shift();

    // If the slug is empty, default to root.
    if (cleanSlug.length === 0) {
      paths.push({ slug: ['root'] });
    } else {
      paths.push({ slug: cleanSlug });
    }

  });

  return paths;
};

/**
 * Generate the SEO metadata for the page.
 */
export async function generateMetadata({ params }: ParamsType): Promise<Metadata> {
  const { slug } = params;
  try {

    // Convert the slug to a path.
    let slugPath = slug.join('/');

    // If the slug is root, remove it.
    if (slugPath === 'root') {
      slugPath = '';
    }
    // Construct the slug for Storyblok.
    const prefixedSlug = getSlugPrefix() + slugPath;
    // Get the story data.
    const { data } = await getStoryData({ path: prefixedSlug });
    if (!data.story || !data.story.content) {
      notFound();
    }
    const blok = data.story.content;
    const meta = getPageMetadata({ blok, slug: slugPath });
    return meta;
  }
  catch (error) {
    console.log('Metadata error:', error, slug);
  }

  notFound();
}

/**
 * Fetch the path data for the page and render it.
 */
export default async function Page({ params }: ParamsType) {
  const { slug } = params;
  // Convert the slug to a path.
  let slugPath = slug.join('/');

  // If the slug is root, remove it.
  if (slugPath === 'root') {
    slugPath = '';
  }
  // Construct the slug for Storyblok.
  const prefixedSlug = getSlugPrefix() + slugPath;

  // Get data out of the API.
  const { data } = await getStoryData({ path: prefixedSlug });

  // Define an additional data container to pass through server data fetch to client components.
  // as everything below the `StoryblokStory` is a client side component.
  let extra = {};

  // Get additional data for those stories that need it.
  if (data?.story?.content?.component === 'sbStoryFilterPage') {
    extra = await getStoryList({ path: prefixedSlug });
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

