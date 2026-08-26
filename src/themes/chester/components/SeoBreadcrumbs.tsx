import React from 'react';
import Link from 'next/link';
import { JsonLd } from './JsonLd';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface SeoBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BASE_URL = 'https://www.chestertime.com';

/**
 * Visible breadcrumb trail + matching BreadcrumbList schema (AEO/GEO friendly).
 */
export const SeoBreadcrumbs: React.FC<SeoBreadcrumbsProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-widest text-stone-400 font-semibold">
          {items.map((item, index) => (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true" className="text-stone-300">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-[#B86B35] transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-[#B86B35]" aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={schema} />
    </>
  );
};
