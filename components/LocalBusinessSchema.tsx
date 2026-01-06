import React from 'react';
import { COMPANY_NAME, PHONE_NUMBER_INTL, COMPANY_EMAIL, COMPANY_ADDRESS, BUSINESS_HOURS } from '../constants';
import { Location } from '../types';

interface LocalBusinessSchemaProps {
    location: Location;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ location }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://metlahousecleaning.com/location/${location.slug}`,
        "name": `${COMPANY_NAME} - ${location.name}`,
        "image": "https://metlahousecleaning.com/logo.png",
        "telephone": PHONE_NUMBER_INTL,
        "email": COMPANY_EMAIL,
        "url": `https://metlahousecleaning.com/location/${location.slug}`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_ADDRESS.street,
            "addressLocality": COMPANY_ADDRESS.city,
            "addressRegion": COMPANY_ADDRESS.state,
            "postalCode": COMPANY_ADDRESS.zip,
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.7587,
            "longitude": -80.1918
        },
        "areaServed": {
            "@type": "City",
            "name": location.name,
            "containedInPlace": {
                "@type": "State",
                "name": "Florida"
            }
        },
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 25.7587,
                "longitude": -80.1918
            },
            "geoRadius": "50000"
        },
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": BUSINESS_HOURS.open.replace(' AM', ':00'),
            "closes": BUSINESS_HOURS.close.replace(' PM', ':00')
        },
        "sameAs": [
            "https://metlahousecleaning.com"
        ],
        "parentOrganization": {
            "@type": "Organization",
            "name": COMPANY_NAME,
            "@id": "https://metlahousecleaning.com/#organization"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `House Cleaning Services in ${location.name}`,
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Standard Cleaning",
                        "description": "Recurring maintenance cleaning service"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Deep Cleaning",
                        "description": "Comprehensive deep cleaning service"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Move-In/Move-Out Cleaning",
                        "description": "Complete cleaning for moving transitions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Vacation Rental Cleaning",
                        "description": "Turnover cleaning for Airbnb and vacation rentals"
                    }
                }
            ]
        }
    };

    // Add ZIP codes to areaServed if available
    if (location.zipCodes && location.zipCodes.length > 0) {
        (schema.areaServed as any).postalCode = location.zipCodes;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default LocalBusinessSchema;
