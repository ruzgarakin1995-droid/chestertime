'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChesterSplitIntro: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSplitting, setIsSplitting] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if seen in current session
    const hasSeen = sessionStorage.getItem('chester_intro_seen');
    if (hasSeen) {
      return;
    }

    setIsVisible(true);

    // Prevent body scroll during the intro
    document.body.style.overflow = 'hidden';

    // Step 1: Hold the brand logo and text for 2.2 seconds
    const splitTimer = setTimeout(() => {
      setIsSplitting(true);
    }, 2200);

    // Step 2: Complete split animation and remove overlay (total 3.4 seconds)
    const finishTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('chester_intro_seen', 'true');
      document.body.style.overflow = 'unset';
    }, 3400);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!mounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center pointer-events-auto">
      
      {/* Top Split Curtain (Slides Up) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={isSplitting ? { y: '-100%' } : { y: '0%' }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#0E0C0A] border-b border-[#B86B35]/40 z-10 origin-top shadow-[0_15px_40px_rgba(0,0,0,0.9)]"
      />

      {/* Bottom Split Curtain (Slides Down) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={isSplitting ? { y: '100%' } : { y: '0%' }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0E0C0A] border-t border-[#B86B35]/40 z-10 origin-bottom shadow-[0_-15px_40px_rgba(0,0,0,0.9)]"
      />

      {/* Central Brand Badge & Typography - Prominent & Luxurious */}
      <AnimatePresence>
        {!isSplitting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.08, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 flex flex-col items-center justify-center text-center px-4"
          >
            {/* Golden Logo Circle with Ambient Halo Glow */}
            <div className="relative mb-5 sm:mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-[#944D1E] via-[#D4AF37] to-[#F3C287] shadow-[0_0_70px_rgba(212,175,55,0.45)] flex items-center justify-center"
              >
                <img
                  src="/images/chester/chester_logo.jpg"
                  alt="Chester Time"
                  className="w-full h-full rounded-full object-cover shadow-2xl border-2 border-black/40"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-serif-luxe text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.2em] text-white uppercase mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            >
              CHESTER TIME
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xs sm:text-sm md:text-base tracking-[0.32em] text-[#F3C287] uppercase font-sans font-semibold mb-5"
            >
              İmalatçıdan Doğrudan Özel Üretim
            </motion.p>

            {/* Elegant Expanding Gold Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: 'easeInOut' }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
