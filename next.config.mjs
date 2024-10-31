import { getStoryblokRedirects } from './utilities/data/getStoryblokRedirects.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['app', 'components', 'contexts', 'hooks', 'pages', 'services', 'utilities'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.stanford.edu',
      },
    ],
  },
  env: {
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL,
    CONTEXT: process.env.CONTEXT,
    STORYBLOK_SLUG_PREFIX: process.env.STORYBLOK_SLUG_PREFIX,
  },
  async redirects() {
    const storyblokRedirects = await getStoryblokRedirects();
    return storyblokRedirects;
  },
};

export default nextConfig;
