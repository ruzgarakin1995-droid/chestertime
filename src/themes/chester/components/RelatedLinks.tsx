import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface RelatedLink {
  href: string;
  label: string;
  description: string;
}

interface RelatedLinksProps {
  title?: string;
  links: RelatedLink[];
}

/**
 * Internal linking strip for SEO landing pages — natural anchor text,
 * connects the topic cluster (hizmet sayfaları <-> lokal sayfalar).
 */
export const RelatedLinks: React.FC<RelatedLinksProps> = ({
  title = 'İlgili Hizmetlerimiz',
  links,
}) => (
  <section className="mt-16">
    <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-6">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group rounded-2xl border border-stone-200 bg-white p-5 hover:border-[#B86B35] hover:shadow-md transition-all"
        >
          <span className="flex items-center justify-between font-semibold text-sm text-[#1C1917] group-hover:text-[#B86B35] transition-colors">
            {link.label}
            <ArrowUpRight className="w-4 h-4 text-stone-300 group-hover:text-[#B86B35] transition-colors" />
          </span>
          <span className="block mt-1.5 text-xs text-stone-500 font-light leading-relaxed">
            {link.description}
          </span>
        </Link>
      ))}
    </div>
  </section>
);
