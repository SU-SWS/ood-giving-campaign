import * as React from 'react';
import { Slice } from 'gatsby';
import { storyblokInit, apiPlugin } from 'gatsby-source-storyblok';
import { FlexBox } from './FlexBox';
import Teaser from './Storyblok/Teaser';
import Grid from './Storyblok/Grid';
import Feature from './Storyblok/Feature';

type LayoutProps = {
  children: React.ReactNode,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  apiOptions: {
    region: 'us', // Pass this key/value if your space was created under US region
  },
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },
});

const Layout = ({ children }: LayoutProps) => (
  <FlexBox justifyContent="between" direction="col" className="su-min-h-screen">
    <main>{children}</main>
    <Slice alias="global-footer" />
  </FlexBox>
);

export default Layout;
