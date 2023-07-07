import { getProcessedImage } from '@/utilities/getProcessedImage';
import { SbImageType, SbLinkType } from '@/components/Storyblok/Storyblok.types';

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
};

export const getPageMetaData = ({
  blok,
}: PageMetaDataProps) => {
  const siteTitle = 'Stanford On Purpose';
  const seoDescription = blok.seo.description;
  const seoTitle = blok.title || blok.seo.title;
  const ogTitle = blok.seo.og_title || seoTitle || blok.title;
  const ogDescription = blok.seo.og_description || seoDescription;
  const heroImageCropped = blok.heroImage?.filename ? getProcessedImage(blok.heroImage.filename, '1200x630', blok.heroImage.focus) : undefined;

  /**
   * The og_image and twitter_image fields provided by the Storyblok SEO plugin has no image focus support
   */
  const ogCropped = blok.seo.og_image ? getProcessedImage(blok.seo.og_image, '1200x630') : undefined;
  // Twitter card image has an aspect ratio of 2:1
  const twitterCropped = blok.seo.twitter_image ? getProcessedImage(blok.seo.twitter_image, '1200x600') : undefined;

  const ogImage = ogCropped || heroImageCropped;

  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  const pathname = typeof window !== 'undefined' && window.location.pathname ? window.location.pathname : '';

  let ogType = 'website';
  if (pathname.startsWith('/stories')) {
    ogType = 'article';
  }

  // Self reference URL is the page's URL without any query params
  const selfReferencingUrl = `${origin}${pathname}`;
  // If the canonical URL is entered in Storyblok, find the full URL for it
  const canonicalNotSelf = blok.canonicalUrl?.linktype === 'story' ? `${origin}/${blok.canonicalUrl?.cached_url}` : blok.canonicalUrl.url;
  const canonical = canonicalNotSelf || selfReferencingUrl;

  return {
    title: `${seoTitle || blok.title} | ${siteTitle}`,
    description: seoDescription,
    openGraph: {
      title: ogTitle,
      type: ogType,
      description: ogDescription,
      images: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title:  blok.seo.twitter_title,
      description: blok.seo.twitter_description,
      images: twitterCropped,
    },
    alternates: {
      canonical: !blok.noindex ? canonical : undefined,
    },
    robots: blok.noindex ? 'noindex' : undefined,
  };
};
