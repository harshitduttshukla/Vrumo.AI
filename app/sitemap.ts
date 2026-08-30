import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { seoPages } from '@/lib/seoPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified: new Date('2026-08-30'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  return [
    {
      url: siteConfig.url,
      lastModified: new Date('2026-08-30'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...pages,
  ];
}
