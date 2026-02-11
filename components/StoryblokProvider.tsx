'use client';

import { initStoryblok } from '@/utilities/storyblok';
import { storyblokComponents } from '@/utilities/storyblok-components';

type ProviderProps = {
  children: React.ReactNode;
  isEditor?: boolean;
};

export const StoryblokProvider = ({ children, isEditor = false }: ProviderProps) => {
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

  // Init the Storyblok client with components from storyblok-components.
  initStoryblok(accessToken, isEditor, storyblokComponents);

  // Return the console.error to its original state.
  console.error = originalConsoleError;

  return children;
};
