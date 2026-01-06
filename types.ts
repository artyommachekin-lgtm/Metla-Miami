export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;  // Changed from icon: LucideIcon to string
  benefits: string[];
  slug: string;
  checklist?: Record<string, string[]>;
  focusPoints?: {
    title: string;
    description: string;
    iconName?: string;  // Changed from icon to iconName
  }[];
  suitability?: {
    title?: string;
    text: string;
    points: string[];
    footer: string;
  };
}

export interface Location {
  name: string;
  slug: string;
  description: string;
  detailedContent: string;
  keywords: string[];
  type: 'Gold Coast' | 'Suburban' | 'Urban Core';
  popularServiceIds?: string[];
  // Enhanced content fields
  tagline?: string;
  housingTypes?: string[];
  landmarks?: string[];
  neighborhoods?: string[];
  cleaningChallenges?: {
    title: string;
    description: string;
  }[];
  propertyManagerContent?: string;
  zipCodes?: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}