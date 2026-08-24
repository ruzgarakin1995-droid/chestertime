'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MapPin, User, ShieldCheck, Lock } from 'lucide-react';
import { ATELIER_NAME, DISPLAY_PHONE, buildWhatsAppUrl, BUSINESS_ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../mockData';
import { LanguageSwitcher } from '../../sofa/components/LanguageSwitcher';
import { useProducts } from '../context/ProductContext';
import { ChesterAdminLoginModal } from './ChesterAdminLoginModal';

export const ChesterHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const { isAdmin } = useProducts();

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
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-stone-200/80' 
          : 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200/80 py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with Larger Mobile Size & Premium Typography */}
            <a href="#hero" className="flex items-center space-x-2.5 sm:space-x-3.5 group flex-shrink-0">
              <img
                src="/images/chester/chester_logo.jpg"
                alt="Chester Time Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#B86B35]/60 shadow-md group-hover:scale-105 transition-transform flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-serif-luxe text-xl sm:text-2xl tracking-wide text-[#1C1917] group-hover:text-[#B86B35] transition-colors font-bold uppercase leading-none">
                  CHESTER TIME
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.14em] uppercase font-sans text-[#B86B35] font-semibold mt-1">
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
            <div className="flex items-center space-x-2 sm:space-x-3">
              <LanguageSwitcher />

              {/* Desktop Admin / Profile Button */}
              <button
                onClick={() => setAdminModalOpen(true)}
                className={`hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-full text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${
                  isAdmin
                    ? 'bg-[#1C1917] text-[#F3C287] border border-[#B86B35] shadow'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                }`}
                title={isAdmin ? 'Yönetici Modu Aktif (Tıklayın)' : 'Yönetici Girişi'}
                aria-label="Yönetici Paneli"
              >
                {isAdmin ? (
                  <>
                    <ShieldCheck className="w-4 h-4 text-[#F3C287]" />
                    <span className="text-[11px] font-semibold">Yönetici</span>
                  </>
                ) : (
                  <>
                    <User className="w-4 h-4 text-stone-600" />
                    <span className="text-[11px]">Giriş</span>
                  </>
                )}
              </button>

              <a
                href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, koltuk modelleriniz hakkında katalog ve imalat fiyat listesi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#1C1917] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B86B35] transition-all duration-200 shadow-sm"
              >
                <span>Fiyat Al</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 focus:outline-none transition-colors border border-stone-200"
                aria-label="Menüyü Aç"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#B86B35]" /> : <Menu className="w-6 h-6 text-stone-900" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] sm:top-[77px] bg-[#FAF8F5] border-b border-stone-300 px-5 py-6 space-y-4 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto z-50">
          
          {/* Admin Login Quick Card in Drawer */}
          <div className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isAdmin ? 'bg-amber-100 text-amber-700' : 'bg-stone-100 text-stone-600'}`}>
                {isAdmin ? <ShieldCheck className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900">
                  {isAdmin ? 'Yönetici Modu Aktif' : 'Yönetici Girişi'}
                </p>
                <p className="text-[10px] text-stone-500">
                  {isAdmin ? 'Ürün ekleme ve düzenleme açık' : 'Katalog yönetim paneli şifresi'}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setAdminModalOpen(true);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                isAdmin
                  ? 'bg-stone-900 text-[#F3C287]'
                  : 'bg-[#B86B35] text-white'
              }`}
            >
              {isAdmin ? 'Panel' : 'Giriş Yap'}
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-1 bg-white rounded-2xl p-2 border border-stone-200 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-xs uppercase tracking-wider font-bold text-stone-800 hover:text-[#B86B35] hover:bg-stone-50 rounded-xl transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            ))}
          </div>

          {/* Action Buttons in Drawer */}
          <div className="pt-1 flex flex-col space-y-2.5">
            <a
              href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, koltuk modelleriniz için fiyat teklifi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-[#1C1917] hover:bg-[#B86B35] text-white text-center text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <span>WhatsApp İle Hızlı Fiyat Al</span>
              <ArrowUpRight className="w-4 h-4 text-[#F3C287]" />
            </a>

            <a
              href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
              className="w-full py-3 rounded-2xl bg-white border border-stone-300 text-stone-900 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>📞 Hemen Ara: {DISPLAY_PHONE}</span>
            </a>

            <div className="pt-2 text-center space-y-1 text-[11px] text-stone-600">
              <div>📍 {BUSINESS_ADDRESS}</div>
              <div>📸 Instagram: <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#B86B35] underline">{INSTAGRAM_HANDLE}</a></div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Login / Panel Modal */}
      <ChesterAdminLoginModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </header>
  );
};
