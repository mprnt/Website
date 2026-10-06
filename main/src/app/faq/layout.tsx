import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/faq',
  title: 'FAQ',
  description: 'Answers to common questions about printing with MPRNT: pricing, payments, supported files, privacy and refunds.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
