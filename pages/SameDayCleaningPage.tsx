import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES, COMPANY_NAME, LOCATIONS, PHONE_NUMBER } from '../constants';
import { Clock, Phone, ArrowRight, Check, Star, Calendar, Zap, Shield, MapPin, CheckCircle } from 'lucide-react';
import { updatePageSEO, resetSEO } from '../utils/seo';
import FAQSchema, { FAQItem } from '../components/FAQSchema';

// Same Day Cleaning FAQs for rich snippets
const SAME_DAY_FAQS: FAQItem[] = [
    {
        question: 'Can I get same day house cleaning in Miami?',
        answer: 'Yes! Metla House Cleaning offers same day cleaning services throughout Miami-Dade and Broward counties. While same day service requests are subject to availability, our team works hard to accommodate urgent cleaning needs. Call us at (786) 723-7533 for fastest scheduling.'
    },
    {
        question: 'How do I book a same day cleaning appointment?',
        answer: 'For same day cleaning, we recommend calling us directly at (786) 723-7533 for the fastest response. You can also submit an online request, and we will contact you within 1-2 hours to confirm availability. Morning requests have the best chance of same-day accommodation.'
    },
    {
        question: 'What types of cleaning can be done same day?',
        answer: 'We offer same day service for all cleaning types including standard cleaning, deep cleaning, vacation rental turnovers, and move-in/move-out cleaning. The availability depends on your location and our current schedule. Contact us to discuss your specific needs.'
    },
    {
        question: 'Is there an extra charge for same day cleaning service?',
        answer: 'Same day service may have a small convenience fee depending on the urgency and our current availability. We provide transparent pricing before confirming your appointment. Many clients find the convenience well worth any additional cost.'
    },
    {
        question: 'What areas do you serve for same day cleaning?',
        answer: 'We provide same day cleaning throughout Miami, Brickell, Coral Gables, Miami Beach, Fort Lauderdale, Hollywood, Aventura, and surrounding areas. Our team is strategically located to respond quickly to urgent requests across the Gold Coast.'
    },
];

const SameDayCleaningPage: React.FC = () => {
    const location = useLocation();

    // Set dynamic page title and meta description for SEO
    useEffect(() => {
        updatePageSEO({
            title: `Same Day Cleaning Service Miami | Emergency House Cleaning | ${COMPANY_NAME}`,
            description: 'Need cleaning today? Metla House Cleaning offers same day house cleaning in Miami, Brickell, Fort Lauderdale & the Gold Coast. Call (786) 723-7533 for urgent cleaning requests.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    // Structured data for same day service
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Same Day House Cleaning",
        "name": "Same Day Cleaning Service Miami",
        "description": "Urgent same day house cleaning services in Miami and South Florida. Professional cleaners available for emergency and last-minute cleaning requests.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Metla House Cleaning",
            "telephone": "+1-786-723-7533",
            "url": "https://metlahousecleaningmiami.com"
        },
        "areaServed": [
            { "@type": "City", "name": "Miami" },
            { "@type": "City", "name": "Fort Lauderdale" },
            { "@type": "City", "name": "Brickell" },
            { "@type": "City", "name": "Miami Beach" }
        ],
        "availableChannel": {
            "@type": "ServiceChannel",
            "servicePhone": "+1-786-723-7533",
            "serviceUrl": "https://metlahousecleaningmiami.com/same-day-cleaning"
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema, null, 2) }}
            />
            <FAQSchema faqs={SAME_DAY_FAQS} />

            {/* Hero Section */}
            <div className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 to-slate-900" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center bg-teal-500/20 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm border border-teal-500/30">
                        <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                        <span className="text-teal-300 font-medium">Available Today • Subject to Availability</span>
                    </div>
                    <Clock className="w-16 h-16 text-teal-400 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Same Day Cleaning Service</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Need your home cleaned today? Our team works hard to accommodate urgent requests throughout Miami and the Gold Coast.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-all rounded-sm shadow-lg"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now: {PHONE_NUMBER}
                        </a>
                        <Link
                            to="/booking"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-white/20 hover:bg-white/10 transition-all rounded-sm backdrop-blur-sm"
                        >
                            Request Online
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">

                    {/* Definition Box for AI/GEO */}
                    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8 definition-box">
                        <h2 className="text-lg font-bold text-teal-800 mb-2">What is Same Day Cleaning Service?</h2>
                        <p className="text-slate-700">
                            <strong>Same day cleaning service</strong> is an expedited professional house cleaning scheduled and completed within the same day you request it. This service is ideal for unexpected guests, last-minute events, property showings, or any situation where you need your home cleaned urgently. While same day requests are subject to availability, our team at Metla House Cleaning does everything possible to accommodate your needs—simply reach out and let us know how we can help.
                        </p>
                    </div>

                    {/* Availability Notice */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
                        <div className="flex items-start gap-4">
                            <Calendar className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-amber-800 text-lg mb-2">Important: Subject to Availability</h3>
                                <p className="text-amber-700">
                                    While same day service requests are subject to availability, don't hesitate to reach out! Our team will do everything possible to accommodate any request. For the best chance of same-day service, contact us in the morning. Even if same-day isn't available, we can often schedule next-day service.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* When to Use Same Day Cleaning */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-serif text-slate-900 mb-6">When You Might Need Same Day Cleaning</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: 'Unexpected Guests', desc: 'Family or friends arriving on short notice' },
                                { title: 'Last-Minute Events', desc: 'Hosting a gathering or party tonight' },
                                { title: 'Property Showings', desc: 'Real estate showings scheduled same day' },
                                { title: 'Airbnb Turnovers', desc: 'Guests checking in earlier than expected' },
                                { title: 'Post-Event Cleanup', desc: 'After a party, gathering, or celebration' },
                                { title: 'Moving Day', desc: 'Need cleaning before or after your move' },
                                { title: 'Health & Wellness', desc: 'Recovering from illness, need a clean space' },
                                { title: 'Peace of Mind', desc: 'Sometimes you just need a clean home today' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Available Services */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-serif text-slate-900 mb-6">Same Day Availability for All Cleaning Types</h2>
                        <p className="text-slate-600 mb-6">
                            We offer same day scheduling for all of our professional cleaning services. Select the type of cleaning you need:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {SERVICES.map((service) => (
                                <Link
                                    key={service.slug}
                                    to={`/service/${service.slug}`}
                                    className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:shadow-lg transition-all"
                                >
                                    <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 mb-3">{service.shortDescription}</p>
                                    <span className="inline-flex items-center text-teal-600 text-sm font-medium">
                                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* How to Book */}
                    <div className="bg-slate-900 text-white rounded-2xl p-8 mb-12">
                        <h2 className="text-3xl font-serif font-bold mb-6 text-center">How to Book Same Day Cleaning</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                                <h3 className="font-bold mb-2">Call or Request</h3>
                                <p className="text-slate-300 text-sm">Call (786) 723-7533 directly for fastest response, or submit an online request.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                                <h3 className="font-bold mb-2">Quick Confirmation</h3>
                                <p className="text-slate-300 text-sm">We'll confirm availability and provide a quote within minutes.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                                <h3 className="font-bold mb-2">Same Day Service</h3>
                                <p className="text-slate-300 text-sm">Our professional team arrives and transforms your space.</p>
                            </div>
                        </div>
                    </div>

                    {/* Service Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-serif text-slate-900 mb-6">Same Day Cleaning Service Areas</h2>
                        <p className="text-slate-600 mb-6">
                            We provide same day cleaning services throughout Miami-Dade and Broward counties:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {LOCATIONS.map((loc) => (
                                <Link
                                    key={loc.slug}
                                    to={`/location/${loc.slug}`}
                                    className="inline-flex items-center gap-1 px-3 py-2 bg-slate-100 hover:bg-teal-100 hover:text-teal-700 rounded-full text-sm font-medium transition-colors"
                                >
                                    <MapPin className="w-3 h-3" />
                                    {loc.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Trust Signals */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <Shield className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Fully Insured</h3>
                            <p className="text-sm text-slate-600">Licensed, bonded, and insured for your complete peace of mind.</p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">4.9/5 Rating</h3>
                            <p className="text-sm text-slate-600">Trusted by hundreds of Miami homeowners.</p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <Check className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                            <h3 className="font-bold text-slate-900 mb-2">Background Checked</h3>
                            <p className="text-sm text-slate-600">Every cleaner is thoroughly vetted and professionally trained.</p>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-serif text-slate-900 mb-6">Same Day Cleaning FAQ</h2>
                        <div className="space-y-4">
                            {SAME_DAY_FAQS.map((faq, idx) => (
                                <div key={idx} className="border border-slate-200 rounded-lg p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                                    <p className="text-slate-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
                        <h2 className="text-3xl font-serif font-bold mb-4">Need Cleaning Today?</h2>
                        <p className="text-teal-100 mb-6 max-w-xl mx-auto">
                            Don't wait—contact us now and we'll do our best to get you scheduled today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white text-teal-700 hover:bg-teal-50 transition-all rounded-sm shadow-lg"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                {PHONE_NUMBER}
                            </a>
                            <Link
                                to="/booking"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-white hover:bg-white/10 transition-all rounded-sm"
                            >
                                Request Quote Online
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SameDayCleaningPage;
