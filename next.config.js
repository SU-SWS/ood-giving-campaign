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
  staticPageGenerationTimeout: 1000 * 60 * 5, // 5 minutes
};

module.exports = nextConfig;
