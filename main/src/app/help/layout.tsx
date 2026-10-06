import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/help',
  title: 'Help Center',
  description: 'Guides and support for printing from your phone with MPRNT.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
