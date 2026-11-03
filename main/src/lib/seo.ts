import type { Metadata } from 'next';
import { SITE } from './site';

// Public routes, used by app/sitemap.ts. Add new pages here.
export const ROUTES = ['/', '/how-it-works', '/for-businesses', '/contact', '/faq', '/help', '/privacy', '/terms'] as const;

const OG_IMAGE = '/opengraph-image';

export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    // A child page's openGraph replaces the root's, so the social image is repeated here.
    openGraph: { title: `${title} | ${SITE.name}`, description, url: path, images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title: `${title} | ${SITE.name}`, description, images: [OG_IMAGE] },
  };
}

// schema.org structured data. Google reads these as JSON-LD in the page <head> or body.
const ORG_ID = `${SITE.url}/#organization`;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.operator,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    description:
      'QR-based smart printing for individuals, and flexible business models from existing-printer integration to complete MPRNT Stations.',
    email: SITE.email.support,
    telephone: SITE.phone.display,
    sameAs: [SITE.social.linkedin.url, SITE.social.instagram.url],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '139, Uday Nagar, Indore Kanadia Road',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      postalCode: '452016',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone.display,
      email: SITE.email.support,
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: 'English',
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    alternateName: SITE.fullName,
    description: 'Print from your phone. Earn from your printer.',
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
