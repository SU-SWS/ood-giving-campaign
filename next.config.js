/** @type {import('next').NextConfig} */
const nextConfig = {
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
