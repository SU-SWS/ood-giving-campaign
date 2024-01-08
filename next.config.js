/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    logging: 'verbose',
    isrMemoryCacheSize: 0, // disable ISR cache in memory and rely on file system cache.
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
  },
};

module.exports = nextConfig;
