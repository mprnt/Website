import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

// Social preview image used by Open Graph and Twitter cards (1200x630).
export const alt = 'MPRNT - Print from your phone. Earn from your printer.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #015037 0%, #0a7a56 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: 6, opacity: 0.85 }}>{SITE.name}</div>
        <div style={{ marginTop: 28, fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>Print from your phone.</div>
        <div style={{ marginTop: 10, fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>Earn from your printer.</div>
        <div style={{ marginTop: 36, fontSize: 32, opacity: 0.85 }}>{`QR-based smart printing · ${SITE.domain}`}</div>
      </div>
    ),
    size,
  );
}
