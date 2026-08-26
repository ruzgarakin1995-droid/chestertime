import React from 'react';
import { ATELIER_NAME, DISPLAY_PHONE, buildWhatsAppUrl } from '../mockData';

interface SeoCtaProps {
  title?: string;
  subtitle?: string;
  whatsappMessage: string;
  whatsappLabel?: string;
}

/**
 * Premium conversion block used on SEO landing pages (Teklif Al / WhatsApp).
 */
export const SeoCta: React.FC<SeoCtaProps> = ({
  title = 'Projeniz İçin Teklif Alın',
  subtitle = 'Model, ölçü veya fotoğraf gönderin; atölyemizden doğrudan imalatçı fiyatıyla dönüş yapalım.',
  whatsappMessage,
  whatsappLabel = "WhatsApp'tan Teklif Al",
}) => (
  <section className="mt-16 rounded-3xl bg-[#161412] text-white p-8 sm:p-12 text-center shadow-xl">
    <span className="text-[10px] tracking-[0.24em] uppercase font-semibold text-[#F3C287]">
      {ATELIER_NAME} • Bağcılar / İstanbul
    </span>
    <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mt-3">{title}</h2>
    <p className="text-sm text-stone-300 font-light mt-3 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
    <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
      <a
        href={buildWhatsAppUrl(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-7 py-3.5 rounded-full bg-[#B86B35] hover:bg-[#944D1E] transition-colors text-sm font-bold uppercase tracking-wider"
      >
        {whatsappLabel}
      </a>
      <a
        href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
        className="inline-block px-7 py-3.5 rounded-full border border-white/25 hover:border-[#F3C287] hover:text-[#F3C287] transition-colors text-sm font-bold uppercase tracking-wider"
      >
        {DISPLAY_PHONE}
      </a>
    </div>
  </section>
);
