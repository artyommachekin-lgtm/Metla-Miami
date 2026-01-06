import React from 'react';

interface SpeakableSchemaProps {
    cssSelectors?: string[];
    xpaths?: string[];
}

/**
 * Generates JSON-LD Speakable schema for voice assistant optimization
 * This helps AI voice assistants like Google Assistant, Alexa, and Siri
 * identify which parts of the page to read aloud when answering questions.
 */
const SpeakableSchema: React.FC<SpeakableSchemaProps> = ({
    cssSelectors = ['.quick-answer', '.definition-box', 'h1', '.summary-box'],
    xpaths = []
}) => {
    const schema: any = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "speakable": {
            "@type": "SpeakableSpecification"
        }
    };

    if (cssSelectors.length > 0) {
        schema.speakable.cssSelector = cssSelectors;
    }

    if (xpaths.length > 0) {
        schema.speakable.xpath = xpaths;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
    );
};

export default SpeakableSchema;
