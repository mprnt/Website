import type { MetadataRoute } from 'next';
import { ROUTES } from '@/lib/seo';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE.url}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
