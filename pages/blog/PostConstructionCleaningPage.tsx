import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    AlertTriangle,
    Hammer,
    Shield,
    Wind,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const PostConstructionCleaningPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How soon after construction should I schedule cleaning?",
            answer: "Schedule post-construction cleaning once all construction work is complete and contractors have done their initial rough clean. Most homeowners book 1-2 weeks before moving in or listing the property."
        },
        {
            question: "How much does post-construction cleaning cost in Miami?",
            answer: "Post-construction cleaning in Miami typically costs $0.20-0.50 per square foot, or $400-1,200+ for most homes. Final pricing depends on construction scope, debris levels, and home size."
        },
        {
            question: "How long does post-construction cleaning take?",
            answer: "Most post-construction cleanings take 6-12 hours for a team of 2-3 cleaners. Large homes or heavy construction may require multiple days. We assess each project individually."
        },
        {
            question: "What's the difference between rough and final construction cleaning?",
            answer: "Rough cleaning (done by contractors) removes bulk debris and does basic sweeping. Final cleaning (done by professional cleaners) removes fine dust, cleans all surfaces, polishes fixtures, and prepares the space for occupancy."
        },
        {
            question: "Can I do post-construction cleaning myself?",
            answer: "While possible, we don't recommend it. Construction dust contains fine particles that require professional equipment to remove properly. Without proper techniques, you'll spread dust rather than eliminate it, and may damage new finishes."
        }
    ];

    const howToSteps = [
        {
            name: "Initial Assessment",
            text: "Evaluate the scope of construction, types of materials used, and overall dust/debris levels. Create a room-by-room cleaning plan prioritizing the most affected areas."
        },
        {
            name: "Remove Large Debris",
            text: "Clear remaining construction debris, packaging materials, and leftover supplies. Sweep and vacuum bulk particles before detailed cleaning begins."
        },
        {
            name: "Top-Down Dusting",
            text: "Start with ceilings, light fixtures, and ceiling fans. Work down walls, window frames, and fixtures. Use professional vacuuming techniques to capture fine dust particles."
        },
        {
            name: "Clean Windows and Glass",
            text: "Remove protective films, clean interior and exterior glass, polish mirrors, and clean window tracks. Remove any paint spots or adhesive residue."
        },
        {
            name: "Detail Cabinets and Closets",
            text: "Clean inside and outside all cabinets, drawers, and closets. Remove sawdust, construction film residue, and any stickers or labels."
        },
        {
            name: "Sanitize Bathrooms and Kitchen",
            text: "Deep clean all fixtures, appliances, countertops, and surfaces. Remove protective coverings, clean inside appliances, and polish all hardware."
        },
        {
            name: "Floor Care",
            text: "Clean and polish all flooring types according to manufacturer specifications. Remove scuff marks, adhesive residue, and any remaining dust."
        },
        {
            name: "Final Detail and Inspection",
            text: "Touch up any missed spots, test all fixtures, and do a complete walkthrough. Ensure the space is truly move-in ready."
        }
    ];

    const cleaningTypes = [
        {
            title: "New Construction",
            description: "Complete build-out requiring removal of all construction residue, protective films, and comprehensive surface preparation.",
            timeEstimate: "8-16 hours"
        },
        {
            title: "Renovation/Remodel",
            description: "Kitchen, bathroom, or room renovation with localized debris and dust spread throughout the home.",
            timeEstimate: "4-10 hours"
        },
        {
            title: "Minor Updates",
            description: "Painting, flooring replacement, or small contractor projects with moderate dust and minimal debris.",
            timeEstimate: "3-6 hours"
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `Post-Construction Cleaning: Complete Guide for Miami Homes | ${COMPANY_NAME}`,
            description: 'Everything you need to know about post-construction cleaning in Miami. Learn when to schedule, what to expect, and how to prepare your new space.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Post-Construction Cleaning: Complete Guide for Miami Homes"
                description="A comprehensive guide to post-construction and post-renovation cleaning, including what to expect, costs, and professional tips."
                slug="post-construction-cleaning-guide"
                datePublished="2024-01-12"
                dateModified="2024-01-12"
            />
            <HowToSchema
                name="How to Clean After Construction or Renovation"
                description="Professional process for cleaning homes after construction, renovation, or remodeling work."
                totalTime="PT10H"
                supply={[
                    "Professional vacuum",
                    "Microfiber cloths",
                    "All-purpose cleaner",
                    "Glass cleaner",
                    "Degreaser",
                    "Floor cleaner appropriate for flooring type",
                    "Protective gloves",
                    "Dust masks"
                ]}
                tool={[
                    "Professional vacuum with attachments",
                    "Extension poles for high areas",
                    "Ladders",
                    "Scraper for residue",
                    "Floor polishing equipment"
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
                            <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Specialty Cleaning
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 7 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Post-Construction Cleaning: Complete Guide for Miami Homes
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Just finished a renovation? Here's everything you need to know about getting your space move-in ready.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 12, 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        <p className="text-xl text-slate-600 leading-relaxed">
                            That renovation you've been dreaming about is finally complete. New cabinets gleam, fresh paint adorns the walls, and you can't wait to enjoy your transformed space. There's just one problem: construction dust covers every surface, and that fine white powder is getting into everything. Welcome to the world of post-construction cleaning.
                        </p>

                        {/* Warning Box */}
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-8 not-prose">
                            <div className="flex gap-3">
                                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Important Safety Note</h4>
                                    <p className="text-slate-600 text-sm">Construction dust can contain silica, drywall particles, and other irritants. Always wear proper PPE (masks, gloves) and ensure adequate ventilation during cleaning.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Types of Post-Construction Cleaning
                        </h2>

                        <div className="space-y-4 my-6 not-prose">
                            {cleaningTypes.map((type, index) => (
                                <div key={index} className="p-4 bg-slate-50 rounded-xl">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-slate-900">{type.title}</h3>
                                        <span className="text-sm text-teal-600 font-medium">{type.timeEstimate}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{type.description}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            The Professional Post-Construction Cleaning Process
                        </h2>

                        <div className="space-y-4 my-8 not-prose">
                            {howToSteps.map((step, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
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
                            Why Hire Professionals for Post-Construction Cleaning?
                        </h2>

                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Professional Equipment</h4>
                                    <p className="text-slate-600 text-sm">Professional-grade vacuums and cleaning tools capture fine dust particles that standard vacuums recirculate into the air.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Shield className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Surface Protection</h4>
                                    <p className="text-slate-600 text-sm">Trained cleaners know which products are safe for new finishes, avoiding damage to fresh paint, sealers, and surfaces.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Hammer className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Construction Experience</h4>
                                    <p className="text-slate-600 text-sm">We know what construction creates and how to address each type of residue—from drywall dust to adhesive removal.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Preparing for Post-Construction Cleaning
                        </h2>
                        <ul className="text-slate-600 space-y-3 my-4">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span>Ensure all construction work is 100% complete</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span>Have contractors complete their rough clean first</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span>Ensure utilities (water, electricity) are functional</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span>Remove any remaining construction equipment</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span>Provide access codes or keys for the cleaning team</span>
                            </li>
                        </ul>

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
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Hammer className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Just Finished Renovating?</h3>
                            <p className="text-orange-100 mb-6">
                                Let our post-construction specialists handle the cleanup. Professional equipment, trained crews, and quality results.
                            </p>
                            <Link
                                to="/service/post-construction-cleaning-miami"
                                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-bold rounded hover:bg-orange-50 transition-colors"
                            >
                                View Post-Construction Service
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        {/* Location Links for SEO */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                            <h3 className="font-bold text-slate-900 mb-4">Post-Construction Cleaning Services Near You</h3>
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

export default PostConstructionCleaningPage;
