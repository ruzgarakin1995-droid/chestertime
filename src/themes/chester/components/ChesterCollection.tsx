'use client';
import React, { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { ChesterProduct } from '../types';
import { buildWhatsAppUrl, ATELIER_NAME } from '../mockData';
import { useProducts } from '../context/ProductContext';

interface ChesterCollectionProps {
  onSelectProduct: (product: ChesterProduct) => void;
}

export const ChesterCollection: React.FC<ChesterCollectionProps> = ({ onSelectProduct }) => {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState<'all' | 'sofa' | 'armchair' | 'set' | 'corner'>('all');

  const categories = [
    { id: 'all', label: 'TÜM MODELLER' },
    { id: 'sofa', label: 'Kanepe Çeşitleri' },
    { id: 'armchair', label: 'Berjer Puf Çeşitleri' },
    { id: 'set', label: 'Oturma Takımları' },
    { id: 'corner', label: 'Köşe L Koltuk Takımları' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="collection" className="py-20 lg:py-28 bg-[#14120F] text-white border-t border-b border-[#2E2922]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
              Özel Ölçü İmalat • 40 Yıl Garanti
            </span>
            <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl text-white">
              Chesterfield Başyapıtları
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-[#0D0C0A] shadow-lg font-bold'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#1C1915] rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div 
                className="relative aspect-[4/3] bg-stone-900 overflow-hidden cursor-pointer" 
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.primaryImage}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {product.isBestseller && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#D4AF37] text-[#0D0C0A] text-[10px] uppercase font-bold tracking-wider shadow">
                    Çok Satan
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider border border-white/30">
                    Yeni Model
                  </span>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-white text-[#0D0C0A] text-xs font-bold uppercase tracking-wider shadow-xl flex items-center space-x-2">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ölçü & Deri Seçimi</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold">
                      {product.leatherType}
                    </span>
                    <span className="text-xs font-bold text-[#D4AF37]">
                      Fiyat Al
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-serif-luxe text-xl text-white group-hover:text-[#D4AF37] transition-colors cursor-pointer mb-2"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-400 font-light leading-relaxed line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-semibold text-stone-300 hover:text-[#D4AF37] transition-colors"
                  >
                    Ölçü & Detaylar →
                  </button>

                  <a
                    href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, "${product.name}" modeli için özel ölçü fiyatı almak istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#D4AF37] text-[#0D0C0A] hover:brightness-110 transition-all shadow"
                    aria-label={`${product.name} Fiyat Al`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
