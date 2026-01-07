import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets, Wind, Building2, ArrowRight, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { COMPANY_NAME, LOCATIONS, COMPANY_ADDRESS, BUSINESS_HOURS, PHONE_NUMBER } from '../constants';
import { updatePageSEO, resetSEO } from '../utils/seo';

const AboutPage: React.FC = () => {
    const location = useLocation();

    // Set dynamic page title and meta description for SEO
    useEffect(() => {
        updatePageSEO({
            title: `About Us | ${COMPANY_NAME}`,
            description: 'Meet the team behind Metla House Cleaning. Former property managers bringing hospitality-grade cleaning standards to Miami homes.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-teal-900/20" />
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2940&fm=webp&auto=format&fit=crop"
                        alt="Luxury Interior"
                        className="w-full h-full object-cover opacity-20"
                        loading="lazy"
                        width={2940}
                        height={1960}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center bg-white/10 px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm border border-white/10">
                        <ShieldCheck className="w-4 h-4 mr-2 text-teal-400" />
                        <span>Our Story</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        The Owner’s Perspective
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                        From Managing 70+ Vacation Rentals in San Diego to Cleaning Luxury Homes in Miami.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">

                {/* Origin Story */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="prose prose-lg text-slate-600 max-w-none">
                        <p className="text-2xl font-serif text-slate-900 italic mb-8 border-l-4 border-teal-500 pl-6">
                            "We didn't start as a cleaning company. We started as frustrated clients, just like you."
                        </p>
                        <p className="mb-12">
                            The Metla story began in San Diego, where our founders managed over 70 luxury vacation rental properties. We spent years—and thousands of dollars—hiring local cleaning services, only to be constantly disappointed. We saw corners cut, finishes damaged, and a "good enough" attitude that simply wasn't good enough for high-end investments. We realized that no one cleans a property like someone who understands the owner's perspective.
                        </p>

                        <div className="py-8 text-center">
                            <span className="inline-block w-16 h-1 bg-teal-500 mb-6 rounded-full"></span>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                                So, we built the cleaning company <br className="hidden md:block" />
                                <span className="italic text-teal-600">we couldn't find.</span>
                            </h3>
                        </div>
                    </div>
                </div>

                {/* The Difference Section */}
                <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-20 border border-slate-100">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <span className="block text-teal-600 font-bold tracking-widest uppercase text-sm mb-3">The Metla Difference</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Hospitality Standards, Personal Care</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We traded standard residential kits for professional-grade tools designed to restore high-traffic properties. We replaced vague promises with rigorous, manager-approved checklists. Today, Metla House Cleaning is built on a foundation of trust, reliability, and personal relationships. We don't just "clean houses"; we steward sanctuaries.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ShieldCheck className="w-6 h-6 text-teal-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Rigorous Protocols</h3>
                            <p className="text-sm text-slate-500">Manager-approved checklists developed from years of property management.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <HeartHandshake className="w-6 h-6 text-teal-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Personal Relationships</h3>
                            <p className="text-sm text-slate-500">Built on trust and reliability. We treat your home as our own.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building2 className="w-6 h-6 text-teal-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Professional Grade</h3>
                            <p className="text-sm text-slate-500">Advanced tools and techniques capable of deep restoring high-traffic luxury properties.</p>
                        </div>
                    </div>
                </div>

                {/* Miami Expansion */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="text-center">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Bringing Our Standard to the Gold Coast</h2>
                        <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                            Expanding to Miami wasn't just about moving locations; it was about adapting our expertise to a more demanding environment. While San Diego taught us precision, Miami demands resilience. We understand that maintaining a pristine residence in South Florida requires battling unique elements that standard maid services often overlook.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Tailored for the Miami Lifestyle:</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Challenge 1 */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    <Droplets className="w-6 h-6 text-blue-500" />
                                </div>
                                <h4 className="font-bold text-slate-900 text-lg">Combating Humidity</h4>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                In lush neighborhoods like Coconut Grove and near the Venetian Pool in Coral Gables, tropical humidity is a constant. We don't just dust; we deep clean to address the heavy buildup that accumulates in this climate, keeping your bathrooms and vents clean and fresh.
                            </p>
                        </div>

                        {/* Challenge 2 */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors">
                                    <Wind className="w-6 h-6 text-teal-500" />
                                </div>
                                <h4 className="font-bold text-slate-900 text-lg">Salt Air & Clarity</h4>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                For our clients in Sunny Isles Beach and Miami Beach, ocean breezes bring sticky salt residue that clouds views and dulls finishes. Our team uses specialized techniques to cut through this grime, protecting your windows and metal fixtures from the corrosive effects of the Atlantic air.
                            </p>
                        </div>

                        {/* Challenge 3 */}
                        <div className="group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                                    <Building2 className="w-6 h-6 text-slate-500" />
                                </div>
                                <h4 className="font-bold text-slate-900 text-lg">Urban Dust Control</h4>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                The booming skyline of Brickell and Edgewater brings fine construction dust into even the most sealed high-rises. Using the same advanced dust-removal techniques we perfected for vacation rental turnovers, we capture the fine particulates that settle in your home, helping you breathe easier near the Miami Design District.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Areas Served Section */}
                <div className="mb-20">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <span className="block text-teal-600 font-bold tracking-widest uppercase text-sm mb-3">Service Coverage</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Areas We Serve</h2>
                        <p className="text-lg text-slate-600">
                            Proudly serving Miami-Dade and Broward County communities with professional cleaning services.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
                        {LOCATIONS.map((loc) => (
                            <Link
                                key={loc.slug}
                                to={`/location/${loc.slug}`}
                                className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-teal-50 hover:border-teal-200 border border-slate-100 transition-all group"
                            >
                                <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-slate-700 text-sm font-medium truncate">{loc.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Contact Info Card */}
                    <div className="bg-teal-50 rounded-xl p-8 max-w-2xl mx-auto border border-teal-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Contact Us</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-slate-600">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                <span>{COMPANY_ADDRESS.full}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-5 h-5 flex items-center justify-center text-teal-600">📞</span>
                                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-teal-600 transition-colors">{PHONE_NUMBER}</a>
                            </div>
                            <div className="flex items-center gap-3 md:col-span-2">
                                <span className="w-5 h-5 flex items-center justify-center text-teal-600">🕐</span>
                                <span>{BUSINESS_HOURS.display}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conclusion */}
                <div className="bg-slate-900 rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Your Partners in Property Care</h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            Whether you need a weekly reset for your Brickell City Centre condo, a seasonal deep clean for your Aventura winter home, or a high-stakes turnover for your vacation rental, Metla brings a hospitality mindset to every job.
                        </p>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                            We are not just a cleaning crew; we are a team of vetted professionals who treat your home with the same respect we demanded for our own properties. Experience the difference of a cleaning service born from the demands of luxury property management.
                        </p>
                        <Link
                            to="/booking"
                            className="inline-flex items-center bg-teal-500 text-slate-900 px-8 py-4 rounded font-bold hover:bg-teal-400 transition-all transform hover:-translate-y-1"
                        >
                            Book Your Service Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;