'use client';

import Link from 'next/link';
import { useState } from 'react';
import { COMPARISON, MODELS, getModel, type ModelId } from '@/lib/models';
import { ModelArt } from './Diagrams';
import { Icon } from './Icons';

function Bullet({ children, tone = 'primary' }: { children: React.ReactNode; tone?: 'primary' | 'accent' }) {
  return (
    <li className="flex gap-2.5 text-sm text-text leading-snug">
      <span
        className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
          tone === 'primary' ? 'bg-primary/15 text-primary' : 'bg-accent/15 text-accent'
        }`}
      >
        <Icon name="check" className="w-2.5 h-2.5" strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}

function Journey({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:items-center">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-3 py-1.5 text-xs sm:text-sm font-medium text-text">
            <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
            {s}
          </span>
          {i < steps.length - 1 && <Icon name="arrow" className="hidden sm:block w-4 h-4 text-primary/60" />}
        </li>
      ))}
    </ol>
  );
}

export function ModelDetail({ id }: { id: ModelId }) {
  const m = getModel(id);
  return (
    <div key={id} className="animate-screen grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-6 lg:gap-10 items-start">
      <div className="rounded-3xl bg-surface-secondary border border-border overflow-hidden">
        <div className="bg-grid">
          <ModelArt model={id} className="w-full h-auto max-h-72 lg:max-h-none mx-auto" />
        </div>
        <div className="p-5 sm:p-6 border-t border-border">
          <div className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">Who owns what</div>
          <dl className="space-y-2">
            {m.ownership.map((o) => (
              <div key={o.label} className="flex items-center justify-between gap-4 text-sm">
                <dt className="text-text-muted">{o.label}</dt>
                <dd
                  className={`font-semibold text-right ${
                    o.owner.startsWith('You') ? 'text-accent' : o.owner === 'Shared' ? 'text-text' : 'text-primary'
                  }`}
                >
                  {o.owner}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="rounded-full bg-primary text-white text-xs font-bold px-3 py-1">{m.label}</span>
          <span className="rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">{m.family}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">{m.name}</h3>
        <p className="mt-1 text-primary font-semibold">{m.tagline}</p>
        <p className="mt-3 text-text-muted leading-relaxed">{m.summary}</p>

        <div className="mt-6">
          <Journey steps={m.journey} />
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="store" className="w-4 h-4 text-accent" />
                <span className="text-sm font-bold text-text">You provide</span>
              </div>
              <ul className="space-y-2">
                {m.youProvide.map((x) => (
                  <Bullet key={x} tone="accent">
                    {x}
                  </Bullet>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="sparkle" className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-text">MPRNT provides</span>
              </div>
              <ul className="space-y-2">
                {m.mprntProvides.map((x) => (
                  <Bullet key={x}>{x}</Bullet>
                ))}
              </ul>
            </div>
          </div>

        <div className="mt-5 flex gap-3 rounded-2xl bg-surface border border-border p-4">
          <Icon name="chart" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-text leading-relaxed">{m.revenue}</p>
        </div>

        <div className="mt-5">
          <div className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Best for</div>
          <div className="flex flex-wrap gap-2">
            {m.bestFor.map((b) => (
              <span key={b} className="rounded-lg bg-surface-secondary border border-border px-2.5 py-1 text-xs font-medium text-text">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link
            href={`/contact?model=${m.id}`}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
          >
            Enquire about {m.label}
            <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ComparisonTable() {
  return (
    <div>
      <p className="md:hidden text-xs text-text-muted mb-3 flex items-center gap-1">
        <Icon name="arrow" className="w-3.5 h-3.5" /> Swipe to compare all models
      </p>
      <div className="overflow-x-auto no-scrollbar rounded-2xl border border-border bg-surface">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="bg-surface-secondary">
              <th className="sticky left-0 z-10 bg-surface-secondary text-left p-4 w-40" />
              <th className="p-4 text-left align-bottom border-l border-border" colSpan={1}>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-primary">Model 1</span>
                <span className="font-extrabold text-text">Printer Integration</span>
              </th>
              <th className="p-4 text-left align-bottom border-l border-border bg-primary/5" colSpan={2}>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-primary">Model 2 · MPRNT Station</span>
                <span className="grid grid-cols-2 gap-4 font-extrabold text-text">
                  <span>Option A · Revenue share</span>
                  <span>Option B · Purchase + SaaS</span>
                </span>
              </th>
              <th className="p-4 text-left align-bottom border-l border-border">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-primary">Model 3</span>
                <span className="font-extrabold text-text">Full Purchase</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row, r) => (
              <tr key={row.label} className={r % 2 ? 'bg-surface-secondary/50' : ''}>
                <th scope="row" className={`sticky left-0 z-10 text-left p-4 font-semibold text-text-muted ${r % 2 ? 'bg-surface-secondary' : 'bg-surface'}`}>
                  {row.label}
                </th>
                {MODELS.map((m) => {
                  const v = row.values[m.id];
                  const strong = v.startsWith('100%') || v === 'Not required';
                  return (
                    <td key={m.id} className={`p-4 border-l border-border ${m.id === 'revenue-share' || m.id === 'own-station' ? 'bg-primary/[0.03]' : ''}`}>
                      <span className={strong ? 'font-bold text-primary' : 'text-text'}>{v}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-text-muted leading-relaxed">
        Pricing, subscription, maintenance, revenue-sharing percentage, hardware specifications and support terms vary by model and are defined
        in the applicable commercial agreement.
      </p>
    </div>
  );
}

type Answer = ModelId | 'q1' | 'q2' | 'q3';

const QUESTIONS: Record<'q1' | 'q2' | 'q3', { q: string; options: { label: string; hint: string; next: Answer }[] }> = {
  q1: {
    q: 'Do you already have a printer you’d like to use?',
    options: [
      { label: 'Yes, I have a printer', hint: 'Shop, café, office, library…', next: 'integration' },
      { label: 'No, I want a dedicated station', hint: 'A complete smart printing setup', next: 'q2' },
    ],
  },
  q2: {
    q: 'Would you like to buy the station?',
    options: [
      { label: 'No - I’ll provide the space', hint: 'MPRNT installs, runs and maintains it', next: 'revenue-share' },
      { label: 'Yes, I want to own it', hint: 'Keep 100% of printing revenue', next: 'q3' },
    ],
  },
  q3: {
    q: 'How hands-on should MPRNT be after setup?',
    options: [
      { label: 'Keep helping us operate', hint: 'Maintenance, promotion & operational assistance', next: 'own-station' },
      { label: 'We’ll run it independently', hint: 'Full purchase incl. printer; support as agreed', next: 'full-purchase' },
    ],
  },
};

export function ModelFinder() {
  const [path, setPath] = useState<Answer[]>([]);
  const current = path[path.length - 1] ?? 'q1';
  const isResult = current !== 'q1' && current !== 'q2' && current !== 'q3';
  const stepNo = path.length + 1;

  return (
    <div className="rounded-3xl border border-border bg-surface p-5 sm:p-8 shadow-xl shadow-primary/5">
      <div className="flex items-center justify-between mb-5">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <Icon name="sparkle" className="w-4 h-4" /> Model finder
        </span>
        {path.length > 0 && (
          <button onClick={() => setPath([])} className="text-xs font-semibold text-text-muted hover:text-primary">
            Start over
          </button>
        )}
      </div>

      {!isResult ? (
        <div key={current} className="animate-screen">
          <div className="text-xs text-text-muted mb-1">Question {stepNo}</div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-text mb-5">{QUESTIONS[current as 'q1'].q}</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {QUESTIONS[current as 'q1'].options.map((o) => (
              <button
                key={o.label}
                onClick={() => setPath((p) => [...p, o.next])}
                className="group text-left rounded-2xl border border-border bg-surface-secondary p-4 sm:p-5 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <span className="flex items-center justify-between font-bold text-text">
                  {o.label}
                  <Icon name="arrow" className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="block mt-1 text-sm text-text-muted">{o.hint}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div key={current} className="animate-screen">
          <div className="text-xs text-text-muted mb-1">Your best fit</div>
          {(() => {
            const m = getModel(current as ModelId);
            return (
              <div className="grid sm:grid-cols-[160px_1fr] gap-5 items-center">
                <div className="rounded-2xl bg-surface-secondary border border-border">
                  <ModelArt model={m.id} className="w-full h-auto" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-text">
                    {m.label}: {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{m.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={`#${m.anchor}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                    >
                      See details <Icon name="chevron" className="w-4 h-4" />
                    </a>
                    <Link
                      href={`/contact?model=${m.id}`}
                      className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-text hover:border-primary/50 transition-colors"
                    >
                      Talk to us
                    </Link>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
