'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { ATELIER_NAME, ATELIER_TAGLINE, DISPLAY_PHONE, buildWhatsAppUrl, BUSINESS_ADDRESS } from '../mockData';

export const ChesterHero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-end pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-24 px-3 sm:px-6 lg:px-8 bg-[#FDFBF7] overflow-hidden">
      
      {/* Background Hero Visual with Mobile-Optimized Contrast Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/chester/chestertime/product_tan_chester.jpg"
          alt="Chester Time Koltuk İmalat Atölyesi"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        {/* Mobile Deep Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/85 to-[#12100E]/70 lg:from-[#1C1917] lg:via-[#1C1917]/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-black/25 lg:bg-transparent" />
        {/* Desktop Left-to-Right Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/85 via-[#1C1917]/35 to-transparent hidden lg:block" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl text-white">
          
          {/* Mobile Luxury Glassmorphic Card Container for Crystal Clear Legibility */}
          <div className="p-5 sm:p-7 lg:p-0 rounded-3xl bg-black/50 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] lg:bg-transparent lg:border-none lg:backdrop-blur-none lg:shadow-none">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-wrap items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] sm:text-[11px] font-sans uppercase tracking-wider mb-4 sm:mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F3C287] flex-shrink-0" />
              <span className="font-semibold text-[#F3C287]">Doğrudan İmalatçıdan</span>
              <span className="text-white/60">•</span>
              <span>Masif Gürgen İskelet</span>
              <span className="text-white/60">•</span>
              <span>Kişiye Özel Üretim</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-luxe text-[30px] sm:text-5xl lg:text-6xl text-white leading-[1.12] mb-3 sm:mb-5 font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            >
              Chester Time İle<br />
              <span className="italic font-light text-[#F3C287]">Evinizi Yenileyin.</span>
            </motion.h1>

            {/* Subtitle with High Contrast */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-base text-stone-100 font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
            >
              Aracısız, doğrudan Bağcılar atölyemizden imalat fiyatlarıyla! 1. sınıf masif gürgen karkas, silinebilir kumaş/deri ve usta işi el kapitonesiyle istediğiniz renk ve ölçüde üretiyoruz.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="#vitrin"
                className="px-8 py-3.5 sm:py-4 rounded-full bg-[#B86B35] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-[#944D1E] transition-all duration-200 shadow-xl"
              >
                Ürün Vitrinini İnceleyin
              </a>

              <a
                href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, salonum için koltuk modelleriniz hakkında bilgi ve imalat fiyat teklifi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/35 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow"
              >
                <span>WhatsApp İle Hızlı Fiyat Al</span>
                <ArrowUpRight className="w-4 h-4 text-[#F3C287]" />
              </a>
            </motion.div>

            {/* Live Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-stone-200 font-light"
            >
              <div className="flex items-center space-x-2 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 lg:bg-transparent lg:border-none lg:p-0">
                <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
                <span>İmalatçı Fiyatı</span>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 lg:bg-transparent lg:border-none lg:p-0">
                <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
                <span>Masif Gürgen İskelet</span>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 lg:bg-transparent lg:border-none lg:p-0">
                <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
                <span>100+ Renk Seçeneği</span>
              </div>
              <div className="flex items-center space-x-2 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 lg:bg-transparent lg:border-none lg:p-0">
                <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
                <span>İstanbul İçi Teslimat</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
