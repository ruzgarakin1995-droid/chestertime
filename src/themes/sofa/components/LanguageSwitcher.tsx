"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'tr', label: 'Türkçe', short: 'TR', flag: 'tr' },
  { code: 'en', label: 'English', short: 'EN', flag: 'gb' },
  { code: 'de', label: 'Deutsch', short: 'DE', flag: 'de' },
  { code: 'fr', label: 'Français', short: 'FR', flag: 'fr' },
  { code: 'ru', label: 'Русский', short: 'RU', flag: 'ru' },
  { code: 'ar', label: 'العربية', short: 'AR', flag: 'sa' }
];

export const LanguageSwitcher: React.FC<{ isCompact?: boolean }> = ({ isCompact = false }) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('tr');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sayfa yuklendiginde mevcut ceviri cerezini kontrol et
    const match = document.cookie.match(/googtrans=\/tr\/([a-z]{2})/);
    if (match && match[1]) {
      setActiveLang(match[1]);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setActiveLang(lang);
    setLangDropdownOpen(false);
    
    // Google Translate dil cerezini ayarla
    document.cookie = `googtrans=/tr/${lang}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/tr/${lang}; path=/`; // Localhost destegi icin
    
    window.location.reload();
  };

  const currentLangObj = languages.find(l => l.code === activeLang) || languages[0];

  return (
    <>
      <div className="relative z-50 inline-block text-left" ref={dropdownRef}>
        {/* Dil Secim Butonu */}
        <button 
          type="button"
          onClick={() => setLangDropdownOpen(!langDropdownOpen)}
          className={`flex items-center space-x-1.5 rounded-full border border-stone-200 bg-white/90 backdrop-blur-sm text-[#1C1917] hover:border-[#9A7B56] hover:text-[#9A7B56] transition-all cursor-pointer shadow-2xs font-sans ${
            isCompact ? 'px-2 py-1 text-[11px]' : 'px-3 py-1.5 text-xs font-semibold'
          }`}
          aria-expanded={langDropdownOpen}
          aria-label="Dil Secimi"
        >
          {/* Dairesel Bayrak */}
          <div className="w-4 h-4 rounded-full overflow-hidden border border-stone-200 flex-shrink-0 shadow-2xs">
            <img 
              src={`https://flagcdn.com/${currentLangObj.flag}.svg`} 
              alt={currentLangObj.short} 
              className="w-full h-full object-cover" 
            />
          </div>
          <span className="tracking-wider uppercase font-bold text-[11px]">{currentLangObj.short}</span>
          <ChevronDown className={`w-3 h-3 text-[#78716C] transition-transform duration-200 ${langDropdownOpen ? 'rotate-180 text-[#9A7B56]' : ''}`} />
        </button>

        {/* Acilir Dil Menusu */}
        <AnimatePresence>
          {langDropdownOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden w-36 flex flex-col p-1 z-50"
            >
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => handleLanguageChange(l.code)}
                  className={`px-3 py-2 text-xs font-sans font-medium flex items-center justify-between w-full text-left rounded-xl transition-colors cursor-pointer ${
                    activeLang === l.code 
                      ? 'bg-[#1C1917] text-white shadow-xs' 
                      : 'text-[#1C1917] hover:bg-[#FAF9F6] hover:text-[#9A7B56]'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0 border border-stone-200 shadow-2xs">
                      <img src={`https://flagcdn.com/${l.flag}.svg`} alt={l.code} className="w-full h-full object-cover" />
                    </div>
                    <span>{l.label}</span>
                  </div>
                  <span className="text-[10px] font-mono opacity-60 uppercase">{l.short}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Google Translate Entegrasyon Kodlari (Gizli & CSS ile Tam Temizlenmis) */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      <style dangerouslySetInnerHTML={{__html: `
        body { top: 0 !important; }
        .skiptranslate, .goog-te-banner-frame { display: none !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
        #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
      `}} />
      <Script 
        id="google-translate-script" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement({
                  pageLanguage: 'tr',
                  includedLanguages: 'tr,en,de,fr,ru,ar',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            }
          `
        }}
      />
      <Script 
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
        strategy="afterInteractive" 
      />
    </>
  );
};

export default LanguageSwitcher;
