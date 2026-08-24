'use client';
import React, { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles, Plus, Trash2 } from 'lucide-react';
import { ChesterProduct } from '../types';
import { useProducts } from '../context/ProductContext';
import { ChesterAddProductModal } from './ChesterAddProductModal';

interface ChesterProductShowcaseProps {
  onSelectProduct: (product: ChesterProduct) => void;
}

export const ChesterProductShowcase: React.FC<ChesterProductShowcaseProps> = ({ onSelectProduct }) => {
  const { products, deleteProduct, isCustomProduct } = useProducts();
  const [activeFilter, setActiveFilter] = useState<'all' | 'sofa' | 'armchair' | 'set' | 'corner'>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'TÜM MODELLER' },
    { id: 'sofa', label: 'Kanepe Çeşitleri' },
    { id: 'armchair', label: 'Berjer Puf Çeşitleri' },
    { id: 'set', label: 'Oturma Takımları' },
    { id: 'corner', label: 'Köşe L Koltuk Takımları' },
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

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

          {/* Action: Add Product Button & Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#B86B35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#944D1E] transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Model Ekle</span>
            </button>

            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1">
              {categories.map((cat) => {
                const count = cat.id === 'all' 
                  ? products.length 
                  : products.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id as any)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                      activeFilter === cat.id
                        ? 'bg-[#1C1917] text-white shadow-md font-bold'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeFilter === cat.id ? 'bg-white/25 text-white' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Clean, Uncluttered Vitrin Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isCustom = isCustomProduct(product.id);
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-[#B86B35] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
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
                  {isCustom && (
                    <span className="absolute bottom-3 left-3.5 px-2.5 py-1 rounded-full bg-emerald-700/90 backdrop-blur-md text-white text-[9px] uppercase font-bold tracking-wider shadow">
                      Eklenen Ürün
                    </span>
                  )}

                  {/* Delete Button for Custom Added Products */}
                  {isCustom && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`"${product.name}" ürününü vitrinden silmek istiyor musunuz?`)) {
                          deleteProduct(product.id);
                        }
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-red-600/80 hover:bg-red-600 text-white transition-colors shadow z-10"
                      title="Ürünü Sil"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
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
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <p className="text-stone-500 text-sm mb-4">Bu kategoride henüz ürün bulunmuyor.</p>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-6 py-2.5 rounded-full bg-[#B86B35] text-white text-xs font-bold uppercase tracking-wider"
            >
              + İlk Ürünü Ekle
            </button>
          </div>
        )}

      </div>

      {/* Add Product Modal */}
      <ChesterAddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </section>
  );
};
