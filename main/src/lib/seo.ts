import type { Metadata } from 'next';
import { SITE } from './site';

// Public routes, used by app/sitemap.ts. Add new pages here.
export const ROUTES = ['/', '/how-it-works', '/for-businesses', '/contact', '/faq', '/help', '/privacy', '/terms'] as const;

export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${SITE.name}`, description, url: path },
  };
}
