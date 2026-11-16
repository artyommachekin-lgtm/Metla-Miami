import type { Metadata } from 'next';

// This page is a client component and cannot export metadata itself.
// Without this file it inherits the homepage's title and canonical from app/layout.tsx.
export const metadata: Metadata = {
  title: 'Same Day Cleaning Service Miami | Metla House Cleaning',
  alternates: { canonical: '/same-day-cleaning' },
  openGraph: { title: 'Same Day Cleaning Service Miami | Metla House Cleaning', url: '/same-day-cleaning' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
