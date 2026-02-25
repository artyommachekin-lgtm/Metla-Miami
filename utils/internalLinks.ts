export const SERVICE_BLOG_MAP: Record<string, string[]> = {
    'standard-cleaning': ['benefits-of-regular-cleaning-service'],
    'deep-cleaning-miami': ['deep-cleaning-guide-miami'],
    'post-construction-cleaning-miami': ['post-construction-cleaning-guide'],
    'vacation-rental-cleaning-airbnb': ['airbnb-turnover-cleaning-guide'],
    'move-in-out-cleaning': ['move-out-cleaning-checklist'],
};

export const RELATED_POSTS_MAP: Record<string, string[]> = {
    'deep-cleaning-guide-miami': ['move-out-cleaning-checklist', 'benefits-of-regular-cleaning-service'],
    'move-out-cleaning-checklist': ['deep-cleaning-guide-miami', 'post-construction-cleaning-guide'],
    'benefits-of-regular-cleaning-service': ['deep-cleaning-guide-miami', 'airbnb-turnover-cleaning-guide'],
    'airbnb-turnover-cleaning-guide': ['deep-cleaning-guide-miami', 'benefits-of-regular-cleaning-service'],
    'post-construction-cleaning-guide': ['deep-cleaning-guide-miami', 'move-out-cleaning-checklist'],
};

export const LOCATION_TYPE_BLOG_MAP: Record<string, string[]> = {
    'Gold Coast': ['airbnb-turnover-cleaning-guide', 'deep-cleaning-guide-miami'],
    'Urban Core': ['benefits-of-regular-cleaning-service', 'move-out-cleaning-checklist'],
    'Suburban': ['deep-cleaning-guide-miami', 'benefits-of-regular-cleaning-service'],
};

export function getRelatedPostSlugs(currentSlug: string): string[] {
    return RELATED_POSTS_MAP[currentSlug] || ['deep-cleaning-guide-miami', 'benefits-of-regular-cleaning-service'];
}

export function getServiceBlogSlugs(serviceSlug: string): string[] {
    return SERVICE_BLOG_MAP[serviceSlug] || ['deep-cleaning-guide-miami'];
}

export function getLocationBlogSlugs(locationType: string): string[] {
    return LOCATION_TYPE_BLOG_MAP[locationType] || LOCATION_TYPE_BLOG_MAP['Suburban'];
}
