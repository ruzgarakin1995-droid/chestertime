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

    // Step 1: Logo & Text entrance & stay for 1.1s
    const splitTimer = setTimeout(() => {
      setIsSplitting(true);
    }, 1200);

    // Step 2: Remove completely from DOM after split finishes
    const finishTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('chester_intro_seen', 'true');
    }, 2200);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden flex flex-col items-center justify-center">
      
      {/* Top Split Half (Slides Up) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={isSplitting ? { y: '-100%' } : { y: '0%' }}
        transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#12100E] border-b border-[#B86B35]/30 z-10 origin-top"
      />

      {/* Bottom Split Half (Slides Down) */}
      <motion.div
        initial={{ y: '0%' }}
        animate={isSplitting ? { y: '100%' } : { y: '0%' }}
        transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#12100E] border-t border-[#B86B35]/30 z-10 origin-bottom"
      />

      {/* Central Brand Badge & Typography */}
      <AnimatePresence>
        {!isSplitting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.08, y: -10 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 flex flex-col items-center justify-center text-center px-4"
          >
            {/* Golden Logo Circle with Ambient Glow */}
            <div className="relative mb-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#944D1E] via-[#D4AF37] to-[#F3C287] shadow-[0_0_40px_rgba(212,175,55,0.35)] flex items-center justify-center"
              >
                <img
                  src="/images/chester/chester_logo.jpg"
                  alt="Chester Time"
                  className="w-full h-full rounded-full object-cover shadow-inner"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-serif-luxe text-2xl sm:text-3xl font-bold tracking-widest text-white uppercase mb-1"
            >
              CHESTER TIME
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[10px] sm:text-xs tracking-[0.25em] text-[#F3C287] uppercase font-sans font-semibold mb-4"
            >
              İmalatçıdan Doğrudan Özel Üretim
            </motion.p>

            {/* Elegant Expanding Gold Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeInOut' }}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
