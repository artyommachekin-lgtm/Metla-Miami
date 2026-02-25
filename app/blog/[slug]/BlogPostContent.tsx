'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const blogComponents: Record<string, React.ComponentType> = {
  'deep-cleaning-guide-miami': dynamic(() => import('@/content/blog/DeepCleaningGuidePage')),
  'move-out-cleaning-checklist': dynamic(() => import('@/content/blog/MoveOutChecklistPage')),
  'benefits-of-regular-cleaning-service': dynamic(() => import('@/content/blog/StandardCleaningBenefitsPage')),
  'airbnb-turnover-cleaning-guide': dynamic(() => import('@/content/blog/AirbnbCleaningGuidePage')),
  'post-construction-cleaning-guide': dynamic(() => import('@/content/blog/PostConstructionCleaningPage')),
};

const BlogPostContent: React.FC<{ slug: string }> = ({ slug }) => {
  const Component = blogComponents[slug];
  if (!Component) return null;
  return <Component />;
};

export default BlogPostContent;
