import type { Metadata } from 'next';

// This page is a client component and cannot export metadata itself.
// Without this file it inherits the homepage's title and canonical from app/layout.tsx.
export const metadata: Metadata = {
  title: 'Company Policies | Metla House Cleaning Miami',
  alternates: { canonical: '/policies' },
  openGraph: { title: 'Company Policies | Metla House Cleaning Miami', url: '/policies' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
