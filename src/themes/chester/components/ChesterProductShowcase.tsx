'use client';
import React, { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { ChesterProduct } from '../types';
import { CHESTER_PRODUCTS } from '../mockData';

interface ChesterProductShowcaseProps {
  onSelectProduct: (product: ChesterProduct) => void;
}

export const ChesterProductShowcase: React.FC<ChesterProductShowcaseProps> = ({ onSelectProduct }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sofa' | 'armchair' | 'set' | 'corner'>('all');

  const categories = [
    { id: 'all', label: 'TÜM MODELLER' },
    { id: 'sofa', label: 'Kanepe Çeşitleri' },
    { id: 'armchair', label: 'Berjer Puf Çeşitleri' },
    { id: 'set', label: 'Oturma Takımları' },
    { id: 'corner', label: 'Köşe L Koltuk Takımları' },
  ];

  const filteredProducts = activeFilter === 'all'
    ? CHESTER_PRODUCTS
    : CHESTER_PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section id="vitrin" className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F5EBE1] text-[#B86B35] text-[11px] font-sans uppercase tracking-widest mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chester Time Ürün Vitrini</span>
            </div>
            <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-bold">
              Koltuk Modellerimiz
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light mt-2 max-w-2xl">
              Detaylı ölçü, kumaş ve renk seçeneklerini görmek için modelin üzerine tıklayın.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-[#1C1917] text-white shadow-md font-bold'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean, Uncluttered Vitrin Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-[#B86B35] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Clean Product Visual */}
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={product.primaryImage}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {product.isBestseller && (
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#1C1917]/90 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider shadow">
                    Çok Satan
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#B86B35] text-white text-[10px] uppercase font-bold tracking-wider shadow">
                    Yeni Model
                  </span>
                )}

                {/* Subtle Hover Action */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-white text-[#1C1917] text-xs font-bold uppercase tracking-wider shadow-xl flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-[#B86B35]" />
                    <span>Detay & Renkleri İncele</span>
                  </span>
                </div>
              </div>

              {/* Minimal Clean Card Content */}
              <div className="p-5 flex-1 flex items-center justify-between">
                <div>
                  <h3 className="font-sans font-bold text-lg sm:text-[19px] tracking-tight text-[#1C1917] group-hover:text-[#B86B35] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <span className="text-xs text-stone-500 font-medium">
                    İmalat Fiyatı: <strong className="text-stone-900 font-bold whitespace-nowrap">{product.startingPrice}</strong>
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs font-bold text-[#B86B35] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-3">
                  <span>İncele</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
