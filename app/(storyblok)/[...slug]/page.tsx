import { Metadata, ResolvingMetadata } from 'next';
import {
 getStoryblokApi, ISbStoriesParams, StoryblokClient, StoryblokStory,
} from '@storyblok/react/rsc';
import { resolveRelations } from '@/utilities/resolveRelations';
import { getPageMetadata } from '@/utilities/getPageMetadata';
import { notFound } from 'next/navigation';
type PathsType = {
  slug: string[];
};

type Props = {
  params: { id: string, slug: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Make sure to not export the below functions otherwise there will be a typescript error
// https://github.com/vercel/next.js/discussions/48724
const getStoryData = async (params: { slug: string[] }) => {
  const activeEnv = process.env.NODE_ENV || 'development';
  let slug: string = params.slug ? params.slug.join('/') : '';
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
    notFound();
  }
};

const Page = async ({ params }: Props) => {
  const { data } = await getStoryData(params);
  const bridgeOptions = { resolveRelations };
  let slug: string = params.slug ? params.slug.join('/') : '';

  return (
    <p>Aaaaaah yeah. Server content.</p>
  );
};

/**
 * Generate metadata for the inside pages.
 */
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { data } = await getStoryData(params);
  const blok = data.story.content;
  let slug: string = params.slug ? params.slug.join('/') : '';
  const meta = getPageMetadata({ blok, slug });
  return meta;
}

/**
 * Generate static paths for the inside pages.
 */
// export async function generateStaticParams(): Promise<any[]> {
//   const activeEnv = process.env.NODE_ENV || 'development';
//   const storyblokApi: StoryblokClient = getStoryblokApi();
//   let sbParams: ISbStoriesParams = {
//     version: activeEnv === 'development' ? 'draft' : 'published',
//     cv: activeEnv === 'development' ? Date.now() : undefined,
//   };
//   const { data: { links } } = await storyblokApi.get('cdn/links', sbParams);
//   let paths: PathsType[] = [];
//   Object.keys(links).forEach((linkKey) => {
//     if (links[linkKey].is_folder || links[linkKey].slug === 'home') {
//       return;
//     }
//     const slug:string = links[linkKey].slug;
//     let splittedSlug = slug.split('/');
//     paths.push({ slug: splittedSlug });
//   });

//   // Return a list of paths and no fallback.
//   return paths;
// };

export default Page;