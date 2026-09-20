'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/how-it-works', label: 'How it works' },
    { href: '/for-businesses', label: 'For Businesses' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] lg:w-[70%] mt-4 lg:mt-4 rounded-2xl lg:rounded-2xl ${
        isScrolled
          ? 'backdrop-blur-l bg-surface/95 border border-border/50 shadow-lg'
          : 'backdrop-blur-l bg-surface/70 border border-border/30 shadow-md'
      }`}
    >
      <div className="px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
              <svg className="w-8 h-8 sm:w-9 sm:h-9 text-primary relative" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl font-bold text-text tracking-tight">Mprnt</span>
              <span className="text-[8px] sm:text-[9px] text-text-muted tracking-widest uppercase">Smart Printing</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            {/* Desktop CTA */}
            <button
              onClick={() => router.push('/scan')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium text-sm transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Start Printing
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text-muted hover:text-text transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Simple dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-surface border border-border/30 rounded-xl shadow-lg overflow-hidden transition-all duration-200 origin-top ${
          isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 text-sm font-medium text-text hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              router.push('/scan');
            }}
            className="px-6 py-3 text-sm font-medium text-primary hover:bg-primary/5 border-t border-border/30 transition-colors"
          >
            Start Printing
          </button>
        </nav>
      </div>
    </header>
  );
}
