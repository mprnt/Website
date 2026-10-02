'use client';

import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Icon, type IconName } from '@/components/site/Icons';
import { PhoneDemo } from '@/components/site/PhoneDemo';
import { Reveal, SectionHeader } from '@/components/site/Reveal';
import { FlowDiagram, ModelArt } from '@/components/site/Diagrams';

const settings: { icon: IconName; title: string; body: string }[] = [
  { icon: 'paper', title: 'PDF, PNG & JPG', body: 'Upload documents or photos straight from your phone storage or cloud apps.' },
  { icon: 'sliders', title: 'Colour or B&W', body: 'Pick colour mode, page range and number of copies.' },
  { icon: 'wallet', title: 'Pay your way', body: 'UPI, debit/credit cards and wallets - the total is shown before you pay.' },
  { icon: 'bolt', title: 'Starts instantly', body: 'Once payment succeeds the job is sent straight to the printer.' },
];

export default function HowItWorksPage() {
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
                <Icon name="user" className="w-4 h-4" /> For individuals
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text leading-[1.04]">
                Six steps from your phone <span className="text-primary">to paper.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg text-text-muted leading-relaxed">
                No app to install, no account to create, no USB stick to hand over. Find the MPRNT QR, and you&apos;re printing in under a minute.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Interactive walkthrough */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Reveal className="max-w-6xl mx-auto rounded-[2rem] border border-border bg-surface-secondary p-5 sm:p-10 lg:p-14">
            <div className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-wider text-text-muted">
              <Icon name="play" className="w-3.5 h-3.5 text-primary" /> Interactive walkthrough · tap any step
            </div>
            <PhoneDemo withSteps />
          </Reveal>
        </section>

        {/* Where you'll find MPRNT */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              eyebrow="Where to find it"
              title="Look for the MPRNT QR"
              description="You'll find MPRNT in two forms. The steps on your phone are exactly the same for both."
            />
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  model: 'integration' as const,
                  title: 'At a partner shop',
                  body: 'Stationery shops, cyber cafés, libraries and offices display an MPRNT QR next to their printer. Scan it - your job prints on the shop’s printer.',
                },
                {
                  model: 'own-station' as const,
                  title: 'At an MPRNT Station',
                  body: 'A dedicated, self-service smart printing station with its own printer and QR. Scan, pay and collect your pages from the station.',
                },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i * 100} className="rounded-3xl border border-border bg-surface overflow-hidden">
                  <div className="bg-grid bg-surface-secondary/60 border-b border-border">
                    <ModelArt model={c.model} className="w-full h-auto max-h-64" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-text">{c.title}</h3>
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Settings */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="What you can do" title="Everything you need, nothing you don't" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {settings.map((s, i) => (
                <Reveal key={s.title} delay={i * 70} className="rounded-2xl border border-border bg-surface p-6">
                  <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="mt-4 font-bold text-text">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-text-muted leading-relaxed">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy lifecycle */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-surface-secondary border-y border-border">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              eyebrow="Privacy"
              title="Your file's entire life, in five steps"
              description="Documents are only kept as long as it takes to print them."
            />
            <Reveal className="rounded-3xl border border-border bg-surface p-6 sm:p-10">
              <FlowDiagram
                nodes={[
                  { icon: 'qr', label: 'Private session', sub: 'Tied to one printer', tone: 'muted' },
                  { icon: 'upload', label: 'Secure upload', sub: 'Encrypted in transit', tone: 'muted' },
                  { icon: 'wallet', label: 'Payment confirmed', sub: 'Job is created', tone: 'muted' },
                  { icon: 'printer', label: 'Printed', sub: 'Progress on your phone', tone: 'primary' },
                  { icon: 'trash', label: 'Deleted', sub: 'Purged after completion', tone: 'accent' },
                ]}
              />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
            <Reveal variant="left" className="rounded-3xl border border-border bg-surface p-8">
              <Icon name="sparkle" className="w-7 h-7 text-primary" />
              <h2 className="mt-4 text-2xl font-extrabold text-text">Got a question?</h2>
              <p className="mt-2 text-text-muted">Payments, refunds, file types and more.</p>
              <Link href="/faq" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
                Read the FAQ <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </Reveal>
            <Reveal variant="right" className="rounded-3xl bg-primary text-white p-8">
              <Icon name="store" className="w-7 h-7 text-accent" />
              <h2 className="mt-4 text-2xl font-extrabold">Want MPRNT at your shop?</h2>
              <p className="mt-2 text-white/75">Connect the printer you already have, or get an MPRNT Station.</p>
              <Link href="/for-businesses" className="mt-6 inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all">
                Explore business models <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
