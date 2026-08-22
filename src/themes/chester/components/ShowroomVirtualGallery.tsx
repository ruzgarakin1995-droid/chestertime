'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Eye, ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { buildWhatsAppUrl, ATELIER_NAME } from '../mockData';

interface ShowroomSuite {
  id: string;
  roomName: string;
  tagline: string;
  description: string;
  image: string;
  featuredProducts: string[];
  style: string;
}

const SHOWROOM_SUITES: ShowroomSuite[] = [
  {
    id: "manor-hall",
    roomName: "Salon 1 • British Manor Hall",
    tagline: "Hakiki Antik Konyak Deri & Masif Meşe Şömine Konsepti",
    description: "Lord Chesterfield 4'lü büyük boy koltuk, 2 adet Kensington kulaklı berjer ve el kapitone deri puf orta sehpanın bir araya geldiği ihtişamlı yaşam alanı.",
    image: "/images/chester/showroom/hall_manor.jpg",
    featuredProducts: ["Lord Chesterfield 4'lü", "Kensington Wingback Berjer", "Deri Kapitone Puf Sehpa"],
    style: "Klasik İngiliz Aristokrasisi"
  },
  {
    id: "penthouse-suite",
    roomName: "Salon 2 • Milano Modern Penthouse",
    tagline: "Zümrüt Yeşili İtalyan Kadife & Calacatta Mermer",
    description: "Como kadifesinin ışık yansımasıyla tasarlanan Victoria Chester ve mermer silindirik sehpalar. Modern rezidanslar için ferah ve cesur bir atmosfer.",
    image: "/images/chester/showroom/hall_penthouse.jpg",
    featuredProducts: ["Victoria Zümrüt Chester", "Calacatta Mermer Sehpa", "Pirinç Torna Detaylar"],
    style: "Modern İtalyan Lüksü"
  },
  {
    id: "cigar-lounge",
    roomName: "Salon 3 • Mayfair Cigar & Library Suite",
    tagline: "Puro Kahve Crazy Deri & Kütüphane Dinlenme Alanı",
    description: "Alçak kollu Mayfair Chester ve masif ceviz kütüphane mobilyaları. Kitap okumak, dinlenmek ve seçkin konuklar ağırlamak için özel akustik yerleşim.",
    image: "/images/chester/showroom/hall_library.jpg",
    featuredProducts: ["Mayfair Modern Chester", "Executive Okuma Koltuğu", "Masif Ahşap Sehpa"],
    style: "Executive & Private Lounge"
  }
];

export const ShowroomVirtualGallery: React.FC = () => {
  const [activeSuite, setActiveSuite] = useState(SHOWROOM_SUITES[0]);

  return (
    <section id="virtual-showroom" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F0EAE1] text-[#A86532] text-[11px] font-sans uppercase tracking-widest mb-3 border border-[#E5DFD3]">
            <Building2 className="w-3.5 h-3.5" />
            <span>Sanal Showroom Turu</span>
          </div>
          <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl text-[#161412] mb-3">
            Showroom Teşhir Salonlarımız
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light">
            Modoko teşhir alanımızda kurulmuş olan 3 farklı konsept salonumuzu canlı olarak inceleyin.
          </p>
        </div>

        {/* Room Tab Selector */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-10 overflow-x-auto no-scrollbar pb-2">
          {SHOWROOM_SUITES.map((suite) => {
            const isActive = activeSuite.id === suite.id;
            return (
              <button
                key={suite.id}
                onClick={() => setActiveSuite(suite)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#161412] text-white shadow-xl ring-2 ring-[#B89547]'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#E5DFD3]'
                }`}
              >
                {suite.roomName.split(' • ')[1]}
              </button>
            );
          })}
        </div>

        {/* Active Suite Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSuite.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl overflow-hidden border border-[#E5DFD3] shadow-2xl grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Image */}
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[480px] bg-stone-900">
              <img
                src={activeSuite.image}
                alt={activeSuite.roomName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-sans uppercase tracking-wider border border-white/20">
                {activeSuite.style}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-b from-white to-[#FAF7F2]">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#A86532] font-semibold block mb-1">
                  {activeSuite.roomName}
                </span>
                <h3 className="font-serif-luxe text-2xl sm:text-3xl text-[#161412] mb-3">
                  {activeSuite.tagline}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                  {activeSuite.description}
                </p>

                <div className="space-y-2 border-t border-stone-200 pt-4">
                  <span className="text-xs uppercase tracking-wider font-bold text-stone-800 block mb-1">
                    Bu Salondaki Teşhir Ürünleri:
                  </span>
                  {activeSuite.featuredProducts.map((p, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89547]"></span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, "${activeSuite.roomName}" salonundaki mobilya kombinasyonu için komple takım fiyatı ve showroom ziyareti hakkında bilgi almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#161412] text-white text-center text-xs font-bold uppercase tracking-wider hover:bg-[#A86532] transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Bu Salon İçin Teklif Al</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
