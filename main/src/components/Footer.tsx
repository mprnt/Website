'use client';

import Link from 'next/link';
import { Logo } from './Navbar';
import { SITE } from '../lib/site';

interface FooterProps {
  compact?: boolean;
}

const columns = [
  {
    title: 'Print',
    links: [
      { href: '/how-it-works', label: 'How it works' },
      { href: '/faq', label: 'FAQ' },
      { href: '/help', label: 'Help center' },
    ],
  },
  {
    title: 'Business models',
    links: [
      { href: '/for-businesses#model-1', label: '1 · Printer Integration' },
      { href: '/for-businesses#model-2', label: '2 · MPRNT Station' },
      { href: '/for-businesses#model-3', label: '3 · Full Purchase' },
      { href: '/for-businesses#compare', label: 'Compare models' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/terms', label: 'Terms' },
      { href: '/privacy', label: 'Privacy' },
    ],
  },
];

export function Footer({ compact = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (compact) {
    return (
      <footer className="w-full py-4 px-6 border-t border-border/30 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-text-muted">
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Support</Link>
          </div>
          <p>© {currentYear} MPRNT</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full border-t border-border bg-surface-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm text-text-muted leading-relaxed">
              From existing printers to smart printing stations. MPRNT lets anyone print from their phone - and lets any business offer it.
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a href={SITE.social.linkedin.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm text-text-muted hover:text-primary transition-colors">
                  <svg aria-hidden="true" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5c0-1.2-.02-2.73-1.66-2.73-1.67 0-1.92 1.3-1.92 2.64V21h-4z" />
                  </svg>
                  LinkedIn · {SITE.social.linkedin.handle}
                </a>
              </li>
              <li>
                <a href={SITE.social.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm text-text-muted hover:text-primary transition-colors">
                  <svg aria-hidden="true" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                  </svg>
                  Instagram · {SITE.social.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((c) => (
              <div key={c.title}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-text mb-4">{c.title}</h3>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-text-muted hover:text-primary transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-text-muted">
          <p>© {currentYear} MPRNT. All rights reserved.</p>
          <p>Made for shops, campuses and people who just need a printout.</p>
        </div>
      </div>
    </footer>
  );
}
