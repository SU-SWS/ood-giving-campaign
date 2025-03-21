import { Metadata } from 'next';
import {
  storyblokInit, apiPlugin, StoryblokStory,
} from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetadata } from '@/utilities/getPageMetadata';
import { ComponentNotFound } from '@/components/Storyblok/ComponentNotFound';
import { notFound } from 'next/navigation';
import { getStoryDataCached, getConfigBlokCached, getAllStoriesCached } from '@/utilities/data/';
import { getStoryListCached } from '@/utilities/data/getStoryList';
import { isProduction } from '@/utilities/getActiveEnv';
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
  const isProd = isProduction();

  // Get all the stories.
  let stories = await getAllStoriesCached();
  // Filter out folders.
  stories = stories.filter((link) => link.is_folder === false);
  // Filter out test content by filtering out the `test` folder.
  if (isProd) {
    stories = stories.filter((link) => !link.slug.startsWith(getSlugPrefix() + '/test'));
  }
  // Filter out globals by filtering out the `global-components` folder.
  stories = stories.filter((link) => !link.slug.startsWith(getSlugPrefix() + '/global-components'));

  const paths: PathsType[] = [];

  stories.forEach((story) => {

    const slug = story.slug;
    const splitSlug = slug.split('/');

    // Remove any empty strings.
    const cleanSlug = splitSlug.filter((s:string) => s.length);

    // Remove the first element which is the prefix.
    cleanSlug.shift();

    // Ensure there is at least one element
    if (cleanSlug.length === 0) {
      cleanSlug.push('');
    }

    paths.push({ slug: cleanSlug });

  });

  return paths;
};

/**
 * Generate the SEO metadata for the page.
 */
export async function generateMetadata({ params }: ParamsType): Promise<Metadata> {
  const { slug } = params;
  const slugPrefix = getSlugPrefix();
  const slugPath = slug ? slug.join('/') : '';
  const prefixedSlug = slugPrefix + '/' + slugPath;
  const config = await getConfigBlokCached();

  // Get the story data.
  const { data: { story } } = await getStoryDataCached({ path: prefixedSlug });

  // Generate the metadata.
  const meta = getPageMetadata({ story, sbConfig: config, slug: slugPath });
  return meta;
}

/**
 * Fetch the path data for the page and render it.
 */
export default async function Page({ params }: ParamsType) {
  const { slug } = params;

  // Convert the slug to a path.
  const slugPath = slug ? slug.join('/') : '';

  // Construct the slug for Storyblok.
  const prefixedSlug = getSlugPrefix() + '/' + slugPath;

  // Get data out of the API.
  const { data } = await getStoryDataCached({ path: prefixedSlug });

  // Define an additional data container to pass through server data fetch to client components.
  // as everything below the `StoryblokStory` is a client side component.
  let extra = {};

  // Get additional data for those stories that need it.
  if (data?.story?.content?.component === 'sbStoryFilterPage') {
    extra = await getStoryListCached({ path: prefixedSlug });
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
      slug={slugPath}
      name={data.story.name}
    />
  );
};

