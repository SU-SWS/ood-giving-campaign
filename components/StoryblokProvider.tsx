'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import { SbBanner } from './Storyblok/SbBanner';
import { SbBasicPage } from './Storyblok/SbBasicPage';
import { SbBlurryPoster } from './Storyblok/SbBlurryPoster';
import { SbBracketCard } from './Storyblok/SbBracketCard';
import { SbCardWysiwyg } from './Storyblok/SbCardWysiwyg';
import { SbCta } from './Storyblok/SbCta';
import { SbEmbedMedia } from './Storyblok/SbEmbedMedia';
import { SbGrid } from './Storyblok/SbGrid';
import { SbGridAlternating } from './Storyblok/SbGridAlternating';
import { SbFeatureMasonry } from './Storyblok/SbFeatureMasonry';
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
import { SbStoryImage } from './Storyblok/SbStoryImage';
import { SbText } from './Storyblok/SbText';
import { SbTextCard } from './Storyblok/SbTextCard';
import { SbTexturedBar } from './Storyblok/SbTexturedBar';
import { SbThemeCard } from './Storyblok/SbThemeCard';
import { SbTriangle } from './Storyblok/SbTriangle';
import { SbTypeform } from './Storyblok/SbTypeform';
import { SbVerticalPoster } from './Storyblok/SbVerticalPoster';
import { SbWysiwyg } from './Storyblok/SbWysiwyg';

const components = {
  sbBanner: SbBanner,
  sbBasicPage: SbBasicPage,
  sbBlurryPoster: SbBlurryPoster,
  sbBracketCard: SbBracketCard,
  sbCardWysiwyg: SbCardWysiwyg,
  sbCta: SbCta,
  sbEmbedMedia: SbEmbedMedia,
  sbGrid: SbGrid,
  sbGridAlternating: SbGridAlternating,
  sbFeatureMasonry: SbFeatureMasonry,
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
  sbStoryCard: SbStoryCard,
  sbStoryImage: SbStoryImage,
  sbText: SbText,
  sbTextCard: SbTextCard,
  sbTexturedBar: SbTexturedBar,
  sbThemeCard: SbThemeCard,
  sbTriangle: SbTriangle,
  sbVerticalPoster: SbVerticalPoster,
  sbWysiwyg: SbWysiwyg,
  sbTypeform: SbTypeform,
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
