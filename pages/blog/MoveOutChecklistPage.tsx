import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Home,
    DoorOpen,
    Sparkles,
    Key,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const MoveOutChecklistPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "What happens if I don't clean before moving out?",
            answer: "Landlords typically deduct professional cleaning costs from your security deposit. This often costs more than hiring cleaners yourself due to markups. Leaving a property dirty may also affect your rental references."
        },
        {
            question: "How much does move-out cleaning cost in Miami?",
            answer: "Professional move-out cleaning in Miami typically ranges from $200-$400 for apartments and $350-$600 for houses, depending on size and condition. This is usually less than what landlords charge from deposits."
        },
        {
            question: "How far in advance should I schedule move-out cleaning?",
            answer: "Book move-out cleaning 1-2 weeks in advance, especially at month-end when demand is highest. Schedule the cleaning for the day after furniture removal and before your final walkthrough."
        },
        {
            question: "What's included in professional move-out cleaning?",
            answer: "Professional move-out cleaning includes all standard deep cleaning plus inside cabinets, appliances (oven, fridge), closets, windows, baseboards, and any areas revealed when furniture is removed."
        },
        {
            question: "Should I clean before or after moving furniture out?",
            answer: "Clean after moving furniture out. This allows access to all areas, especially spots hidden behind or under furniture. Professional cleaners need the space empty to do thorough work."
        }
    ];

    const howToSteps = [
        {
            name: "Create a Timeline",
            text: "Start cleaning 3-5 days before your move-out date. Schedule the deep cleaning for the day after furniture removal and at least one day before your final walkthrough."
        },
        {
            name: "Gather Supplies",
            text: "Stock up on all-purpose cleaner, degreaser, glass cleaner, bathroom cleaner, magic erasers, microfiber cloths, mop, vacuum, and trash bags."
        },
        {
            name: "Start with the Kitchen",
            text: "Clean inside oven, refrigerator, dishwasher, and microwave. Wipe down all cabinet fronts and interiors. Degrease range hood. Clean countertops, backsplash, and sink."
        },
        {
            name: "Deep Clean Bathrooms",
            text: "Scrub shower/tub, toilet inside and out, sink and vanity. Clean mirrors, medicine cabinet, and exhaust fan. Remove any soap scum or hard water stains."
        },
        {
            name: "Clean All Closets",
            text: "Wipe down shelves and rods. Vacuum or sweep floors. Clean any marks on walls. Don't forget the coat closet and pantry."
        },
        {
            name: "Address Walls and Doors",
            text: "Remove scuff marks with magic eraser. Fill small nail holes with spackle. Clean door frames, light switches, and outlet covers."
        },
        {
            name: "Clean Windows and Blinds",
            text: "Wash all windows inside. Clean blinds or dust curtain rods. Wipe down window sills and tracks."
        },
        {
            name: "Final Floor Cleaning",
            text: "Vacuum all floors including closets and corners. Mop hard floors. Pay attention to baseboards throughout."
        },
        {
            name: "Walk-Through Inspection",
            text: "Do a final walk-through with your checklist. Take photos of each room for your records. Check inside all cabinets and closets."
        }
    ];

    const roomChecklists = {
        kitchen: [
            "Clean inside oven and stovetop",
            "Wipe down range hood and filters",
            "Clean inside refrigerator and freezer",
            "Run empty dishwasher with cleaner",
            "Clean inside microwave",
            "Wipe all cabinet interiors",
            "Clean cabinet fronts",
            "Sanitize countertops",
            "Clean sink and faucets",
            "Wipe down backsplash",
            "Clean floors and baseboards"
        ],
        bathroom: [
            "Scrub shower/tub thoroughly",
            "Clean shower doors/curtain rod",
            "Sanitize toilet inside and out",
            "Clean sink and vanity",
            "Polish faucets and fixtures",
            "Clean mirrors",
            "Wipe down exhaust fan",
            "Clean medicine cabinet",
            "Sweep and mop floors",
            "Clean baseboards"
        ],
        bedroom: [
            "Dust ceiling fan and light fixtures",
            "Clean inside closet (shelves, rod)",
            "Wipe down window sills",
            "Clean windows inside",
            "Remove marks from walls",
            "Clean door and door frame",
            "Vacuum floors and closet",
            "Clean baseboards"
        ],
        livingAreas: [
            "Dust all surfaces and fixtures",
            "Clean windows inside",
            "Wipe window sills and blinds",
            "Clean light switches and outlets",
            "Remove wall marks",
            "Clean front door inside",
            "Vacuum or mop all floors",
            "Clean baseboards throughout"
        ]
    };

    useEffect(() => {
        updatePageSEO({
            title: `Complete Move-Out Cleaning Checklist | ${COMPANY_NAME}`,
            description: 'Get your full security deposit back with our comprehensive move-out cleaning checklist. Room-by-room guide with pro tips for Miami renters.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Complete Move-Out Cleaning Checklist: Get Your Deposit Back"
                description="A comprehensive move-out cleaning checklist to ensure you get your full security deposit back. Room-by-room guide with professional tips."
                slug="move-out-cleaning-checklist"
                datePublished="2024-01-10"
                dateModified="2024-01-10"
            />
            <HowToSchema
                name="How to Clean Your Apartment Before Moving Out"
                description="Step-by-step guide to thoroughly clean your rental before moving out and get your full security deposit returned."
                totalTime="PT8H"
                supply={[
                    "All-purpose cleaner",
                    "Degreaser",
                    "Glass cleaner",
                    "Bathroom cleaner",
                    "Magic erasers",
                    "Microfiber cloths",
                    "Spackle and putty knife",
                    "Trash bags"
                ]}
                tool={[
                    "Vacuum cleaner",
                    "Mop and bucket",
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
                                Checklists
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 6 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Complete Move-Out Cleaning Checklist: Get Your Deposit Back
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Moving out of your Miami rental? Use this comprehensive checklist to ensure you get your full security deposit returned.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 10, 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Moving is stressful enough without worrying about your security deposit. In Miami's competitive rental market, deposits often equal one to two months' rent—money you'll want back. The key to getting your full deposit returned? A thorough move-out cleaning that leaves your unit in pristine condition.
                        </p>
                        <p className="text-slate-600 mt-4">
                            This comprehensive checklist covers every area your landlord will inspect. Whether you're DIY cleaning or hiring professionals, use this guide to ensure nothing is missed.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-teal-50 p-4 rounded-xl text-center">
                                <Key className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">$1,500+</div>
                                <div className="text-sm text-slate-600">Avg. Miami deposit</div>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-xl text-center">
                                <Home className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">6-8 hrs</div>
                                <div className="text-sm text-slate-600">DIY time needed</div>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-xl text-center">
                                <Sparkles className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">$200-400</div>
                                <div className="text-sm text-slate-600">Pro cleaning cost</div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Move-Out Cleaning Process
                        </h2>

                        <div className="space-y-4 my-8 not-prose">
                            {howToSteps.map((step, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{step.name}</h3>
                                        <p className="text-slate-600 text-sm">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Room-by-Room Checklists */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-6">
                            Room-by-Room Checklist
                        </h2>

                        {/* Kitchen */}
                        <div className="my-6 p-6 bg-orange-50 rounded-xl not-prose">
                            <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🍳</span> Kitchen
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-2">
                                {roomChecklists.kitchen.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bathroom */}
                        <div className="my-6 p-6 bg-blue-50 rounded-xl not-prose">
                            <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🚿</span> Bathroom(s)
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-2">
                                {roomChecklists.bathroom.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bedroom */}
                        <div className="my-6 p-6 bg-purple-50 rounded-xl not-prose">
                            <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🛏️</span> Bedroom(s)
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-2">
                                {roomChecklists.bedroom.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Living Areas */}
                        <div className="my-6 p-6 bg-green-50 rounded-xl not-prose">
                            <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🛋️</span> Living Areas
                            </h3>
                            <ul className="grid md:grid-cols-2 gap-2">
                                {roomChecklists.livingAreas.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pro Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Pro Tips for Getting Your Deposit Back
                        </h2>
                        <ul className="text-slate-600 space-y-3 my-4">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Document everything:</strong> Take photos of each room before and after cleaning.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Request a pre-inspection:</strong> Ask your landlord for a walkthrough before your final move-out date.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Keep receipts:</strong> If you hire professional cleaners, keep the receipt as proof of cleaning.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Check your lease:</strong> Review specific cleaning requirements in your rental agreement.</span>
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
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <DoorOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Let Us Handle Your Move-Out Cleaning</h3>
                            <p className="text-teal-100 mb-6">
                                Too busy packing? Our professional move-out cleaning service helps you leave your rental spotless and stress-free.
                            </p>
                            <Link
                                to="/service/move-in-out-cleaning"
                                className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Learn About Move-Out Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        {/* Location Links for SEO */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                            <h3 className="font-bold text-slate-900 mb-4">Move-Out Cleaning Services Near You</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link to="/location/miami" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Miami
                                </Link>
                                <Link to="/location/brickell" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Brickell
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

export default MoveOutChecklistPage;
