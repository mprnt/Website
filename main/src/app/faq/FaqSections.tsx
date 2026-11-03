'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/site/Icons';
import { Reveal } from '@/components/site/Reveal';
import { CATEGORIES, type Faq } from '@/lib/faq';

function Item({ faq, open, onToggle }: { faq: Faq; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <h3>
        <button
          onClick={onToggle}
          aria-expanded={open}
          className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        >
          <span className={`font-semibold transition-colors ${open ? 'text-primary' : 'text-text group-hover:text-primary'}`}>
            {faq.q}
          </span>
          <span
            className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
              open ? 'bg-primary text-white rotate-180' : 'bg-surface-secondary text-text-muted group-hover:text-primary'
            }`}
          >
            <Icon name="chevron" className="w-3.5 h-3.5" />
          </span>
        </button>
      </h3>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-5 pr-10">
            <p className="text-text-muted leading-relaxed">{faq.a}</p>
            {faq.link && (
              <Link
                href={faq.link.href}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                {faq.link.label}
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqSections() {
  // One question open at a time, keyed by "<category>-<index>".
  const [openKey, setOpenKey] = useState<string | null>('getting-started-0');

  return (
    <>
      {/* Jump links */}
      <Reveal className="mb-12 sm:mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon name={c.icon} className="w-5 h-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-text leading-tight">{c.title}</span>
                <span className="block text-sm text-text-muted leading-snug mt-0.5">{c.blurb}</span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <div className="space-y-12 sm:space-y-16">
        {CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <Reveal>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon name={category.icon} className="w-5 h-5" />
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">{category.title}</h2>
              </div>
              <div className="rounded-2xl border border-border bg-surface px-5 sm:px-6 mt-5">
                {category.faqs.map((faq, i) => {
                  const key = `${category.id}-${i}`;
                  return (
                    <Item
                      key={faq.q}
                      faq={faq}
                      open={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  );
                })}
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </>
  );
}
