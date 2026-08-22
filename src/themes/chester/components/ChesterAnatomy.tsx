'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Hammer, Layers, Sparkles, Check } from 'lucide-react';
import { ATELIER_NAME, buildWhatsAppUrl } from '../mockData';

interface Hotspot {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  top: string;
  left: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    title: 'Masif Karadeniz Gürgeni İskelet',
    subtitle: 'Fırınlanmış 40 Yıl Garantili Karkas',
    description: 'En az 10 yıl kurumuş, fırınlanmış gürgen ağacından zıvana geçme birleşimlerle üretilir. Asla esneme, gıcırdama yapmaz.',
    top: '75%',
    left: '20%'
  },
  {
    id: 2,
    title: '7 cm Derin El Kapitonesi',
    subtitle: '42 Saatlik Usta Düğümleme Zanaatı',
    description: 'Düğmeler iskeletin arkasındaki çelik iplerle gerdirilerek tek tek elle bağlanır. Asla kopmaz, gevşemez ve formunu 40 yıl korur.',
    top: '35%',
    left: '48%'
  },
  {
    id: 3,
    title: '35 DNS HR Sünger + Kaz Tüyü Katman',
    subtitle: 'Bulut Yumuşaklığında Oturum',
    description: 'Yüksek yoğunluklu HR sünger tabanı üzerine lamine edilen %100 saf kaz tüyü ped katmanı, oturulduğunda vücudu tam sarar.',
    top: '55%',
    left: '65%'
  },
  {
    id: 4,
    title: 'El Çakımı Antika Pirinç Kabaralar',
    subtitle: 'Tek Tek Elle Hizalanan Pirinç Başlar',
    description: 'Şerit hazır kabara yerine tek tek çekiçle çakılan masif pirinç kabaralar, kol kavislerine aristokratik bir ihtişam kazandırır.',
    top: '60%',
    left: '85%'
  }
];

export const ChesterAnatomy: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[1]);

  return (
    <section id="anatomy" className="py-20 lg:py-28 bg-[#0D0C0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
            İç İskelet & Konfor Katmanı
          </span>
          <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
            Bir Chester'ın Anatomisi
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Görünmeyen iç detaylar, bir koltuğun nesiller boyu ayakta kalmasını sağlar. Noktalara tıklayarak inceleyin.
          </p>
        </div>

        {/* Interactive Image with Hotspots */}
        <div className="relative rounded-3xl overflow-hidden border border-[#2E2922] bg-[#171512] shadow-2xl mb-10">
          <img
            src="/images/chester/chester_hero.jpg"
            alt="Chesterfield İskelet ve Kapitone Anatomisi"
            className="w-full h-[380px] sm:h-[480px] object-cover opacity-85"
          />

          {/* Interactive Pulsing Hotspots */}
          {HOTSPOTS.map((h) => {
            const isActive = activeHotspot.id === h.id;
            return (
              <button
                key={h.id}
                onClick={() => setActiveHotspot(h)}
                style={{ top: h.top, left: h.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer focus:outline-none"
                aria-label={h.title}
              >
                <span className="relative flex h-8 w-8 sm:h-10 sm:w-10">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isActive ? 'bg-[#D4AF37]' : 'bg-white'
                  }`} />
                  <span className={`relative inline-flex rounded-full h-8 w-8 sm:h-10 sm:w-10 items-center justify-center text-xs font-bold shadow-lg transition-transform ${
                    isActive ? 'bg-[#D4AF37] text-[#0D0C0A] scale-110' : 'bg-[#0D0C0A]/90 text-white border border-white/40 group-hover:scale-105'
                  }`}>
                    {h.id}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Hotspot Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHotspot.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="bg-[#1C1915] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#0D0C0A] text-xs font-bold flex items-center justify-center">
                  {activeHotspot.id}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {activeHotspot.subtitle}
                </span>
              </div>
              <h3 className="font-serif-luxe text-2xl text-white">
                {activeHotspot.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-3xl">
                {activeHotspot.description}
              </p>
            </div>

            <a
              href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, Chester koltuklarınızın iskelet ve kapitone zanaatı hakkında atölye videosu almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0D0C0A] text-white font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0 text-center border border-white/20"
            >
              Atölye Videosu İste
            </a>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
