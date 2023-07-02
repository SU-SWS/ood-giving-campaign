'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import { LazyMotion, domAnimation } from 'framer-motion';
import { SbBanner } from './Storyblok/SbBanner';
import { SbBasicPage } from './Storyblok/SbBasicPage';
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

const components = {
  sbBanner: SbBanner,
  sbBasicPage: SbBasicPage,
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
