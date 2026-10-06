// Mirrors mprnt-backend's pricing rule (src/services/pricingService.ts and the
// platform default seeded in migrations/011_admin_dashboard.sql). Kiosks and
// organisations can override these rates in the backend, so the site only ever
// quotes them as the standard rate.
export const PRICING = {
  bwPerPage: 2,
  colorPerPage: 5,
  minCharge: 0,
  currency: '₹',
} as const;

export function formatRupees(amount: number): string {
  return `${PRICING.currency}${Number.isInteger(amount) ? amount : amount.toFixed(2)}`;
}

export interface PriceInput {
  pages: number;
  color: boolean;
  copies: number;
  doubleSided?: boolean;
}

// Same arithmetic as the backend: physical sheets (double-sided halves the page
// count, rounded up) x copies x per-page rate, never below the minimum charge.
export function calculatePrice({ pages, color, copies, doubleSided = false }: PriceInput): number {
  const sheets = doubleSided ? Math.ceil(pages / 2) : pages;
  const rate = color ? PRICING.colorPerPage : PRICING.bwPerPage;
  return Math.max(sheets * copies * rate, PRICING.minCharge);
}
