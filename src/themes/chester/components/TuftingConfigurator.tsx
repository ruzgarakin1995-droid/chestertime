'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUpRight, Crown } from 'lucide-react';
import { buildWhatsAppUrl, ATELIER_NAME } from '../mockData';

interface TuftingStyle {
  id: string;
  name: string;
  depth: string;
  character: string;
  description: string;
  bestFor: string;
}

const TUFTING_STYLES: TuftingStyle[] = [
  {
    id: 'deep-victorian',
    name: 'Derin İngiliz Kapitonesi (7 cm)',
    depth: '70 mm Ekstra Derin Çekme',
    character: 'Klasik, Zengin & Aristokratik',
    description: 'Her baklava dilimi el ile 7 cm derinliğe kadar çekilip çelik iple karkasa sabitlenir. Koltuğa ışık-gölge draması ve eşsiz bir hacim kazandırır.',
    bestFor: 'Geniş Salonlar, Şömine Önü & Ofisler'
  },
  {
    id: 'italian-modern',
    name: 'İtalyan Modern Düğmeleme (4 cm)',
    depth: '40 mm Minimalist Derinlik',
    character: 'Sade, Akıcı & Çağdaş',
    description: 'Daha az derinlik ile daha modern ve hafif bir yüzey hissi verir. Modern minimalist mekanlarda göz yormadan klasik zarafeti yaşatır.',
    bestFor: 'Modern Rezidanslar & Loft Daireler'
  },
  {
    id: 'smooth-bench',
    name: 'Düz Minder & Kapitone Sırt Kombini',
    depth: 'Sırt Kapitone + Düz Minder',
    character: 'Maksimum Oturum & Kolay Temizlik',
    description: 'Sırt ve kol kısımlarında derin kapitone zanaatı korunurken, oturum minderleri monoblok düz kaz tüyü olarak tasarlanır.',
    bestFor: 'Günlük Yoğun Yaşam Alanları & Aileler'
  }
];

export const TuftingConfigurator: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState(TUFTING_STYLES[0]);

  return (
    <section id="tufting-customizer" className="py-20 lg:py-24 bg-[#0D0C0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-[11px] font-sans uppercase tracking-widest mb-3 border border-[#D4AF37]/30">
            <Crown className="w-3.5 h-3.5" />
            <span>Kişiselleştirilebilir Kapitone Mimarisi</span>
          </div>
          <h2 className="font-serif-luxe text-3xl sm:text-4xl text-white mb-3">
            Kapitone Derinliğini Siz Belirleyin
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 font-light">
            Evinizin dekorasyon tarzına göre derin İngiliz düğmelemesi veya modern İtalyan kapitone hatları seçebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Options */}
          <div className="lg:col-span-6 space-y-3.5">
            {TUFTING_STYLES.map((style) => {
              const isSelected = selectedStyle.id === style.id;
              return (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white/15 border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]'
                      : 'bg-[#1C1915] border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif-luxe text-lg text-white font-semibold">
                      {style.name}
                    </span>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0D0C0A] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#D4AF37] font-medium mb-1">
                    {style.depth} • {style.character}
                  </p>
                  <p className="text-xs text-stone-400 font-light">
                    {style.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Display Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStyle.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#1C1915] rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl"
              >
                <div className="h-44 rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <img
                    src="/images/chester/chester_tufting_detail.jpg"
                    alt={selectedStyle.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-serif-luxe text-2xl text-white mb-2">
                  {selectedStyle.name}
                </h3>
                <div className="inline-block px-3 py-1 rounded-md bg-white/10 text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider mb-4">
                  Tavsiye Edilen Mekan: {selectedStyle.bestFor}
                </div>
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
                  {selectedStyle.description}
                </p>

                <a
                  href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, "${selectedStyle.name}" tarzında özel ölçü Chester koltuk için fiyat teklifi almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8973E] text-[#0D0C0A] text-center text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Bu Tarz İle Fiyat Al</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0D0C0A]" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
