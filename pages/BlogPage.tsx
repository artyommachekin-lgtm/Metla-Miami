import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles, Home, Building2, Plane, Hammer } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import { updatePageSEO, resetSEO } from '../utils/seo';

// Blog post data
export const BLOG_POSTS = [
    {
        slug: 'deep-cleaning-guide-miami',
        title: 'The Ultimate Deep Cleaning Guide for Miami Homes',
        excerpt: 'Learn how to deep clean your Miami home like a professional. Our step-by-step guide covers everything from tackling humidity-related issues to sanitizing every room.',
        category: 'Cleaning Guides',
        readTime: '8 min read',
        datePublished: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp',
        icon: Sparkles
    },
    {
        slug: 'move-out-cleaning-checklist',
        title: 'Complete Move-Out Cleaning Checklist: Get Your Deposit Back',
        excerpt: 'Moving out? Use our comprehensive cleaning checklist to ensure you get your full security deposit back. Room-by-room guide with pro tips.',
        category: 'Checklists',
        readTime: '6 min read',
        datePublished: '2024-01-10',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&fm=webp',
        icon: Building2
    },
    {
        slug: 'benefits-of-regular-cleaning-service',
        title: 'Why Hire a Regular Cleaning Service? The Benefits Explained',
        excerpt: 'Discover the many benefits of recurring house cleaning services—from saving time to improving your family\'s health and protecting your investment.',
        category: 'Cleaning Tips',
        readTime: '5 min read',
        datePublished: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&fm=webp',
        icon: Home
    },
    {
        slug: 'airbnb-turnover-cleaning-guide',
        title: 'Airbnb Cleaning Guide: Turnover Tips for Superhost Status',
        excerpt: 'Master the art of vacation rental turnovers with our comprehensive guide. Learn pro tips for fast, thorough cleaning that earns 5-star reviews.',
        category: 'Vacation Rentals',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&fm=webp',
        icon: Plane
    },
    {
        slug: 'post-construction-cleaning-guide',
        title: 'Post-Construction Cleaning: Complete Guide for Miami Homes',
        excerpt: 'Just finished a renovation? Here\'s everything you need to know about getting construction dust out and your space move-in ready.',
        category: 'Specialty Cleaning',
        readTime: '7 min read',
        datePublished: '2024-01-12',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&fm=webp',
        icon: Hammer
    }
];

const BlogPage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        updatePageSEO({
            title: `Cleaning Tips & Guides | ${COMPANY_NAME} Blog`,
            description: 'Expert cleaning tips, guides, and checklists from Miami\'s trusted house cleaning professionals. Learn how to maintain a pristine home.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        Cleaning Tips & Expert Guides
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Professional insights and practical advice for keeping your Miami home spotless.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-8">
                            {BLOG_POSTS.map((post) => (
                                <Link
                                    key={post.slug}
                                    to={`/blog/${post.slug}`}
                                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all flex flex-col md:flex-row"
                                >
                                    <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                            width={800}
                                            height={533}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-600 mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <span className="mt-4 text-teal-700 font-medium inline-flex items-center">
                                            Read article <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                        Need Professional Help?
                    </h2>
                    <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                        Let our expert team handle the cleaning while you focus on what matters most.
                    </p>
                    <Link
                        to="/booking"
                        className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-bold rounded hover:bg-teal-700 transition-colors"
                    >
                        Get a Free Quote
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
