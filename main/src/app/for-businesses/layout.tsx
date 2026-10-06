import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/for-businesses',
  title: 'For Businesses',
  description: 'Earn from printing with MPRNT. Compare four business models, from connecting your existing printer to owning a full MPRNT Station.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
