import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blog-posts';
import { COMPANY_NAME } from '@/constants';
import BlogPostContent from './BlogPostContent';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return {};
  const title = `${post.title} | ${COMPANY_NAME}`;
  return {
    title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title, description: post.excerpt, url: `/blog/${slug}`,
      images: [{ url: post.image, alt: post.imageAlt }],
      type: 'article', publishedTime: post.datePublished, modifiedTime: post.dateModified,
    },
    twitter: { card: 'summary_large_image', title, description: post.excerpt },
  };
}

export default async function BlogPostRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();
  return <BlogPostContent slug={slug} />;
}
