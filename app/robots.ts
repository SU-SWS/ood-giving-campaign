import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const CurrentURL = process.env.DEPLOY_PRIME_URL || 'http://localhost:3000';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: CurrentURL + '/sitemap.xml',
  };
}