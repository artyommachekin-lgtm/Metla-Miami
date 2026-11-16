import type { Metadata } from 'next';

// This page is a client component and cannot export metadata itself.
// Without this file it inherits the homepage's title and canonical from app/layout.tsx.
export const metadata: Metadata = {
  title: 'House Cleaning Services in Miami | Metla House Cleaning',
  alternates: { canonical: '/house-cleaning' },
  openGraph: { title: 'House Cleaning Services in Miami | Metla House Cleaning', url: '/house-cleaning' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
