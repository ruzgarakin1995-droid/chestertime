'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import { ATELIER_NAME, DISPLAY_PHONE, buildWhatsAppUrl, BUSINESS_ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../mockData';
import { LanguageSwitcher } from '../../sofa/components/LanguageSwitcher';

export const ChesterHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ürün Vitrini', href: '#vitrin' },
    { label: 'Tüm Koleksiyon', href: '#collection' },
    { label: 'Müşteri Teslimatları', href: '#deliveries' },
    { label: 'Kumaş & Deri', href: '#fabric-studio' },
    { label: 'İskelet & Zanaat', href: '#craftsmanship' },
    { label: 'Atölyemiz & İletişim', href: '#showroom' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      
      {/* 1. Dark Theme Top Announcement Bar (Always Clean & Dark) */}
      <div className="hidden lg:block bg-[#161412] text-stone-300 border-b border-white/10 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-medium">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-[#F3C287] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Bağcılar İmalat Atölyemiz Açık (09:00 - 19:30)</span>
            </span>
            <span className="text-stone-600">•</span>
            <span className="flex items-center space-x-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#B86B35]" />
              <span>Bağcılar Kirazlı Mah. 1145 Sok. No: 4/A, İstanbul</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1.5 text-stone-300 hover:text-[#F3C287] transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#B86B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
            <span className="text-stone-600">•</span>
            <span className="text-stone-300">
              İletişim & WhatsApp: <strong className="text-white font-bold">{DISPLAY_PHONE}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200/80' 
          : 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200/80 py-3.5 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with Image and Bold Typography */}
            <a href="#hero" className="flex items-center space-x-3 group">
              <img
                src="/images/chester/chester_logo.jpg"
                alt="Chester Time Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-[#B86B35]/40 shadow-sm group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-serif-luxe text-xl sm:text-2xl tracking-wide text-[#1C1917] group-hover:text-[#B86B35] transition-colors font-bold uppercase leading-none">
                  CHESTER TIME
                </span>
                <span className="text-[9px] tracking-[0.16em] uppercase font-sans text-[#B86B35] font-semibold mt-1">
                  İmalatçıdan Doğrudan Chester Koltuk
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-wider font-bold text-stone-700 hover:text-[#B86B35] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <LanguageSwitcher />

              <a
                href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, koltuk modelleriniz hakkında katalog ve imalat fiyat listesi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#1C1917] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B86B35] transition-all duration-200 shadow-sm"
              >
                <span>Fiyat Al</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-800 hover:text-black focus:outline-none"
                aria-label="Menüyü Aç"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider font-semibold text-stone-800 hover:text-[#B86B35] py-1.5 border-b border-stone-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-2.5">
            <a
              href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, koltuk modelleriniz için fiyat teklifi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#1C1917] text-white text-center text-xs font-bold uppercase tracking-wider"
            >
              WhatsApp İle Fiyat Al
            </a>
            <div className="text-[11px] text-stone-500 text-center">
              📍 {BUSINESS_ADDRESS}
            </div>
            <div className="text-[11px] text-stone-500 text-center">
              📸 Instagram: {INSTAGRAM_HANDLE}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
