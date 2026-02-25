import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, COMPANY_NAME } from '@/constants';
import ServicePageContent from './ServicePageContent';

const SERVICE_META_DESCRIPTIONS: Record<string, string> = {
  'standard-cleaning': 'Professional standard cleaning in Miami. Weekly & bi-weekly house cleaning service. Dusting, mopping, sanitizing bathrooms & kitchen. Insured cleaners, 50-point checklist. Book online!',
  'deep-cleaning-miami': 'Deep cleaning services in Miami, Brickell & Coral Gables. Inside appliances, baseboards, ceiling fans, cabinet fronts. Insured professionals. Book today!',
  'post-construction-cleaning-miami': 'Post-construction cleaning in Miami. Fine dust removal, window cleaning, cabinet detailing after renovation. Insured professionals, surface-safe methods. Free quotes!',
  'vacation-rental-cleaning-airbnb': 'Vacation rental cleaning & Airbnb turnover in Miami. Same-day turnovers, linen staging, damage reporting. Hotel-quality guest-ready results. Book now!',
  'move-in-out-cleaning': 'Move-in & move-out cleaning in Miami. Inside cabinets, appliances, full sanitization. Meets property management standards. Insured team. Free quotes!',
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return {};
  const title = `${service.title} Miami | ${COMPANY_NAME}`;
  const description = SERVICE_META_DESCRIPTIONS[service.slug] || service.shortDescription;
  return {
    title, description,
    alternates: { canonical: `/service/${slug}` },
    openGraph: { title, description, url: `/service/${slug}` },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) notFound();
  return <ServicePageContent slug={slug} />;
}
