'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon, type IconName } from './Icons';

export const DEMO_STEPS: { title: string; caption: string; icon: IconName }[] = [
  { title: 'Scan the QR', caption: 'Point your phone camera at the MPRNT QR at the shop or station.', icon: 'qr' },
  { title: 'Upload', caption: 'Pick a PDF or image straight from your phone - no app, no sign-up.', icon: 'upload' },
  { title: 'Choose settings', caption: 'Colour or B&W, copies, page range, paper size, orientation and sides. The price updates live.', icon: 'sliders' },
  { title: 'Review order', caption: 'Check your document, settings and total. Nothing changes once you pay.', icon: 'check' },
  { title: 'Pay', caption: 'UPI, card or wallet. You see the exact total before paying.', icon: 'wallet' },
  { title: 'Collect', caption: 'The printer starts instantly. Pick up your pages - files are auto-deleted.', icon: 'printer' },
];

// Shared demo order, so Settings and Review always agree.
const ORDER = [
  ['Colour', 'B&W'],
  ['Copies', '1'],
  ['Page range', 'All (12)'],
  ['Paper size', 'A4'],
  ['Orientation', 'Portrait'],
  ['Sides', 'Single'],
] as const;

function Segmented({ label, options, active = 0 }: { label: string; options: string[]; active?: number }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[10px] text-text-muted">{label}</span>
      <div className="flex p-0.5 rounded-md bg-surface-secondary border border-border">
        {options.map((o, i) => (
          <span
            key={o}
            className={`px-1.5 py-0.5 rounded text-[9px] font-semibold ${i === active ? 'bg-primary text-white' : 'text-text-muted'}`}
          >
            {o}
          </span>
        ))}
      </div>
    </div>
  );
}

const STEP_MS = 3400;

function Screen({ step }: { step: number }) {
  switch (step) {
    case 0:
      return (
        <div className="h-full flex flex-col">
          <div className="text-[10px] font-semibold text-text-muted text-center mb-2">Camera</div>
          <div className="relative flex-1 rounded-xl bg-[#101512] overflow-hidden flex items-center justify-center">
            <div className="relative w-28 h-28 bg-white rounded-md p-2">
              <QrGlyph />
              <div className="absolute inset-x-1 top-1 h-[calc(100%-8px)] pointer-events-none">
                <div className="animate-scan h-0.5 bg-primary-light shadow-[0_0_12px_rgb(var(--color-primary-light))]" />
              </div>
            </div>
            {['top-3 left-3 border-t-2 border-l-2', 'top-3 right-3 border-t-2 border-r-2', 'bottom-3 left-3 border-b-2 border-l-2', 'bottom-3 right-3 border-b-2 border-r-2'].map((c) => (
              <span key={c} className={`absolute w-5 h-5 border-white/80 rounded-sm ${c}`} />
            ))}
          </div>
          <div className="mt-2 text-center text-[10px] text-text-muted">Secure session · Station M001</div>
        </div>
      );
    case 1:
      return (
        <div className="h-full flex flex-col gap-2">
          <div className="text-xs font-bold text-text">Upload document</div>
          <div className="rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 flex flex-col items-center justify-center py-5">
            <Icon name="upload" className="w-6 h-6 text-primary" />
            <div className="text-[10px] text-text-muted mt-1">PDF, PNG or JPG</div>
          </div>
          <div className="rounded-xl bg-surface-secondary border border-border p-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-9 rounded bg-error/15 text-error text-[8px] font-black flex items-center justify-center">PDF</div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-text truncate">Assignment_final.pdf</div>
                <div className="text-[9px] text-text-muted">12 pages · 1.8 MB</div>
              </div>
              <Icon name="check" className="w-4 h-4 text-success" />
            </div>
            <div className="mt-2 h-1 rounded-full bg-border overflow-hidden">
              <div className="h-full bg-primary origin-left" style={{ animation: 'progress-fill 1.6s ease-out both' }} />
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="h-full flex flex-col gap-2">
          <div className="text-xs font-bold text-text">Print settings</div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-lg border-2 border-primary bg-primary/10 px-2 py-1.5 flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-text flex-shrink-0" />
              <span>
                <span className="block text-[10px] font-semibold text-text leading-tight">B&amp;W</span>
                <span className="block text-[9px] text-text-muted">₹2 / page</span>
              </span>
            </div>
            <div className="rounded-lg border border-border px-2 py-1.5 flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-accent via-error to-primary flex-shrink-0" />
              <span>
                <span className="block text-[10px] font-semibold text-text leading-tight">Colour</span>
                <span className="block text-[9px] text-text-muted">₹5 / page</span>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] text-text-muted">Copies</span>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-md border border-border text-text-muted text-[11px] flex items-center justify-center">-</span>
              <span className="text-[11px] font-bold text-text w-3 text-center">1</span>
              <span className="w-5 h-5 rounded-md border border-border text-text text-[11px] flex items-center justify-center">+</span>
            </div>
          </div>
          <Segmented label="Page range" options={['All (12)', 'Custom']} />
          <Segmented label="Paper size" options={['A4', 'Letter']} />
          <Segmented label="Orientation" options={['Portrait', 'Landscape']} />
          <Segmented label="Sides" options={['Single', 'Double']} />
          <div className="mt-auto flex items-center justify-between rounded-lg bg-primary/10 px-2.5 py-2">
            <span>
              <span className="block text-[9px] text-text-muted">Estimated cost</span>
              <span className="block text-[9px] text-text-muted">12 pages · ₹2/page</span>
            </span>
            <span className="text-sm font-black text-primary">₹24</span>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="h-full flex flex-col gap-2">
          <div className="text-xs font-bold text-text">Review &amp; confirm</div>
          <div className="flex items-center gap-2 rounded-lg bg-surface-secondary border border-border p-2">
            <div className="w-6 h-8 rounded bg-error/15 text-error text-[7px] font-black flex items-center justify-center">PDF</div>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold text-text truncate">Assignment_final.pdf</div>
              <div className="text-[9px] text-text-muted">12 pages · 1.8 MB</div>
            </div>
          </div>
          <div className="rounded-lg bg-surface-secondary border border-border px-2.5 py-1.5">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[10px] font-bold text-text">Print settings</span>
              <span className="text-[9px] font-semibold text-primary">Change</span>
            </div>
            {ORDER.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between py-[3px] border-t border-border/60 first-of-type:border-t-0">
                <span className="text-[9px] text-text-muted">{k}</span>
                <span className="text-[9px] font-semibold text-text">{v}</span>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-primary/10 px-2.5 py-1.5">
            <div className="flex justify-between text-[9px] text-text-muted">
              <span>₹2 × 12 pages × 1 copy</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-text">Total</span>
              <span className="text-sm font-black text-primary">₹24</span>
            </div>
          </div>
          <div className="mt-auto rounded-lg bg-primary text-white text-[11px] font-bold text-center py-2.5 flex items-center justify-center gap-1.5">
            Proceed to payment · ₹24 <Icon name="arrow" className="w-3.5 h-3.5" />
          </div>
        </div>
      );
    case 4:
      return (
        <div className="h-full flex flex-col gap-2">
          <div className="text-xs font-bold text-text">Pay ₹24</div>
          {[
            ['UPI', 'GPay · PhonePe · Paytm', true],
            ['Card', 'Debit / credit', false],
            ['Wallet', 'Saved wallets', false],
          ].map(([k, v, on]) => (
            <div
              key={k as string}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-2 border ${on ? 'border-primary bg-primary/10' : 'border-border bg-surface-secondary'}`}
            >
              <span className={`w-3 h-3 rounded-full border-2 ${on ? 'border-primary bg-primary' : 'border-border'}`} />
              <div>
                <div className="text-[11px] font-semibold text-text">{k}</div>
                <div className="text-[9px] text-text-muted">{v}</div>
              </div>
            </div>
          ))}
          <div className="mt-auto rounded-lg bg-primary text-white text-[11px] font-bold text-center py-2.5 flex items-center justify-center gap-1.5">
            <Icon name="shield" className="w-3.5 h-3.5" /> Pay securely
          </div>
        </div>
      );
    default:
      return (
        <div className="h-full flex flex-col items-center justify-center text-center">
          <div className="relative w-24 h-20">
            <div className="absolute inset-x-3 top-0 h-6 rounded-t-md bg-border" />
            <div className="absolute inset-x-0 top-5 h-10 rounded-lg bg-text/80" />
            <div className="absolute left-5 right-5 top-12 h-12 overflow-hidden">
              <div className="animate-paper h-full rounded-sm bg-white border border-border shadow-sm p-1.5 space-y-1">
                <div className="h-0.5 bg-border rounded" />
                <div className="h-0.5 bg-border rounded w-3/4" />
                <div className="h-0.5 bg-border rounded w-5/6" />
              </div>
            </div>
          </div>
          <div className="mt-6 text-xs font-bold text-text">Printing…</div>
          <div className="text-[10px] text-text-muted">Page 7 of 12</div>
          <div className="w-full mt-3 h-1.5 rounded-full bg-border overflow-hidden">
            <div className="h-full bg-success origin-left" style={{ animation: 'progress-fill 3s ease-in-out both' }} />
          </div>
          <div className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-success">
            <Icon name="trash" className="w-3 h-3" /> File deleted after printing
          </div>
        </div>
      );
  }
}

export function QrGlyph({ className = 'w-full h-full' }: { className?: string }) {
  // Deterministic pseudo-QR so server and client render the same markup.
  const cells = Array.from({ length: 121 }, (_, i) => {
    const x = i % 11;
    const y = Math.floor(i / 11);
    const finder = (cx: number, cy: number) => x >= cx && x < cx + 3 && y >= cy && y < cy + 3;
    if (finder(0, 0) || finder(8, 0) || finder(0, 8)) return true;
    return (x * 7 + y * 13 + x * y) % 5 < 2;
  });
  return (
    <svg viewBox="0 0 11 11" className={className} shapeRendering="crispEdges" aria-hidden="true">
      {cells.map((on, i) => (on ? <rect key={i} x={i % 11} y={Math.floor(i / 11)} width="1" height="1" fill="#111" /> : null))}
    </svg>
  );
}

interface PhoneDemoProps {
  withSteps?: boolean;
  className?: string;
}

// An auto-playing, pausable product walkthrough - the site's "video".
export function PhoneDemo({ withSteps = false, className = '' }: PhoneDemoProps) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [onScreen, setOnScreen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !onScreen) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      progressRef.current += (now - last) / STEP_MS;
      last = now;
      if (progressRef.current >= 1) {
        progressRef.current = 0;
        setStep((s) => (s + 1) % DEMO_STEPS.length);
      }
      setProgress(progressRef.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, onScreen]);

  const goTo = (i: number) => {
    setStep(i);
    progressRef.current = 0;
    setProgress(0);
  };

  const phone = (
    <div className="relative mx-auto w-[244px] sm:w-[260px]">
      <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full" aria-hidden="true" />
      <div className="relative rounded-[2.4rem] bg-[#1b1f1c] p-2.5 shadow-2xl shadow-primary/20 ring-1 ring-white/10">
        <div className="relative rounded-[1.9rem] bg-surface overflow-hidden h-[480px] sm:h-[500px] flex flex-col">
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-semibold text-text">
            <span>9:41</span>
            <span className="w-16 h-4 rounded-full bg-[#1b1f1c] absolute left-1/2 -translate-x-1/2 top-2" />
            <span className="flex gap-1 items-center">
              <Icon name="wifi" className="w-3 h-3" />
            </span>
          </div>
          <div className="px-4 pt-2 pb-2 flex items-center gap-1.5 border-b border-border/60">
            <span className="w-5 h-5 rounded-md bg-primary text-white flex items-center justify-center">
              <Icon name="printer" className="w-3 h-3" />
            </span>
            <span className="text-[11px] font-bold text-text">MPRNT</span>
            <span className="ml-auto text-[9px] text-text-muted">Step {step + 1}/{DEMO_STEPS.length}</span>
          </div>
          <div key={step} className="animate-screen flex-1 p-4">
            <Screen step={step} />
          </div>
          <div className="flex gap-1 px-4 pb-4">
            {DEMO_STEPS.map((_, i) => (
              <div key={i} className="h-1 flex-1 rounded-full bg-border overflow-hidden">
                <div
                  className="h-full bg-primary origin-left"
                  style={{ transform: `scaleX(${i < step ? 1 : i === step ? progress : 0})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-surface border border-border shadow-lg px-3.5 py-1.5 text-xs font-semibold text-text hover:border-primary/50 transition-colors"
        aria-label={playing ? 'Pause walkthrough' : 'Play walkthrough'}
      >
        <Icon name={playing ? 'pause' : 'play'} className="w-3 h-3 text-primary" />
        {playing ? 'Pause' : 'Play'} demo
      </button>
    </div>
  );

  if (!withSteps) {
    return (
      <div ref={rootRef} className={className}>
        {phone}
      </div>
    );
  }

  return (
    <div ref={rootRef} className={`grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center ${className}`}>
      <ol className="space-y-2 order-2 lg:order-1">
        {DEMO_STEPS.map((s, i) => {
          const active = i === step;
          return (
            <li key={s.title}>
              <button
                type="button"
                onClick={() => goTo(i)}
                className={`w-full text-left flex gap-4 rounded-2xl p-4 sm:p-5 border transition-all ${
                  active ? 'bg-surface border-primary/40 shadow-lg shadow-primary/5' : 'border-transparent hover:bg-surface/60'
                }`}
              >
                <span
                  className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                    active ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                  }`}
                >
                  <Icon name={s.icon} className="w-5 h-5" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-bold text-text-muted">0{i + 1}</span>
                    <span className="font-bold text-text">{s.title}</span>
                  </span>
                  <span className={`block text-sm text-text-muted leading-relaxed transition-all ${active ? 'mt-1 max-h-24 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {s.caption}
                  </span>
                  {active && (
                    <span className="block mt-3 h-0.5 rounded-full bg-border overflow-hidden">
                      <span className="block h-full bg-primary origin-left" style={{ transform: `scaleX(${progress})` }} />
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="order-1 lg:order-2 pb-6">{phone}</div>
    </div>
  );
}
