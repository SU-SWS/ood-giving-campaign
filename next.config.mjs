import { getStoryblokRedirects } from './utilities/data/getStoryblokRedirects.mjs';
import path from 'path';

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
  // Hack to get over the 2MB limit on cacheHandler
  // This just reimports the default one but it skips the limit
  // See: https://github.com/vercel/next.js/discussions/48324#discussioncomment-10542097
  // Remove when upgrading to Next 15+
  cacheHandler: path.resolve('node_modules/next/dist/server/lib/incremental-cache/file-system-cache.js'),
};

export default nextConfig;
