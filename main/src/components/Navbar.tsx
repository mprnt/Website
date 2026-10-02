'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { Icon } from './site/Icons';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className={`relative flex items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/30 ${size === 'sm' ? 'w-8 h-8' : 'w-9 h-9'}`}>
        <Icon name="printer" className="w-[18px] h-[18px]" />
        <span className="absolute -right-0.5 -top-0.5 w-2.5 h-2.5 rounded-full bg-accent ring-2 ring-surface" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-black text-text tracking-tight">MPRNT</span>
        <span className="text-[9px] text-text-muted tracking-[0.2em] uppercase">Smart printing</span>
      </span>
    </span>
  );
}

const navLinks = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/for-businesses', label: 'Business models' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-6xl rounded-2xl transition-all duration-300 ${
        scrolled || open
          ? 'backdrop-blur-2xl bg-surface/85 border border-border/60 shadow-xl shadow-black/5'
          : 'backdrop-blur-xl bg-surface/60 border border-border/30'
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        <Link href="/" aria-label="MPRNT home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active ? 'text-primary bg-primary/10' : 'text-text-muted hover:text-text hover:bg-surface-secondary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact?model=integration"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary-dark transition-colors"
          >
            Partner with us
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-text hover:bg-surface-secondary transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round">
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="px-3 pb-4 pt-1 border-t border-border/50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-between px-3 py-3.5 rounded-xl text-base font-semibold ${
                pathname === link.href ? 'text-primary bg-primary/10' : 'text-text hover:bg-surface-secondary'
              }`}
            >
              {link.label}
              <Icon name="arrow" className="w-4 h-4 opacity-50" />
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 mt-3 px-1">
            <Link href="/how-it-works" className="rounded-xl border border-border py-3 text-center text-sm font-semibold text-text">
              <Icon name="user" className="w-4 h-4 inline -mt-0.5 mr-1" /> I want to print
            </Link>
            <Link href="/for-businesses" className="rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white">
              <Icon name="store" className="w-4 h-4 inline -mt-0.5 mr-1" /> I&apos;m a business
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
