import * as React from 'react';
import { Slice } from 'gatsby';
import { storyblokInit, apiPlugin } from 'gatsby-source-storyblok';
import { FlexBox } from './FlexBox';
import { Masthead } from './Masthead';
import { SbBracketCard } from './Storyblok/SbBracketCard';
import { SbCta } from './Storyblok/SbCta';
import { SbGrid } from './Storyblok/SbGrid';
import { SbGridAlternating } from './Storyblok/SbGridAlternating';
import { SbLogo } from './Storyblok/SbLogo';
import { SbSection } from './Storyblok/SbSection';
import { SbSplitPoster } from './Storyblok/SbSplitPoster';
import { SbThemeCard } from './Storyblok/SbThemeCard';
import { SbVerticalCard } from './Storyblok/SbVerticalCard';
import { SbWysiwyg } from './Storyblok/SbWysiwyg';
import { Skiplink } from './SkipLink';

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
    sbBracketCard: SbBracketCard,
    sbCta: SbCta,
    sbGrid: SbGrid,
    sbGridAlternating: SbGridAlternating,
    sbLogo: SbLogo,
    sbSection: SbSection,
    sbSplitPoster: SbSplitPoster,
    sbThemeCard: SbThemeCard,
    sbVerticalCard: SbVerticalCard,
    sbWysiwyg: SbWysiwyg,
  },
});

export const Layout = ({ children }: LayoutProps) => (
  <FlexBox justifyContent="between" direction="col" className="su-min-h-screen su-relative">
    <Skiplink />
    <Masthead />
    <main id="main-content">{children}</main>
    <footer>
      <Slice alias="global-footer" />
    </footer>
  </FlexBox>
);
