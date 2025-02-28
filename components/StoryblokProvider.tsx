'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import { SbAnnotatedImage } from './Storyblok/SbAnnotatedImage';
import { SbBanner } from '@/components/Storyblok/SbBanner';
import { SbBasicCard } from '@/components/Storyblok/SbBasicCard';
import { SbBasicPage } from '@/components/Storyblok/SbBasicPage';
import { SbBlurryPoster } from '@/components/Storyblok/SbBlurryPoster';
import { SbCardWysiwyg } from '@/components/Storyblok/SbCardWysiwyg';
import { SbChangemakerCard } from '@/components/Storyblok/SbChangemakerCard';
import { SbChat } from '@/components/Storyblok/SbChat';
import { SbChatBubble } from '@/components/Storyblok/SbChatBubble';
import { SbCta } from '@/components/Storyblok/SbCta';
import { SbCtaBlock } from '@/components/Storyblok/SbCtaBlock';
import { SbDataCard } from '@/components/Storyblok/SbDataCard';
import { SbEmbed } from '@/components/Storyblok/SbEmbed';
import { SbEmbedMedia } from '@/components/Storyblok/SbEmbedMedia';
import { SbEventBanner } from '@/components/Storyblok/SbEventBanner';
import { SbGrid } from '@/components/Storyblok/SbGrid';
import { SbGridAlternating } from '@/components/Storyblok/SbGridAlternating';
import { SbFeatureMasonry } from '@/components/Storyblok/SbFeatureMasonry';
import { SbHomepageMvp } from '@/components/Storyblok/SbHomepageMvp';
import { SbHomepageThemeSection } from '@/components/Storyblok/SbHomepageThemeSection';
import { SbImageSlider } from '@/components/Storyblok/SbImageSlider';
import { SbInitiativeCard } from '@/components/Storyblok/SbInitiativeCard';
import { SbMainNav } from '@/components/Storyblok/SbMainNav';
import { SbMasthead } from '@/components/Storyblok/SbMasthead';
import { SbMomentPoster } from './Storyblok/SbMomentPoster';
import { SbQuote } from '@/components/Storyblok/SbQuote';
import { SbRow } from '@/components/Storyblok/SbRow';
import { SbScrollytelling } from '@/components/Storyblok/SbScrollytelling';
import { SbSection } from '@/components/Storyblok/SbSection';
import { SbSidebarCard } from '@/components/Storyblok/SbSidebarCard';
import { SbSpacer } from '@/components/Storyblok/SbSpacer';
import { SbStoryCard } from '@/components/Storyblok/SbStoryCard';
import { SbStoryFilterPage } from '@/components/Storyblok/SbStoryFilterPage';
import { SbStoryImage } from '@/components/Storyblok/SbStoryImage';
import { SbStoryListHero } from '@/components/Storyblok/SbStoryListHero';
import { SbStoryListNav } from '@/components/Storyblok/SbStoryListNav';
import { SbStoryMvp } from '@/components/Storyblok/SbStoryMvp/SbStoryMvp';
import { SbTabGroup } from '@/components/Storyblok/SbTabGroup';
import { SbText } from '@/components/Storyblok/SbText';
import { SbTextCard } from '@/components/Storyblok/SbTextCard';
import { SbTexturedBar } from '@/components/Storyblok/SbTexturedBar';
import { SbTypeform } from '@/components/Storyblok/SbTypeform';
import { SbVerticalPoster } from './Storyblok/SbVerticalPoster';
import { SbVideo } from '@/components/Storyblok/SbVideo';
import { SbWysiwyg } from '@/components/Storyblok/SbWysiwyg';
import { ComponentNotFound } from '@/components/Storyblok/ComponentNotFound';

export const components = {
  sbAnnotatedImage: SbAnnotatedImage,
  sbBanner: SbBanner,
  sbBasicCard: SbBasicCard,
  sbBasicPage: SbBasicPage,
  sbBlurryPoster: SbBlurryPoster,
  sbCardWysiwyg: SbCardWysiwyg,
  sbChangemakerCard: SbChangemakerCard,
  sbChat: SbChat,
  sbChatBubble: SbChatBubble,
  sbCta: SbCta,
  sbCtaBlock: SbCtaBlock,
  sbDataCard: SbDataCard,
  sbEmbedScript: SbEmbed,
  sbEmbedMedia: SbEmbedMedia,
  sbEventBanner: SbEventBanner,
  sbGrid: SbGrid,
  sbGridAlternating: SbGridAlternating,
  sbFeatureMasonry: SbFeatureMasonry,
  sbHomepageMvp: SbHomepageMvp,
  sbHomepageThemeSection: SbHomepageThemeSection,
  sbImageSlider: SbImageSlider,
  sbInitiativeCard: SbInitiativeCard,
  sbMainNav: SbMainNav,
  sbMasthead: SbMasthead,
  sbMomentPoster: SbMomentPoster,
  sbQuote: SbQuote,
  sbRow: SbRow,
  sbScrollytelling: SbScrollytelling,
  sbSection: SbSection,
  sbSidebarCard: SbSidebarCard,
  sbSpacer: SbSpacer,
  sbStoryCard: SbStoryCard,
  sbStoryFilterPage: SbStoryFilterPage,
  sbStoryListHero: SbStoryListHero,
  sbStoryListNav: SbStoryListNav,
  sbStoryMvp: SbStoryMvp,
  sbStoryImage: SbStoryImage,
  sbTabGroup: SbTabGroup,
  sbText: SbText,
  sbTextCard: SbTextCard,
  sbTexturedBar: SbTexturedBar,
  sbVerticalPoster: SbVerticalPoster,
  sbVideo: SbVideo,
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
