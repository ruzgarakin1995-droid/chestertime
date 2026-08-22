'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Check, ArrowRight, Sparkles } from 'lucide-react';
import { LEATHER_OPTIONS, buildWhatsAppUrl, ATELIER_NAME } from '../mockData';

export const FabricLeatherStudio: React.FC = () => {
  const [selectedFabric, setSelectedFabric] = useState(LEATHER_OPTIONS[0]);

  return (
    <section id="fabric-studio" className="py-20 lg:py-28 bg-[#1C1917] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-[#F3C287] text-[11px] font-sans uppercase tracking-widest mb-4 border border-white/15">
            <Layers className="w-3.5 h-3.5" />
            <span>Kumaş & Deri Kartelası</span>
          </div>
          <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-bold">
            100+ Renk ve Kumaş Seçeneği
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light">
            Silinebilir babyface kumaşlar, antik vintage deriler, leke tutmaz kadifeler ve keten dokular... Koltuğunuzu istediğiniz renkte üretiyoruz.
          </p>
        </div>

        {/* 2-Column Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Swatches */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#F3C287] font-semibold mb-2">
              Popüler Kumaş & Deri Kartelaları
            </h3>
            {LEATHER_OPTIONS.map((item) => {
              const isSelected = selectedFabric.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedFabric(item)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center space-x-4 cursor-pointer ${
                    isSelected
                      ? 'bg-white/15 border-[#B86B35] shadow-lg ring-1 ring-[#B86B35]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div 
                    className="w-10 h-10 rounded-full border-2 border-white/40 shadow-inner flex-shrink-0 relative flex items-center justify-center"
                    style={{ backgroundColor: item.hex }}
                  >
                    {isSelected && <Check className="w-4 h-4 text-white drop-shadow" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-serif-luxe text-base text-white tracking-wide truncate font-bold">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-[#F3C287] uppercase tracking-wider font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 font-light truncate mt-0.5">
                      {item.origin}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Visual & WhatsApp Video CTA */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFabric.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="bg-[#26221E] border border-white/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl"
              >
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                  <img
                    src={selectedFabric.image}
                    alt={selectedFabric.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-sans uppercase tracking-wider">
                    {selectedFabric.thickness}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                  <div>
                    <h4 className="font-serif-luxe text-2xl text-white mb-1 font-bold">
                      {selectedFabric.name}
                    </h4>
                    <p className="text-xs text-[#F3C287] uppercase tracking-wider">
                      {selectedFabric.origin}
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, "${selectedFabric.name}" kumaşı/derisi için canlı kartela videosu ve diğer renk seçeneklerini görmek istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-[#B86B35] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#944D1E] transition-colors flex-shrink-0 shadow-lg"
                  >
                    <span>Canlı Kartela Videosu İste</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-sm text-stone-300 font-light leading-relaxed">
                  {selectedFabric.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
