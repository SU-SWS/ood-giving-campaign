import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    cpus: 4,
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
    STORYBLOK_PREVIEW_EDITOR_TOKEN: process.env.STORYBLOK_PREVIEW_EDITOR_TOKEN,
    CONTEXT: process.env.CONTEXT || 'development',
    URL: process.env.URL || '',
    BUILD_ID: process.env.BUILD_ID || '',
    STORYBLOK_SLUG_PREFIX: process.env.STORYBLOK_SLUG_PREFIX || 'momentum',
  },
};

export default nextConfig;
