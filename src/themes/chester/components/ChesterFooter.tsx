'use client';
import React from 'react';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { ATELIER_NAME, ATELIER_TAGLINE, DISPLAY_PHONE, BUSINESS_ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL, buildWhatsAppUrl } from '../mockData';

export const ChesterFooter: React.FC = () => {
  return (
    <footer className="bg-[#141210] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/chester/chester_logo.jpg"
                alt="Chester Time Logo"
                className="w-12 h-12 rounded-full object-cover border border-[#F3C287]/40 shadow-md"
              />
              <div>
                <span className="font-serif-luxe text-2xl text-white font-bold tracking-wider block">
                  CHESTER TIME
                </span>
                <span className="text-[9px] tracking-[0.16em] uppercase font-sans text-[#F3C287] font-semibold block">
                  İmalatçıdan Chester Koltuk
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              {ATELIER_TAGLINE}. Masif gürgen iskelet, silinebilir 1. sınıf kumaşlar ve usta işi el kapitonesi.
            </p>
            <div className="text-[11px] text-[#F3C287] font-semibold uppercase tracking-wider">
              10 Yıl Masif İskelet Garantisi • İmalatçı Fiyatı
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3C287]">
              Modeller
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li><a href="#vitrin" className="hover:text-white transition-colors">Dyna Kanepe</a></li>
              <li><a href="#vitrin" className="hover:text-white transition-colors">Klasik Taba Chester</a></li>
              <li><a href="#vitrin" className="hover:text-white transition-colors">Bordo Chester Koltuk</a></li>
              <li><a href="#vitrin" className="hover:text-white transition-colors">Berjer & Puf Seti</a></li>
            </ul>
          </div>

          {/* Standards */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3C287]">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li><a href="#fabric-studio" className="hover:text-white transition-colors">Kumaş & Deri Kartelası</a></li>
              <li><a href="#deliveries" className="hover:text-white transition-colors">Müşteri Teslimatları</a></li>
              <li><a href="#craftsmanship" className="hover:text-white transition-colors">Masif Gürgen İskelet</a></li>
              <li><a href="#showroom" className="hover:text-white transition-colors">Atölye Ziyareti</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3C287]">
              İletişim & Atölye
            </h4>
            <p className="text-xs text-stone-400 font-light">
              📍 {BUSINESS_ADDRESS}
            </p>
            <p className="text-xs text-stone-300 font-semibold">
              📞 {DISPLAY_PHONE}
            </p>
            <a
              href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, bilgi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#B86B35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#944D1E] transition-all mt-2 shadow"
            >
              <span>Bizimle İletişime Geçin</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {ATELIER_NAME}. Tüm hakları saklıdır.</p>
          <div className="flex items-center space-x-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#F3C287] transition-colors flex items-center space-x-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
