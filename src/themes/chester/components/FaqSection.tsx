import React from 'react';
import { JsonLd } from './JsonLd';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  faqs: FaqItem[];
}

/**
 * Visible FAQ section (accordion) + matching FAQPage schema.
 * Single source of truth: the same array renders both the visible
 * content and the JSON-LD, so schema can never diverge from the page.
 */
export const FaqSection: React.FC<FaqSectionProps> = ({
  title = 'Sık Sorulan Sorular',
  faqs,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section className="mt-16">
      <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-6">{title}</h2>
      <div className="divide-y divide-stone-200 border-y border-stone-200">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-4">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-[15px] text-[#1C1917] group-open:text-[#B86B35] transition-colors">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="text-[#B86B35] text-xl leading-none transition-transform duration-300 group-open:rotate-45 flex-shrink-0"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-stone-600 font-light">{faq.answer}</p>
          </details>
        ))}
      </div>
      <JsonLd data={schema} />
    </section>
  );
};
