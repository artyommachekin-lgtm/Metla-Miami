import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Star,
    Users,
    Clock4,
    Shield,
    Plane,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const AirbnbCleaningGuidePage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How much should I pay for Airbnb cleaning in Miami?",
            answer: "Airbnb turnover cleaning in Miami typically costs $80-150 for studios/1BR, $120-200 for 2BR, and $180-300+ for larger properties. Rates vary based on size, condition, and turnaround time needed."
        },
        {
            question: "How fast can an Airbnb be cleaned between guests?",
            answer: "Professional cleaning teams can turn over a property in 2-4 hours depending on size. Studios take 1.5-2 hours, 2-bedrooms average 2.5-3.5 hours, and larger properties may need multiple cleaners."
        },
        {
            question: "What should be included in Airbnb turnover cleaning?",
            answer: "Turnover cleaning includes complete sanitation, fresh linens, restocking supplies, checking for damages, kitchen deep clean, bathroom sanitization, vacuuming/mopping, and guest-ready presentation."
        },
        {
            question: "Should I hire a cleaning company or individual cleaners for my Airbnb?",
            answer: "Professional cleaning companies offer reliability, backup cleaners if someone is sick, insurance, and consistent quality. Individual cleaners may be cheaper but create scheduling risks that can lead to bad reviews."
        },
        {
            question: "How do I handle same-day turnovers?",
            answer: "For same-day turnovers, set checkout time at least 4-5 hours before check-in. Have a reliable cleaning team on standby. Consider blocking the calendar the night before high-season turnovers to reduce risk."
        }
    ];

    const howToSteps = [
        {
            name: "Strip and Collect Linens",
            text: "Remove all bed linens, towels, and washable items. Check for stains or damage. Start laundry immediately or bag for off-site processing."
        },
        {
            name: "Quick Property Walkthrough",
            text: "Check for damages, forgotten items, and any immediately noticeable issues. Document anything significant with photos for the host."
        },
        {
            name: "Kitchen Deep Clean",
            text: "Empty and sanitize refrigerator, clean all appliances inside and out, scrub sink, wipe cabinets, and restock any provided supplies."
        },
        {
            name: "Bathroom Sanitization",
            text: "Thoroughly clean and disinfect all surfaces. Scrub toilet, shower, and sink. Replace toiletries, restock toilet paper, and arrange towels."
        },
        {
            name: "Dust and Surface Clean",
            text: "Dust all surfaces, wipe down furniture, clean mirrors and glass. Pay attention to nightstands, dressers, and entertainment centers."
        },
        {
            name: "Floor Care",
            text: "Vacuum all carpets and rugs. Mop hard floors. Check under furniture and in corners. Clean entryway thoroughly."
        },
        {
            name: "Stage and Present",
            text: "Make beds with crisp linens, arrange pillows decoratively, set out fresh towels, adjust lighting, and ensure the space looks inviting."
        },
        {
            name: "Final Walkthrough",
            text: "Check every light, faucet, and appliance works. Verify thermostat settings. Ensure all doors lock. Take photos for documentation."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `Airbnb Cleaning Guide: Turnover Tips for Superhost Status | ${COMPANY_NAME}`,
            description: 'Master Airbnb turnover cleaning with our comprehensive guide. Learn pro tips for fast, thorough turnovers that earn 5-star reviews from guests.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Airbnb Cleaning Guide: Turnover Tips for Superhost Status"
                description="A comprehensive guide to Airbnb turnover cleaning that helps hosts maintain Superhost status and earn 5-star cleanliness reviews."
                slug="airbnb-turnover-cleaning-guide"
                datePublished="2024-01-18"
                dateModified="2024-01-18"
            />
            <HowToSchema
                name="How to Clean Your Airbnb Between Guests"
                description="Professional step-by-step process for turning over your vacation rental between guests."
                totalTime="PT3H"
                supply={[
                    "Fresh bed linens",
                    "Clean towels",
                    "All-purpose cleaner",
                    "Disinfectant",
                    "Glass cleaner",
                    "Toilet paper and toiletries",
                    "Laundry supplies"
                ]}
                tool={[
                    "Vacuum cleaner",
                    "Mop",
                    "Cleaning caddy",
                    "Laundry bags",
                    "Inspection checklist"
                ]}
                steps={howToSteps}
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
                            <span className="bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Vacation Rentals
                            </span>
                            <span className="flex items-center gap-1 text-slate-400 text-sm">
                                <Clock className="w-4 h-4" /> 7 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Airbnb Cleaning Guide: Turnover Tips for Superhost Status
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Master the art of vacation rental turnovers and keep those 5-star reviews coming.
                        </p>
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 18, 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        <p className="text-xl text-slate-600 leading-relaxed">
                            In the world of Airbnb hosting, cleanliness isn't just important—it's everything. A single "could have been cleaner" review can tank your listing's visibility and booking rate. But flip that script with consistent 5-star cleanliness ratings, and you'll earn Superhost status, higher search rankings, and the ability to command premium rates.
                        </p>

                        {/* Why Cleanliness Matters */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-pink-50 p-4 rounded-xl text-center">
                                <Star className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">5-Star</div>
                                <div className="text-sm text-slate-600">Cleanliness = Superhost</div>
                            </div>
                            <div className="bg-pink-50 p-4 rounded-xl text-center">
                                <Users className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">72%</div>
                                <div className="text-sm text-slate-600">Check cleanliness first</div>
                            </div>
                            <div className="bg-pink-50 p-4 rounded-xl text-center">
                                <Clock4 className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">2-4 hrs</div>
                                <div className="text-sm text-slate-600">Pro turnover time</div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            The Complete Turnover Process
                        </h2>

                        <div className="space-y-4 my-8 not-prose">
                            {howToSteps.map((step, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{step.name}</h3>
                                        <p className="text-slate-600 text-sm">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Miami-Specific Vacation Rental Tips
                        </h2>
                        <ul className="text-slate-600 space-y-3 my-4">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Beach equipment:</strong> Rinse and dry beach chairs, umbrellas, and toys. Sand destroys flooring and irritates guests.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>AC filters:</strong> Check and clean regularly. Miami's humidity means buildup happens fast.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Outdoor spaces:</strong> Clean balconies, patios, and pool areas. Guests notice outdoor living spaces.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Pest prevention:</strong> Wipe down all surfaces where food is prepared. Check for signs of pests after each guest.</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            DIY vs. Professional Cleaning Services
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
                            <div className="p-4 bg-slate-50 rounded-lg">
                                <h4 className="font-bold text-slate-900 mb-3">DIY Cleaning</h4>
                                <ul className="text-sm text-slate-600 space-y-2">
                                    <li className="flex gap-2"><span className="text-green-500">✓</span> Lower per-cleaning cost</li>
                                    <li className="flex gap-2"><span className="text-green-500">✓</span> Full control</li>
                                    <li className="flex gap-2"><span className="text-red-500">✗</span> Time consuming</li>
                                    <li className="flex gap-2"><span className="text-red-500">✗</span> No backup if sick</li>
                                    <li className="flex gap-2"><span className="text-red-500">✗</span> Burnout risk</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-teal-50 rounded-lg">
                                <h4 className="font-bold text-slate-900 mb-3">Professional Service</h4>
                                <ul className="text-sm text-slate-600 space-y-2">
                                    <li className="flex gap-2"><span className="text-green-500">✓</span> Time freedom</li>
                                    <li className="flex gap-2"><span className="text-green-500">✓</span> Consistent quality</li>
                                    <li className="flex gap-2"><span className="text-green-500">✓</span> Backup cleaners</li>
                                    <li className="flex gap-2"><span className="text-green-500">✓</span> Insured service</li>
                                    <li className="flex gap-2"><span className="text-green-500">✓</span> Scalable</li>
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
                        <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Plane className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">We Specialize in Vacation Rentals</h3>
                            <p className="text-pink-100 mb-6">
                                Former property managers who understand what 5-star guests expect. Fast turnovers, reliable scheduling, hospitality-grade standards.
                            </p>
                            <Link
                                to="/service/vacation-rental-cleaning-airbnb"
                                className="inline-flex items-center px-6 py-3 bg-white text-pink-600 font-bold rounded hover:bg-pink-50 transition-colors"
                            >
                                View Vacation Rental Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        {/* Location Links for SEO */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                            <h3 className="font-bold text-slate-900 mb-4">Vacation Rental Cleaning in Your Area</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link to="/location/miami-beach" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Miami Beach
                                </Link>
                                <Link to="/location/brickell" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Brickell
                                </Link>
                                <Link to="/location/sunny-isles-beach" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Sunny Isles Beach
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default AirbnbCleaningGuidePage;
