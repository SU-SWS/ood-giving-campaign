'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import { SbBanner } from './Storyblok/SbBanner';
import { SbBasicPage } from './Storyblok/SbBasicPage';
import { SbBlurryPoster } from './Storyblok/SbBlurryPoster';
// import { SbBracketCard } from './Storyblok/SbBracketCard';
import { SbCardWysiwyg } from './Storyblok/SbCardWysiwyg';
import { SbChangemakerCard } from './Storyblok/SbChangemakerCard';
import { SbCta } from './Storyblok/SbCta';
import { SbEmbedMedia } from './Storyblok/SbEmbedMedia';
import { SbGrid } from './Storyblok/SbGrid';
import { SbGridAlternating } from './Storyblok/SbGridAlternating';
import { SbFeatureMasonry } from './Storyblok/SbFeatureMasonry';
import { SbHomepageMvp } from './Storyblok/SbHomepageMvp';
import { SbInitiativeCard } from './Storyblok/SbInitiativeCard';
import { SbQuote } from './Storyblok/SbQuote';
import { SbScrollytelling } from './Storyblok/SbScrollytelling';
import { SbSection } from './Storyblok/SbSection';
import { SbSidebarCard } from './Storyblok/SbSidebarCard';
import { SbStoryMvp } from './Storyblok/SbStoryMvp/SbStoryMvp';
import { SbStoryCard } from './Storyblok/SbStoryCard';
import { SbStoryImage } from './Storyblok/SbStoryImage';
import { SbText } from './Storyblok/SbText';
import { SbTextCard } from './Storyblok/SbTextCard';
import { SbTexturedBar } from './Storyblok/SbTexturedBar';
import { SbTriangle } from './Storyblok/SbTriangle';
import { SbTypeform } from './Storyblok/SbTypeform';
import { SbWysiwyg } from './Storyblok/SbWysiwyg';
import ComponentNotFound from '@/components/Storyblok/ComponentNotFound';

export const components = {
  sbBanner: SbBanner,
  sbBasicPage: SbBasicPage,
  sbBlurryPoster: SbBlurryPoster,
  sbCardWysiwyg: SbCardWysiwyg,
  sbChangemakerCard: SbChangemakerCard,
  sbCta: SbCta,
  sbEmbedMedia: SbEmbedMedia,
  sbGrid: SbGrid,
  sbGridAlternating: SbGridAlternating,
  sbFeatureMasonry: SbFeatureMasonry,
  sbHomepageMvp: SbHomepageMvp,
  sbInitiativeCard: SbInitiativeCard,
  sbQuote: SbQuote,
  sbScrollytelling: SbScrollytelling,
  sbSection: SbSection,
  sbSidebarCard: SbSidebarCard,
  sbStoryMvp: SbStoryMvp,
  sbStoryCard: SbStoryCard,
  sbStoryImage: SbStoryImage,
  sbText: SbText,
  sbTextCard: SbTextCard,
  sbTexturedBar: SbTexturedBar,
  sbTriangle: SbTriangle,
  sbWysiwyg: SbWysiwyg,
  sbTypeform: SbTypeform,
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
      accessToken = urlParams.get('_storyblok_tk[token]') || accessToken;
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
