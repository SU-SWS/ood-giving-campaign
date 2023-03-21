import type { GatsbyConfig } from 'gatsby';
import * as dotenv from 'dotenv';

dotenv.config();

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
let siteUrl = 'http://localhost:8000';

// Support for Production site builds.
if (process.env.CONTEXT === 'production') {
  siteUrl = process.env.URL;
}
// Support for non-production netlify builds (branch/preview)
else if (process.env.CONTEXT !== 'production' && process.env.NETLIFY) {
  siteUrl = process.env.DEPLOY_PRIME_URL;
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Stanford On Purpose',
    siteUrl,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation
  // and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: false,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: '*', disallow: '/editor/' },
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Stanford On Purpose',
        start_url: '/',
        include_favicon: false,
        crossOrigin: 'use-credentials',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        version: activeEnv === 'production' ? 'published' : 'draft',
        region: 'us',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

export default config;
