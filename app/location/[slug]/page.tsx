import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, COMPANY_NAME } from '@/constants';
import LocationPageContent from './LocationPageContent';

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS.find(l => l.slug === slug);
  if (!location) return {};
  const title = `Top-Rated House Cleaning in ${location.name}, Miami | Professional Cleaning Services`;
  const description = `Professional house cleaning and maid services in ${location.name}, Miami. ${location.description} Insured, background-checked cleaners. Book today!`;
  return {
    title, description,
    alternates: { canonical: `/location/${slug}` },
    openGraph: { title, description, url: `/location/${slug}` },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function LocationRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = LOCATIONS.find(l => l.slug === slug);
  if (!location) notFound();
  return <LocationPageContent slug={slug} />;
}
