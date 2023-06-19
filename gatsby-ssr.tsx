import React from 'react';
import type { GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Druk-Super-Web.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="druk-super-woff2"
    />,
    <link
      rel="preload"
      href="/fonts/DrukWide-Bold-Web.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="drukwide-bold-woff2"
    />,
    <link rel="preconnect" href="https://fonts.googleapis.com" key="google-apis" />,
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" key="gstatic" />,
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
      rel="stylesheet"
      key="google-fonts"
    />,
  ]);
};
