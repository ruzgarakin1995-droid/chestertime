'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { ATELIER_NAME, ATELIER_TAGLINE, DISPLAY_PHONE, buildWhatsAppUrl, BUSINESS_ADDRESS } from '../mockData';

export const ChesterHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 bg-[#12100E] overflow-hidden"
    >
      
      {/* Background Hero Visual - 100% Crisp & Clear with Smooth Scroll Parallax */}
      <motion.div 
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0 origin-center"
      >
        <img
          src="/images/chester/chestertime/product_tan_chester.jpg"
          alt="Chester Time Koltuk İmalat Atölyesi"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />
      </motion.div>

      {/* 1. TOP: Headline (Centered & Crisp) */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-5xl mx-auto text-center pt-2 sm:pt-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-luxe text-[clamp(26px,9vw,35px)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] text-white leading-[1.12] font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
        >
          <span className="block whitespace-nowrap">Chester Time ile</span>
          <span className="block italic font-light text-[#F3C287]">Evinizi Yenileyin.</span>
        </motion.h1>
      </motion.div>

      {/* 2. MIDDLE: Open Viewport Area (Showcases the Sofa Cleanly) */}
      <div className="relative z-10 flex-1 min-h-[140px] sm:min-h-[220px] lg:min-h-[280px] pointer-events-none" />

      {/* 3. BOTTOM: Action Buttons & Trust Badges */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center space-y-4 sm:space-y-6">
        
        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
        >
          <a
            href="#vitrin"
            className="w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#B86B35] text-white font-bold text-xs sm:text-sm uppercase tracking-widest text-center hover:bg-[#944D1E] transition-all duration-200 shadow-2xl hover:scale-105"
          >
            Ürün Vitrinini İnceleyin
          </a>

          <a
            href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, salonum için koltuk modelleriniz hakkında bilgi ve imalat fiyat teklifi almak istiyorum.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:scale-105"
          >
            <span>WhatsApp İle Hızlı Fiyat Al</span>
            <ArrowUpRight className="w-4 h-4 text-[#F3C287]" />
          </a>
        </motion.div>

        {/* Live Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-2 sm:pt-4 border-t border-white/20 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-stone-200 font-light"
        >
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F3C287] flex-shrink-0" />
            <span>İmalatçı Fiyatı</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F3C287] flex-shrink-0" />
            <span>Masif Gürgen İskelet</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F3C287] flex-shrink-0" />
            <span>100+ Renk Seçeneği</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F3C287] flex-shrink-0" />
            <span>İstanbul İçi Teslimat</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
