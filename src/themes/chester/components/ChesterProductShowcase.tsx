'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye, Sparkles, Plus, Trash2, Edit3, ShieldCheck, RotateCcw, Layers } from 'lucide-react';
import { ChesterProduct } from '../types';
import { useProducts } from '../context/ProductContext';
import { ChesterAddProductModal } from './ChesterAddProductModal';

interface ChesterProductShowcaseProps {
  onSelectProduct: (product: ChesterProduct) => void;
}

const VISUAL_CATEGORIES = [
  {
    id: 'sofa',
    slug: 'kanepe-cesitleri',
    title: 'Kanepe Çeşitleri',
    tagline: '3\'lü, 2\'li ve Blok Kanepe',
    image: '/images/chester/products/sofa_vintage_english_tan.jpg',
  },
  {
    id: 'armchair',
    slug: 'berjer-puf-cesitleri',
    title: 'Berjer & Puf Çeşitleri',
    tagline: 'Şömine Başı & Okuma Koltuğu',
    image: '/images/chester/products/armchair_library_tan_puf.jpg',
  },
  {
    id: 'corner',
    slug: 'kose-koltuk-takimlari',
    title: 'Köşe L Koltuk Takımları',
    tagline: 'Mekana Özel Ölçülü L Köşe',
    image: '/images/chester/products/corner_manor_bordeaux_leather.jpg',
  },
  {
    id: 'set',
    slug: 'oturma-takimlari',
    title: 'Oturma Takımları',
    tagline: '3+2+1+1 Salon & Makam Takımı',
    image: '/images/chester/chestertime/real_deliveries/delivery_5_tan_salon_set.webp',
  },
];

export const ChesterProductShowcase: React.FC<ChesterProductShowcaseProps> = ({ onSelectProduct }) => {
  const { products, deleteProduct, resetToDefaults, isCustomProduct, isAdmin } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ChesterProduct | null>(null);

  // Curated 8 diverse sample products for the homepage vitrin
  const showcaseProducts = useMemo(() => {
    const custom = products.filter(p => isCustomProduct(p.id));
    const base = products.filter(p => !isCustomProduct(p.id));

    const sofas = base.filter(p => p.category === 'sofa');
    const armchairs = base.filter(p => p.category === 'armchair');
    const corners = base.filter(p => p.category === 'corner');
    const sets = base.filter(p => p.category === 'set');

    // Build a balanced 8-product sample set
    const sample = [
      ...custom,
      ...sofas.slice(0, 3),
      ...armchairs.slice(0, 2),
      ...corners.slice(0, 2),
      ...sets.slice(0, 1),
      ...sofas.slice(3, 5),
    ];

    return sample.slice(0, 8);
  }, [products, isCustomProduct]);

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
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== 'undefined' && window.confirm(`"${product.name}" modelini vitrinden silmek istediğinize emin misiniz?`)) {
      deleteProduct(product.id);
    }
  };

  const handleReset = () => {
    if (typeof window !== 'undefined' && window.confirm('Tüm ürünleri varsayılan fabrika ayarlarına ve kataloğa sıfırlamak istiyor musunuz?')) {
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

        {/* 1. VISUAL CATEGORY NAVIGATION BUTTONS / CARDS */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F5EBE1] text-[#B86B35] text-[11px] font-sans uppercase tracking-widest mb-3 font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>Kategorileri Keşfedin</span>
              </div>
              <h2 className="font-serif-luxe text-3xl sm:text-4xl text-[#1C1917] font-bold">
                Koleksiyon Kategorilerimiz
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light mt-1 max-w-2xl">
                Aradığınız modele göre kategoriyi seçerek tüm ürünleri ayrı sayfada inceleyebilirsiniz.
              </p>
            </div>

            <Link
              href="/kategori/tum-modeller"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#B86B35] hover:text-[#944D1E] transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <span>Tüm Modelleri Gör ({products.length})</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Distinct Luxury Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VISUAL_CATEGORIES.map((cat, idx) => {
              const count = products.filter(p => p.category === cat.id).length;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <Link
                    href={`/kategori/${cat.slug}`}
                    className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-stone-900 border border-stone-200 hover:border-[#B86B35] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-5 block h-full"
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    <div className="relative z-10 text-white">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#B86B35] text-white shadow">
                          {count} Model
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-[#1C1917] transition-colors">
                          <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#1C1917] transition-colors" />
                        </div>
                      </div>
                      <h3 className="font-serif-luxe text-xl font-bold text-white group-hover:text-[#F3C287] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-stone-300 font-light mt-0.5">
                        {cat.tagline}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2. SECTION HEADER (ÖNE ÇIKAN 8 MODEL) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-t border-stone-200 pt-14">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F5EBE1] text-[#B86B35] text-[11px] font-sans uppercase tracking-widest mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Öne Çıkan Seçkiler</span>
            </div>
            <h2 className="font-serif-luxe text-3xl sm:text-4xl text-[#1C1917] font-bold">
              Öne Çıkan Koltuk Modellerimiz
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light mt-1 max-w-2xl">
              Atölyemizden özenle seçilmiş 8 farklı tasarım ve kapitone modeli. Detaylar için modele tıklayın.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href="/kategori/tum-modeller"
              className="px-5 py-2.5 rounded-full bg-[#1C1917] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B86B35] transition-colors shadow flex items-center space-x-1.5"
            >
              <span>Kataloğun Tamamı ({products.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 8 Product Sample Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseProducts.map((product, idx) => {
            const isCustom = isCustomProduct(product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
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
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#1C1917]/90 backdrop-blur-md text-white text-[9px] uppercase font-bold tracking-wider shadow">
                      Çok Satan
                    </span>
                  )}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#B86B35] text-white text-[9px] uppercase font-bold tracking-wider shadow">
                      Yeni
                    </span>
                  )}
                  {isCustom && (
                    <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-emerald-700/90 backdrop-blur-md text-white text-[9px] uppercase font-bold tracking-wider shadow">
                      Yeni Eklenen
                    </span>
                  )}

                  {/* Admin Edit & Delete Controls */}
                  {isAdmin && (
                    <div className="absolute top-3 right-3 flex items-center space-x-1.5 z-30 pointer-events-auto">
                      <button
                        type="button"
                        onClick={(e) => handleOpenEdit(e, product)}
                        className="p-2 rounded-full bg-[#1C1917] hover:bg-[#B86B35] text-white transition-all shadow-lg hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
                        title="Modeli Düzenle"
                        aria-label="Modeli Düzenle"
                      >
                        <Edit3 className="w-3.5 h-3.5 pointer-events-none" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleDelete(e, product)}
                        className="p-2 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all shadow-lg hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
                        title="Modeli Vitrinden Kaldır"
                        aria-label="Modeli Kaldır"
                      >
                        <Trash2 className="w-3.5 h-3.5 pointer-events-none" />
                      </button>
                    </div>
                  )}

                  {/* Hover Action */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-white text-[#1C1917] text-[11px] font-bold uppercase tracking-wider shadow-xl flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3 h-3 text-[#B86B35]" />
                      <span>İncele</span>
                    </span>
                  </div>
                </div>

                {/* Minimal Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-sm sm:text-base tracking-tight text-[#1C1917] group-hover:text-[#B86B35] transition-colors leading-snug line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-[11px] text-stone-500 mt-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Özel İmalat • İstenilen Renk</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-stone-600">
                      Kişiye Özel Ölçü
                    </span>
                    <div className="flex items-center space-x-1 text-[#B86B35] text-xs font-bold uppercase tracking-wider">
                      <span>Fiyat Al</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* 3. FULL CATALOG PROMO BANNER */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-[#161412] text-white border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-[#F3C287] font-semibold block mb-1">
              Koleksiyonun Tamamı
            </span>
            <h3 className="font-serif-luxe text-2xl sm:text-3xl font-bold text-white">
              Tüm Chester Koltuk Modellerimizi İnceleyin
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light mt-1 max-w-2xl">
              Farklı ölçü, hakiki İtalyan deri ve silinebilir kadife döşeme seçenekleriyle {products.length} farklı modelimizi kategori sayfalarında keşfedin.
            </p>
          </div>

          <Link
            href="/kategori/tum-modeller"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B86B35] hover:bg-[#944D1E] text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-xl flex items-center justify-center space-x-2 flex-shrink-0 hover:scale-105"
          >
            <span>Tüm Modelleri Aç ({products.length} Model)</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

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
