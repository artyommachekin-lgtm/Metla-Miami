// SEO Helper utilities for dynamic meta tag management

/**
 * Updates the page's meta description dynamically
 */
export const updateMetaDescription = (description: string): void => {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', description);
    } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
    }

    // Also update Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', description);
    }
};

/**
 * Updates the canonical URL for the page
 */
export const updateCanonicalUrl = (path: string): void => {
    const baseUrl = 'https://metlahousecleaning.com';
    const fullUrl = `${baseUrl}${path}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
        canonical.setAttribute('href', fullUrl);
    }

    // Also update og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
        ogUrl.setAttribute('content', fullUrl);
    }
};

/**
 * Updates Open Graph title
 */
export const updateOgTitle = (title: string): void => {
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', title);
    }
};

/**
 * Comprehensive SEO update function
 */
export const updatePageSEO = ({
    title,
    description,
    path,
}: {
    title: string;
    description: string;
    path: string;
}): void => {
    document.title = title;
    updateMetaDescription(description);
    updateCanonicalUrl(path);
    updateOgTitle(title);
};

/**
 * Reset SEO to homepage defaults
 */
export const resetSEO = (): void => {
    document.title = 'Metla House Cleaning | Premium Cleaning Services Miami';
    updateMetaDescription('Metla House Cleaning offers premium residential cleaning services in Miami, Brickell, Coral Gables, and the Gold Coast. Fully insured, vetted professionals. Book your cleaning today!');
    updateCanonicalUrl('/');
    updateOgTitle('Metla House Cleaning | Premium Cleaning Services Miami');
};
