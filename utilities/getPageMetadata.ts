import { type ISbStoryData } from '@storyblok/react/rsc';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { type SbImageType, type SbLinkType } from '@/components/Storyblok/Storyblok.types';
import { config } from './config';

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
  blok: {
    title: string;
    dek?: string;
    heroImage?: SbImageType;
    heroPicker?: ISbStoryData[];
    bgImage?: SbImageType;
    noindex?: boolean;
    canonicalUrl?: SbLinkType;
    seo?: SbSEOType;
  },
  slug: string;
};

export const getPageMetadata = ({
  blok: {
    title: pageTitle,
    dek,
    heroImage: { filename = '', focus = '' } = {},
    heroPicker,
    bgImage: { filename: bgFilename = '', focus: bgFocus = '' } = {},
    noindex = false,
    canonicalUrl,
    seo: {
      title: seoTitle,
      description: seoDescription,
      og_title,
      og_description,
      og_image,
      twitter_title,
      twitter_description,
      twitter_image,
    } = {},
  },
  slug,
}: PageMetadataProps) => {
  // We only care about canonical URL for production so ok to use the prod URL here
  const { siteTitle, siteDescription, siteUrlProd: siteUrl } = config;
  const heroPickerImage = heroPicker?.[0]?.content?.heroImage?.filename;
  const heroPickerFocus = heroPicker?.[0]?.content?.heroImage?.focus;

  const title = seoTitle || pageTitle;
  const searchTitle = slug === 'home' ? 'Home' : title;
  const description = seoDescription || dek || siteDescription;
  const ogTitle = og_title || title;
  const ogDescription = og_description || description;
  const heroImageCropped = getProcessedImage(filename || bgFilename || heroPickerImage, '1200x630', focus || bgFocus || heroPickerFocus);

  /**
   * The og_image and twitter_image fields provided by the Storyblok SEO plugin has no image focus support
   */
  const ogCropped = getProcessedImage(og_image, '1200x630');
  // Twitter card image has an aspect ratio of 2:1
  const twitterCropped = getProcessedImage(twitter_image, '1200x600');
  const ogImage = ogCropped || heroImageCropped;

  let ogType = 'website';
  if (slug.startsWith('stories/')) {
    ogType = 'article';
  }

  // Self reference URL is the page's URL without any query params
  const selfReferencingUrl = slug !== 'home' ? `${siteUrl}/${slug}` : siteUrl;
  // If the canonical URL is entered in Storyblok, find the full URL for it
  const canonicalNotSelf = canonicalUrl?.linktype === 'story' && canonicalUrl.cached_url
    ? `${siteUrl}/${canonicalUrl.cached_url}`
    : canonicalUrl?.url;
  const canonical = canonicalNotSelf || selfReferencingUrl;

  return {
    title: `${searchTitle} | ${siteTitle}`,
    description: description,
    metadataBase: new URL(config.siteUrlProd),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: ogImage,
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title:  twitter_title,
      description: twitter_description,
      images: twitterCropped,
    },
    alternates: {
      canonical: !noindex && canonical,
    },
    robots: noindex && 'noindex',
  };
};
