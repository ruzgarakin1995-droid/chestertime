'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChesterSplitIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSplitting, setIsSplitting] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro in this session
    const hasSeen = sessionStorage.getItem('chester_intro_seen');
    if (hasSeen) {
      setIsVisible(false);
      return;
    }

    // Step 1: Hold the prominent logo & typography for 1.3s
    const splitTimer = setTimeout(() => {
      setIsSplitting(true);
    }, 1300);

    // Step 2: Remove completely from DOM after split finishes (2.3s)
    const finishTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('chester_intro_seen', 'true');
    }, 2300);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden flex flex-col items-center justify-center">
      
      {/* Top Split Curtain (Slides Up) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={isSplitting ? { y: '-100%' } : { y: '0%' }}
        transition={{ duration: 1.05, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#100E0C] border-b border-[#B86B35]/40 z-10 origin-top shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
      />

      {/* Bottom Split Curtain (Slides Down) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={isSplitting ? { y: '100%' } : { y: '0%' }}
        transition={{ duration: 1.05, ease: [0.77, 0, 0.175, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#100E0C] border-t border-[#B86B35]/40 z-10 origin-bottom shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
      />

      {/* Central Brand Badge & Typography - Prominent & Luxurious */}
      <AnimatePresence>
        {!isSplitting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.12, y: -15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 flex flex-col items-center justify-center text-center px-4"
          >
            {/* Golden Logo Circle with Ambient Halo Glow */}
            <div className="relative mb-5">
              <motion.div
                initial={{ scale: 0.75, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-1.5 sm:p-2 bg-gradient-to-tr from-[#944D1E] via-[#D4AF37] to-[#F3C287] shadow-[0_0_60px_rgba(212,175,55,0.4)] flex items-center justify-center"
              >
                <img
                  src="/images/chester/chester_logo.jpg"
                  alt="Chester Time"
                  className="w-full h-full rounded-full object-cover shadow-2xl border border-black/30"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="font-serif-luxe text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.18em] text-white uppercase mb-2 drop-shadow-lg"
            >
              CHESTER TIME
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-xs sm:text-sm md:text-base tracking-[0.3em] text-[#F3C287] uppercase font-sans font-semibold mb-5"
            >
              İmalatçıdan Doğrudan Özel Üretim
            </motion.p>

            {/* Elegant Expanding Gold Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 220, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: 'easeInOut' }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
