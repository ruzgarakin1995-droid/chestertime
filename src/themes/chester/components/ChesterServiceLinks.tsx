import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    href: '/chester-koltuk',
    title: 'Chester Koltuk',
    text: 'Modeller, kumaş ve deri seçenekleri, fiyat rehberi.',
  },
  {
    href: '/chester-koltuk-imalati',
    title: 'Chester Koltuk İmalatı',
    text: 'Ölçüden teslimata 9 adımlı özel üretim süreci.',
  },
  {
    href: '/ozel-tasarim-koltuk',
    title: 'Özel Tasarım Koltuk',
    text: 'Özel ölçü, kumaş ve renk ile kişiye özel üretim.',
  },
  {
    href: '/koltuk-doseme',
    title: 'Koltuk Döşeme',
    text: 'Kumaş değişimi, kaplama ve chester yenileme.',
  },
  {
    href: '/bagcilar-chester-koltuk',
    title: 'Bağcılar Atölyemiz',
    text: 'Atölye ziyareti, kartela ve yerinde teklif.',
  },
  {
    href: '/kirazli-koltuk-doseme',
    title: 'Kirazlı Döşeme Hizmeti',
    text: 'Kirazlı ve çevresine döşeme ile yenileme.',
  },
];

/**
 * Homepage internal-linking hub: connects the commercial landing pages
 * to the homepage with natural anchor text (topic cluster support).
 */
export const ChesterServiceLinks: React.FC = () => (
  <section id="hizmetler" className="py-16 sm:py-24 bg-[#FDFBF7]">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-bold text-[#B86B35]">
          Hizmetlerimiz
        </span>
        <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-[#1C1917]">
          İmalattan Döşemeye Tüm Süreç
        </h2>
        <p className="text-sm sm:text-base text-stone-500 font-light mt-4 max-w-2xl mx-auto leading-relaxed">
          Bağcılar Kirazlı&apos;daki atölyemizde chester koltuk üretimi, özel tasarım ve
          döşeme hizmetlerini tek çatı altında sunuyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group rounded-3xl border border-stone-200 bg-white p-7 hover:border-[#B86B35] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-serif-luxe text-xl font-bold text-[#1C1917] group-hover:text-[#B86B35] transition-colors">
                {service.title}
              </h3>
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#F5EBE1] text-[#B86B35] flex items-center justify-center group-hover:bg-[#B86B35] group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <p className="mt-3 text-sm text-stone-500 font-light leading-relaxed">{service.text}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
