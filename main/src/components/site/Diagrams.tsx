import { Fragment } from 'react';
import { Icon, type IconName } from './Icons';
import type { ModelId } from '@/lib/models';

export interface FlowNode {
  icon: IconName;
  label: string;
  sub?: string;
  tone?: 'primary' | 'accent' | 'muted';
}

// Responsive animated flow: vertical stack on phones, single row from md up.
export function FlowDiagram({ nodes, className = '' }: { nodes: FlowNode[]; className?: string }) {
  const tones = {
    primary: 'bg-primary text-white shadow-lg shadow-primary/25',
    accent: 'bg-accent/15 text-accent ring-1 ring-accent/30',
    muted: 'bg-primary/10 text-primary ring-1 ring-primary/20',
  };
  return (
    <div className={`flex flex-col md:flex-row md:items-start items-center ${className}`}>
      {nodes.map((n, i) => (
        <Fragment key={n.label}>
          <div className="flex md:flex-col items-center md:text-center gap-3 md:gap-0 w-full max-w-[280px] md:max-w-none md:w-auto md:flex-1">
            <div className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center ${tones[n.tone ?? 'muted']}`}>
              <Icon name={n.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="md:mt-3">
              <div className="text-sm font-bold text-text leading-tight">{n.label}</div>
              {n.sub && <div className="text-xs text-text-muted mt-0.5 leading-snug">{n.sub}</div>}
            </div>
          </div>
          {i < nodes.length - 1 && (
            <>
              <div className="md:hidden w-full max-w-[280px] flex">
                <div className="flow-connector-y w-0.5 h-7 ml-7 sm:ml-8 opacity-60" />
              </div>
              <div className="hidden md:block flex-shrink-0 w-6 lg:w-10 mt-8 h-0.5 flow-connector opacity-60 rounded" />
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
}

// The end-to-end system, as described in the brief: customer → MPRNT → printer.
export function SystemDiagram({ target = 'printer' }: { target?: 'printer' | 'station' }) {
  return (
    <FlowDiagram
      nodes={[
        { icon: 'phone', label: 'Customer phone', sub: 'Scan · upload · pay', tone: 'muted' },
        { icon: 'cloud', label: 'MPRNT platform', sub: 'Secure job + payment', tone: 'primary' },
        target === 'printer'
          ? { icon: 'layers', label: 'MPRNT integration', sub: 'Connects your printer', tone: 'muted' }
          : { icon: 'station', label: 'MPRNT Station', sub: 'Dedicated smart setup', tone: 'muted' },
        { icon: 'printer', label: target === 'printer' ? 'Shop printer' : 'Station printer', sub: 'Prints instantly', tone: 'muted' },
        { icon: 'paper', label: 'Printed document', sub: 'File auto-deleted', tone: 'accent' },
      ]}
    />
  );
}

/* -------------------------------------------------------------------------
   Model illustrations - flat SVG scenes, theme-aware via currentColor + tokens
   ------------------------------------------------------------------------- */

const P = 'rgb(var(--color-primary))';
const PL = 'rgb(var(--color-primary-light))';
const A = 'rgb(var(--color-accent))';
const S = 'rgb(var(--color-surface))';
const S2 = 'rgb(var(--color-surface-secondary))';
const B = 'rgb(var(--color-border))';
const T = 'rgb(var(--color-text))';

function Paper({ x, y }: { x: number; y: number }) {
  return (
    <g className="animate-paper" style={{ transformBox: 'fill-box' }}>
      <rect x={x} y={y} width="44" height="30" rx="2" fill="#fff" stroke={B} />
      <rect x={x + 6} y={y + 7} width="28" height="2.5" rx="1" fill={B} />
      <rect x={x + 6} y={y + 13} width="20" height="2.5" rx="1" fill={B} />
      <rect x={x + 6} y={y + 19} width="24" height="2.5" rx="1" fill={B} />
    </g>
  );
}

function MiniQr({ x, y, s = 22 }: { x: number; y: number; s?: number }) {
  const c = s / 5;
  const on = [0, 1, 2, 4, 5, 7, 10, 12, 13, 14, 16, 18, 20, 22, 23, 24];
  return (
    <g>
      <rect x={x - 3} y={y - 3} width={s + 6} height={s + 6} rx="3" fill="#fff" stroke={B} />
      {on.map((i) => (
        <rect key={i} x={x + (i % 5) * c} y={y + Math.floor(i / 5) * c} width={c} height={c} fill="#111" />
      ))}
    </g>
  );
}

function Station({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width="96" height="168" rx="14" fill={S2} stroke={B} strokeWidth="1.5" />
      <rect x={x} y={y} width="96" height="26" rx="14" fill={P} />
      <rect x={x} y={y + 14} width="96" height="12" fill={P} />
      <text x={x + 48} y={y + 18} textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff" letterSpacing="1.5">
        MPRNT
      </text>
      <rect x={x + 14} y={y + 38} width="68" height="50" rx="6" fill={S} stroke={B} />
      <MiniQr x={x + 37} y={y + 50} s={22} />
      <rect x={x + 14} y={y + 100} width="68" height="10" rx="5" fill={T} opacity="0.85" />
      <rect x={x + 22} y={y + 108} width="52" height="4" fill={T} opacity="0.4" />
      <svg x={x + 26} y={y + 112} width="44" height="36" overflow="hidden">
        <Paper x={0} y={0} />
      </svg>
      <rect x={x + 10} y={y + 168} width="76" height="6" rx="3" fill={B} />
    </g>
  );
}

export function ModelArt({ model, className = '' }: { model: ModelId; className?: string }) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label={`Illustration of model ${model}`}>
      <defs>
        <radialGradient id={`glow-${model}`} cx="50%" cy="55%" r="60%">
          <stop offset="0%" stopColor={PL} stopOpacity="0.28" />
          <stop offset="100%" stopColor={PL} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="220" fill={`url(#glow-${model})`} />
      <rect x="20" y="200" width="280" height="2" rx="1" fill={B} />

      {model === 'integration' && (
        <g>
          {/* Shop counter with existing printer */}
          <rect x="40" y="140" width="200" height="60" rx="6" fill={S2} stroke={B} />
          <rect x="40" y="140" width="200" height="8" rx="4" fill={B} />
          <g className="animate-float-slow">
            <rect x="80" y="84" width="110" height="56" rx="10" fill={T} opacity="0.88" />
            <rect x="92" y="70" width="86" height="18" rx="5" fill={B} />
            <rect x="96" y="120" width="78" height="5" rx="2" fill="#000" opacity="0.35" />
            <circle cx="176" cy="100" r="3" fill={PL} />
            <svg x="113" y="124" width="44" height="34" overflow="hidden">
              <Paper x={0} y={0} />
            </svg>
          </g>
          {/* MPRNT integration module */}
          <g>
            <rect x="214" y="100" width="56" height="40" rx="8" fill={P} />
            <text x="242" y="124" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff" letterSpacing="1">MPRNT</text>
            <circle cx="262" cy="108" r="2.5" fill="#fff" />
            <circle cx="262" cy="108" r="6" fill="none" stroke="#fff" className="animate-ping-ring" />
            <path d="M214 120 H190" stroke={P} strokeWidth="2" className="flow-line" />
          </g>
          {/* QR stand */}
          <g className="animate-float">
            <MiniQr x={52} y={104} s={24} />
            <rect x="55" y="134" width="24" height="6" rx="2" fill={B} />
          </g>
          <text x="160" y="40" textAnchor="middle" fontSize="11" fontWeight="700" fill={T} opacity="0.7">Your printer + MPRNT</text>
        </g>
      )}

      {model === 'revenue-share' && (
        <g>
          <g className="animate-float-slow">
            <Station x={40} y={24} />
          </g>
          {/* Revenue split */}
          <g transform="translate(176 52)">
            <rect width="118" height="112" rx="14" fill={S} stroke={B} />
            <text x="59" y="22" textAnchor="middle" fontSize="9" fontWeight="700" fill={T} opacity="0.7">Printing revenue</text>
            {/* Deliberately not to scale - the split is set per agreement */}
            <path d="M59 34 A28 28 0 0 1 59 90" stroke={P} strokeWidth="12" fill="none" />
            <path d="M59 90 A28 28 0 0 1 59 34" stroke={A} strokeWidth="12" fill="none" strokeDasharray="4 3" />
            <text x="59" y="60" textAnchor="middle" fontSize="11" fontWeight="800" fill={T}>%</text>
            <text x="59" y="71" textAnchor="middle" fontSize="6.5" fill={T} opacity="0.6">agreed</text>
            <rect x="14" y="98" width="8" height="8" rx="2" fill={A} />
            <text x="26" y="105" fontSize="8" fill={T}>You</text>
            <rect x="60" y="98" width="8" height="8" rx="2" fill={P} />
            <text x="72" y="105" fontSize="8" fill={T}>MPRNT</text>
          </g>
          <path d="M140 110 H176" stroke={P} strokeWidth="2" className="flow-line" />
        </g>
      )}

      {model === 'own-station' && (
        <g>
          <g className="animate-float-slow">
            <Station x={112} y={24} />
          </g>
          {/* Badges: position on the outer <g>, animation on the inner one -
              a CSS transform would otherwise override the translate attribute. */}
          <g transform="translate(214 56)">
            <g className="animate-float">
              <rect width="94" height="44" rx="10" fill={S} stroke={B} />
              <circle cx="20" cy="22" r="10" fill={A} opacity="0.2" />
              <path d="M16 22a4 4 0 118 0 4 4 0 01-8 0zm7 0h10v5" stroke={A} strokeWidth="2" fill="none" strokeLinecap="round" />
              <text x="38" y="20" fontSize="8" fontWeight="700" fill={T}>Yours</text>
              <text x="38" y="31" fontSize="7" fill={T} opacity="0.6">100% revenue</text>
            </g>
          </g>
          <g transform="translate(10 120)">
            <g className="animate-float-slow">
              <rect width="96" height="44" rx="10" fill={S} stroke={B} />
              <circle cx="20" cy="22" r="10" fill={P} opacity="0.15" />
              <path d="M15 22l3 3 6-6" stroke={P} strokeWidth="2" fill="none" strokeLinecap="round" />
              <text x="36" y="20" fontSize="8" fontWeight="700" fill={T}>MPRNT</text>
              <text x="36" y="31" fontSize="7" fill={T} opacity="0.6">support + SaaS</text>
            </g>
          </g>
        </g>
      )}

      {model === 'full-purchase' && (
        <g>
          <g className="animate-float-slow">
            <Station x={40} y={24} />
          </g>
          {/* Exploded parts list */}
          {[
            ['Structure', 0],
            ['Printer', 1],
            ['Electronics', 2],
            ['Integration', 3],
            ['Software', 4],
          ].map(([label, i]) => (
            <g key={label as string} transform={`translate(176 ${30 + (i as number) * 30})`}>
              <rect width="120" height="24" rx="8" fill={S} stroke={B} />
              <circle cx="14" cy="12" r="6" fill={i === 4 ? P : A} opacity={i === 4 ? 1 : 0.9} />
              <path d="M11 12l2 2 4-4" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <text x="28" y="16" fontSize="9" fontWeight="600" fill={T}>{label}</text>
            </g>
          ))}
          <path d="M140 100 H176" stroke={P} strokeWidth="2" className="flow-line" />
        </g>
      )}
    </svg>
  );
}

// "Spectrum" showing how the models trade upfront investment for ownership.
export function ModelSpectrum() {
  const points = [
    { n: '1', label: 'Integration', sub: 'Your printer' },
    { n: '2A', label: 'Revenue share', sub: 'We run it' },
    { n: '2B', label: 'Own station', sub: 'We support' },
    { n: '3', label: 'Full purchase', sub: 'You run it' },
  ];
  return (
    <div className="relative">
      <div className="flex justify-between text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-muted mb-4">
        <span>Least setup</span>
        <span>Most ownership</span>
      </div>
      <div className="relative h-2 rounded-full bg-gradient-to-r from-primary/20 via-primary/60 to-primary">
        <div className="absolute inset-0 flow-connector opacity-30 rounded-full" />
      </div>
      <div className="grid grid-cols-4 -mt-[22px]">
        {points.map((p) => (
          <div key={p.n} className="flex flex-col items-center text-center">
            <span className="w-9 h-9 rounded-full bg-surface border-2 border-primary text-primary font-black text-sm flex items-center justify-center shadow-md">
              {p.n}
            </span>
            <span className="mt-2 text-xs sm:text-sm font-bold text-text leading-tight">{p.label}</span>
            <span className="text-[10px] sm:text-xs text-text-muted">{p.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
