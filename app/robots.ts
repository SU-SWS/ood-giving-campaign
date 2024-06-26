import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const CurrentURL = process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://momentum.stanford.edu';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/global-components/', '/test/'],
    },
    sitemap: CurrentURL + '/sitemap.xml',
  };
}
