import type { MetadataRoute } from 'next';
import { SERVICES, LOCATIONS } from '@/constants';
import { BLOG_POSTS } from '@/data/blog-posts';
import { SITE_CONFIG } from '@/src/config/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/booking`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/policies`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/house-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/same-day-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${baseUrl}/service/${s.slug}`, lastModified: new Date(),
    changeFrequency: 'monthly' as const, priority: 0.8,
  }));

  const locationPages = LOCATIONS.map((l) => ({
    url: `${baseUrl}/location/${l.slug}`, lastModified: new Date(),
    changeFrequency: 'monthly' as const, priority: 0.7,
  }));

  const blogPages = BLOG_POSTS.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified || p.datePublished),
    changeFrequency: 'monthly' as const, priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
