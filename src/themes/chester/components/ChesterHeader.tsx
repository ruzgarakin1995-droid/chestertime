'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, MapPin, User, ShieldCheck, Lock, Phone, Instagram, Layers, Sparkles } from 'lucide-react';
import { ATELIER_NAME, DISPLAY_PHONE, buildWhatsAppUrl, BUSINESS_ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../mockData';
import { LanguageSwitcher } from '../../sofa/components/LanguageSwitcher';
import { useProducts } from '../context/ProductContext';
import { ChesterAdminLoginModal } from './ChesterAdminLoginModal';

export const ChesterHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const { isAdmin, products } = useProducts();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const categoryLinks = [
    { label: 'Kanepe Çeşitleri', href: '/kategori/kanepe-cesitleri', short: 'Kanepe', key: 'sofa' },
    { label: 'Berjer Puf Çeşitleri', href: '/kategori/berjer-puf-cesitleri', short: 'Berjer & Puf', key: 'armchair' },
    { label: 'Oturma Takımları', href: '/kategori/oturma-takimlari', short: 'Oturma Takımları', key: 'set' },
    { label: 'Köşe L Koltuk Takımları', href: '/kategori/kose-koltuk-takimlari', short: 'Köşe Takımları', key: 'corner' },
    { label: 'Tüm Modeller', href: '/kategori/tum-modeller', short: 'Tüm Modeller', key: 'all' },
  ];

  const infoLinks = [
    { label: 'Müşteri Teslimatları', href: '/#deliveries' },
    { label: 'Kumaş & Deri', href: '/#fabric-studio' },
    { label: 'İskelet & Zanaat', href: '/#craftsmanship' },
    { label: 'Atölyemiz & İletişim', href: '/#showroom' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      
      {/* 1. Dark Theme Top Announcement Bar (Desktop Only) */}
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
              <Instagram className="w-3.5 h-3.5 text-[#B86B35]" />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
            <span className="text-stone-600">•</span>
            <span className="text-stone-300">
              İletişim: <strong className="text-white font-bold">{DISPLAY_PHONE}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-stone-200/80' 
          : 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200/80 py-2.5 sm:py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            
            {/* Brand Logo & Title - Fixed Width, Never Squished */}
            <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
              <img
                src="/images/chester/chester_logo.jpg"
                alt="Chester Time Logo"
                className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-[#B86B35]/60 shadow-md group-hover:scale-105 transition-transform flex-shrink-0"
              />
              <div className="flex flex-col flex-shrink-0">
                <span className="font-serif-luxe text-xl sm:text-2xl tracking-wide text-[#1C1917] group-hover:text-[#B86B35] transition-colors font-bold uppercase leading-tight whitespace-nowrap">
                  CHESTER TIME
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.12em] uppercase font-sans text-[#B86B35] font-semibold whitespace-nowrap">
                  İmalatçıdan Doğrudan Chester
                </span>
              </div>
            </Link>

            {/* Desktop Nav - Clean, Simplified & Spacious */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 flex-shrink-0">
              <Link
                href="/kategori/kanepe-cesitleri"
                className="text-xs uppercase tracking-wider font-bold text-stone-800 hover:text-[#B86B35] transition-colors whitespace-nowrap"
              >
                Kanepeler
              </Link>
              <Link
                href="/kategori/berjer-puf-cesitleri"
                className="text-xs uppercase tracking-wider font-bold text-stone-800 hover:text-[#B86B35] transition-colors whitespace-nowrap"
              >
                Berjer & Puf
              </Link>
              <Link
                href="/kategori/kose-koltuk-takimlari"
                className="text-xs uppercase tracking-wider font-bold text-stone-800 hover:text-[#B86B35] transition-colors whitespace-nowrap"
              >
                Köşe Takımları
              </Link>
              <Link
                href="/kategori/oturma-takimlari"
                className="text-xs uppercase tracking-wider font-bold text-stone-800 hover:text-[#B86B35] transition-colors whitespace-nowrap"
              >
                Oturma Takımları
              </Link>
              <Link
                href="/kategori/tum-modeller"
                className="text-xs uppercase tracking-wider font-bold text-[#B86B35] hover:text-[#944D1E] transition-colors whitespace-nowrap flex items-center space-x-1"
              >
                <span>Tüm Katalog</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#B86B35]/10 text-[#B86B35] font-bold">
                  {products.length}
                </span>
              </Link>
              <Link
                href="/#deliveries"
                className="text-xs uppercase tracking-wider font-semibold text-stone-600 hover:text-[#B86B35] transition-colors whitespace-nowrap"
              >
                Teslimatlar
              </Link>
              <Link
                href="/#showroom"
                className="text-xs uppercase tracking-wider font-semibold text-stone-600 hover:text-[#B86B35] transition-colors whitespace-nowrap"
              >
                Atölyemiz
              </Link>
            </nav>

            {/* Right Header Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <div className="flex items-center">
                <LanguageSwitcher isCompact />
              </div>

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
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-[#1C1917] hover:bg-[#B86B35] text-white focus:outline-none transition-colors border border-stone-800 shadow-md z-50 flex-shrink-0 cursor-pointer flex items-center justify-center"
                aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative top-[62px] sm:top-[74px] mx-auto max-w-lg bg-[#FAF8F5] border-b border-stone-300 px-4 py-5 space-y-3.5 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto rounded-b-3xl">
            
            {/* Top Row: Language & Admin Quick Access */}
            <div className="flex items-center justify-between gap-2 p-2 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="scale-90 origin-left">
                <LanguageSwitcher isCompact />
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAdminModalOpen(true);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors ${
                  isAdmin
                    ? 'bg-stone-900 text-[#F3C287]'
                    : 'bg-[#B86B35] text-white'
                }`}
              >
                {isAdmin ? <ShieldCheck className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                <span>{isAdmin ? 'Yönetici Paneli' : 'Yönetici Girişi'}</span>
              </button>
            </div>

            {/* 1. KOLTUK KATEGORİLERİ */}
            <div className="bg-white rounded-2xl p-2.5 border border-stone-200 shadow-xs">
              <div className="px-3 pt-1 pb-2 flex items-center justify-between border-b border-stone-100 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B86B35] flex items-center space-x-1">
                  <Layers className="w-3 h-3" />
                  <span>KOLTUK KATEGORİLERİ</span>
                </span>
                <span className="text-[10px] text-stone-500 font-semibold">{products.length} Model</span>
              </div>

              <div className="flex flex-col space-y-1">
                {categoryLinks.map((link) => {
                  const count = link.key === 'all'
                    ? products.length
                    : products.filter(p => p.category === link.key).length;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 text-xs uppercase tracking-wider font-bold text-stone-900 hover:text-[#B86B35] hover:bg-[#FDFBF7] rounded-xl transition-colors group"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B86B35] group-hover:scale-125 transition-transform"></span>
                        <span>{link.label}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-medium">
                          {count}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#B86B35] transition-colors" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 2. ATÖLYE & HİZMETLER */}
            <div className="bg-white rounded-2xl p-2.5 border border-stone-200 shadow-xs">
              <div className="px-3 pt-1 pb-2 flex items-center justify-between border-b border-stone-100 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500 flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-[#B86B35]" />
                  <span>ATÖLYE & DETAYLAR</span>
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                {infoLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs uppercase tracking-wider font-semibold text-stone-700 hover:text-[#B86B35] hover:bg-stone-50 rounded-xl transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-2 pt-1">
              <a
                href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, koltuk modelleriniz için fiyat teklifi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-[#1C1917] hover:bg-[#B86B35] text-white text-center text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center space-x-2 transition-colors"
              >
                <span>WhatsApp İle Hızlı Fiyat Al</span>
                <ArrowUpRight className="w-4 h-4 text-[#F3C287]" />
              </a>

              <a
                href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                className="w-full py-2.5 rounded-2xl bg-white border border-stone-300 text-stone-900 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#B86B35]" />
                <span>Hemen Ara: {DISPLAY_PHONE}</span>
              </a>

              <div className="pt-1 text-center space-y-1 text-[11px] text-stone-600">
                <div>📍 {BUSINESS_ADDRESS}</div>
                <div>📸 Instagram: <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#B86B35] underline">{INSTAGRAM_HANDLE}</a></div>
              </div>
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
