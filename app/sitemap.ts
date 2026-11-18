import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { seoPages } from '@/lib/seoPages';
import { articles } from '@/lib/articles';
import { categories } from '@/lib/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date('2026-08-30');

  // 1. Static & Commercial Landing Pages
  const commercialPages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 2. Blog Category Hub Pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${siteConfig.url}/blog/${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. 20 In-Depth Blog Articles
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const entries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...commercialPages,
    ...categoryPages,
    ...articlePages,
  ];

  // Drop duplicate URLs (e.g. a category and an article sharing a slug).
  const seen = new Set<string>();
  return entries.filter((entry) => !seen.has(entry.url) && seen.add(entry.url));
}
