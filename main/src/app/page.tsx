'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Icon, type IconName } from '@/components/site/Icons';
import { PhoneDemo } from '@/components/site/PhoneDemo';
import { Reveal, SectionHeader } from '@/components/site/Reveal';
import { SystemDiagram } from '@/components/site/Diagrams';

const venues = ['Stationery shops', 'Cyber cafés', 'Photocopy shops', 'Colleges', 'Libraries', 'Offices', 'Co-working spaces', 'Malls', 'Hostels', 'Transit hubs'];

const features: { icon: IconName; title: string; body: string }[] = [
  { icon: 'shield', title: 'Secure, time-limited sessions', body: 'Each QR scan opens a private session tied to one printer. Nobody else sees your file.' },
  { icon: 'trash', title: 'Files auto-deleted', body: 'Documents are purged from storage as soon as the job completes.' },
  { icon: 'wallet', title: 'Digital payments built in', body: 'UPI, cards and wallets. No cash handling, no change, no pricing mistakes.' },
  { icon: 'sliders', title: 'Live, transparent pricing', body: 'Price updates as you pick colour, pages and copies - you see it before paying.' },
  { icon: 'chart', title: 'Business dashboard', body: 'Track print jobs, transactions and printer status for your location.' },
  { icon: 'cloud', title: 'Always up to date', body: 'MPRNT ships software updates and support remotely - on every model.' },
];

export default function HomePage() {
  const [target, setTarget] = useState<'printer' | 'station'>('printer');

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      <main className="flex-1">
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" aria-hidden="true" />
          <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-primary">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping" />
                    <span className="relative w-2 h-2 rounded-full bg-primary" />
                  </span>
                  QR-based smart printing
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl font-black tracking-tight text-text">
                  Print from your phone.
                  <span className="block bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                    Earn from your printer.
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-xl text-base sm:text-lg text-text-muted leading-relaxed">
                  Customers scan a QR, upload, pay and collect - no app, no queue. Businesses add MPRNT to the printer they already own, or get a
                  dedicated MPRNT Station.
                </p>
              </Reveal>

              {/* Audience chooser */}
              <Reveal delay={240} className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
                <Link
                  href="/how-it-works"
                  className="group rounded-2xl border border-border bg-surface p-4 sm:p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <span className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon name="user" />
                    </span>
                    <Icon name="arrow" className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </span>
                  <span className="block mt-3 font-bold text-text">I want to print</span>
                  <span className="block text-sm text-text-muted">See how it works in 6 steps</span>
                </Link>
                <Link
                  href="/for-businesses"
                  className="group rounded-2xl bg-primary p-4 sm:p-5 text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all"
                >
                  <span className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                      <Icon name="store" />
                    </span>
                    <Icon name="arrow" className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="block mt-3 font-bold">I run a business</span>
                  <span className="block text-sm text-white/75">Explore models 1 · 2 · 3</span>
                </Link>
              </Reveal>

              <Reveal delay={320}>
                <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
                  {['No app or sign-up', 'UPI · card · wallet', 'Files auto-deleted'].map((t) => (
                    <li key={t} className="flex items-center gap-1.5">
                      <Icon name="check" className="w-4 h-4 text-primary" strokeWidth={2.5} />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal variant="scale" delay={150} className="relative">
              <PhoneDemo />
              <div className="hidden sm:flex absolute top-16 -left-2 lg:-left-6 animate-float items-center gap-2 rounded-2xl bg-surface border border-border shadow-xl px-3.5 py-2.5">
                <span className="w-8 h-8 rounded-lg bg-success/15 text-success flex items-center justify-center">
                  <Icon name="check" className="w-4 h-4" strokeWidth={2.5} />
                </span>
                <span>
                  <span className="block text-xs font-bold text-text">Payment received</span>
                  <span className="block text-[11px] text-text-muted">₹24 · UPI</span>
                </span>
              </div>
              <div className="hidden sm:flex absolute bottom-24 -right-2 lg:-right-4 animate-float-slow items-center gap-2 rounded-2xl bg-surface border border-border shadow-xl px-3.5 py-2.5">
                <span className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
                  <Icon name="printer" className="w-4 h-4" />
                </span>
                <span>
                  <span className="block text-xs font-bold text-text">Printer ready</span>
                  <span className="block text-[11px] text-text-muted">Station M001</span>
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Venue marquee ---------------- */}
        <section className="border-y border-border bg-surface-secondary py-5 overflow-hidden" aria-label="Where MPRNT fits">
          <div className="flex w-max animate-marquee gap-10 pr-10">
            {[...venues, ...venues].map((v, i) => (
              <span key={i} className="flex items-center gap-3 text-sm font-semibold text-text-muted whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                {v}
              </span>
            ))}
          </div>
        </section>

        {/* ---------------- System diagram ---------------- */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              eyebrow="How MPRNT works"
              title="From a phone to a printed page"
              description="The same simple journey for every customer - whether the printer is one your shop already owns or a dedicated MPRNT Station."
            />
            <Reveal className="rounded-3xl border border-border bg-surface-secondary/60 p-6 sm:p-10">
              <div className="flex justify-center mb-8">
                <div className="inline-flex p-1 rounded-xl bg-surface border border-border text-sm font-semibold">
                  {(
                    [
                      ['printer', 'Existing printer'],
                      ['station', 'MPRNT Station'],
                    ] as const
                  ).map(([k, label]) => (
                    <button
                      key={k}
                      onClick={() => setTarget(k)}
                      aria-pressed={target === k}
                      className={`px-4 py-2 rounded-lg transition-all ${target === k ? 'bg-primary text-white shadow' : 'text-text-muted hover:text-text'}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div key={target} className="animate-screen">
                <SystemDiagram target={target} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Two audiences ---------------- */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Who it's for" title="Built for people who print - and places that print" />
            <div className="grid lg:grid-cols-2 gap-5">
              <Reveal variant="left" className="rounded-3xl border border-border bg-surface p-6 sm:p-8 flex flex-col">
                <span className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon name="user" className="w-6 h-6" />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold text-text">For individuals</h3>
                <p className="mt-2 text-text-muted">Students, travellers, job-seekers, anyone who needs a printout now.</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    ['phone', 'Print from any phone', 'Works in your browser'],
                    ['clock', 'No waiting at the counter', 'Your job goes straight to the printer'],
                    ['sliders', 'You control settings', 'Colour, pages, copies'],
                    ['trash', 'Private by default', 'Files deleted after printing'],
                  ].map(([icon, t, s]) => (
                    <li key={t} className="flex gap-3">
                      <Icon name={icon as IconName} className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="block text-sm font-bold text-text">{t}</span>
                        <span className="block text-sm text-text-muted">{s}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/how-it-works" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
                  Watch the walkthrough <Icon name="arrow" className="w-4 h-4" />
                </Link>
              </Reveal>

              <Reveal variant="right" className="relative overflow-hidden rounded-3xl bg-primary p-6 sm:p-8 text-white flex flex-col">
                <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
                <span className="relative w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <Icon name="building" className="w-6 h-6" />
                </span>
                <h3 className="relative mt-5 text-2xl font-extrabold">For businesses</h3>
                <p className="relative mt-2 text-white/80">Shops, institutions and locations that want to offer smart self-service printing.</p>
                <ul className="relative mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    ['printer', 'Use your own printer', 'Model 1 - no station needed'],
                    ['station', 'Or get a station', 'Models 2 & 3'],
                    ['wallet', 'Digital payments', 'No cash handling'],
                    ['wrench', 'Setup & support', 'Installation, updates, help'],
                  ].map(([icon, t, s]) => (
                    <li key={t} className="flex gap-3">
                      <Icon name={icon as IconName} className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="block text-sm font-bold">{t}</span>
                        <span className="block text-sm text-white/70">{s}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/for-businesses" className="relative mt-8 inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all">
                  Compare business models <Icon name="arrow" className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- Features ---------------- */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Platform" title="One platform behind every printout" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 60} className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                  <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={f.icon} />
                  </span>
                  <h3 className="mt-4 font-bold text-text">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-text-muted leading-relaxed">{f.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <Reveal variant="scale" className="max-w-6xl mx-auto relative overflow-hidden rounded-[2rem] bg-[#12291c] text-white p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
            <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-primary-light/30 blur-3xl" aria-hidden="true" />
            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05]">
                  Have a printer? Have a space?
                  <span className="block text-primary-light">Let&apos;s put MPRNT there.</span>
                </h2>
                <p className="mt-4 text-white/70 max-w-lg">
                  Tell us about your location and we&apos;ll recommend the right model, walk you through setup, and share commercial terms.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact?model=integration"
                  className="group inline-flex items-center justify-between gap-2 rounded-2xl bg-white text-[#12291c] px-6 py-4 font-bold hover:bg-white/90 transition-colors"
                >
                  Become a partner
                  <Icon name="arrow" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/for-businesses"
                  className="inline-flex items-center justify-between gap-2 rounded-2xl border border-white/20 px-6 py-4 font-semibold hover:bg-white/10 transition-colors"
                >
                  Find your model <Icon name="sparkle" className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
