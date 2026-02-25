export const SITE_CONFIG = {
    companyName: "Metla House Cleaning",
    phone: "(786) 723-7533",
    phoneIntl: "+1-786-723-7533",
    email: "metlacleanteam@gmail.com",
    address: {
        street: "1221 Brickell Ave",
        city: "Miami",
        state: "FL",
        stateFullName: "Florida",
        zip: "33131",
        full: "1221 Brickell Ave, Miami, FL 33131",
    },
    coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
    },
    regional: {
        primaryCity: "Miami",
        region: "Miami-Dade County",
        counties: ["Miami-Dade County", "Broward County"],
        marketingTagline: "Gold Coast",
        cityNickname: "The Magic City",
    },
    locationTypes: {
        premium: "Coastal",
        suburban: "Suburban",
        urban: "Urban Core",
    } as const,
    climate: {
        type: "Tropical",
        averageHumidity: "75%",
        oceanName: "Atlantic Ocean",
        challenges: [
            {
                name: "Humidity & Mold",
                description: "Miami's tropical climate means constant moisture that can lead to mold and mildew in bathrooms, closets, and poorly ventilated areas.",
            },
            {
                name: "Salt Air Corrosion",
                description: "Coastal communities experience salt air that causes buildup on windows, outdoor furniture, and exterior surfaces.",
            },
            {
                name: "Hurricane Season Prep",
                description: "Post-storm cleanup and pre-storm preparation are essential for South Florida homeowners from June through November.",
            },
            {
                name: "Sand & Dust Tracking",
                description: "Beach proximity means sand gets tracked into homes constantly, requiring more frequent floor care.",
            },
        ],
        seasonalNote: "year-round warm weather with a distinct hurricane season (June-November)",
    },
    originStory: {
        enabled: true,
        originCity: "Miami",
        originDescription: "Founded by frustrated property managers who demanded perfection",
        expansionNarrative: "3+ years of trusted cleaning excellence serving Miami's diverse neighborhoods.",
    },
    baseUrl: "https://www.metlahousecleaningmiami.com",
    bookingLink: "/booking",
    analytics: { googleId: "", gtmId: "", facebookPixelId: "" },
    socialProfiles: {
        gmb: "",
        thumbtack: "",
        bbb: "",
        facebook: "https://www.facebook.com/metlacleanteam",
    },
    social: {
        ogImage: "/images/og-miami.jpg",
        ogImageWidth: 1200,
        ogImageHeight: 630,
        logoUrl: "/images/logo.png",
    },
    seo: {
        siteTitle: "Metla House Cleaning Miami | Premium House Cleaning Services",
        metaDescription: "Miami's trusted house cleaning service. From Brickell to Coral Gables, we provide deep cleaning, standard cleaning, vacation rental turnovers, and move-in/out cleaning. Fully insured professionals.",
        keywords: [
            "house cleaning Miami",
            "maid service Miami",
            "deep cleaning Miami",
            "vacation rental cleaning Miami",
            "post-construction cleaning Miami",
            "move out cleaning Miami",
            "Brickell house cleaning",
            "Coral Gables maid service",
        ],
    },
    socialProof: {
        aggregateRating: {
            ratingValue: "4.9",
            ratingCount: "150",
        },
        foundingDate: "2023",
        employeeCount: { min: 5, max: 15 },
    },
    businessHours: {
        days: "Monday - Sunday",
        open: "9:00 AM",
        close: "7:00 PM",
        display: "Mon-Sun 9am-7pm",
        daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opensTime: "09:00",
        closesTime: "19:00",
    },
    featuredNeighborhoods: [
        { name: "Brickell", slug: "brickell", descriptor: "luxury condos" },
        { name: "Coral Gables", slug: "coral-gables", descriptor: "historic estates" },
        { name: "Coconut Grove", slug: "coconut-grove", descriptor: "bohemian charm" },
        { name: "Miami Beach", slug: "miami-beach", descriptor: "oceanfront living" },
        { name: "Fort Lauderdale", slug: "fort-lauderdale", descriptor: "coastal city" },
        { name: "Aventura", slug: "aventura", descriptor: "family living" },
    ],
};

export type SiteConfig = typeof SITE_CONFIG;
export type LocationType = typeof SITE_CONFIG.locationTypes[keyof typeof SITE_CONFIG.locationTypes];
export type ClimateChallenge = typeof SITE_CONFIG.climate.challenges[number];
export type FeaturedNeighborhood = typeof SITE_CONFIG.featuredNeighborhoods[number];

export function getLocationString(): string {
    return `${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}`;
}

export function getCountiesString(): string {
    const counties = SITE_CONFIG.regional.counties;
    if (counties.length === 0) return "";
    if (counties.length === 1) return counties[0];
    if (counties.length === 2) return `${counties[0]} and ${counties[1]}`;
    return counties.slice(0, -1).join(", ") + ", and " + counties[counties.length - 1];
}

export function getRegionalHeading(): string {
    return `Serving the ${SITE_CONFIG.regional.marketingTagline} Corridor`;
}

export function getFeaturedNeighborhoodsList(): string {
    const names = SITE_CONFIG.featuredNeighborhoods.map(n => n.name);
    if (names.length === 0) return "";
    if (names.length <= 2) return names.join(" and ");
    return names.slice(0, -1).join(", ") + ", and " + names[names.length - 1];
}
