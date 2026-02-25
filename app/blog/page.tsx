import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog-posts';

const pageTitle = 'Cleaning Tips & Guides | Metla House Cleaning Blog';
const pageDescription = "Expert cleaning tips, guides, and checklists from Miami's trusted house cleaning professionals. Learn how to maintain a pristine home.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: '/blog' },
    openGraph: { title: pageTitle, description: pageDescription, url: '/blog' },
    twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
};

export default function BlogPage() {
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
                                    href={`/blog/${post.slug}`}
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
