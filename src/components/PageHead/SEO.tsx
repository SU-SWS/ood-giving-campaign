import React from 'react';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

export type SEOProps = {
  title: string;
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

  return (
    <>
      <title>{`${seoTitle || title} | ${siteTitle}`}</title>
      <meta name="description" content={seoDescription || description} />
      {ogTitle && (
        <meta property="og:title" content={ogTitle} />
      )}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {/* We want the below line to display the twitter card in correct format */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitter_title && (
        <meta name="twitter:title" content={twitter_title} />
      )}
      {twitter_description && (
        <meta name="twitter:description" content={twitter_description} />
      )}
    </>
  );
};
