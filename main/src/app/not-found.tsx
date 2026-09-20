'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-6">
            <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-7xl lg:text-8xl font-black text-text mb-4 tracking-tight">404</h1>
        <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">Page not found</h2>
        <p className="text-xl text-text-muted mb-10 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push('/')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all shadow-lg shadow-primary/20"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to home</span>
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface-secondary border border-border hover:border-primary/40 text-text rounded-lg font-semibold transition-all"
          >
            Contact support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-text-muted mb-4">Popular pages:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/how-it-works" className="text-primary hover:underline text-sm">
              How it works
            </Link>
            <span className="text-border">•</span>
            <Link href="/for-businesses" className="text-primary hover:underline text-sm">
              For Businesses
            </Link>
            <span className="text-border">•</span>
            <Link href="/contact" className="text-primary hover:underline text-sm">
              Contact
            </Link>
            <span className="text-border">•</span>
            <Link href="/privacy" className="text-primary hover:underline text-sm">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
