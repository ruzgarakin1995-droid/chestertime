'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { ATELIER_NAME, ATELIER_TAGLINE, DISPLAY_PHONE, buildWhatsAppUrl, BUSINESS_ADDRESS } from '../mockData';

export const ChesterHero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-[#12100E] overflow-hidden">
      
      {/* Background Hero Visual with Central Luxury Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/chester/chestertime/product_tan_chester.jpg"
          alt="Chester Time Koltuk İmalat Atölyesi"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        {/* Full Central Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E]/95 via-[#12100E]/65 to-[#12100E]/85" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero Content - Centered & Enlarged */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center justify-center">
        
        {/* Luxury Center Container */}
        <div className="w-full max-w-4xl p-6 sm:p-10 lg:p-0 rounded-3xl bg-black/40 backdrop-blur-md border border-white/15 lg:bg-transparent lg:border-none lg:backdrop-blur-none shadow-2xl lg:shadow-none">
          
          {/* Headline - Significantly Enlarged & Centered */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-luxe text-[38px] sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] text-white leading-[1.06] mb-6 sm:mb-8 font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] text-center"
          >
            Chester Time İle<br />
            <span className="italic font-light text-[#F3C287]">Evinizi Yenileyin.</span>
          </motion.h1>

          {/* Action CTAs - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-3.5 sm:space-y-0 sm:space-x-5 max-w-md sm:max-w-none mx-auto"
          >
            <a
              href="#vitrin"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#B86B35] text-white font-bold text-xs sm:text-sm uppercase tracking-widest text-center hover:bg-[#944D1E] transition-all duration-200 shadow-2xl hover:scale-105"
            >
              Ürün Vitrinini İnceleyin
            </a>

            <a
              href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, salonum için koltuk modelleriniz hakkında bilgi ve imalat fiyat teklifi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/35 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow hover:scale-105"
            >
              <span>WhatsApp İle Hızlı Fiyat Al</span>
              <ArrowUpRight className="w-4 h-4 text-[#F3C287]" />
            </a>
          </motion.div>

          {/* Live Trust Badges - Centered */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-12 pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-stone-200 font-light"
          >
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
              <span>İmalatçı Fiyatı</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
              <span>Masif Gürgen İskelet</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
              <span>100+ Renk Seçeneği</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
              <span>İstanbul İçi Teslimat</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
