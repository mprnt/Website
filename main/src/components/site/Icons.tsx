import type { SVGProps } from 'react';

// Small stroke icon set (24px grid) shared across the marketing pages.
const paths = {
  qr: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2zM16 16h2v2h-2z',
  upload: 'M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2',
  sliders: 'M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4',
  wallet: 'M3 7a2 2 0 012-2h13v4M3 7v10a2 2 0 002 2h15V9H5a2 2 0 01-2-2zm14 6h.01',
  printer: 'M6 9V3h12v6M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v7H6z',
  check: 'M5 13l4 4L19 7',
  arrow: 'M5 12h14m-6-6l6 6-6 6',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zm-3 9l2 2 4-4',
  bolt: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
  phone: 'M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zm3 17h2',
  store: 'M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6',
  station: 'M7 2h10a2 2 0 012 2v17H5V4a2 2 0 012-2zm1 4h8v5H8zm0 9h8M5 21h14',
  handshake: 'M2 12l4-4 4 2 3-2 4 1 5 3-5 5-3-2-3 2-4-2-5-3zm6 1l3 2m2-3l3 2',
  key: 'M15 7a4 4 0 11-3.9 4.9L4 19v2h3v-2h2v-2h2l1.1-1.1A4 4 0 0115 7zm1 2h.01',
  chart: 'M4 20V10m6 10V4m6 16v-7m4 7H2',
  wrench: 'M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z',
  cloud: 'M7 18a4 4 0 01-.9-7.9A6 6 0 0117.7 9 4.5 4.5 0 0117.5 18H7z',
  trash: 'M4 7h16M10 11v6m4-6v6M6 7l1 13h10l1-13M9 7V4h6v3',
  user: 'M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0',
  building: 'M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16m0-10h2a2 2 0 012 2v8M2 21h20M8 7h1m-1 4h1m-1 4h1m3-8h1m-1 4h1m-1 4h1',
  clock: 'M12 7v5l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z',
  wifi: 'M2 9a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0M12 19.5h.01',
  plug: 'M9 2v6m6-6v6M6 8h12v3a6 6 0 01-12 0V8zm6 9v5',
  paper: 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6m-6 4h6',
  play: 'M7 4l13 8-13 8z',
  pause: 'M7 4h3v16H7zm7 0h3v16h-3z',
  sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z',
  chevron: 'M6 9l6 6 6-6',
  layers: 'M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5M3 16l9 5 9-5',
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = 'w-5 h-5', ...rest }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const filled = name === 'play' || name === 'pause';
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <path d={paths[name]} />
    </svg>
  );
}
