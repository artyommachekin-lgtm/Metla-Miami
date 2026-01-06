import React from 'react';
import { Service } from '../types';

interface ServiceSchemaProps {
    service: Service;
}

/**
 * Generates JSON-LD Service schema for a service page
 * References the main organization via @id
 */
const ServiceSchema: React.FC<ServiceSchemaProps> = ({ service }) => {
    const baseUrl = 'https://metlahousecleaning.com';

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}/service/${service.slug}#service`,
        "name": service.title,
        "description": service.shortDescription,
        "url": `${baseUrl}/service/${service.slug}`,
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "@id": `${baseUrl}/#organization`,
            "name": "Metla House Cleaning"
        },
        "areaServed": {
            "@type": "State",
            "name": "Florida",
            "containsPlace": [
                { "@type": "City", "name": "Miami" },
                { "@type": "City", "name": "Fort Lauderdale" },
                { "@type": "City", "name": "Coral Gables" }
            ]
        },
        "serviceType": service.title,
        "category": "House Cleaning",
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `${baseUrl}/booking`,
            "servicePhone": "+1-786-723-7533",
            "serviceSmsNumber": "+1-786-723-7533"
        },
        "termsOfService": `${baseUrl}/policies`,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD"
            }
        },
        "hasOfferCatalog": service.checklist ? {
            "@type": "OfferCatalog",
            "name": `${service.title} Checklist`,
            "itemListElement": Object.entries(service.checklist).map(([room, items], index) => ({
                "@type": "OfferCatalog",
                "name": room,
                "position": index + 1,
                "numberOfItems": (items as string[]).length
            }))
        } : undefined
    };

    // Remove undefined properties
    const cleanSchema = JSON.parse(JSON.stringify(schema));

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema, null, 2) }}
        />
    );
};

export default ServiceSchema;
