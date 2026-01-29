'use client';
import { apiPlugin, storyblokInit, StoryblokClient } from '@storyblok/react/rsc';
import { ComponentNotFound } from '@/components/Storyblok/ComponentNotFound';
import { SbAccordion } from '@/components/Storyblok/SbAccordion';
import { SbAnnotatedImage } from '@/components/Storyblok/SbAnnotatedImage';
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
import { SbHomepageMvp } from '@/components/Storyblok/SbHomepageMVP';
import { SbHomepageThemeSection } from '@/components/Storyblok/SbHomepageThemeSection';
import { SbImageSlider } from '@/components/Storyblok/SbImageSlider';
import { SbInitiativeCard } from '@/components/Storyblok/SbInitiativeCard';
import { SbMainNav } from '@/components/Storyblok/SbMainNav';
import { SbMasthead } from '@/components/Storyblok/SbMasthead';
import { SbMomentPoster } from '@/components/Storyblok/SbMomentPoster';
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
import { SbVerticalPoster } from '@/components/Storyblok/SbVerticalPoster';
import { SbVideo } from '@/components/Storyblok/SbVideo';
import { SbWysiwyg } from '@/components/Storyblok/SbWysiwyg';

export const components = {
  sbAccordion: SbAccordion,
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


export type GetStoryblokApiConfig = {
  accessToken?: string;
  isEditor?: boolean;
};

// Singleton cache for Storyblok client instances
let cachedClient: StoryblokClient | null = null;
let cachedToken: string | null = null;

/**
 * Get or create a configured Storyblok API client.
 *
 * **Next.js 16 Caching Strategy**:
 * - The Storyblok SDK internally uses `fetch`, which Next.js 16 extends
 * - We rely on the React `cache` function wrapper in utilities/data/ for build-time deduplication
 * - Storyblok SDK's built-in memory cache with automatic clearing helps with redundant requests
 * - Each new build process creates a fresh client instance, ensuring latest content
 *
 * **Rate Limiting**:
 * - Storyblok Content API limit: 60 RPS
 * - Configured to use 6 RPS to safely stay well below the limit during parallel builds
 * - With 10-15 Next.js build threads, this provides a safety buffer
 *
 * **Version Handling**:
 * - Production: Uses STORYBLOK_ACCESS_TOKEN (public, published content only)
 * - Editor: Uses STORYBLOK_PREVIEW_EDITOR_TOKEN (preview, draft content access)
 */
export const getStoryblokClient = ({
  accessToken,
  isEditor,
}: GetStoryblokApiConfig = {}): StoryblokClient => {
  const token = accessToken ?? (
    isEditor ? process.env.STORYBLOK_PREVIEW_EDITOR_TOKEN : process.env.STORYBLOK_ACCESS_TOKEN
  );

  // Return cached client if token matches
  if (cachedClient && cachedToken === token) {
    return cachedClient;
  }

  const client = storyblokInit({
    accessToken: token,
    use: [apiPlugin],
    components,
    enableFallbackComponent: true,
    customFallbackComponent: (component) => {
      return <ComponentNotFound component={component} />;
    },
    apiOptions: {
      region: 'us',
      // Rate limiting: 3 RPS is safe with 10-15 build threads (30-45 RPS total)
      rateLimit: 3,
      // Memory cache with automatic clearing on preview requests
      cache: {
        type: 'memory',
        clear: 'auto',
      },
      // Max retries for failed requests (default is 5, keeping it explicit)
      maxRetries: 5,
    },
  })();

  // Cache the client and token
  cachedClient = client;
  cachedToken = token || null;

  return client;
};
