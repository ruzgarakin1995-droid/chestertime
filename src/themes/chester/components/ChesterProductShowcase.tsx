'use client';
import React, { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles, Plus, Trash2, Edit3, ShieldCheck, RotateCcw } from 'lucide-react';
import { ChesterProduct } from '../types';
import { useProducts } from '../context/ProductContext';
import { ChesterAddProductModal } from './ChesterAddProductModal';

interface ChesterProductShowcaseProps {
  onSelectProduct: (product: ChesterProduct) => void;
}

export const ChesterProductShowcase: React.FC<ChesterProductShowcaseProps> = ({ onSelectProduct }) => {
  const { products, deleteProduct, resetToDefaults, isCustomProduct, isAdmin } = useProducts();
  const [activeFilter, setActiveFilter] = useState<'all' | 'sofa' | 'armchair' | 'set' | 'corner'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ChesterProduct | null>(null);

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

  const handleOpenAdd = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (e: React.MouseEvent, product: ChesterProduct) => {
    e.stopPropagation();
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (e: React.MouseEvent, product: ChesterProduct) => {
    e.stopPropagation();
    if (confirm(`"${product.name}" ürününü vitrinden kaldırmak/silmek istediğinize emin misiniz?`)) {
      deleteProduct(product.id);
    }
  };

  const handleReset = () => {
    if (confirm('Tüm ürünleri varsayılan fabrika ayarlarına ve kataloğa sıfırlamak istiyor musunuz?')) {
      resetToDefaults();
    }
  };

  return (
    <section id="vitrin" className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Notification Banner (Only visible when logged in as admin) */}
        {isAdmin && (
          <div className="mb-8 p-4 sm:p-5 rounded-3xl bg-[#1C1917] text-white border border-[#B86B35]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-2xl bg-[#B86B35] text-white flex items-center justify-center flex-shrink-0 shadow">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-sm text-[#F3C287]">Yönetici Modu Aktif</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="text-xs text-stone-300 font-light">
                  Tüm kategorilerdeki modelleri düzenleyebilir, kaldırabilir veya yeni görsel/model ekleyebilirsiniz.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 flex-shrink-0">
              <button
                onClick={handleOpenAdd}
                className="px-5 py-2.5 rounded-full bg-[#B86B35] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#944D1E] transition-colors flex items-center space-x-1.5 shadow"
              >
                <Plus className="w-4 h-4" />
                <span>Yeni Model Ekle</span>
              </button>
              <button
                onClick={handleReset}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors"
                title="Varsayılan Kataloğa Sıfırla"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

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
          <div className="flex flex-wrap items-center gap-2">
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

        {/* Clean Vitrin Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isCustom = isCustomProduct(product.id);
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-[#B86B35] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
              >
                {/* Product Visual */}
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
                    <span className="absolute bottom-3.5 left-3.5 px-2.5 py-1 rounded-full bg-emerald-700/90 backdrop-blur-md text-white text-[9px] uppercase font-bold tracking-wider shadow">
                      Yeni Eklenen
                    </span>
                  )}

                  {/* Admin Edit & Delete Quick Action Controls */}
                  {isAdmin && (
                    <div className="absolute top-3 right-3 flex items-center space-x-1.5 z-20">
                      <button
                        type="button"
                        onClick={(e) => handleOpenEdit(e, product)}
                        className="p-2 rounded-full bg-[#1C1917]/90 hover:bg-[#B86B35] text-white transition-all shadow-md"
                        title="Modeli Düzenle"
                        aria-label="Modeli Düzenle"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleDelete(e, product)}
                        className="p-2 rounded-full bg-red-600/90 hover:bg-red-700 text-white transition-all shadow-md"
                        title="Modeli Vitrinden Kaldır"
                        aria-label="Modeli Kaldır"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Subtle Hover Action */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-5 py-2.5 rounded-full bg-white text-[#1C1917] text-xs font-bold uppercase tracking-wider shadow-xl flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-[#B86B35]" />
                      <span>Detay & Renkleri İncele</span>
                    </span>
                  </div>
                </div>

                {/* Minimal Clean Card Content */}
                <div className="p-5 flex-1 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-sans font-bold text-base sm:text-lg tracking-tight text-[#1C1917] group-hover:text-[#B86B35] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-xs text-stone-500 mt-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Özel İmalat • İstenilen Ölçü & Renk</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-[#1C1917] text-white text-xs font-bold uppercase tracking-wider group-hover:bg-[#B86B35] transition-all flex-shrink-0 shadow-sm">
                    <span>Fiyat Al</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
            {isAdmin && (
              <button
                onClick={handleOpenAdd}
                className="px-6 py-2.5 rounded-full bg-[#B86B35] text-white text-xs font-bold uppercase tracking-wider"
              >
                + İlk Ürünü Ekle
              </button>
            )}
          </div>
        )}

      </div>

      {/* Add / Edit Product Modal */}
      <ChesterAddProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
        }}
        productToEdit={editingProduct}
      />
    </section>
  );
};
