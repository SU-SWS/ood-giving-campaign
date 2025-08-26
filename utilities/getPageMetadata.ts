import { type ISbStoryData } from '@storyblok/react/rsc';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { type SbLinkType } from '@/components/Storyblok/Storyblok.types';
import { siteConfig } from '@/utilities/siteConfig';
import { sbStripSlugURL } from './sbStripSlugUrl';
import { getFirstImage } from './getFirstImage';

export type SbSEOType = {
  title?: string;
  description?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
};

type PageMetadataProps = {
  story: ISbStoryData & {
    content: ISbStoryData['content'] & {
      noindex?: boolean;
      seo?: SbSEOType;
      title?: string;
      canonicalUrl?: SbLinkType;
    };
  };
  sbConfig: ISbStoryData;
  slug: string;
};

/**
 * Get the page metadata for the story.
 * Merge the story data with the global configuration to generate the metadata.
 *
 * @param story - The story data.
 * @param sbConfig - The global configuration.
 * @param slug - The slug of the story.
 *
 * @returns Metadata - The metadata for the page.
 */
export const getPageMetadata = ({ story, sbConfig, slug }: PageMetadataProps) => {
  // Story explicit content.
  const {
    name,
    content: {
      noindex,
      seo,
      title,
      dek,
      canonicalUrl,
    },
  } = story;

  // Config component.
  const {
    content: {
      seoOgType,
      seoOgImage: {
        filename,
      },
      seoSiteTitle,
      seoSiteDescription,
    },
  } = sbConfig;

  // Default hardcoded values.
  const {
    siteUrlProd,
    siteTitle,
    siteDescription,
  } = siteConfig;

  // Canonical URL.
  // Canonical priority: Story Canonical URL > Config Site URL + Slug
  let canonical = `${siteUrlProd}${sbStripSlugURL(slug)}`;
  if (canonicalUrl) {
    switch (canonicalUrl.linktype) {
      case 'story': {
          if (canonicalUrl.cached_url && canonicalUrl.cached_url.length) {
            canonical = `${siteUrlProd}${sbStripSlugURL(canonicalUrl.cached_url)}`;
          }
        }
        break;
      case 'url': {
        if (canonicalUrl.url && canonicalUrl.url.length) {
          canonical = canonicalUrl.url;
        }
      }
      break;
    }
  }

  // Process the images.
  // Use the explicitly set image from the SEO component if available,
  // then use a known field if the CT has it,
  // otherwise use the first image in the content.
  const knownImageFields = ['heroImage', 'bgImage']; // order of priority
  const firstImage = getFirstImage(knownImageFields, story.content);
  const firstImageProcessed = firstImage ? getProcessedImage(firstImage.filename, '1200x630', firstImage.focus) : undefined;
  // Process the images. Use the explicitly set image if available, otherwise use the first image in the content.
  const ogImage = seo?.og_image ? getProcessedImage(seo.og_image, '1200x630') : firstImageProcessed;
  const twitterImage = seo?.twitter_image ? getProcessedImage(seo.twitter_image, '1200x600') : firstImageProcessed;
  const defaultImage = filename ? getProcessedImage(filename, '1200x630') : firstImageProcessed;

  // SEO metadata.
  // Image priority: Story SEO > First Image > Config Blok Default Image
  // Title priority: Story SEO > Story Title > Config Blok Site Title
  // Description priority: Story SEO > Config Blok Site Description > Hardcoded Site Description
  return {
    title: `${seo.title || title || name} | ${seoSiteTitle || siteTitle}`,
    description: seo?.description || dek || seoSiteDescription || siteDescription,
    metadataBase: new URL(siteUrlProd),
    openGraph:{
      title: seo?.og_title || title || name,
      description: seo?.og_description || seo?.description || dek || seoSiteDescription || siteDescription,
      images: ogImage || defaultImage,
      type: seoOgType || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitter_title || title || name,
      description: seo?.twitter_description || seo?.description || dek || seoSiteDescription || siteDescription,
      images: twitterImage || defaultImage,
    },
    alternates: {
      canonical,
    },
    robots: noindex && 'noindex',
  };
};
