import * as React from 'react';
// import { Slice } from 'gatsby';
// import { storyblokInit, apiPlugin } from 'gatsby-source-storyblok';
import { FlexBox } from './FlexBox';
import { Masthead } from './Masthead';
import { LocalFooter } from './LocalFooter';
import { SbBanner } from './Storyblok/SbBanner';
import { SbBracketCard } from './Storyblok/SbBracketCard';
import { SbCta } from './Storyblok/SbCta';
import { SbGrid } from './Storyblok/SbGrid';
import { SbGridAlternating } from './Storyblok/SbGridAlternating';
import { SbInitiativeCard } from './Storyblok/SbInitiativeCard';
import { SbLogo } from './Storyblok/SbLogo';
import { SbSection } from './Storyblok/SbSection';
import { SbSplitPoster } from './Storyblok/SbSplitPoster';
import { SbStoryCard } from './Storyblok/SbStoryCard';
import { SbTextCard } from './Storyblok/SbTextCard';
import { SbThemeCard } from './Storyblok/SbThemeCard';
import { SbTriangle } from './Storyblok/SbTriangle';
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
    sbBanner: SbBanner,
    sbBracketCard: SbBracketCard,
    sbCta: SbCta,
    sbGrid: SbGrid,
    sbGridAlternating: SbGridAlternating,
    sbInitiativeCard: SbInitiativeCard,
    sbLogo: SbLogo,
    sbSection: SbSection,
    sbSplitPoster: SbSplitPoster,
    sbTextCard: SbTextCard,
    sbThemeCard: SbThemeCard,
    sbTriangle: SbTriangle,
    sbStoryCard: SbStoryCard,
    sbWysiwyg: SbWysiwyg,
  },
});

export const Layout = ({ children }: LayoutProps) => (
  <FlexBox justifyContent="between" direction="col" className="su-min-h-screen su-relative">
    <Skiplink />
    <Masthead />
    <main id="main-content">{children}</main>
    <footer>
      <LocalFooter />
      <Slice alias="global-footer" />
    </footer>
  </FlexBox>
);
