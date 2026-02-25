import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { LOCATIONS } from '@/constants';

const pageTitle = 'Service Areas | Metla House Cleaning Miami';
const pageDescription = 'Metla House Cleaning proudly serves Miami-Dade and Broward County. Find professional house cleaning services in your neighborhood.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: '/locations' },
    openGraph: { title: pageTitle, description: pageDescription, url: '/locations' },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
};

export default function LocationsPage() {
    // Group locations by type
    const locationsByType: Record<string, typeof LOCATIONS> = {};
    for (const loc of LOCATIONS) {
        const type = loc.type || 'Other';
        if (!locationsByType[type]) {
            locationsByType[type] = [];
        }
        locationsByType[type].push(loc);
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        Our Service Areas
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Professional house cleaning services throughout Miami-Dade and Broward County.
                    </p>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        {Object.entries(locationsByType).map(([type, locations]) => (
                            <div key={type} className="mb-12">
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
                                    {type}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {locations.map((loc) => (
                                        <Link
                                            key={loc.slug}
                                            href={`/location/${loc.slug}`}
                                            className="group flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-teal-50 hover:border-teal-200 transition-all"
                                        >
                                            <div className="flex items-center gap-3">
                                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                                                        {loc.name}
                                                    </h3>
                                                    <p className="text-sm text-slate-500 line-clamp-1">{loc.description}</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                        Don&apos;t See Your Area?
                    </h2>
                    <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                        We&apos;re constantly expanding our service coverage. Contact us to check if we serve your neighborhood.
                    </p>
                    <Link
                        href="/booking"
                        className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-bold rounded hover:bg-teal-700 transition-colors"
                    >
                        Get a Free Quote
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
