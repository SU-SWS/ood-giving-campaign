'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import { SbBanner } from './Storyblok/SbBanner';
import { SbBasicPage } from './Storyblok/SbBasicPage';
import { SbBlurryPoster } from './Storyblok/SbBlurryPoster';
import { SbBracketCard } from './Storyblok/SbBracketCard';
import { SbCardWysiwyg } from './Storyblok/SbCardWysiwyg';
import { SbCta } from './Storyblok/SbCta';
import { SbGrid } from './Storyblok/SbGrid';
import { SbGridAlternating } from './Storyblok/SbGridAlternating';
import { SbHomepage } from './Storyblok/SbHomepage';
import { SbHomepageMvp } from './Storyblok/SbHomepageMvp';
import { SbInitiativeCard } from './Storyblok/SbInitiativeCard';
import { SbLogo } from './Storyblok/SbLogo';
import { SbPortraitCard } from './Storyblok/SbPortraitCard';
import { SbQuote } from './Storyblok/SbQuote';
import { SbSection } from './Storyblok/SbSection';
import { SbSidebarCard } from './Storyblok/SbSidebarCard';
import { SbSplitPoster } from './Storyblok/SbSplitPoster';
import { SbStory } from './Storyblok/SbStory';
import { SbStoryMvp } from './Storyblok/SbStoryMvp/SbStoryMvp';
import { SbStoryCard } from './Storyblok/SbStoryCard';
import { SbTextCard } from './Storyblok/SbTextCard';
import { SbThemeCard } from './Storyblok/SbThemeCard';
import { SbTriangle } from './Storyblok/SbTriangle';
import { SbVerticalPoster } from './Storyblok/SbVerticalPoster';
import { SbWysiwyg } from './Storyblok/SbWysiwyg';

const components = {
  sbBanner: SbBanner,
  sbBasicPage: SbBasicPage,
  sbBlurryPoster: SbBlurryPoster,
  sbBracketCard: SbBracketCard,
  sbCardWysiwyg: SbCardWysiwyg,
  sbCta: SbCta,
  sbGrid: SbGrid,
  sbGridAlternating: SbGridAlternating,
  sbHomepage: SbHomepage,
  sbHomepageMvp: SbHomepageMvp,
  sbInitiativeCard: SbInitiativeCard,
  sbLogo: SbLogo,
  sbPortraitCard: SbPortraitCard,
  sbQuote: SbQuote,
  sbSection: SbSection,
  sbSidebarCard: SbSidebarCard,
  sbSplitPoster: SbSplitPoster,
  sbStory: SbStory,
  sbStoryMvp: SbStoryMvp,
  sbTextCard: SbTextCard,
  sbThemeCard: SbThemeCard,
  sbTriangle: SbTriangle,
  sbStoryCard: SbStoryCard,
  sbVerticalPoster: SbVerticalPoster,
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

export default function StoryblokProvider({ children }: { children: React.ReactNode }) {
  return children;
};
