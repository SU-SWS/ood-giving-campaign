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
  ]);
};
