import type { Metadata } from 'next';
import BookingContent from './BookingContent';

const pageTitle = 'Request a Quote | Metla House Cleaning Miami';
const pageDescription = 'Get a free quote for professional house cleaning in Miami. Book online in 60 seconds. No phone call required.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/booking' },
  openGraph: { title: pageTitle, description: pageDescription, url: '/booking' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
};

export default function BookingPage() {
  return <BookingContent />;
}
