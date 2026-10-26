// Single source for the brand's contact details and public URL.
// Contact details are the official ones from the MPRNT Terms & Privacy Policy.
// PLACEHOLDER: the mprint.co domain (used only for the public site URL) is not
// confirmed yet. Every page reads from this file.
const domain = 'mprint.co';
const email = 'mprntindore@gmail.com';

export const SITE = {
  name: 'MPRNT',
  fullName: 'MPRNT – Smart Printing Platform',
  operator: 'Mlock Innovations LLP',
  address: '139, Uday Nagar, Indore Kanadia Road, Indore, Madhya Pradesh, India – 452016',
  domain,
  url: (process.env.NEXT_PUBLIC_SITE_URL || `https://${domain}`).replace(/\/+$/, ''),
  phone: {
    display: '+91 89894 94417',
    tel: '+918989494417',
  },
  // The official company pages. The share tokens on the copied links are not kept.
  social: {
    linkedin: { handle: '/showcase/mprnt', url: 'https://www.linkedin.com/showcase/mprnt/' },
    instagram: { handle: '@mprnt.in', url: 'https://www.instagram.com/mprnt.in/' },
  },
  // One official mailbox handles support, business, privacy and legal queries.
  email: {
    support: email,
    business: email,
    privacy: email,
    legal: email,
  },
} as const;
