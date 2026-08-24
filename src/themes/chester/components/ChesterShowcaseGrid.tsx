'use client';
import React, { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles, Building2 } from 'lucide-react';
import { ChesterProduct } from '../types';
import { CHESTER_PRODUCTS, buildWhatsAppUrl, ATELIER_NAME } from '../mockData';

interface ChesterShowcaseGridProps {
  onSelectProduct: (product: ChesterProduct) => void;
}

export const ChesterShowcaseGrid: React.FC<ChesterShowcaseGridProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sofa' | 'armchair' | 'set' | 'corner'>('all');

  const categories = [
    { id: "all", label: "TÜM MODELLER" },
    { id: "sofa", label: "Kanepe Çeşitleri" },
    { id: "armchair", label: "Berjer Puf Çeşitleri" },
    { id: "set", label: "Oturma Takımları" },
    { id: "corner", label: "Köşe L Koltuk Takımları" },
  ];

  const filteredProducts = activeCategory === 'all'
    ? CHESTER_PRODUCTS
    : CHESTER_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="collection" className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-b border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A86532] font-semibold block mb-2">
              Modoko Teşhir & Özel Sipariş
            </span>
            <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl text-[#161412]">
              Chesterfield Vitrini & Koleksiyon
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
                    ? 'bg-[#161412] text-white shadow-md font-bold'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#E5DFD3]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E5DFD3] hover:border-[#B89547] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div 
                className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer" 
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.primaryImage}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Showroom Status Tag */}
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#161412] text-[10px] font-sans font-semibold flex items-center space-x-1 shadow">
                  <Building2 className="w-3 h-3 text-[#A86532]" />
                  <span>Showroom Teşhirinde Canlı İnceleyin</span>
                </span>

                {product.isBestseller && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#161412] text-white text-[10px] uppercase font-bold tracking-wider shadow">
                    Çok Satan
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#A86532] text-white text-[10px] uppercase font-bold tracking-wider shadow">
                    Yeni Model
                  </span>
                )}

                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-white text-[#161412] text-xs font-bold uppercase tracking-wider shadow-xl flex items-center space-x-2">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ölçü & Deri Seçimi</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#A86532] font-semibold">
                      {product.leatherType}
                    </span>
                    <span className="text-xs font-bold text-stone-900">
                      {product.startingPrice}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-serif-luxe text-xl text-[#161412] group-hover:text-[#A86532] transition-colors cursor-pointer mb-2"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-500 font-light leading-relaxed line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-semibold text-stone-700 hover:text-black transition-colors"
                  >
                    Ölçü & Detaylar →
                  </button>

                  <a
                    href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, "${product.name}" modeli için özel ölçü fiyatı almak istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#161412] text-white hover:bg-[#A86532] transition-colors shadow"
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
