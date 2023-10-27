import { storyblokInit, apiPlugin } from '@storyblok/js';

const SBClient = storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN, // Preview token.
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
});

export { SBClient };
