import {
  ISbStoriesParams, getStoryblokApi, storyblokInit, apiPlugin, StoryblokStory, StoryblokClient,
} from '@storyblok/react/rsc';
import { components as Components } from '@/components/StoryblokProvider';
import { resolveRelations } from '@/utilities/resolveRelations';
import ComponentNotFound from '@/components/Storyblok/ComponentNotFound';


const activeEnv = process.env.NODE_ENV || 'development';
export const dynamic = 'force-static';
export const revalidate = 0;

// Storyblok bridge options.
const bridgeOptions = {
  resolveRelations,
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
  customFallbackComponent: (component) => {
    return <ComponentNotFound component={component} />;
  },
});

/**
 * Get the data out of the Storyblok API for the page.
 *
 * Make sure to not export the below functions otherwise there will be a typescript error
 * https://github.com/vercel/next.js/discussions/48724
 */
async function getStoryData(slug = 'page-not-found') {
  const storyblokApi: StoryblokClient = getStoryblokApi();
  const sbParams: ISbStoriesParams = {
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

export default async function PageNotFound() {
  const { data } = await getStoryData();

  if (data === 404) {
    return (
      <>
        <h1>Error: Could not find page</h1>
        <p>Slug <code><b>page-not-found</b></code> could not be found in the CMS.</p>
      </>
    );
  }

  return (
    <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} />
  );
}