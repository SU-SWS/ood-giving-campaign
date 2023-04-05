import * as React from 'react';
import { storyblokInit, apiPlugin } from 'gatsby-source-storyblok';
import Teaser from './Storyblok/Teaser';
import Grid from './Storyblok/Grid';
import Feature from './Storyblok/Feature';
import SbSection from './Storyblok/SbSection';

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
    sbSection: SbSection,
  },
});

const Layout = ({ children }: LayoutProps) => (
  <div>
    <main>{children}</main>
  </div>
);

export default Layout;
