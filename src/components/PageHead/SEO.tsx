import React from 'react';
import { useLocation } from '@reach/router';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import { SbImageType } from '../Storyblok/Storyblok.types';

export type SEOProps = {
  title: string;
  heroImage?: SbImageType;
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
  const { title: siteTitle, description } = useSiteMetadata();
  const ogTitle = og_title || seoTitle || title;
  const ogDescription = og_description || seoDescription || description;
  const heroImageCropped = getProcessedImage(filename, '1200x630', focus);

  /**
   * The og_image and twitter_image fields provided by the Storyblok SEO plugin has no image focus support
   */
  const ogCropped = getProcessedImage(og_image, '1200x630');
  // Twitter card image has an aspect ratio of 2:1
  const twitterCropped = getProcessedImage(twitter_image, '1200x600');

  const ogImage = ogCropped || heroImageCropped;

  const location = useLocation();
  let ogType = 'website';
  if (location.pathname.startsWith('/story')) {
    ogType = 'article';
  }

  return (
    <>
      <title>{`${seoTitle || title} | ${siteTitle}`}</title>
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
