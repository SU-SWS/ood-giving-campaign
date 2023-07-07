import { getProcessedImage } from '@/utilities/getProcessedImage';
import { SbImageType, SbLinkType } from '@/components/Storyblok/Storyblok.types';
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

type PageMetaDataProps = {
  blok: {
    title: string;
    heroImage?: SbImageType;
    noindex?: boolean;
    canonicalUrl?: SbLinkType;
    seo?: SbSEOType;
  },
  slug: string;
};

export const getPageMetaData = ({ blok, slug }: PageMetaDataProps) => {
  const siteTitle = config.siteTitle;
  // We only care about canonical URL for production so ok to use the prod URL here
  const siteUrl = config.siteUrlProd;

  const seoDescription = blok.seo.description;
  const title = blok.seo.title || blok.title;
  const ogTitle = blok.seo.og_title || title;
  const ogDescription = blok.seo.og_description || seoDescription;
  const heroImageCropped = getProcessedImage(blok.heroImage?.filename, '1200x630', blok.heroImage?.focus);

  /**
   * The og_image and twitter_image fields provided by the Storyblok SEO plugin has no image focus support
   */
  const ogCropped = getProcessedImage(blok.seo?.og_image, '1200x630');
  // Twitter card image has an aspect ratio of 2:1
  const twitterCropped = getProcessedImage(blok.seo?.twitter_image, '1200x600');
  const ogImage = ogCropped || heroImageCropped;

  let ogType = 'website';
  if (slug.startsWith('stories/')) {
    ogType = 'article';
  }

  // Self reference URL is the page's URL without any query params
  const selfReferencingUrl = `${siteUrl}/${slug}`;
  // If the canonical URL is entered in Storyblok, find the full URL for it
  const canonicalNotSelf = blok.canonicalUrl.linktype === 'story' && blok.canonicalUrl.cached_url
    ? `${siteUrl}/${blok.canonicalUrl.cached_url}`
    : blok.canonicalUrl.url;
  const canonical = canonicalNotSelf || selfReferencingUrl;

  return {
    title: `${title} | ${siteTitle}`,
    description: seoDescription,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: ogImage,
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title:  blok.seo.twitter_title,
      description: blok.seo.twitter_description,
      images: twitterCropped,
    },
    alternates: {
      canonical: !blok.noindex && canonical,
    },
    robots: blok.noindex && 'noindex',
  };
};
