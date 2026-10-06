import type { Metadata } from 'next';
import Link from 'next/link';
import { TERMS } from '@/lib/legal';
import { pageMetadata } from '@/lib/seo';
import { Footer } from '@/components/Footer';
import { LegalDocument } from '@/components/LegalDocument';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = pageMetadata({
  path: '/terms',
  title: 'Terms & Conditions',
  description: 'The terms that apply when you use MPRNT, operated by Mlock Innovations LLP: ordering, payments, refunds, acceptable use and more.',
});

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-16 sm:pt-18">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">Terms &amp; Conditions</h1>
            <p className="text-text-muted">Last updated: {TERMS.lastUpdated}</p>
          </div>

          <LegalDocument doc={TERMS} />

          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-text mb-4">Related Documents</h2>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="inline-flex items-center gap-2 px-6 py-3 bg-surface-secondary border border-border rounded-lg hover:border-primary/40 transition-all">
                Privacy Policy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-surface-secondary border border-border rounded-lg hover:border-primary/40 transition-all">
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
