import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/danke/'],
    },
    sitemap: 'https://ipa.smith-und-partners.de/sitemap.xml',
  };
}
