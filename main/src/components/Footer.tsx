'use client';

import Link from 'next/link';
import { Logo } from './Navbar';

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
