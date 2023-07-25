'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import { LazyMotion, domAnimation } from 'framer-motion';
import { SbBanner } from './Storyblok/SbBanner';
import { SbBasicPage } from './Storyblok/SbBasicPage';
import { SbBracketCard } from './Storyblok/SbBracketCard';
import { SbCta } from './Storyblok/SbCta';
import { SbGrid } from './Storyblok/SbGrid';
import { SbGridAlternating } from './Storyblok/SbGridAlternating';
import { SbHomepagePage } from './Storyblok/SbHomepage';
import { SbInitiativeCard } from './Storyblok/SbInitiativeCard';
import { SbLogo } from './Storyblok/SbLogo';
import { SbPortraitCard } from './Storyblok/SbPortraitCard';
import { SbSection } from './Storyblok/SbSection';
import { SbSplitPoster } from './Storyblok/SbSplitPoster';
import { SbStory } from './Storyblok/SbStory';
import { SbStoryCard } from './Storyblok/SbStoryCard';
import { SbTextCard } from './Storyblok/SbTextCard';
import { SbThemeCard } from './Storyblok/SbThemeCard';
import { SbTriangle } from './Storyblok/SbTriangle';
import { SbWysiwyg } from './Storyblok/SbWysiwyg';

const components = {
  sbBanner: SbBanner,
  sbBasicPage: SbBasicPage,
  sbBracketCard: SbBracketCard,
  sbCta: SbCta,
  sbGrid: SbGrid,
  sbGridAlternating: SbGridAlternating,
  sbHomepage: SbHomepagePage,
  sbInitiativeCard: SbInitiativeCard,
  sbLogo: SbLogo,
  sbPortraitCard: SbPortraitCard,
  sbSection: SbSection,
  sbSplitPoster: SbSplitPoster,
  sbStory: SbStory,
  sbTextCard: SbTextCard,
  sbThemeCard: SbThemeCard,
  sbTriangle: SbTriangle,
  sbStoryCard: SbStoryCard,
  sbWysiwyg: SbWysiwyg,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
  components,
});

export default function StoryblokProvider({ children }) {
  return (
    <LazyMotion features={domAnimation}>{children}</LazyMotion>
  );
};
