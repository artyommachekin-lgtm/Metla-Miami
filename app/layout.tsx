import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/src/config/site-config';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'optional',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  alternates: { canonical: '/' },
  title: {
    default: SITE_CONFIG.seo.siteTitle,
    template: '%s',
  },
  description: SITE_CONFIG.seo.metaDescription,
  keywords: SITE_CONFIG.seo.keywords,
  openGraph: {
    type: 'website',
    siteName: 'Metla House Cleaning Miami',
    title: SITE_CONFIG.seo.siteTitle,
    description: SITE_CONFIG.seo.metaDescription,
    url: SITE_CONFIG.baseUrl,
    images: [{
      url: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.social.ogImage}`,
      width: SITE_CONFIG.social.ogImageWidth,
      height: SITE_CONFIG.social.ogImageHeight,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.seo.siteTitle,
    description: SITE_CONFIG.seo.metaDescription,
    images: [`${SITE_CONFIG.baseUrl}${SITE_CONFIG.social.ogImage}`],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': 'Miami',
    'geo.position': `${SITE_CONFIG.coordinates.latitude};${SITE_CONFIG.coordinates.longitude}`,
    'ICBM': `${SITE_CONFIG.coordinates.latitude}, ${SITE_CONFIG.coordinates.longitude}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.baseUrl}/#website`,
    "name": SITE_CONFIG.companyName,
    "url": SITE_CONFIG.baseUrl,
    "publisher": {
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.baseUrl}/#organization`,
      "name": SITE_CONFIG.companyName,
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_CONFIG.baseUrl}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://d3ey4dbjkt2f6s.cloudfront.net" />
        <link rel="dns-prefetch" href="https://clienthub.getjobber.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans text-slate-900 antialiased selection:bg-teal-100 selection:text-teal-900">
        <Navigation />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
