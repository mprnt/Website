# MPRNT Web (marketing site)

Public marketing site for MPRNT: explains QR printing for customers and sells the four business models to shop owners. It is **not** the printing flow: customers print in the separate `mprnt-qr` app, and all data lives in `mprnt-backend`.

Stack: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS.

## Run it

```bash
cd main
cp .env.example .env.local   # then edit the values
npm install
npm run dev                  # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build / serve it |
| `npm run lint` | ESLint (`next/core-web-vitals`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Unit tests with Node's built-in runner (`tests/*.test.ts`, needs Node 22.18+ for TypeScript) |

## Environment variables

| Name | Required | Used for |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Yes, for the contact form | Base URL of the backend API including `/api/v1`. The contact form POSTs to `${NEXT_PUBLIC_API_URL}/public/leads`. Its origin is also allowed in the Content-Security-Policy `connect-src`. Without it the form shows "not configured". |
| `NEXT_PUBLIC_SITE_URL` | Recommended in production | Public URL of this site, for canonical links, `sitemap.xml` and `robots.txt`. Defaults to `https://mprint.co`. |

Both are read at **build time**; rebuild after changing them. The backend must list this site's origin in its `CORS_ORIGIN`.

## Routes

| Path | Page |
|---|---|
| `/` | Home: phone demo, system diagram, business models |
| `/how-it-works` | Customer printing steps |
| `/for-businesses` | The four business models and comparison table (`#model-1`, `#model-2a`, `#model-2b`, `#model-3`, `#compare`) |
| `/contact` | Contact / business enquiry form (`?model=<id>` preselects a model) |
| `/faq`, `/help` | FAQ and help center |
| `/privacy`, `/terms` | Legal pages |
| `/sitemap.xml`, `/robots.txt` | Generated from `src/app/sitemap.ts` and `src/app/robots.ts` |

## Where content lives

| File | Single source for |
|---|---|
| `src/lib/models.ts` | Business models and the comparison table (home, `/for-businesses`, contact dropdown) |
| `src/lib/pricing.ts` | Standard per-page prices shown on FAQ, Terms and the phone demo. Mirrors the backend platform default in `mprnt-backend` (`pricingService.ts`); update both together. |
| `src/lib/site.ts` | Brand name, domain, phone number and mailboxes. **The phone and domain are placeholders until confirmed.** |
| `src/lib/seo.ts` | Route list for the sitemap and the per-page metadata helper |
| `src/lib/leads.ts` | Contact form validation, payload and submission to the backend |

Each route sets its own title and description: server pages export `metadata` directly; client pages get it from a small `layout.tsx` beside them.

## Security

`next.config.js` sends security headers on every response (CSP, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`, HSTS). If you add a third-party script, image host or API, add its origin to the CSP there.

## Deploy

Any Node host or Vercel: set the two environment variables, run `npm run build`, serve with `npm start`. Every page is prerendered as static HTML.
