'use client';

import Link from 'next/link';

interface FooterProps {
  compact?: boolean;
}

export function Footer({ compact = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (compact) {
    return (
      <footer className="w-full py-4 px-6 border-t border-border/30 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-text-muted">
            <div className="flex items-center gap-4">
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <span className="text-border">•</span>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <span className="text-border">•</span>
              <Link href="/contact" className="hover:text-primary transition-colors">Support</Link>
            </div>
            <p>© {currentYear} Mprnt</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full border-t border-primary/20 bg-gradient-to-b from-surface via-surface to-text/5">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Main Statement */}
          <div className="mb-16 lg:mb-20 pb-16 border-b border-border/50">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-4 leading-tight">
                Print infrastructure for modern spaces
              </h2>
              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                Mprnt brings reliable, self-service printing to venues everywhere. No apps, no friction, no compromise on reliability.
              </p>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 lg:mb-20">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                  <svg className="w-6 h-6 text-primary relative" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                  </svg>
                </div>
                <span className="text-sm font-bold text-text">Mprnt</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Modern self-service printing for enterprise venues and public spaces.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-xs font-bold text-text mb-5 tracking-wide uppercase opacity-60">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/how-it-works" className="text-sm text-text-muted hover:text-primary transition-colors">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-sm text-text-muted hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-sm text-text-muted hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Business */}
            <div>
              <h3 className="text-xs font-bold text-text mb-5 tracking-wide uppercase opacity-60">For Businesses</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/for-businesses" className="text-sm text-text-muted hover:text-primary transition-colors">
                    Venue owners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-text-muted hover:text-primary transition-colors">
                    Contact sales
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="text-xs font-bold text-text mb-5 tracking-wide uppercase opacity-60">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/help" className="text-sm text-text-muted hover:text-primary transition-colors">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-text-muted hover:text-primary transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-text-muted hover:text-primary transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-border/30">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <p className="text-sm text-text-muted">
                © {currentYear} Mprnt. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
