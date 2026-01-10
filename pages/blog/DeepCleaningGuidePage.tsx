import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Droplets,
    Wind,
    SprayCan,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const DeepCleaningGuidePage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How long does a deep cleaning take?",
            answer: "A professional deep cleaning typically takes 4-8 hours depending on home size and condition. A 2-bedroom apartment averages 4-5 hours, while a 4-bedroom house may take 6-8 hours."
        },
        {
            question: "How often should I deep clean my home?",
            answer: "Most homes benefit from professional deep cleaning every 3-6 months. Homes with pets, allergies, or high traffic may need quarterly deep cleaning."
        },
        {
            question: "What's the difference between deep cleaning and regular cleaning?",
            answer: "Regular cleaning maintains surface-level cleanliness. Deep cleaning tackles built-up grime, sanitizes hidden areas, cleans inside appliances, addresses baseboards, light fixtures, and areas typically missed during routine cleaning."
        },
        {
            question: "Can I deep clean myself or should I hire professionals?",
            answer: "DIY deep cleaning is possible with our guide, but professional services offer industrial-grade equipment, eco-friendly products, and trained expertise. For first-time deep cleans or busy schedules, professional service saves significant time."
        }
    ];

    const howToSteps = [
        {
            name: "Declutter and Prepare",
            text: "Remove items from surfaces, clear counters, and pick up personal belongings. This allows access to all areas and maximizes cleaning effectiveness."
        },
        {
            name: "Dust Top to Bottom",
            text: "Start with ceiling fans, light fixtures, and top shelves. Work downward to crown molding, walls, window frames, and furniture. Use microfiber cloths to trap dust rather than spreading it."
        },
        {
            name: "Deep Clean Bathrooms",
            text: "Scrub grout, descale showerheads and faucets, sanitize toilets inside and out, clean exhaust fans, wash bath mats, and disinfect all high-touch surfaces."
        },
        {
            name: "Tackle the Kitchen",
            text: "Clean inside the oven and microwave, degrease range hood, wipe down cabinet fronts, sanitize the refrigerator interior, and deep clean the dishwasher."
        },
        {
            name: "Clean Floors Thoroughly",
            text: "Vacuum all floors including under furniture. Mop hard floors with appropriate cleaners. Steam clean carpets if possible. Don't forget baseboards and floor vents."
        },
        {
            name: "Address Windows and Mirrors",
            text: "Clean windows inside and out, including tracks and sills. Polish all mirrors and glass surfaces. Replace window coverings if needed."
        },
        {
            name: "Sanitize High-Touch Surfaces",
            text: "Disinfect door handles, light switches, remote controls, cabinet pulls, and handrails. These areas harbor the most germs and are often overlooked."
        },
        {
            name: "Final Inspection",
            text: "Walk through each room checking for missed spots. Ensure all products are stored, trash is removed, and the home smells fresh."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `Ultimate Deep Cleaning Guide for Miami Homes | ${COMPANY_NAME}`,
            description: 'Learn how to deep clean your Miami home like a professional. Step-by-step guide covering humidity challenges, room-by-room cleaning, and pro tips for lasting results.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="The Ultimate Deep Cleaning Guide for Miami Homes"
                description="Learn how to deep clean your Miami home like a professional. Our comprehensive guide covers humidity considerations, room-by-room techniques, and expert tips."
                slug="deep-cleaning-guide-miami"
                datePublished="2024-01-15"
                dateModified="2024-01-15"
            />
            <HowToSchema
                name="How to Deep Clean Your Miami Home"
                description="A professional step-by-step guide to deep cleaning your home in Miami's humid climate."
                totalTime="PT6H"
                supply={[
                    "Microfiber cloths",
                    "All-purpose cleaner",
                    "Degreaser",
                    "Bathroom cleaner",
                    "Glass cleaner",
                    "Mop and bucket",
                    "Vacuum with attachments"
                ]}
                tool={[
                    "Vacuum cleaner",
                    "Mop",
                    "Scrub brushes",
                    "Step ladder",
                    "Spray bottles"
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
                            <span className="bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Cleaning Guides
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 8 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            The Ultimate Deep Cleaning Guide for Miami Homes
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Learn how to deep clean your home like a professional, with special tips for Miami's unique climate challenges.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 15, 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        {/* Quick Answer Box for AI/GEO */}
                        <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8 not-prose">
                            <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
                            <p className="text-slate-700">
                                <strong>How to deep clean your Miami home:</strong> Start by decluttering, then dust from top to bottom (ceiling fans to baseboards).
                                Deep clean bathrooms and kitchen, including inside appliances. Address floors, windows, and high-touch surfaces.
                                In Miami's 70%+ humidity climate, pay special attention to moisture-prone areas like bathroom fans, closets, and AC vents.
                                A thorough deep clean takes 4-8 hours for a typical home, or you can hire professionals for $200-400.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Living in Miami means enjoying beautiful weather, stunning beaches, and a vibrant lifestyle. But it also means dealing with humidity, salt air, and environmental factors that can make keeping a clean home more challenging. Whether you're preparing for guests, tackling spring cleaning, or simply want a fresh start, this comprehensive guide will help you deep clean your Miami home like a professional.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Why Deep Cleaning Matters in Miami
                        </h2>
                        <p className="text-slate-600">
                            Miami's tropical climate creates unique cleaning challenges. High humidity promotes buildup in bathrooms and closets. Salt air from the ocean can leave residue on windows and outdoor surfaces. And the year-round warm weather means more time spent with windows open, allowing dust and allergens inside.
                        </p>
                        <p className="text-slate-600">
                            Regular deep cleaning—beyond your weekly tidying—addresses these issues before they become problems. It improves indoor air quality, extends the life of your furnishings, and creates a healthier living environment for your family.
                        </p>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Step-by-Step Deep Cleaning Guide
                        </h2>

                        <div className="space-y-6 my-8">
                            {howToSteps.map((step, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{step.name}</h3>
                                        <p className="text-slate-600 text-sm">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Miami-Specific Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Miami-Specific Deep Cleaning Tips
                        </h2>

                        <div className="grid gap-4 my-6">
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Combat Humidity</h4>
                                    <p className="text-slate-600 text-sm">Use a dehumidifier during and after deep cleaning. Check behind furniture and in closets for hidden buildup. Leave bathroom doors open to promote airflow.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">AC System Care</h4>
                                    <p className="text-slate-600 text-sm">Clean or replace AC filters during deep cleaning. Wipe down vents and returns. Consider professional duct cleaning annually.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <SprayCan className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Salt Air Solutions</h4>
                                    <p className="text-slate-600 text-sm">Pay extra attention to balcony doors, window tracks, and outdoor furniture. Use rust-preventive treatments on metal fixtures.</p>
                                </div>
                            </div>
                        </div>

                        {/* When to Call Professionals */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            When to Hire Professional Deep Cleaning
                        </h2>
                        <p className="text-slate-600">
                            While DIY deep cleaning is achievable, there are times when professional help makes sense:
                        </p>
                        <ul className="text-slate-600 space-y-2 my-4">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span>First deep clean in a new home or after construction</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span>Preparing for a major event or hosting guests</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span>After illness or to improve air quality for allergies</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span>Seasonal deep clean to reset your home</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span>Simply too busy to dedicate 6-8 hours to cleaning</span>
                            </li>
                        </ul>

                        {/* FAQ Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4 my-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-4 bg-slate-50 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center">
                            <h3 className="text-2xl font-bold mb-3">Need Professional Deep Cleaning?</h3>
                            <p className="text-teal-100 mb-6">
                                Let Metla House Cleaning handle your deep cleaning. Our trained professionals use hospital-grade products and follow a comprehensive 50-point checklist.
                            </p>
                            <Link
                                to="/service/deep-cleaning-miami"
                                className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Learn About Our Deep Cleaning Service
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        {/* Location Links for SEO */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Deep Cleaning Services Near You</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link to="/location/miami" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Miami
                                </Link>
                                <Link to="/location/brickell" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Brickell
                                </Link>
                                <Link to="/location/coral-gables" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Coral Gables
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default DeepCleaningGuidePage;
