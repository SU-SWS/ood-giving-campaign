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
import ComponentNotFound from '@/components/Storyblok/ComponentNotFound';

export const components = {
  sbBanner: SbBanner,
  sbBasicPage: SbBasicPage,
  sbBlurryPoster: SbBlurryPoster,
  sbBracketCard: SbBracketCard,
  sbCardWysiwyg: SbCardWysiwyg,
  sbCta: SbCta,
  sbEmbedMedia: SbEmbedMedia,
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

interface ProviderProps {
  children: React.ReactNode;
  isEditor?: boolean;
};

export default function StoryblokProvider({ children, isEditor = false }: ProviderProps) {

  let accessToken = ''; // No access token because this is in client side code.
  if (isEditor) {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      accessToken = urlParams.get('token') || accessToken;
    }
  }
  // Temporarily override console.error to squeltch errors from Storyblok.
  // Storyblok Init wants an api key but I don't want it in the client side code nor do I want to fetch from
  // Storyblok's api on the front end.
  const originalConsoleError = console.error;
  console.error = () => {};

  // Init the Storyblok client so we can use the Storyblok components.
  storyblokInit({
    accessToken,
    use: [apiPlugin],
    apiOptions: {
      region: 'us',
    },
    components,
    enableFallbackComponent: true,
    customFallbackComponent: (component) => {
      return <ComponentNotFound component={component} />;
    },
  });

  // Return the console.error to its original state.
  console.error = originalConsoleError;

  return children;
};
