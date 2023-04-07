import * as React from 'react';
import { Slice } from 'gatsby';
import { storyblokInit, apiPlugin } from 'gatsby-source-storyblok';
import { FlexBox } from './FlexBox';
import { Masthead } from './Masthead';
import Teaser from './Storyblok/Teaser';
import SbGrid from './Storyblok/SbGrid';
import Feature from './Storyblok/Feature';
import SbLogo from './Storyblok/SbLogo';
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
    sbGrid: SbGrid,
    sbLogo: SbLogo,
    feature: Feature,
    sbSection: SbSection,
  },
});

const Layout = ({ children }: LayoutProps) => (
  <FlexBox justifyContent="between" direction="col" className="su-min-h-screen">
    <Masthead />
    <main>{children}</main>
    <Slice alias="global-footer" />
  </FlexBox>
);

export default Layout;
