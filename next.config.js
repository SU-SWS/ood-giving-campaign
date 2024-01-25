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
      {
        protocol: 'https',
        hostname: 'a-us.storyblok.com',
      },
    ],
  },
  env: {
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL,
    CONTEXT: process.env.CONTEXT,
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
        missing: [
          {
            type: 'query',
            key: '_rsc',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
