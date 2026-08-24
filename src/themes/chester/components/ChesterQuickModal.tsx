'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, MessageCircle, ShieldCheck, Ruler, Palette, Truck, Layers } from 'lucide-react';
import { ChesterProduct } from '../types';
import { buildWhatsAppUrl, ATELIER_NAME } from '../mockData';

interface ChesterQuickModalProps {
  product: ChesterProduct | null;
  onClose: () => void;
}

const COLOR_SWATCHES = [
  { name: 'Antik Taba Deri', hex: '#B86B35', type: 'Silinebilir Hakiki/Suni Deri' },
  { name: 'Puro Kahve Crazy', hex: '#523424', type: 'Vintage Yağlı Deri' },
  { name: 'Zümrüt Yeşili', hex: '#1E4D36', type: 'Lüks Su İtici Kadife' },
  { name: 'Asil Bordo / Vişne', hex: '#6B1D28', type: 'Döşemelik Deri & Kadife' },
  { name: 'Ekru / Krem Kemik', hex: '#EFE8DC', type: 'Silinebilir Babyface Kumaş' },
  { name: 'Gece Siyahı Mat', hex: '#1A1918', type: 'Mat Mukavemetli Deri' },
];

export const ChesterQuickModal: React.FC<ChesterQuickModalProps> = ({ product, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(COLOR_SWATCHES[0].name);
  const [selectedSize, setSelectedSize] = useState('230 cm');
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedColor(COLOR_SWATCHES[0].name);
      setSelectedSize(product.sizeOptions && product.sizeOptions.length > 0 ? product.sizeOptions[0] : '230 cm');
      setSelectedImage(product.primaryImage);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  const handleWhatsAppOrder = () => {
    if (!product) return;
    const msg = `Merhaba ${ATELIER_NAME}, "${product.name}" modeli hakkında fiyat teklifi ve detaylı bilgi almak istiyorum:\n\n• Model: ${product.name}\n• Seçilen Renk/Kumaş: ${selectedColor}\n• Tercih Edilen Ölçü: ${selectedSize}\n\nİmalat süresi ve güncel fiyat teklifi hakkında bilgi rica ediyorum.`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <AnimatePresence>
      {product && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 lg:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto lg:overflow-hidden overscroll-contain"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-4xl lg:max-w-5xl bg-white text-stone-900 rounded-3xl shadow-2xl border border-stone-200 my-auto max-h-[92vh] lg:max-h-[88vh] flex flex-col overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer shadow-lg"
              aria-label="Kapat"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Modal Body: Scrollable only on mobile (< lg), Perfectly fitted without scroll on Desktop (lg:) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto lg:overflow-visible flex-1">
              
              {/* Left Column - Product Image & Trust Indicators */}
              <div className="lg:col-span-6 bg-stone-100 flex flex-col justify-between p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-stone-200">
                <div>
                  <div className="relative aspect-[4/3] max-h-[260px] sm:max-h-[300px] lg:max-h-[320px] rounded-2xl overflow-hidden mb-2.5 shadow-md bg-white border border-stone-200">
                    <img
                      src={selectedImage || product.primaryImage}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.isBestseller && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#1C1917] text-white text-[9px] font-bold uppercase tracking-wider shadow">
                        Çok Satan Model
                      </span>
                    )}
                  </div>

                  {product.gallery && product.gallery.length > 1 && (
                    <div className="flex gap-1.5 mb-2">
                      {product.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(img)}
                          className={`w-12 h-9 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                            (selectedImage || product.primaryImage) === img ? 'border-[#B86B35] ring-2 ring-[#B86B35]/30' : 'border-stone-300 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 pt-2.5 border-t border-stone-200 text-[11px] text-stone-600">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B86B35] flex-shrink-0" />
                    <span>10 Yıl Fırınlanmış Masif Gürgen İskelet Garantisi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Layers className="w-3.5 h-3.5 text-[#B86B35] flex-shrink-0" />
                    <span>32-35 DNS Çökmeyen Soft HR Sünger Konforu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="w-3.5 h-3.5 text-[#B86B35] flex-shrink-0" />
                    <span>İstanbul İçi Ücretsiz Teslimat & Kurulum</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Product Configurator & CTA */}
              <div className="lg:col-span-6 p-4 sm:p-6 flex flex-col justify-between space-y-3 lg:space-y-3">
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#B86B35] font-bold">
                      Bağcılar Atölye İmalatı
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Özel Üretim
                    </span>
                  </div>

                  <h2 className="font-serif-luxe text-xl sm:text-2xl text-[#1C1917] font-bold mb-1">
                    {product.name}
                  </h2>

                  <p className="text-xs text-stone-600 font-light leading-relaxed mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Color / Fabric Swatches */}
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-bold text-stone-800 flex items-center space-x-1">
                        <Palette className="w-3 h-3 text-[#B86B35]" />
                        <span>Kumaş & Renk:</span>
                      </label>
                      <span className="text-[11px] font-bold text-[#B86B35]">
                        {selectedColor}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                      {COLOR_SWATCHES.map((swatch) => {
                        const isSelected = selectedColor === swatch.name;
                        return (
                          <button
                            key={swatch.name}
                            onClick={() => setSelectedColor(swatch.name)}
                            className={`p-1.5 rounded-xl border text-left flex items-center space-x-1.5 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#B86B35] bg-[#FDFBF7] ring-1 ring-[#B86B35]/30 shadow-xs'
                                : 'border-stone-200 hover:border-stone-300 bg-white'
                            }`}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/20 flex-shrink-0 flex items-center justify-center shadow-xs"
                              style={{ backgroundColor: swatch.hex }}
                            >
                              {isSelected && <Check className="w-2 h-2 text-white drop-shadow" />}
                            </span>
                            <span className="text-[10px] font-semibold text-stone-800 truncate">
                              {swatch.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Size Options */}
                  <div className="mb-2">
                    <label className="text-[11px] uppercase tracking-wider font-bold text-stone-800 flex items-center space-x-1 mb-1.5">
                      <Ruler className="w-3 h-3 text-[#B86B35]" />
                      <span>Ölçü & Ebat Seçeneği:</span>
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                      {product.sizeOptions && product.sizeOptions.map((size) => {
                        const isSelected = selectedSize === size;
                        return (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`p-2 rounded-xl text-center text-xs font-medium border transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#B86B35] bg-[#B86B35] text-white font-bold shadow-xs'
                                : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-stone-200 flex flex-row items-center justify-between gap-2">
                  <div className="flex flex-col flex-shrink-0">
                    <span className="text-[9px] uppercase tracking-wider text-[#B86B35] font-bold leading-none mb-0.5">
                      İMALATÇIDAN DOĞRUDAN
                    </span>
                    <span className="font-serif-luxe text-lg font-bold text-[#1C1917] whitespace-nowrap leading-none">
                      Özel İmalat Fiyatı
                    </span>
                  </div>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="px-5 py-3 rounded-full bg-[#1C1917] text-white hover:bg-[#B86B35] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-lg cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp'tan Fiyat Al</span>
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
