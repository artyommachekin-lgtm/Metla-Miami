import React from 'react';

interface ArticleSchemaProps {
    title: string;
    description: string;
    slug: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
    authorType?: 'Organization' | 'Person';
    authorJobTitle?: string;
    image?: string;
}

/**
 * Generates JSON-LD Article schema for blog posts
 * Enhanced for GEO with Person author support for E-E-A-T signals
 */
const ArticleSchema: React.FC<ArticleSchemaProps> = ({
    title,
    description,
    slug,
    datePublished,
    dateModified,
    authorName = "Metla House Cleaning Team",
    authorType = "Organization",
    authorJobTitle,
    image = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200"
}) => {
    const baseUrl = 'https://metlahousecleaningmiami.com';

    // Build author object based on type
    const authorObject: any = {
        "@type": authorType,
        "name": authorName,
    };

    if (authorType === 'Person' && authorJobTitle) {
        authorObject.jobTitle = authorJobTitle;
    }

    if (authorType === 'Organization') {
        authorObject["@id"] = `${baseUrl}/#organization`;
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image,
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": authorObject,
        "publisher": {
            "@type": "Organization",
            "name": "Metla House Cleaning",
            "@id": `${baseUrl}/#organization`,
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/logo.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${slug}`
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
    );
};

export default ArticleSchema;
