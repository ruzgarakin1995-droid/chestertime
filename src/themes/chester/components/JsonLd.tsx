import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Injects a JSON-LD structured data script into the page.
 * Keeps schema markup declarative and colocated with page content.
 */
export const JsonLd: React.FC<JsonLdProps> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
