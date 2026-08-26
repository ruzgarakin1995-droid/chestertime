'use client';
import React from 'react';
import Link from 'next/link';
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
              <li><Link href="/chester-koltuk" className="hover:text-white transition-colors">Chester Koltuk</Link></li>
              <li><Link href="/chester-koltuk-imalati" className="hover:text-white transition-colors">Chester Koltuk İmalatı</Link></li>
              <li><Link href="/ozel-tasarim-koltuk" className="hover:text-white transition-colors">Özel Tasarım Koltuk</Link></li>
              <li><Link href="/koltuk-doseme" className="hover:text-white transition-colors">Koltuk Döşeme &amp; Yenileme</Link></li>
              <li><Link href="/bagcilar-chester-koltuk" className="hover:text-white transition-colors">Bağcılar Chester Koltuk</Link></li>
              <li><Link href="/kirazli-koltuk-doseme" className="hover:text-white transition-colors">Kirazlı Koltuk Döşeme</Link></li>
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
            <div className="flex flex-col space-y-2.5 pt-2">
              <a
                href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, bilgi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#B86B35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#944D1E] transition-all shadow"
              >
                <span>Bizimle İletişime Geçin</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] border border-white/20 hover:border-transparent text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow group"
              >
                <svg className="w-4 h-4 text-[#F3C287] group-hover:text-white transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span>Instagram: {INSTAGRAM_HANDLE}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {ATELIER_NAME}. Tüm hakları saklıdır.</p>
          <div className="text-[11px] text-stone-400 font-light">
            <span>Bağcılar İmalat Atölyesi • Türkiye Geneli Teslimat</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
