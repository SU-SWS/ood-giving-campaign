import * as React from 'react';
import { Slice } from 'gatsby';
import { storyblokInit, apiPlugin } from 'gatsby-source-storyblok';
import { FlexBox } from './FlexBox';
import { Masthead } from './Masthead';
import { SbCta } from './Storyblok/SbCta';
import { SbGrid } from './Storyblok/SbGrid';
import { SbLogo } from './Storyblok/SbLogo';
import { SbSection } from './Storyblok/SbSection';
import { SbSplitPoster } from './Storyblok/SbSplitPoster';
import { SbVerticalCard } from './Storyblok/SbVerticalCard';
import { SbWysiwyg } from './Storyblok/SbWysiwyg';

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
    sbCta: SbCta,
    sbGrid: SbGrid,
    sbLogo: SbLogo,
    sbSection: SbSection,
    sbSplitPoster: SbSplitPoster,
    sbVerticalCard: SbVerticalCard,
    sbWysiwyg: SbWysiwyg,
  },
});

export const Layout = ({ children }: LayoutProps) => (
  <FlexBox justifyContent="between" direction="col" className="su-min-h-screen su-relative">
    <Masthead />
    <main>{children}</main>
    <Slice alias="global-footer" />
  </FlexBox>
);
