import React from 'react';
import { SITE_CONFIG } from '../src/config/site-config';

const HomeSchema: React.FC = () => {
    const baseUrl = SITE_CONFIG.baseUrl;
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#organization`,
        "name": SITE_CONFIG.companyName,
        "alternateName": `${SITE_CONFIG.companyName} Miami`,
        "url": `${baseUrl}/`,
        "logo": { "@type": "ImageObject", "url": `${baseUrl}${SITE_CONFIG.social.logoUrl}`, "width": 512, "height": 512 },
        "image": `${baseUrl}${SITE_CONFIG.social.ogImage}`,
        "description": SITE_CONFIG.seo.metaDescription,
        "telephone": SITE_CONFIG.phoneIntl,
        "email": SITE_CONFIG.email,
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Cash, Credit Card, Debit Card",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": SITE_CONFIG.address.street,
            "addressLocality": SITE_CONFIG.address.city,
            "addressRegion": SITE_CONFIG.address.state,
            "postalCode": SITE_CONFIG.address.zip,
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": SITE_CONFIG.coordinates.latitude,
            "longitude": SITE_CONFIG.coordinates.longitude
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": SITE_CONFIG.businessHours.daysOfWeek,
            "opens": SITE_CONFIG.businessHours.opensTime,
            "closes": SITE_CONFIG.businessHours.closesTime
        },
        "foundingDate": SITE_CONFIG.socialProof.foundingDate,
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": SITE_CONFIG.socialProof.employeeCount.min,
            "maxValue": SITE_CONFIG.socialProof.employeeCount.max
        },
        "areaServed": [
            { "@type": "City", "name": SITE_CONFIG.address.city },
            { "@type": "AdministrativeArea", "name": SITE_CONFIG.regional.region }
        ],
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": SITE_CONFIG.coordinates.latitude,
                "longitude": SITE_CONFIG.coordinates.longitude
            },
            "geoRadius": "50000"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": SITE_CONFIG.socialProof.aggregateRating.ratingValue,
            "reviewCount": SITE_CONFIG.socialProof.aggregateRating.ratingCount,
            "bestRating": "5", "worstRating": "1"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "House Cleaning Services in Miami",
            "itemListElement": [
                {
                    "@type": "OfferCatalog", "name": "Residential Cleaning",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Cleaning", "url": `${baseUrl}/service/standard-cleaning`, "serviceType": "Standard House Cleaning", "provider": { "@id": `${baseUrl}/#organization` }, "areaServed": { "@type": "City", "name": "Miami" } } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep Cleaning", "url": `${baseUrl}/service/deep-cleaning-miami`, "serviceType": "Deep House Cleaning", "provider": { "@id": `${baseUrl}/#organization` }, "areaServed": { "@type": "City", "name": "Miami" } } },
                    ]
                },
                {
                    "@type": "OfferCatalog", "name": "Specialty Cleaning",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Move-In / Move-Out Cleaning", "url": `${baseUrl}/service/move-in-out-cleaning`, "serviceType": "Move In Move Out Cleaning", "provider": { "@id": `${baseUrl}/#organization` }, "areaServed": { "@type": "City", "name": "Miami" } } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vacation Rental Cleaning", "url": `${baseUrl}/service/vacation-rental-cleaning-airbnb`, "serviceType": "Vacation Rental Turnover Cleaning", "provider": { "@id": `${baseUrl}/#organization` }, "areaServed": { "@type": "City", "name": "Miami" } } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post-Construction Cleaning", "url": `${baseUrl}/service/post-construction-cleaning-miami`, "serviceType": "Post Construction Cleaning", "provider": { "@id": `${baseUrl}/#organization` }, "areaServed": { "@type": "City", "name": "Miami" } } },
                    ]
                }
            ]
        },
        "knowsAbout": ["House Cleaning", "Deep Cleaning", "Maid Service", "Vacation Rental Cleaning", "Post-Construction Cleaning", "Move-In Move-Out Cleaning", "Residential Cleaning", "Eco-Friendly Cleaning"],
        "slogan": "Miami's Trusted House Cleaning Service",
        "sameAs": [
            ...(SITE_CONFIG.socialProfiles.gmb ? [SITE_CONFIG.socialProfiles.gmb] : []),
            ...(SITE_CONFIG.socialProfiles.facebook ? [SITE_CONFIG.socialProfiles.facebook] : []),
        ],
        "potentialAction": {
            "@type": "ReserveAction",
            "target": { "@type": "EntryPoint", "urlTemplate": `${baseUrl}/booking`, "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"] },
            "result": { "@type": "Reservation", "name": "Book a Cleaning" }
        }
    };

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

export default HomeSchema;
