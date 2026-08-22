'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Check, ArrowRight, Sparkles, Award } from 'lucide-react';
import { LEATHER_OPTIONS, buildWhatsAppUrl, ATELIER_NAME } from '../mockData';

export const LeatherStudio: React.FC = () => {
  const [selectedLeather, setSelectedLeather] = useState(LEATHER_OPTIONS[0]);

  return (
    <section id="leather-studio" className="py-20 lg:py-28 bg-[#14120F] text-white relative overflow-hidden border-t border-b border-[#2E2922]">
      
      {/* Background Gold Ambient */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-sans uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>İtalyan Deri & Kadife Kartelası</span>
          </div>
          <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Zamanla Değer Kazanan Hakiki Deriler
          </h2>
          <p className="text-sm sm:text-base text-stone-400 font-light">
            Suni deri veya vinil kesinlikle kullanılmaz. Her Chester; Toskana'da bitkisel yağlarla tabaklanmış, nefes alan tam sırçalı dana derisiyle kaplanır.
          </p>
        </div>

        {/* Interactive Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Swatches */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
              Seçilebilir Deri & Kumaş Çeşitleri
            </h3>
            {LEATHER_OPTIONS.map((leather) => {
              const isSelected = selectedLeather.id === leather.id;
              return (
                <button
                  key={leather.id}
                  onClick={() => setSelectedLeather(leather)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center space-x-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white/15 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10 ring-1 ring-[#D4AF37]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div 
                    className="w-10 h-10 rounded-full border-2 border-white/40 shadow-inner flex-shrink-0 relative flex items-center justify-center"
                    style={{ backgroundColor: leather.hex }}
                  >
                    {isSelected && <Check className="w-4 h-4 text-white drop-shadow" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-serif-luxe text-base text-white tracking-wide truncate">
                        {leather.name}
                      </span>
                      <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                        {leather.category}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 font-light truncate mt-0.5">
                      {leather.origin}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Visual & Action */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedLeather.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="bg-[#1C1915] border border-white/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl"
              >
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                  <img
                    src={selectedLeather.image}
                    alt={selectedLeather.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-sans uppercase tracking-wider border border-white/20">
                    {selectedLeather.thickness}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <h4 className="font-serif-luxe text-2xl text-white mb-1">
                      {selectedLeather.name}
                    </h4>
                    <p className="text-xs text-[#D4AF37] uppercase tracking-wider font-medium">
                      {selectedLeather.origin}
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, "${selectedLeather.name}" için ücretsiz deri numune kutusu ve video talep etmek istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8973E] text-[#0D0C0A] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex-shrink-0 shadow-lg"
                  >
                    <span>Deri Numunesi İste</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-sm text-stone-300 font-light leading-relaxed">
                  {selectedLeather.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
