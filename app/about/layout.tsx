import type { Metadata } from 'next';

// This page is a client component and cannot export metadata itself.
// Without this file it inherits the homepage's title and canonical from app/layout.tsx.
export const metadata: Metadata = {
  title: 'About Us | Metla House Cleaning Miami',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Us | Metla House Cleaning Miami', url: '/about' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
