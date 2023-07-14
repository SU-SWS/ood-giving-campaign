import { useRouter } from 'next/router';
//import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { SbImageType, SbLinkType } from '../Storyblok/Storyblok.types';

export type SEOProps = {
  title: string;
  heroImage?: SbImageType;
  noindex?: boolean;
  canonicalUrl?: SbLinkType;
  seo?: {
    title?: string;
    description?: string;
    og_title?: string;
    og_description?: string;
    og_image?: string;
    twitter_title?: string;
    twitter_description?: string;
    twitter_image?: string;
  };
};

export const SEO = ({
  title,
  heroImage: { filename, focus } = {},
  noindex,
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
}: SEOProps) => {
  //const { title: siteTitle, description } = useSiteMetadata();
  const description = 'description';
  const siteTitle = 'siteTitle';
  const ogTitle = og_title || seoTitle || title;
  const ogDescription = og_description || seoDescription || description;
  const heroImageCropped = filename ? getProcessedImage(filename, '1200x630', focus) : undefined;

  /**
   * The og_image and twitter_image fields provided by the Storyblok SEO plugin has no image focus support
   */
  const ogCropped = og_image ? getProcessedImage(og_image, '1200x630') : undefined;
  // Twitter card image has an aspect ratio of 2:1
  const twitterCropped = twitter_image ? getProcessedImage(twitter_image, '1200x600') : undefined;

  const ogImage = ogCropped || heroImageCropped;

  const router = useRouter();
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  let ogType = 'website';
  if (router.pathname.startsWith('/stories')) {
    ogType = 'article';
  }

  // Self reference URL is the page's URL without any query params
  const selfReferencingUrl = `${origin}${router.pathname}`;
  // If the canonical URL is entered in Storyblok, find the full URL for it
  const canonicalNotSelf = canonicalUrl?.linktype === 'story' ? `${origin}/${canonicalUrl?.cached_url}` : canonicalUrl?.url;
  const canonical = canonicalNotSelf || selfReferencingUrl;

  return (
    <>
      <title>{`${seoTitle || title} | ${siteTitle}`}</title>
      {noindex && <meta name="robots" content="noindex" />}
      {!noindex && <link rel="canonical" href={canonical} />}
      <meta name="description" content={seoDescription || description} />
      <meta property="og:type" content={ogType} />
      {ogTitle && (
        <meta property="og:title" content={ogTitle} />
      )}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && (
        <meta property="og:image" content={ogImage} />
      )}
      {/* We want the below line to display the twitter card in this format */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* Twitter card will use og: properties as fallback automatically */}
      {twitter_title && (
        <meta name="twitter:title" content={twitter_title} />
      )}
      {twitter_description && (
        <meta name="twitter:description" content={twitter_description} />
      )}
      {twitterCropped && (
        <meta name="twitter:image" content={twitterCropped} />
      )}
    </>
  );
};
