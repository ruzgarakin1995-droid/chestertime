'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { ATELIER_NAME, ATELIER_TAGLINE, DISPLAY_PHONE, buildWhatsAppUrl, BUSINESS_ADDRESS } from '../mockData';

export const ChesterHero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-end pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] overflow-hidden">
      
      {/* Background Hero Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/chester/chestertime/product_tan_chester.jpg"
          alt="Chester Time Koltuk İmalat Atölyesi"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/85 via-[#1C1917]/35 to-transparent hidden lg:block" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl text-white">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-sans uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F3C287]" />
            <span>Doğrudan İmalatçıdan • Fırınlanmış Gürgen İskelet • Kişiye Özel Üretim</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-luxe text-[36px] sm:text-5xl lg:text-6xl text-white leading-[1.08] sm:leading-[1.12] mb-5 font-bold"
          >
            Chester Time İle<br />
            <span className="italic font-light text-[#F3C287]">Evinizi Yenileyin.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-stone-200 font-light leading-relaxed mb-8 max-w-2xl"
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
              className="px-8 py-4 rounded-full bg-[#B86B35] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-[#944D1E] transition-all duration-200 shadow-xl"
            >
              Ürün Vitrinini İnceleyin
            </a>

            <a
              href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, salonum için koltuk modelleriniz hakkında bilgi ve imalat fiyat teklifi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
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
            className="mt-10 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-300 font-light"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
              <span>İmalatçı Fiyat Avantajı</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
              <span>Masif Gürgen İskelet</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
              <span>100+ Renk Kumaş/Deri</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#F3C287] flex-shrink-0" />
              <span>İstanbul İçi Hızlı Teslimat</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
