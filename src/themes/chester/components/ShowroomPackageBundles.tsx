'use client';
import React from 'react';
import { Crown, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { buildWhatsAppUrl, ATELIER_NAME } from '../mockData';

export const ShowroomPackageBundles: React.FC = () => {
  const bundles = [
    {
      title: "Grand Manor Chester Salon Paketi",
      subtitle: "Büyük Villa & Rezidans Salonları İçin",
      includes: [
        "1 Adet Lord Chesterfield 4'lü (280 cm, Antik Konyak)",
        "2 Adet Kensington Kulaklı Berjer (Hakiki Deri)",
        "1 Adet Deri Kapitone Puf Orta Sehpa (120 × 80 cm)",
        "4 Adet Saf Kaz Tüyü Kırlent Seti"
      ],
      price: "118.000 ₺",
      badge: "En Çok Tercih Edilen Paket",
      isPopular: true
    },
    {
      title: "Milano Kadife & Mermer Paketi",
      subtitle: "Modern Lüks Rezidans Kombinasyonu",
      includes: [
        "1 Adet Victoria Zümrüt Yeşili 3'lü Chester (240 cm)",
        "2 Adet Döner Tablalı Modern Berjer",
        "1 Adet Calacatta Mermer İkili Orta Sehpa Seti",
        "Leke Tutmaz İtalyan Kumaş Koruma Kiti"
      ],
      price: "96.000 ₺",
      badge: "Yeni Sezon Konsepti",
      isPopular: false
    }
  ];

  return (
    <section id="bundles" className="py-20 lg:py-24 bg-[#161412] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-[11px] font-sans uppercase tracking-widest mb-3 border border-[#D4AF37]/30">
            <Crown className="w-3.5 h-3.5" />
            <span>Showroom Özel Salon Paketleri</span>
          </div>
          <h2 className="font-serif-luxe text-3xl sm:text-4xl text-white mb-3">
            Eksiksiz Chesterfield Salon Kombinasyonları
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light">
            Uyumlu berjer, sehpa ve kırlentlerle bir bütün olarak tasarlanmış komple showroom paketleri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {bundles.map((bundle, i) => (
            <div
              key={i}
              className={`p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 ${
                bundle.isPopular
                  ? 'bg-[#1F1C18] border-[#B89547] shadow-2xl ring-1 ring-[#B89547]'
                  : 'bg-[#1A1815] border-white/10'
              }`}
            >
              {bundle.isPopular && (
                <span className="absolute -top-3 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#B89547] to-[#8C6624] text-[#0D0C0A] text-[10px] font-bold uppercase tracking-wider shadow">
                  {bundle.badge}
                </span>
              )}

              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  {bundle.subtitle}
                </span>
                <h3 className="font-serif-luxe text-2xl text-white mb-6">
                  {bundle.title}
                </h3>

                <div className="space-y-3 mb-8">
                  {bundle.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-stone-300">
                      <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
                    Komple Paket Fiyatı
                  </span>
                  <span className="font-serif-luxe text-3xl font-bold text-[#D4AF37]">
                    {bundle.price}
                  </span>
                </div>

                <a
                  href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, "${bundle.title}" için özel sipariş vermek ve showroom randevusu oluşturmak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#B89547] to-[#A86532] text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Paket Teklifi Al</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
