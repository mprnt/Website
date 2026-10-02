'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Icon } from '@/components/site/Icons';
import { Reveal, SectionHeader } from '@/components/site/Reveal';
import { FlowDiagram, ModelSpectrum, SystemDiagram } from '@/components/site/Diagrams';
import { ComparisonTable, ModelDetail, ModelFinder } from '@/components/site/Models';

const businessFaqs = [
  {
    q: 'Do I need to buy an MPRNT Station?',
    a: 'No. With Model 1 (Printer Integration) MPRNT connects your existing compatible printer - no station, kiosk or physical structure required.',
  },
  {
    q: 'Who keeps the printing revenue?',
    a: 'In Model 1, Model 2 Option B and Model 3 you keep the printing revenue and pay a monthly MPRNT software/platform subscription. In Model 2 Option A (Revenue Share) revenue is shared at a mutually agreed percentage.',
  },
  {
    q: 'Who maintains the station?',
    a: 'In Model 2 Option A, MPRNT installs, operates, manages and maintains the station. In Model 2 Option B, MPRNT provides maintenance support and operational assistance. In Model 3 you run it independently, with support available as agreed.',
  },
  {
    q: 'What do I need to provide?',
    a: 'At minimum: space, electricity and Wi-Fi. For Model 1 you also provide the printer, paper and consumables, and handle basic day-to-day printing operations.',
  },
  {
    q: 'How are prices and terms decided?',
    a: 'Pricing, subscription, maintenance, revenue-sharing percentage, hardware specifications and support terms depend on the model and are defined in the applicable commercial agreement.',
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
      {businessFaqs.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-text"
          >
            {f.q}
            <Icon name="chevron" className={`w-5 h-5 flex-shrink-0 text-text-muted transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <p className="overflow-hidden px-5 text-sm text-text-muted leading-relaxed">
              <span className="block pb-5">{f.a}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ModelSection({ id, children, alt = false }: { id: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={`scroll-mt-24 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 ${alt ? 'bg-surface-secondary border-y border-border' : ''}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

export default function ForBusinessesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 sm:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary">
                  <Icon name="store" className="w-4 h-4" /> MPRNT for businesses
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text leading-[1.04]">
                  From existing printers to <span className="text-primary">smart printing stations.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-xl">
                  MPRNT supports businesses at every stage. Start by connecting the printer you already own, or deploy a complete MPRNT Station - with us
                  as your partner, or as the owner.
                </p>
              </Reveal>
              <Reveal delay={240} className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 max-w-lg">
                {[
                  ['#model-1', '1', 'Printer Integration'],
                  ['#model-2', '2', 'MPRNT Station'],
                  ['#model-3', '3', 'Full Purchase'],
                ].map(([href, n, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="group rounded-2xl border border-border bg-surface p-3 sm:p-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
                  >
                    <span className="block text-2xl sm:text-3xl font-black text-primary">{n}</span>
                    <span className="block text-xs sm:text-sm font-semibold text-text leading-tight mt-1">{label}</span>
                  </a>
                ))}
              </Reveal>
            </div>
            <Reveal variant="scale" delay={120}>
              <ModelFinder />
            </Reveal>
          </div>
        </section>

        {/* Spectrum */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <Reveal className="max-w-4xl mx-auto rounded-3xl border border-border bg-surface-secondary/60 p-6 sm:p-10">
            <h2 className="text-center text-lg sm:text-xl font-extrabold text-text mb-8">Choose how much you want to invest and operate</h2>
            <ModelSpectrum />
          </Reveal>
        </section>

        {/* Model 1 */}
        <ModelSection id="model-1" alt>
          <SectionHeader
            align="left"
            eyebrow="Model 1 · Our starting model"
            title="Printer Integration"
            description="The simplest way to start. MPRNT connects your shop's existing printer to our system and configures the hardware and software so customers can submit print requests digitally."
          />
          <Reveal className="mb-12 rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-text-muted mb-6">How a print job reaches your printer</div>
            <SystemDiagram target="printer" />
          </Reveal>
          <Reveal>
            <ModelDetail id="integration" />
          </Reveal>
        </ModelSection>

        {/* Model 2 - two options */}
        <ModelSection id="model-2">
          <SectionHeader
            align="left"
            eyebrow="Model 2 · Station-based"
            title="MPRNT Station"
            description="For businesses and locations that want a dedicated smart printing setup. Two options: partner with us on revenue, or own the station yourself."
          />
          <Reveal className="mb-12 grid md:grid-cols-2 gap-4">
            {[
              ['A', 'Revenue Share', 'Provide space, electricity & Wi-Fi → MPRNT provides, manages and maintains the station → share printing revenue.', 'handshake'],
              ['B', 'Purchase + Monthly Software', 'Purchase the MPRNT Station → own and operate it → keep your printing revenue → pay monthly software charges.', 'key'],
            ].map(([n, t, body, icon]) => (
              <a
                key={n}
                href={`#model-2${n.toLowerCase()}`}
                className="group flex gap-4 rounded-2xl border border-border bg-surface-secondary p-5 hover:border-primary/50 transition-colors"
              >
                <span className="w-12 h-12 flex-shrink-0 rounded-2xl bg-primary text-white flex items-center justify-center">
                  <Icon name={icon as 'key'} className="w-6 h-6" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary">Option {n}</span>
                  <span className="block font-extrabold text-text text-lg">{t}</span>
                  <span className="block mt-1 text-sm text-text-muted leading-relaxed">{body}</span>
                </span>
              </a>
            ))}
          </Reveal>
          <div id="model-2a" className="scroll-mt-24">
            <Reveal>
              <ModelDetail id="revenue-share" />
            </Reveal>
          </div>
          <div id="model-2b" className="scroll-mt-24 mt-16 pt-16 border-t border-border">
            <Reveal>
              <ModelDetail id="own-station" />
            </Reveal>
          </div>
        </ModelSection>

        {/* Model 3 */}
        <ModelSection id="model-3" alt>
          <SectionHeader
            align="left"
            eyebrow="Model 3 · Complete ownership"
            title="Full Purchase & Support"
            description="Purchase the complete MPRNT Station outright and independently operate your own MPRNT-powered printing setup - with MPRNT still there when you need us."
          />
          <Reveal>
            <ModelDetail id="full-purchase" />
          </Reveal>
        </ModelSection>

        {/* Compare */}
        <section id="compare" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Compare" title="All models, side by side" />
            <Reveal>
              <ComparisonTable />
            </Reveal>
          </div>
        </section>

        {/* Onboarding */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-surface-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              eyebrow="Getting started"
              title="From first call to first print"
              description="Whichever model you choose, the MPRNT team handles the technical setup and makes your location ready for operation."
            />
            <Reveal className="rounded-3xl border border-border bg-surface p-6 sm:p-10">
              <FlowDiagram
                nodes={[
                  { icon: 'phone', label: 'Enquire', sub: 'Tell us about your space', tone: 'muted' },
                  { icon: 'sparkle', label: 'Pick a model', sub: 'We help you choose', tone: 'muted' },
                  { icon: 'paper', label: 'Agreement', sub: 'Commercial terms finalised', tone: 'muted' },
                  { icon: 'wrench', label: 'Install & configure', sub: 'Hardware, software, payments', tone: 'primary' },
                  { icon: 'printer', label: 'Go live', sub: 'Updates & support continue', tone: 'accent' },
                ]}
              />
            </Reveal>
          </div>
        </section>

        {/* FAQ + CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text">Questions from business owners</h2>
              <p className="mt-3 text-text-muted">Still deciding? We&apos;ll recommend a model after a short conversation about your location.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?model=integration"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
                >
                  Talk to our team <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3.5 font-semibold text-text hover:border-primary/50 transition-colors"
                >
                  All FAQs
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Faq />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
