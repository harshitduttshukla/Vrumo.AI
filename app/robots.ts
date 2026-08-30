import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/real-estate-crm',
          '/real-estate-ai-automation',
          '/real-estate-lead-management',
          '/real-estate-sales-automation',
          '/real-estate-lead-follow-up',
          '/real-estate-whatsapp-automation',
          '/real-estate-ai-calling',
          '/real-estate-site-visit-automation',
          '/ai-crm-for-real-estate-developers',
          '/ai-crm-for-real-estate-agents',
          '/blog',
          '/blog/*',
          '/resources',
          '/about',
          '/contact',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
          '/auth/',
          '/*.json$',
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
