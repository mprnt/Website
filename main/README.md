# MPrnt - Customer Mobile Web App

**Your part:** Web development only - UI + mock API. Backend + Raspberry Pi integration comes later.

## What This Is

The customer-facing mobile web app for MPrnt's self-service printing kiosks. Users scan a QR code on the kiosk, land here, upload a document, configure print settings, pay, and watch the status. The full journey:

1. **Start** - Welcome + QR session init
2. **Upload** - PDF/image file upload
3. **Configure** - Color/B&W, copies, duplex, live price
4. **Review** - Order summary
5. **Payment** - Mock payment (Razorpay placeholder)
6. **Printing** - Real-time status polling
7. **Complete** - Success + retrieval instructions

Right now everything is **mocked** - no real backend, no real payment, no real Pi. The API calls in `src/lib/api.ts` simulate what the real backend will return. When your backend is ready, you'll swap those mock functions for real `fetch()` calls.

---

## 🎨 Two-Color Theme System

**Change your brand colors in ONE place:** `src/app/globals.css`

```css
:root {
  /* PRIMARY brand color - main actions, headers, focus states */
  --color-primary: 37 99 235;        /* Blue-600 #2563eb */
  --color-primary-dark: 29 78 216;   /* Blue-700 #1d4ed8 */

  /* SECONDARY brand color - accents, highlights, secondary actions */
  --color-secondary: 249 115 22;     /* Orange-600 #f97316 */
  --color-secondary-dark: 234 88 12; /* Orange-700 #ea580c */
}
```

Change those RGB values and the entire app updates - buttons, progress bars, radio buttons, price tags, everything. That's it. No hunting through components.

The Tailwind config maps these CSS vars to semantic classes like `bg-primary`, `text-secondary`, `border-primary` with alpha support, so you never write hex codes in components.

---

## Project Structure

```
frontend/customer-web/
├── src/
│   ├── app/                    # Next.js 14 App Router pages
│   │   ├── page.tsx           # 1. Start / QR welcome
│   │   ├── upload/page.tsx    # 2. Document upload
│   │   ├── configure/page.tsx # 3. Print settings + live price
│   │   ├── review/page.tsx    # 4. Order summary
│   │   ├── payment/page.tsx   # 5. Mock payment
│   │   ├── printing/page.tsx  # 6. Status polling + progress
│   │   ├── complete/page.tsx  # 7. Success + retrieval
│   │   ├── layout.tsx         # Root layout + OrderProvider
│   │   └── globals.css        # ⭐ THEME - change colors here
│   ├── components/             # Reusable UI on theme tokens
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Counter.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── RadioOption.tsx
│   │   ├── Screen.tsx
│   │   ├── StepHeader.tsx
│   │   └── PriceTag.tsx
│   ├── context/
│   │   └── OrderContext.tsx   # Client state + sessionStorage
│   └── lib/
│       ├── api.ts             # Mock API matching backend contract
│       └── pricing.ts         # Price calculation logic
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## Getting Started

### 1. Install dependencies

```bash
cd frontend/customer-web
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your phone or browser. You'll see the welcome screen. Tap through the full flow - upload a test PDF, configure, "pay" (mocked), watch the printing status, and reach completion. All 7 screens work end-to-end with zero backend.

### 3. Build for production

```bash
npm run build
npm start
```

---

## How the Mock API Works

`src/lib/api.ts` has functions that **match the shape of your real backend** (from `backend/API-Design.md`):

- `createSession(qrToken)` → mock session
- `uploadDocument(file)` → mock doc with random page count
- `getQuote(...)` → price calculation
- `initializePayment(...)` → mock payment intent
- `getPrintJobStatus(jobId)` → random status (QUEUED → PRINTING → COMPLETED)
- `mockPaymentSuccess()` → simulates webhook → job created

When your real backend is running, replace these functions with actual `fetch()` calls to `https://your-backend/v1/...`. The rest of the app stays the same because the function signatures match.

---

## Flow State

`OrderContext` (React Context + sessionStorage) holds the order across page navigation:

- `sessionToken`, `kioskId`
- `document` (id, fileName, pageCount)
- `config` (color, copies, duplex)
- `quote` (amount)
- `paymentId`, `jobId`

SessionStorage means the order survives page refreshes. When the user finishes or starts a new print, `resetOrder()` clears it.

---

## Pricing Logic

`src/lib/pricing.ts` is the **single source of truth** for prices:

```ts
export const PRICING_CONFIG = {
  bwPricePerPage: 2.0,      // ₹2 per page for B&W
  colorPricePerPage: 5.0,   // ₹5 per page for Color
  currency: '₹',
};
```

Change those numbers and the whole app updates. The backend will have its own `pricing_versions` table (from `database/Database-Design.md`), and eventually you'll fetch pricing from the API instead of hardcoding it here. For now, this matches your MVP scope.

---

## Next Steps (When Backend is Ready)

1. **Replace mock API functions** in `src/lib/api.ts` with real `fetch()` calls.
2. **Add real payment integration** - replace the mock payment button with Razorpay's SDK (test mode).
3. **Connect to real job polling** - `GET /print-jobs/:id` with actual status from the Pi.
4. **QR token parsing** - extract `kioskId` from URL param instead of hardcoding `mockQrToken`.
5. **Error handling** - add real error states (payment failed, printer offline, etc. per `security/Failure-Handler.md`).

---

## Design Notes

**Mobile-first, high-contrast for outdoor kiosks.** The UI follows your `product/UI-UX-Specs.md`:

- Large touch targets (buttons are 48px+ tall)
- Clear step indicators (Stepper component)
- Real-time feedback (progress bars, status messages)
- No tiny text or low-contrast grays

The color theme (blue + orange by default) is intentional, not a template default. Change it in `globals.css` if the design discussion shifts to a different palette.

---

## Tech Stack

- **Next.js 14** (App Router, React 18, TypeScript)
- **Tailwind CSS** (utility-first, theme tokens mapped to CSS vars)
- **No backend/database yet** - all mocked for now

---

## Questions?

This is your slice - fully functional UI + mock API, stops cleanly at the backend boundary. When your teammate finishes the Pi daemon and you build the backend (phases M1–M2 from the build plan), you'll wire this to the real endpoints. Until then, this runs standalone and demos the entire customer journey.

**To change the theme:** edit `src/app/globals.css` (the two `--color-primary` and `--color-secondary` lines). That's it.
