/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.stanford.edu',
      },
    ],
  },
  // TODO: This has been merged into Next.js canary, but not in v13.4.9 yet
  // https://github.com/vercel/next.js/pull/53902
  modularizeImports: {
    '@heroicons/react/24/solid': {
      transform: '@heroicons/react/24/solid/{{member}}',
    },
    '@heroicons/react/24/outline': {
      transform: '@heroicons/react/24/outline/{{member}}',
    },
  },
};

module.exports = nextConfig;
