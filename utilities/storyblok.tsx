import { storyblokInit, apiPlugin, setComponents } from '@storyblok/react/rsc';
import type { SbSDKOptions, SbReactComponentsMap } from '@storyblok/react/rsc';
import { ComponentNotFound } from '@/components/Storyblok/ComponentNotFound';

const hasToken = !!process.env.STORYBLOK_ACCESS_TOKEN;
if (process.env.CONTEXT === 'production' || process.env.CONTEXT === 'preview') {
  console.log(`[storyblok] Initializing Storyblok SDK (token present: ${hasToken}, region: us)`);
}

// export type GetStoryblokApiConfig = {
//   accessToken?: string;
//   isEditor?: boolean;
// };

// Initialize the API once at module load - no components yet
// Note: accessToken is optional here for client-side usage
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN || 'this-is-for-client-side-usage-only',
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
  enableFallbackComponent: true,
  customFallbackComponent: ComponentNotFound,
} as SbSDKOptions);

// Components can be set separately using setComponents
export const initStoryblok = (accessToken?: string, isEditor?: boolean, components?: SbReactComponentsMap) => {
  if (components) {
    // Set components globally for StoryblokServerComponent to find
    setComponents(components);
  }

  const token = accessToken ?? (
    isEditor ? process.env.STORYBLOK_PREVIEW_EDITOR_TOKEN : process.env.STORYBLOK_ACCESS_TOKEN
  );

  if (accessToken) {
    // Re-initialize with token if needed
    storyblokInit({
      accessToken: token,
      use: [apiPlugin],
      apiOptions: {
      // Rate limiting: 3 RPS is safe with 10-15 build threads (30-45 RPS total)
      rateLimit: 3,
      // Memory cache with automatic clearing on preview requests
      // cache: {
      //   type: 'memory',
      //   clear: 'auto',
      // },
      // Max retries for failed requests (default is 5, keeping it explicit)
      maxRetries: 5,
    },
      components,
      enableFallbackComponent: true,
      customFallbackComponent: ComponentNotFound,
    } as SbSDKOptions);
  }
};
