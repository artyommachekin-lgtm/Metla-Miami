export interface BlogPostAuthor {
    name: string;
    slug: string;
    role: string;
    bio: string;
}

export const DEFAULT_AUTHOR: BlogPostAuthor = {
    name: 'Art Machekin',
    slug: 'art-machekin',
    role: 'Founder',
    bio: 'Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home.',
};

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    datePublished: string;
    dateModified: string;
    image: string;
    imageAlt: string;
    iconName: string;
    author: BlogPostAuthor;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'deep-cleaning-guide-miami',
        title: 'The Ultimate Deep Cleaning Guide for Miami Homes',
        excerpt: 'Learn how to deep clean your Miami home like a professional. Our step-by-step guide covers everything from tackling humidity-related issues to sanitizing every room.',
        category: 'Cleaning Guides',
        readTime: '8 min read',
        datePublished: '2024-01-15',
        dateModified: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp',
        imageAlt: 'Professional deep cleaning a Miami home',
        iconName: 'Sparkles',
        author: DEFAULT_AUTHOR,
    },
    {
        slug: 'move-out-cleaning-checklist',
        title: 'Complete Move-Out Cleaning Checklist: Get Your Deposit Back',
        excerpt: 'Moving out? Use our comprehensive cleaning checklist to ensure you get your full security deposit back. Room-by-room guide with pro tips.',
        category: 'Checklists',
        readTime: '6 min read',
        datePublished: '2024-01-10',
        dateModified: '2024-01-10',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&fm=webp',
        imageAlt: 'Move-out cleaning checklist for Miami apartments',
        iconName: 'Building2',
        author: DEFAULT_AUTHOR,
    },
    {
        slug: 'benefits-of-regular-cleaning-service',
        title: 'Why Hire a Regular Cleaning Service? The Benefits Explained',
        excerpt: 'Discover the many benefits of recurring house cleaning services—from saving time to improving your family\'s health and protecting your investment.',
        category: 'Cleaning Tips',
        readTime: '5 min read',
        datePublished: '2024-01-20',
        dateModified: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&fm=webp',
        imageAlt: 'Benefits of regular house cleaning service',
        iconName: 'Home',
        author: DEFAULT_AUTHOR,
    },
    {
        slug: 'airbnb-turnover-cleaning-guide',
        title: 'Airbnb Cleaning Guide: Turnover Tips for Superhost Status',
        excerpt: 'Master the art of vacation rental turnovers with our comprehensive guide. Learn pro tips for fast, thorough cleaning that earns 5-star reviews.',
        category: 'Vacation Rentals',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        dateModified: '2024-01-18',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&fm=webp',
        imageAlt: 'Airbnb vacation rental cleaning guide',
        iconName: 'Plane',
        author: DEFAULT_AUTHOR,
    },
    {
        slug: 'post-construction-cleaning-guide',
        title: 'Post-Construction Cleaning: Complete Guide for Miami Homes',
        excerpt: 'Just finished a renovation? Here\'s everything you need to know about getting construction dust out and your space move-in ready.',
        category: 'Specialty Cleaning',
        readTime: '7 min read',
        datePublished: '2024-01-12',
        dateModified: '2024-01-12',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&fm=webp',
        imageAlt: 'Post-construction cleaning in Miami',
        iconName: 'Hammer',
        author: DEFAULT_AUTHOR,
    },
];
