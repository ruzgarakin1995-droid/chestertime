'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, ATELIER_NAME } from '../mockData';

interface CampaignSlide {
  id: number;
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  ctaText: string;
  image: string;
  whatsappMsg: string;
}

const CAMPAIGNS: CampaignSlide[] = [
  {
    id: 1,
    badge: 'ATÖLYEDEN DOĞRUDAN FIRSAT',
    title: 'CHESTER KOLTUK ALANA',
    highlightText: 'KAPİTONE PUF AVANTAJI',
    description: 'Fırınlanmış masif gürgen iskeletli 3\'lü veya 4\'lü Chester koltuk siparişlerinizde, uyumlu el kapitone puf ve kırlent setinde imalatçıya özel kombinasyon avantajı.',
    ctaText: 'KAMPANYAYI İNCELE',
    image: '/images/chester/chestertime/product_tan_chester.jpg',
    whatsappMsg: `Merhaba ${ATELIER_NAME}, "Chester Koltuk + Kapitone Puf" kampanyası hakkında bilgi ve takım fiyatı almak istiyorum.`
  },
  {
    id: 2,
    badge: 'TASARIM SERİSİNDE ÖZEL FİYAT',
    title: 'DYNA KANEPE & BERJER',
    highlightText: 'YENİ SEZON SET FIRSATI',
    description: 'Modern düz kol hatları, silinebilir 1. sınıf antik deri dokusu ve masif konik ahşap ayaklarıyla salonunuz için eksiksiz Dyna takım fırsatı.',
    ctaText: 'TAKIM FİYATINI ÖĞREN',
    image: '/images/chester/chestertime/product_dyna_kanepe.jpg',
    whatsappMsg: `Merhaba ${ATELIER_NAME}, "Dyna Kanepe & Berjer Takım Fırsatı" için imalat fiyat teklifi almak istiyorum.`
  },
  {
    id: 3,
    badge: 'ÖZEL MEKAN MİMARİSİ',
    title: 'SALONUNUZA ÖZEL ÖLÇÜ',
    highlightText: 'L KÖŞE CHESTER İMALATI',
    description: 'Odanızın planına ve köşe yönüne göre sıfırdan milimetrik üretim; 100+ silinebilir kumaş ve antik deri seçeneğiyle doğrudan kapınıza teslim.',
    ctaText: 'ÜCRETSİZ ÖLÇÜ DANIŞMANLIĞI',
    image: '/images/chester/chestertime/product_cognac_chester.jpg',
    whatsappMsg: `Merhaba ${ATELIER_NAME}, salonum için özel ölçü L köşe Chester yaptırmak istiyorum. Ölçü danışmanlığı alabilir miyim?`
  }
];

export const ChesterCampaignBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotate every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAMPAIGNS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CAMPAIGNS.length) % CAMPAIGNS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAMPAIGNS.length);
  };

  const activeSlide = CAMPAIGNS[currentIndex];

  return (
    <section className="py-12 lg:py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-white rounded-3xl sm:rounded-[36px] overflow-hidden border border-stone-200/90 shadow-[0_12px_45px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[480px]"
        >
          
          {/* Left Column: Image with navigation arrows (50% on desktop) */}
          <div className="lg:col-span-6 min-w-0 relative h-[240px] sm:h-[320px] lg:h-auto lg:min-h-full overflow-hidden bg-stone-900">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide.id}
                src={activeSlide.image}
                alt={activeSlide.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Left / Right Arrow Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
              aria-label="Önceki Kampanya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all shadow-lg cursor-pointer z-10"
              aria-label="Sonraki Kampanya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column: Campaign Content (50% on desktop) */}
          <div className="lg:col-span-6 min-w-0 p-8 sm:p-12 lg:p-14 flex flex-col justify-between items-center text-center bg-[#FAF7F2] border-t lg:border-t-0 lg:border-l border-stone-200/80">
            
            {/* Top Empty Placeholder for Balance */}
            <div className="w-full flex justify-center">
              <span className="px-5 py-1.5 rounded-xl bg-[#B86B35] text-white font-sans text-xs font-bold uppercase tracking-widest shadow-sm">
                {activeSlide.badge}
              </span>
            </div>

            {/* Middle Content */}
            <div className="my-6 max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-serif-luxe text-2xl sm:text-3xl lg:text-4xl text-[#1C1917] font-bold leading-tight uppercase tracking-tight mb-2">
                    {activeSlide.title}<br />
                    <span className="text-[#B86B35]">{activeSlide.highlightText}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mt-4">
                    {activeSlide.description}
                  </p>

                  <div className="mt-7">
                    <a
                      href={buildWhatsAppUrl(activeSlide.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#B86B35] hover:text-[#944D1E] transition-colors py-2 border-b-2 border-[#B86B35]/40 hover:border-[#B86B35]"
                    >
                      <span>{activeSlide.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Dots / Indicators */}
            <div className="flex items-center space-x-2">
              {CAMPAIGNS.map((c, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={c.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? 'w-7 h-2 bg-[#B86B35]'
                        : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
