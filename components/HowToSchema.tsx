import React from 'react';

interface HowToStep {
    name: string;
    text: string;
    image?: string;
}

interface HowToSchemaProps {
    name: string;
    description: string;
    totalTime?: string; // ISO 8601 duration format, e.g., "PT2H" for 2 hours
    estimatedCost?: {
        currency: string;
        value: string;
    };
    supply?: string[];
    tool?: string[];
    steps: HowToStep[];
}

/**
 * Generates JSON-LD HowTo schema for guide articles
 */
const HowToSchema: React.FC<HowToSchemaProps> = ({
    name,
    description,
    totalTime,
    estimatedCost,
    supply,
    tool,
    steps
}) => {
    const schema: any = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": name,
        "description": description,
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text,
            ...(step.image && { "image": step.image })
        }))
    };

    if (totalTime) {
        schema.totalTime = totalTime;
    }

    if (estimatedCost) {
        schema.estimatedCost = {
            "@type": "MonetaryAmount",
            "currency": estimatedCost.currency,
            "value": estimatedCost.value
        };
    }

    if (supply && supply.length > 0) {
        schema.supply = supply.map(item => ({
            "@type": "HowToSupply",
            "name": item
        }));
    }

    if (tool && tool.length > 0) {
        schema.tool = tool.map(item => ({
            "@type": "HowToTool",
            "name": item
        }));
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
    );
};

export default HowToSchema;
