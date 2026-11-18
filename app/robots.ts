import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const disallow = ['/api/', '/admin/', '/dashboard/', '/auth/'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      // Explicitly welcome AI search/answer crawlers so Vrumo can be cited in AI answers.
      { userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot', 'Google-Extended', 'Applebot-Extended', 'Bingbot'], allow: '/', disallow },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
