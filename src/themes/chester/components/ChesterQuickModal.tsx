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
  { name: 'Vizon Gri / Keten', hex: '#8A8379', type: 'Dokulu Leke Tutmaz Kumaş' },
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto overscroll-contain"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative w-full max-w-4xl bg-white text-stone-900 rounded-3xl shadow-2xl border border-stone-200 my-auto max-h-[88vh] sm:max-h-[85vh] flex flex-col overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-3.5 right-3.5 z-20 p-2.5 rounded-full bg-black/65 hover:bg-black text-white transition-colors cursor-pointer shadow-lg"
              aria-label="Kapat"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1 custom-modal-scroll">
              
              <div className="lg:col-span-6 bg-stone-100 flex flex-col justify-between p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-stone-200">
                <div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 shadow-md bg-white border border-stone-200">
                    <img
                      src={selectedImage || product.primaryImage}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.isBestseller && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                        Çok Satan Model
                      </span>
                    )}
                  </div>

                  {product.gallery && product.gallery.length > 1 && (
                    <div className="flex gap-2 mb-4">
                      {product.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(img)}
                          className={`w-14 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                            (selectedImage || product.primaryImage) === img ? 'border-[#B86B35] ring-2 ring-[#B86B35]/30' : 'border-stone-300 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-3 border-t border-stone-200 text-xs text-stone-600">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-[#B86B35] flex-shrink-0" />
                    <span>10 Yıl Fırınlanmış Masif Gürgen İskelet Garantisi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-[#B86B35] flex-shrink-0" />
                    <span>32-35 DNS Çökmeyen Soft HR Sünger Konforu</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4 text-[#B86B35] flex-shrink-0" />
                    <span>İstanbul İçi Ücretsiz Teslimat & Kurulum</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between space-y-5">
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#B86B35] font-semibold">
                      Bağcılar Atölye İmalatı
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Özel Üretim
                    </span>
                  </div>

                  <h2 className="font-serif-luxe text-2xl sm:text-3xl text-[#1C1917] font-bold mb-2">
                    {product.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-5">
                    {product.description}
                  </p>

                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs uppercase tracking-wider font-bold text-stone-800 flex items-center space-x-1.5">
                        <Palette className="w-3.5 h-3.5 text-[#B86B35]" />
                        <span>Kumaş & Renk:</span>
                      </label>
                      <span className="text-xs font-bold text-[#B86B35]">
                        {selectedColor}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {COLOR_SWATCHES.map((swatch) => {
                        const isSelected = selectedColor === swatch.name;
                        return (
                          <button
                            key={swatch.name}
                            onClick={() => setSelectedColor(swatch.name)}
                            className={`p-2 rounded-xl border text-left flex items-center space-x-2 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#B86B35] bg-[#FDFBF7] ring-2 ring-[#B86B35]/25 shadow-sm'
                                : 'border-stone-200 hover:border-stone-300 bg-white'
                            }`}
                          >
                            <span
                              className="w-4 h-4 rounded-full border border-black/20 flex-shrink-0 flex items-center justify-center shadow-sm"
                              style={{ backgroundColor: swatch.hex }}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5 text-white drop-shadow" />}
                            </span>
                            <span className="text-[11px] font-semibold text-stone-800 truncate">
                              {swatch.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="text-xs uppercase tracking-wider font-bold text-stone-800 flex items-center space-x-1.5 mb-2">
                      <Ruler className="w-3.5 h-3.5 text-[#B86B35]" />
                      <span>Ölçü & Ebat Seçeneği:</span>
                    </label>

                    <div className="grid grid-cols-2 gap-2">
                      {product.sizeOptions && product.sizeOptions.map((size) => {
                        const isSelected = selectedSize === size;
                        return (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`p-2.5 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#B86B35] bg-[#B86B35] text-white font-bold shadow'
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

                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-col flex-shrink-0">
                    <span className="text-[10px] uppercase tracking-wider text-[#B86B35] font-bold leading-none mb-1">
                      İMALATÇIDAN DOĞRUDAN
                    </span>
                    <span className="font-serif-luxe text-xl sm:text-2xl font-bold text-[#1C1917] whitespace-nowrap leading-none">
                      Özel İmalat Teklifi
                    </span>
                  </div>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="px-6 py-3.5 rounded-full bg-[#1C1917] text-white hover:bg-[#B86B35] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
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
