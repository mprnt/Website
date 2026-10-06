// Single source for the brand's contact details and public URL.
// PLACEHOLDERS: the phone number and the mprint.co domain/mailboxes are not
// confirmed yet. Replace them here once the owner confirms; every page reads
// from this file.
const domain = 'mprint.co';

export const SITE = {
  name: 'MPRNT',
  domain,
  url: (process.env.NEXT_PUBLIC_SITE_URL || `https://${domain}`).replace(/\/+$/, ''),
  phone: {
    display: '+91 123 456 7890',
    tel: '+911234567890',
  },
  email: {
    support: `support@${domain}`,
    business: `business@${domain}`,
    privacy: `privacy@${domain}`,
    legal: `legal@${domain}`,
  },
} as const;
