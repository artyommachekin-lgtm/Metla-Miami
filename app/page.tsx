import type { Metadata } from 'next';
import HomeContent from './HomeContent';
import { SITE_CONFIG } from '@/src/config/site-config';

const pageTitle = 'Metla House Cleaning Miami | Premium Residential Cleaning';
const pageDescription = SITE_CONFIG.seo.metaDescription;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: { title: pageTitle, description: pageDescription, url: '/' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
};

export default function HomePage() {
  return <HomeContent />;
}
