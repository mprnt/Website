import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Icon } from '@/components/site/Icons';
import { Reveal } from '@/components/site/Reveal';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { FaqSections } from './FaqSections';

export const metadata: Metadata = pageMetadata({
  path: '/faq',
  title: 'FAQ',
  description:
    'Answers about printing with MPRNT: supported files, print settings, pricing, payments, refunds, document privacy, and bringing MPRNT to your business.',
});

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 sm:pt-36 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary">
                <Icon name="sparkle" className="w-4 h-4" /> Questions &amp; answers
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text leading-[1.04]">
                Everything you might <span className="text-primary">want to ask.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg text-text-muted leading-relaxed">
                How printing works, what it costs, what happens to your document, and how to bring MPRNT to your own shop or campus.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Questions */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <FaqSections />
          </div>
        </section>

        {/* Still stuck */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <Reveal variant="scale" className="max-w-4xl mx-auto rounded-[2rem] border border-border bg-surface-secondary p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">Still need a hand?</h2>
            <p className="mt-3 text-text-muted max-w-xl mx-auto">
              If your question is not here, send us the details of your order and we will help. Have your order or transaction reference ready if
              it is about a print you have already paid for.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
              >
                Contact us
                <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`mailto:${SITE.email.support}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 font-semibold text-text hover:border-primary/50 transition-colors"
              >
                {SITE.email.support}
              </a>
              <a
                href={`tel:${SITE.phone.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 font-semibold text-text hover:border-primary/50 transition-colors whitespace-nowrap"
              >
                {SITE.phone.display}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
