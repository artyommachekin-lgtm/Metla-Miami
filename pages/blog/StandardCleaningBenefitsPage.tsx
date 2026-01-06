import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Repeat,
    DollarSign,
    Heart,
    Clock4,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const StandardCleaningBenefitsPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How often should I schedule standard cleaning?",
            answer: "Most households benefit from weekly or bi-weekly standard cleaning. Homes with pets, children, or multiple occupants may prefer weekly service, while single occupants or those who maintain their homes well may find bi-weekly sufficient."
        },
        {
            question: "What's included in a standard cleaning service?",
            answer: "Standard cleaning typically includes dusting surfaces, vacuuming and mopping floors, cleaning and sanitizing bathrooms, kitchen cleaning including counters and appliances, making beds, emptying trash, and general tidying."
        },
        {
            question: "How long does a standard cleaning take?",
            answer: "A standard cleaning usually takes 2-4 hours depending on home size. A 2-bedroom apartment averages 2-2.5 hours, while a 3-bedroom house typically takes 3-4 hours."
        },
        {
            question: "Is standard cleaning the same as deep cleaning?",
            answer: "No. Standard cleaning maintains overall cleanliness with regular surface cleaning. Deep cleaning is more intensive, addressing areas like inside appliances, behind furniture, baseboards, and built-up grime. We recommend starting with a deep clean, then maintaining with standard cleaning."
        },
        {
            question: "Can I customize my standard cleaning service?",
            answer: "Yes! While we follow a comprehensive checklist, you can request focus on specific areas or add services like interior windows, laundry, or refrigerator cleaning."
        }
    ];

    const benefits = [
        {
            icon: Clock4,
            title: "Save 5+ Hours Per Week",
            description: "The average person spends 5-7 hours per week cleaning. Reclaim your weekends and evenings for what matters most."
        },
        {
            icon: Heart,
            title: "Better Health & Air Quality",
            description: "Regular professional cleaning reduces allergens, dust mites, and bacteria. Essential in Miami's humid environment."
        },
        {
            icon: DollarSign,
            title: "Protect Your Investment",
            description: "Regular cleaning extends the life of flooring, appliances, and fixtures. Maintenance is always cheaper than replacement."
        },
        {
            icon: Repeat,
            title: "Consistent Results",
            description: "Professional cleaners follow systematic checklists. Every visit delivers the same high-quality results."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `Why Hire a Regular Cleaning Service? Benefits Explained | ${COMPANY_NAME}`,
            description: 'Discover the benefits of recurring house cleaning services. Save time, improve health, and maintain your Miami home with professional standard cleaning.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Why Hire a Regular Cleaning Service? Benefits Explained"
                description="Discover the many benefits of hiring a recurring house cleaning service, from saving time to improving your family's health."
                slug="benefits-of-regular-cleaning-service"
                datePublished="2024-01-20"
                dateModified="2024-01-20"
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Link to="/blog" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
                            ← Back to Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Cleaning Tips
                            </span>
                            <span className="flex items-center gap-1 text-slate-400 text-sm">
                                <Clock className="w-4 h-4" /> 5 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Why Hire a Regular Cleaning Service? The Benefits Explained
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Is recurring house cleaning worth the investment? Here's why Miami homeowners are making the switch to professional cleaning.
                        </p>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 20, 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        <p className="text-xl text-slate-600 leading-relaxed">
                            Between work, family, and trying to maintain some semblance of a social life, who has time to clean? If you've ever come home exhausted only to see dishes in the sink and dust bunnies gathering in corners, you're not alone. More Miami homeowners are discovering that professional cleaning isn't a luxury—it's a lifestyle upgrade that pays dividends in time, health, and happiness.
                        </p>

                        {/* Benefits Grid */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-6">
                            The Key Benefits of Regular Cleaning Services
                        </h2>

                        <div className="grid gap-6 my-8 not-prose">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0">
                                        <benefit.icon className="w-10 h-10 text-teal-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 mb-2">{benefit.title}</h3>
                                        <p className="text-slate-600">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            The Real Cost of DIY Cleaning
                        </h2>
                        <p className="text-slate-600">
                            When you factor in the value of your time, professional cleaning often makes financial sense. Consider this: if you earn $30/hour at work and spend 5 hours weekly cleaning, that's $150 worth of your time. Professional weekly cleaning for a typical Miami home costs $100-150—meaning you break even while getting professional results and actual rest.
                        </p>
                        <p className="text-slate-600 mt-4">
                            Plus, professionals bring commercial-grade equipment and products that deliver deeper cleaning than most household supplies. They know which products work best on different surfaces, reducing the risk of damage to your finishes.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Weekly vs. Bi-Weekly: Which is Right for You?
                        </h2>
                        <p className="text-slate-600">
                            The right frequency depends on your household:
                        </p>
                        <ul className="text-slate-600 space-y-2 my-4">
                            <li><strong>Weekly cleaning</strong> is ideal for families with children, pet owners, those who entertain frequently, or anyone who wants a consistently pristine home.</li>
                            <li><strong>Bi-weekly cleaning</strong> works well for single occupants, couples without pets, or those who maintain daily tidying habits.</li>
                        </ul>
                        <p className="text-slate-600 mt-4">
                            Not sure? Start with bi-weekly service. If you find yourself wishing for more frequent visits, you can always upgrade.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            What to Expect from Professional Standard Cleaning
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
                            <div className="p-4 bg-teal-50 rounded-lg">
                                <h4 className="font-bold text-slate-900 mb-2">Every Room</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Dust all surfaces</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Vacuum/mop floors</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Empty trash</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Wipe light switches</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-teal-50 rounded-lg">
                                <h4 className="font-bold text-slate-900 mb-2">Kitchen</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Clean countertops</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Wipe appliance exteriors</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Sanitize sink</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Clean stovetop</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-teal-50 rounded-lg">
                                <h4 className="font-bold text-slate-900 mb-2">Bathrooms</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Scrub toilet</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Clean shower/tub</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Polish mirrors</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Sanitize vanity</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-teal-50 rounded-lg">
                                <h4 className="font-bold text-slate-900 mb-2">Bedrooms</h4>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Make beds</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Dust furniture</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Vacuum floors</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Organize surfaces</li>
                                </ul>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4 my-6 not-prose">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-4 bg-slate-50 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <h3 className="text-2xl font-bold mb-3">Ready to Reclaim Your Time?</h3>
                            <p className="text-teal-100 mb-6">
                                Start with a free quote and see how affordable regular cleaning can be.
                            </p>
                            <Link
                                to="/service/standard-cleaning"
                                className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                View Standard Cleaning Service
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        {/* Location Links for SEO */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                            <h3 className="font-bold text-slate-900 mb-4">Standard Cleaning Services Near You</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link to="/location/miami" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Miami
                                </Link>
                                <Link to="/location/coral-gables" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Coral Gables
                                </Link>
                                <Link to="/location/coconut-grove" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Coconut Grove
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default StandardCleaningBenefitsPage;
