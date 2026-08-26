'use client';
import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import './chester-theme.css';
import { ChesterProduct } from './types';
import { ProductProvider } from './context/ProductContext';
import { ChesterHeader } from './components/ChesterHeader';
import { ChesterHero } from './components/ChesterHero';
import { ChesterCampaignBanner } from './components/ChesterCampaignBanner';
import { ChesterProductShowcase } from './components/ChesterProductShowcase';
import { CustomerDeliveriesGrid } from './components/CustomerDeliveriesGrid';
import { FabricLeatherStudio } from './components/FabricLeatherStudio';
import { CraftsmanshipStandards } from './components/CraftsmanshipStandards';
import { ChesterShowroomVisit } from './components/ChesterShowroomVisit';
import { ChesterServiceLinks } from './components/ChesterServiceLinks';
import { ChesterQuickModal } from './components/ChesterQuickModal';
import { ChesterWhatsAppFloat } from './components/ChesterWhatsAppFloat';
import { ChesterFooter } from './components/ChesterFooter';
import { ChesterSplitIntro } from './components/ChesterSplitIntro';

const RevealSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ChesterTheme: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ChesterProduct | null>(null);

  // Lenis 60fps Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.8,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Top Reading Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ProductProvider>
      <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] selection:bg-[#B86B35] selection:text-white font-sans antialiased relative">
        
        {/* Luxury Split Screen Intro Preloader */}
        <ChesterSplitIntro />

        {/* Top Reading Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#944D1E] via-[#B86B35] to-[#F3C287] origin-left z-[60] shadow-[0_1px_10px_rgba(184,107,53,0.6)] pointer-events-none"
        />

        {/* Header */}
        <ChesterHeader />

        {/* Main Content */}
        <main>
          <ChesterHero />

          {/* 1. KAMPANYALI SLIDER BANNER ALANI (3 FARKLI KAMPANYA) */}
          <RevealSection>
            <ChesterCampaignBanner />
          </RevealSection>

          {/* 2. ÜRÜN VİTRİNİ (ÖNE ÇIKAN MODELLER) */}
          <RevealSection>
            <ChesterProductShowcase onSelectProduct={(p) => setSelectedProduct(p)} />
          </RevealSection>

          {/* 2.5 HİZMETLERİMİZ — SEO landing sayfalarına iç linkleme */}
          <RevealSection>
            <ChesterServiceLinks />
          </RevealSection>

          {/* 3. MÜŞTERİ TESLİMATLARI & GERÇEK EV KARELERİ */}
          <RevealSection>
            <CustomerDeliveriesGrid />
          </RevealSection>

          {/* 4. KUMAŞ & DERİ SEÇENEKLERİ */}
          <RevealSection>
            <FabricLeatherStudio />
          </RevealSection>

          {/* 5. İSKELET & ZANAAT STANDARTLARI */}
          <RevealSection>
            <CraftsmanshipStandards />
          </RevealSection>

          {/* 6. BAĞCILAR ATÖLYE & SHOWROOM ZİYARETİ */}
          <RevealSection>
            <ChesterShowroomVisit />
          </RevealSection>
        </main>

        {/* Footer */}
        <ChesterFooter />

        {/* 20-second Smart WhatsApp Floating Concierge */}
        <ChesterWhatsAppFloat />

        {/* Product Detail Modal */}
        <ChesterQuickModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

      </div>
    </ProductProvider>
  );
};

export default ChesterTheme;
