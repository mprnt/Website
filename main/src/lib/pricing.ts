// Pricing configuration - single source of truth for prices
export const PRICING_CONFIG = {
  bwPricePerPage: 2.0,      // ₹2 per page for B&W
  colorPricePerPage: 5.0,   // ₹5 per page for Color
  currency: '₹',
};

export function calculatePrice(
  pageCount: number,
  isColor: boolean,
  copies: number
): number {
  const pricePerPage = isColor ? PRICING_CONFIG.colorPricePerPage : PRICING_CONFIG.bwPricePerPage;
  return pageCount * pricePerPage * copies;
}
