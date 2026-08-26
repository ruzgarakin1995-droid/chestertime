'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl, ATELIER_NAME } from '../mockData';

export const ChesterWhatsAppFloat: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCloud, setShowCloud] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Periodic opening every 20 seconds (desktop only — on mobile the expanded
  // pill + cloud would cover content, so small screens stay collapsed until tapped)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    let initialOpen: ReturnType<typeof setTimeout> | undefined;
    let autoClose: ReturnType<typeof setTimeout> | undefined;
    let interval: ReturnType<typeof setInterval> | undefined;

    const openBriefly = () => {
      setIsExpanded(true);
      setShowCloud(true);
      autoClose = setTimeout(() => {
        setIsExpanded(false);
        setShowCloud(false);
      }, 6000);
    };

    const start = () => {
      if (interval) return;
      initialOpen = setTimeout(openBriefly, 2500);
      interval = setInterval(openBriefly, 20000);
    };

    const stop = () => {
      if (initialOpen) clearTimeout(initialOpen);
      if (autoClose) clearTimeout(autoClose);
      if (interval) clearInterval(interval);
      initialOpen = autoClose = undefined;
      interval = undefined;
      setIsExpanded(false);
      setShowCloud(false);
    };

    if (mq.matches) start();
    const onChange = (e: MediaQueryListEvent) => (e.matches ? start() : stop());
    mq.addEventListener('change', onChange);

    return () => {
      mq.removeEventListener('change', onChange);
      stop();
    };
  }, []);

  const activeExpanded = isExpanded || isHovered;
  const activeCloud = (showCloud || isHovered) && activeExpanded;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Speech Cloud */}
      <AnimatePresence>
        {activeCloud && (
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.92 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              y: [0, -4, 0]
            }}
            exit={{ opacity: 0, x: 25, scale: 0.9, transition: { duration: 0.25 } }}
            transition={{
              y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
              opacity: { duration: 0.3 },
              x: { duration: 0.35, ease: "easeOut" }
            }}
            className="mb-3 relative max-w-xs p-4 rounded-2xl bg-[#1C1915]/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-2xl text-white"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowCloud(false);
                setIsHovered(false);
              }}
              className="absolute top-2.5 right-2.5 p-1 text-stone-400 hover:text-white cursor-pointer rounded-full"
              aria-label="Kapat"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center space-x-2 mb-1.5 pr-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-sans text-emerald-400 font-bold uppercase tracking-wider">
                {ATELIER_NAME} Danışmanı
              </span>
            </div>

            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Özel ölçü Chester fiyatları, canlı deri videosu ve atölye randevusu için yazabilirsiniz.
            </p>

            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#1C1915] border-r border-b border-[#D4AF37]/50 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Expanding Pill Button */}
      <motion.a
        href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, hakiki deri Chester koltuk modelleriniz hakkında bilgi ve fiyat teklifi almak istiyorum.`)}
        target="_blank"
        rel="noopener noreferrer"
        layout
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative flex items-center bg-[#0D0C0A] border border-[#D4AF37]/60 shadow-2xl hover:border-[#D4AF37] transition-colors duration-300 cursor-pointer text-white overflow-hidden ${
          activeExpanded 
            ? 'rounded-full py-2.5 px-4 sm:px-5 space-x-3' 
            : 'w-14 h-14 rounded-full justify-center'
        }`}
        aria-label="WhatsApp Danışmanı ile Görüşün"
      >
        <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
          <MessageCircle className="w-5 h-5 fill-white text-white" />
        </div>

        <AnimatePresence>
          {activeExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0, x: -10 }}
              animate={{ opacity: 1, width: "auto", x: 0 }}
              exit={{ opacity: 0, width: 0, x: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col text-left whitespace-nowrap overflow-hidden pr-1"
            >
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
                Canlı Destek
              </span>
              <span className="text-xs font-bold text-white tracking-wide">
                Chester Danışmanı
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>

    </div>
  );
};
