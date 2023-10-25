import { storyblokInit, apiPlugin } from '@storyblok/js';

const SBClient = storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
});

export { SBClient };
