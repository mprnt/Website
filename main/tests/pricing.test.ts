import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PRICING, calculatePrice, formatRupees } from '../src/lib/pricing.ts';

test('standard rates match the mprnt-backend platform default (2 / 5 per page)', () => {
  assert.equal(PRICING.bwPerPage, 2);
  assert.equal(PRICING.colorPerPage, 5);
  assert.equal(PRICING.minCharge, 0);
});

test('calculatePrice follows the backend rule: sheets x copies x rate', () => {
  assert.equal(calculatePrice({ pages: 12, color: false, copies: 1 }), 24);
  assert.equal(calculatePrice({ pages: 3, color: true, copies: 2 }), 30);
  // Double-sided charges per physical sheet, rounded up (pricingService.ts).
  assert.equal(calculatePrice({ pages: 5, color: false, copies: 1, doubleSided: true }), 6);
});

test('formatRupees prints whole rupees without decimals', () => {
  assert.equal(formatRupees(24), '₹24');
  assert.equal(formatRupees(2.5), '₹2.50');
});
