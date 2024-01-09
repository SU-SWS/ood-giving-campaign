/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    logging: 'verbose',
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
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
        has: [
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
