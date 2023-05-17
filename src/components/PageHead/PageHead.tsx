import React from 'react';
import { SEO, SEOProps } from './SEO';

export type PageHeadProps = SEOProps;

export const PageHead = (props: PageHeadProps) => (
  <>
    <SEO {...props} />
    <link rel="icon" type="image/png" href="https://www-media.stanford.edu/assets/favicon/favicon-192x192.png" sizes="192x192" />
    <link rel="icon" type="image/png" sizes="180x180" href="https://www-media.stanford.edu/assets/favicon/apple-touch-icon-180x180.png" />
    <link rel="icon" type="image/png" href="https://www-media.stanford.edu/assets/favicon/favicon-128.png" sizes="128x128" />
    <link rel="icon" type="image/png" href="https://www-media.stanford.edu/assets/favicon/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="https://www-media.stanford.edu/assets/favicon/favicon-16x16.png" sizes="16x16" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
  </>
);
