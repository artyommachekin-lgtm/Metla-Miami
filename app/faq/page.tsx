import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PHONE_NUMBER } from '@/constants';

const pageTitle = 'FAQ | Metla House Cleaning Miami';
const pageDescription = 'Frequently asked questions about Metla House Cleaning services in Miami. Learn about pricing, scheduling, our guarantee, and more.';

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: '/faq' },
    openGraph: { title: pageTitle, description: pageDescription, url: '/faq' },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
};

const faqs = [
    {
        category: 'Pricing & Booking',
        questions: [
            {
                question: 'How much does house cleaning cost in Miami?',
                answer: `House cleaning prices in Miami typically range from $120 to $350 depending on home size, cleaning type, and frequency. Standard maintenance cleaning starts around $120-180 for a 2-bedroom home, while deep cleaning services range from $200-400. We provide free, personalized quotes tailored to your specific needs.`,
            },
            {
                question: 'How do I book a cleaning service?',
                answer: `Booking is easy! Visit our online booking page to request a quote in 60 seconds, or call us at ${PHONE_NUMBER}. We'll discuss your needs, provide a transparent quote, and schedule your cleaning at a convenient time.`,
            },
            {
                question: 'Is there a minimum charge?',
                answer: 'Our services start at competitive rates based on your home\'s size and needs. We provide transparent pricing with no hidden fees. Contact us for a personalized quote.',
            },
            {
                question: 'Do you offer discounts for recurring service?',
                answer: 'Yes! We offer discounts of 10-30% for recurring cleanings on a weekly, bi-weekly, or monthly schedule. The more frequently you book, the more you save.',
            },
        ],
    },
    {
        category: 'Services',
        questions: [
            {
                question: 'What\'s included in a standard cleaning?',
                answer: 'Our standard house cleaning includes dusting all surfaces, vacuuming and mopping floors, cleaning and sanitizing bathrooms, kitchen cleaning including countertops and appliances, making beds, and emptying trash. We follow a comprehensive 50-point checklist to ensure consistent quality.',
            },
            {
                question: 'What\'s the difference between standard cleaning and deep cleaning?',
                answer: 'Standard cleaning maintains your home\'s cleanliness with regular surface cleaning. Deep cleaning is a comprehensive, intensive service that addresses areas often missed\u2014inside appliances, behind furniture, baseboards, light fixtures, and detailed sanitization. We recommend deep cleaning for first-time clients or homes that haven\'t been professionally cleaned recently.',
            },
            {
                question: 'Do you offer same-day cleaning service?',
                answer: `Yes! While same-day service requests are subject to availability, our team works hard to accommodate urgent cleaning needs. Call us at ${PHONE_NUMBER} for the fastest scheduling. Morning requests have the best chance of same-day accommodation.`,
            },
            {
                question: 'Do you bring your own cleaning supplies?',
                answer: 'Yes, our team arrives with all necessary professional-grade cleaning supplies and equipment. If you have specific products you prefer us to use, just let us know in advance.',
            },
        ],
    },
    {
        category: 'Trust & Safety',
        questions: [
            {
                question: 'Are your cleaners insured and background checked?',
                answer: 'Yes, all Metla House Cleaning professionals are fully insured and undergo comprehensive background checks. We only hire 1 in 50 applicants, ensuring you receive service from vetted, trustworthy professionals.',
            },
            {
                question: 'Do I need to be home during the cleaning?',
                answer: 'No, you don\'t need to be home. Many of our clients provide access through lockboxes, smart locks, or doormen. Our insured and background-checked cleaners can work independently. We\'ll update you when we arrive and when the cleaning is complete.',
            },
            {
                question: 'What is your satisfaction guarantee?',
                answer: 'We offer a 24-hour satisfaction guarantee. If you\'re not happy with the cleaning, contact us within 24 hours and we\'ll send someone to fix the missed areas for free. We recommend being present for a post-cleaning walkthrough when possible.',
            },
        ],
    },
    {
        category: 'Scheduling & Cancellations',
        questions: [
            {
                question: 'How often should I have my house professionally cleaned?',
                answer: 'For most households, weekly or bi-weekly cleaning maintains optimal cleanliness. Homes with pets, children, or allergies benefit from weekly service. Monthly deep cleaning is recommended for well-maintained homes. We\'ll help you determine the right frequency during your consultation.',
            },
            {
                question: 'What is your cancellation policy?',
                answer: 'We require at least 48 hours\' notice for cancellations or rescheduling. Cancellations less than 48 hours before the scheduled clean incur a $50 fee. Cancellations less than 24 hours before incur a fee of 50% of the quoted amount.',
            },
            {
                question: 'What areas do you serve?',
                answer: 'Metla House Cleaning serves the Miami-Dade and Broward County areas including Miami, Brickell, Miami Beach, Coral Gables, Coconut Grove, Fort Lauderdale, Hollywood, Aventura, Sunny Isles, Bal Harbour, and surrounding communities along the Gold Coast.',
            },
        ],
    },
];

export default function FAQPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Everything you need to know about our professional house cleaning services in Miami.
                    </p>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {faqs.map((section) => (
                            <div key={section.category} className="mb-12">
                                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
                                    {section.category}
                                </h2>
                                <div className="space-y-4">
                                    {section.questions.map((faq, idx) => (
                                        <div key={idx} className="bg-slate-50 rounded-xl p-6">
                                            <h3 className="text-lg font-bold text-slate-900 mb-3">
                                                {faq.question}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
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
                        Still Have Questions?
                    </h2>
                    <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                        Our team is here to help. Contact us for a free consultation or get a personalized quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/booking"
                            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-bold rounded hover:bg-teal-700 transition-colors"
                        >
                            Get a Free Quote
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 font-bold rounded hover:bg-slate-100 transition-colors"
                        >
                            Call {PHONE_NUMBER}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
