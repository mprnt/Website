import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/contact',
  title: 'Contact',
  description: 'Talk to the MPRNT team about printing, partnerships or bringing an MPRNT printer or station to your shop, campus or office.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
