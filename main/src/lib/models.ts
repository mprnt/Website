// MPRNT business models - single source of truth for every page that
// describes them. Copy follows the commercial model brief; anything not
// fixed there (percentages, prices, specs) is deliberately left to the
// partnership / commercial agreement.

export type ModelId = 'integration' | 'revenue-share' | 'own-station' | 'full-purchase';

export interface BusinessModel {
  id: ModelId;
  number: string; // 1 · 2 · 3 - Model 2 has two options (A, B)
  option?: 'A' | 'B';
  label: string; // e.g. "Model 2 · Option A"
  anchor: string; // in-page id on /for-businesses
  family: 'Printer Integration' | 'MPRNT Station';
  name: string;
  short: string;
  tagline: string;
  summary: string;
  youProvide: string[];
  mprntProvides: string[];
  journey: string[];
  revenue: string;
  bestFor: string[];
  ownership: { label: string; owner: string }[];
}

export const MODELS: BusinessModel[] = [
  {
    id: 'integration',
    number: '1',
    label: 'Model 1',
    anchor: 'model-1',
    family: 'Printer Integration',
    name: 'Printer Integration',
    short: 'Existing printer',
    tagline: 'No MPRNT Station required',
    summary:
      'Plug MPRNT into the printer you already own. We connect it to our platform so customers can scan, upload, pay and print - while you keep running your shop.',
    youProvide: [
      'Existing compatible printer',
      'Electricity',
      'Wi-Fi / internet connection',
      'Paper and other consumables',
      'Space for the printer',
      'Basic day-to-day printing operations',
    ],
    mprntProvides: [
      'MPRNT hardware integration system',
      'Printer connectivity & technical integration',
      'MPRNT software / platform',
      'QR-based customer printing interface',
      'Payment integration',
      'System configuration',
      'Technical setup and support',
      'Software updates',
    ],
    journey: ['Use your existing printer', 'Add MPRNT integration', 'Pay monthly software charges', 'Keep your printing revenue'],
    revenue: 'You keep 100% of printing revenue. No revenue sharing - only the monthly software / platform subscription.',
    bestFor: ['Stationery shops', 'Cyber cafés', 'Photocopy & print shops', 'Colleges', 'Libraries', 'Offices'],
    ownership: [
      { label: 'Printer', owner: 'You' },
      { label: 'Integration hardware', owner: 'You, after purchase' },
      { label: 'Electricity & Wi-Fi', owner: 'You' },
      { label: 'Printing revenue', owner: 'You' },
      { label: 'Software & platform', owner: 'MPRNT' },
    ],
  },
  {
    id: 'revenue-share',
    number: '2',
    option: 'A',
    label: 'Model 2 · Option A',
    anchor: 'model-2a',
    family: 'MPRNT Station',
    name: 'Station · Revenue Share',
    short: 'Revenue share',
    tagline: 'Provide space. We provide & operate the station.',
    summary:
      'Host a complete MPRNT Station without buying it. MPRNT installs, operates, manages and maintains the station, and printing revenue is shared with you.',
    youProvide: ['Suitable space', 'Electricity', 'Wi-Fi / internet'],
    mprntProvides: [
      'Complete MPRNT Station',
      'Hardware and components',
      'Printer setup',
      'Software / platform',
      'Installation & technical integration',
      'Station management',
      'Maintenance',
      'Technical support & software updates',
    ],
    journey: ['Provide space, power & Wi-Fi', 'MPRNT installs the station', 'MPRNT manages & maintains it', 'Share printing revenue'],
    revenue: 'Revenue is shared between MPRNT and you at a mutually agreed percentage, finalised in the partnership agreement.',
    bestFor: ['High-footfall locations', 'Malls & transit hubs', 'Campuses', 'Co-working spaces'],
    ownership: [
      { label: 'MPRNT Station', owner: 'MPRNT' },
      { label: 'Space, power & Wi-Fi', owner: 'You' },
      { label: 'Operations & maintenance', owner: 'MPRNT' },
      { label: 'Printing revenue', owner: 'Shared' },
      { label: 'Software & platform', owner: 'MPRNT' },
    ],
  },
  {
    id: 'own-station',
    number: '2',
    option: 'B',
    label: 'Model 2 · Option B',
    anchor: 'model-2b',
    family: 'MPRNT Station',
    name: 'Station · Purchase + Monthly Software',
    short: 'Own station',
    tagline: 'Own your MPRNT Station',
    summary:
      'Buy a complete MPRNT Station. Our team installs and configures it, then keeps supporting you with maintenance, updates and promotion while you run it.',
    youProvide: ['Station purchase', 'Space, electricity & Wi-Fi', 'Day-to-day operation', 'Monthly software subscription'],
    mprntProvides: [
      'Complete MPRNT Station',
      'Hardware and required components',
      'Printer integration',
      'Software / platform',
      'Installation and configuration',
      'Technical & maintenance support',
      'Software updates',
      'Promotional support & operational assistance',
    ],
    journey: ['Purchase the MPRNT Station', 'We install & configure it', 'Own and operate it', 'Keep your printing revenue'],
    revenue: 'You keep all printing revenue. No revenue sharing - only the monthly software / platform subscription.',
    bestFor: ['Print-shop owners scaling up', 'Institutions', 'Retail stores', 'Entrepreneurs'],
    ownership: [
      { label: 'MPRNT Station', owner: 'You' },
      { label: 'Operations', owner: 'You, with MPRNT assistance' },
      { label: 'Printing revenue', owner: 'You' },
      { label: 'Software & platform', owner: 'MPRNT' },
    ],
  },
  {
    id: 'full-purchase',
    number: '3',
    label: 'Model 3',
    anchor: 'model-3',
    family: 'MPRNT Station',
    name: 'Station · Full Purchase & Support',
    short: 'Full ownership',
    tagline: 'Complete station ownership',
    summary:
      'Purchase the entire MPRNT Station outright - structure, printer, electronics and integration - and independently run your own MPRNT-powered printing setup.',
    youProvide: ['Full station purchase', 'Space, electricity & Wi-Fi', 'Independent operation', 'Monthly software / platform charges'],
    mprntProvides: [
      'MPRNT Station structure',
      'Printer',
      'Hardware components & electronics',
      'MPRNT integration system',
      'Software / platform integration',
      'Installation and configuration',
      'Ongoing support: technical, maintenance, updates, promotion & guidance as agreed',
    ],
    journey: ['Buy the complete station', 'We install & configure', 'Run it independently', 'Keep revenue, pay monthly software'],
    revenue: 'You keep all printing revenue and pay the applicable monthly MPRNT software / platform charges.',
    bestFor: ['Enterprises & multi-site operators', 'Universities', 'Government & public offices', 'Franchise operators'],
    ownership: [
      { label: 'Station, printer & hardware', owner: 'You' },
      { label: 'Operations', owner: 'You, independently' },
      { label: 'Printing revenue', owner: 'You' },
      { label: 'Software & platform', owner: 'MPRNT' },
    ],
  },
];

export const getModel = (id: ModelId) => MODELS.find((m) => m.id === id)!;

// Side-by-side comparison rows. Values come only from the model brief.
export const COMPARISON: { label: string; values: Record<ModelId, string> }[] = [
  {
    label: 'MPRNT Station',
    values: { integration: 'Not required', 'revenue-share': 'Provided by MPRNT', 'own-station': 'You purchase', 'full-purchase': 'You purchase outright' },
  },
  {
    label: 'Printer',
    values: { integration: 'Your existing printer', 'revenue-share': 'Set up by MPRNT', 'own-station': 'Integrated in station', 'full-purchase': 'Included in purchase' },
  },
  {
    label: 'You provide',
    values: { integration: 'Printer, power, Wi-Fi, paper, space', 'revenue-share': 'Space, power, Wi-Fi', 'own-station': 'Space, power, Wi-Fi', 'full-purchase': 'Space, power, Wi-Fi' },
  },
  {
    label: 'Who operates',
    values: { integration: 'You', 'revenue-share': 'MPRNT', 'own-station': 'You, with MPRNT help', 'full-purchase': 'You, independently' },
  },
  {
    label: 'Printing revenue',
    values: { integration: '100% yours', 'revenue-share': 'Shared (agreed %)', 'own-station': '100% yours', 'full-purchase': '100% yours' },
  },
  {
    label: 'Monthly software fee',
    values: { integration: 'Yes', 'revenue-share': 'Per agreement', 'own-station': 'Yes', 'full-purchase': 'Yes' },
  },
  {
    label: 'Maintenance',
    values: { integration: 'Setup & tech support', 'revenue-share': 'Fully by MPRNT', 'own-station': 'Supported by MPRNT', 'full-purchase': 'Available as agreed' },
  },
];
