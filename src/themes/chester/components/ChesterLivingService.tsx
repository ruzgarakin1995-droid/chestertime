'use client';
import React from 'react';
import { Compass, Send, ArrowUpRight } from 'lucide-react';
import { ATELIER_NAME, buildWhatsAppUrl } from '../mockData';

export const ChesterLivingService: React.FC = () => {
  return (
    <section id="living-service" className="py-20 lg:py-24 bg-[#14120F] border-t border-[#2E2922]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#1E1B16] via-[#171512] to-[#0D0C0A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-[#D4AF37]/30">
          
          <div className="max-w-2xl relative z-10 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-sans uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>Mimari Chester Yerleşim Desteği</span>
            </div>

            <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl text-white">
              Salonunuzun Ölçülerini İletin,<br />
              <span className="italic font-light text-gold-gradient">Özel Chester Kombinasyonunu Çizelim.</span>
            </h2>

            <p className="text-sm text-stone-300 font-light leading-relaxed">
              Mekanınızın krokisini veya fotoğraflarını WhatsApp üzerinden mimarımıza iletin. Doğru koltuk boyutu, L köşe yönü ve deri kartelası uyumunu ücretsiz olarak projelendirelim.
            </p>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, salonum için mimari Chester yerleşim ve özel ölçü fiyat teklifi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8973E] text-[#0D0C0A] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-xl"
              >
                <Send className="w-4 h-4 text-[#0D0C0A]" />
                <span>WhatsApp İle Plan Gönder</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
