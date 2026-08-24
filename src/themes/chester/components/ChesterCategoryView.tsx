'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Eye, Sparkles, Plus, Trash2, Edit3, ShieldCheck, Home, ChevronRight } from 'lucide-react';
import { ChesterProduct } from '../types';
import { useProducts, ProductProvider } from '../context/ProductContext';
import { ChesterHeader } from './ChesterHeader';
import { ChesterFooter } from './ChesterFooter';
import { ChesterQuickModal } from './ChesterQuickModal';
import { ChesterAddProductModal } from './ChesterAddProductModal';
import { ChesterWhatsAppFloat } from './ChesterWhatsAppFloat';
import { ATELIER_NAME, buildWhatsAppUrl } from '../mockData';
import '../chester-theme.css';

const CATEGORY_MAP: Record<string, { id: string; filterKey: string; label: string; description: string }> = {
  'kanepe-cesitleri': {
    id: 'kanepe-cesitleri',
    filterKey: 'sofa',
    label: 'Kanepe Çeşitleri',
    description: '3\'lü, 2\'li ve özel ölçülü klasik İngiliz kapitone ve modern deri Chester kanepe modellerimiz.',
  },
  'sofa': {
    id: 'kanepe-cesitleri',
    filterKey: 'sofa',
    label: 'Kanepe Çeşitleri',
    description: '3\'lü, 2\'li ve özel ölçülü klasik İngiliz kapitone ve modern deri Chester kanepe modellerimiz.',
  },
  'berjer-puf-cesitleri': {
    id: 'berjer-puf-cesitleri',
    filterKey: 'armchair',
    label: 'Berjer ve Puf Çeşitleri',
    description: 'Şömine başı okuma koltukları, kütüphane berjerleri ve komple kapitone puf takımları.',
  },
  'armchair': {
    id: 'berjer-puf-cesitleri',
    filterKey: 'armchair',
    label: 'Berjer ve Puf Çeşitleri',
    description: 'Şömine başı okuma koltukları, kütüphane berjerleri ve komple kapitone puf takımları.',
  },
  'oturma-takimlari': {
    id: 'oturma-takimlari',
    filterKey: 'set',
    label: 'Oturma Takımları',
    description: '3+2+1+1 komple salon takımları, makam odası ve VIP loca projeleri.',
  },
  'set': {
    id: 'oturma-takimlari',
    filterKey: 'set',
    label: 'Oturma Takımları',
    description: '3+2+1+1 komple salon takımları, makam odası ve VIP loca projeleri.',
  },
  'kose-koltuk-takimlari': {
    id: 'kose-koltuk-takimlari',
    filterKey: 'corner',
    label: 'Köşe L Koltuk Takımları',
    description: 'Mekanınıza ve odanızın yönüne özel sıfırdan üretilen lüks L köşe Chester takımları.',
  },
  'corner': {
    id: 'kose-koltuk-takimlari',
    filterKey: 'corner',
    label: 'Köşe L Koltuk Takımları',
    description: 'Mekanınıza ve odanızın yönüne özel sıfırdan üretilen lüks L köşe Chester takımları.',
  },
  'tum-modeller': {
    id: 'tum-modeller',
    filterKey: 'all',
    label: 'Tüm Koltuk Modellerimiz',
    description: 'Atölyemizde el işçiliğiyle üretilen tüm Chester koltuk, kanepe, berjer ve köşe takımları kataloğu.',
  },
  'all': {
    id: 'tum-modeller',
    filterKey: 'all',
    label: 'Tüm Koltuk Modellerimiz',
    description: 'Atölyemizde el işçiliğiyle üretilen tüm Chester koltuk, kanepe, berjer ve köşe takımları kataloğu.',
  },
};

const CATEGORIES_NAV = [
  { slug: 'tum-modeller', key: 'all', label: 'Tüm Modeller' },
  { slug: 'kanepe-cesitleri', key: 'sofa', label: 'Kanepe Çeşitleri' },
  { slug: 'berjer-puf-cesitleri', key: 'armchair', label: 'Berjer & Puf' },
  { slug: 'kose-koltuk-takimlari', key: 'corner', label: 'Köşe Takımları' },
  { slug: 'oturma-takimlari', key: 'set', label: 'Oturma Takımları' },
];

function CategoryViewContent({ categorySlug }: { categorySlug: string }) {
  const { products, deleteProduct, isCustomProduct, isAdmin } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<ChesterProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ChesterProduct | null>(null);

  const currentCat = CATEGORY_MAP[categorySlug] || CATEGORY_MAP['tum-modeller'];

  const filteredProducts = useMemo(() => {
    if (currentCat.filterKey === 'all') {
      return products;
    }
    return products.filter((p) => p.category === currentCat.filterKey);
  }, [products, currentCat.filterKey]);

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

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] font-sans antialiased flex flex-col justify-between">
      <div>
        <ChesterHeader />

        <main className="pt-28 sm:pt-36 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 text-xs text-stone-500 mb-6 overflow-x-auto pb-1">
              <Link href="/" className="flex items-center space-x-1 hover:text-[#B86B35] transition-colors">
                <Home className="w-3.5 h-3.5" />
                <span>Anasayfa</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <Link href="/#vitrin" className="hover:text-[#B86B35] transition-colors">
                Koleksiyon
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-stone-900 font-semibold">{currentCat.label}</span>
            </div>

            {/* Category Page Header Banner */}
            <div className="bg-[#161412] text-white rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl relative overflow-hidden border border-white/10">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-[#F3C287] text-[11px] font-sans uppercase tracking-widest mb-3 font-semibold backdrop-blur-sm border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Kategori Kataloğu • {filteredProducts.length} Model</span>
                </div>
                <h1 className="font-serif-luxe text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
                  {currentCat.label}
                </h1>
                <p className="text-xs sm:text-sm text-stone-300 font-light max-w-2xl leading-relaxed">
                  {currentCat.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <Link
                    href="/"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Anasayfaya Dön</span>
                  </Link>
                  <a
                    href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, ${currentCat.label} modelleriniz için fiyat ve katalog bilgisi almak istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#B86B35] hover:bg-[#944D1E] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
                  >
                    <span>WhatsApp İle Bilgi Al</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {isAdmin && (
                  <button
                    onClick={handleOpenAdd}
                    className="px-5 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center space-x-2 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Bu Kategoriye Ürün Ekle</span>
                  </button>
                )}
              </div>
            </div>

            {/* Category Navigation Pills */}
            <div className="flex items-center space-x-2.5 overflow-x-auto no-scrollbar pb-6 mb-8 border-b border-stone-200">
              {CATEGORIES_NAV.map((nav) => {
                const isActive = (nav.slug === currentCat.id) || (nav.key === currentCat.filterKey);
                const count = nav.key === 'all' 
                  ? products.length 
                  : products.filter(p => p.category === nav.key).length;
                return (
                  <Link
                    key={nav.slug}
                    href={`/kategori/${nav.slug}`}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center space-x-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#1C1917] text-white shadow-md'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    <span>{nav.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/25 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {count}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const isCustom = isCustomProduct(product.id);
                return (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-[#B86B35] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
                  >
                    {/* Visual */}
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

                      {/* Admin Quick Controls */}
                      {isAdmin && (
                        <div className="absolute top-3 right-3 flex items-center space-x-1.5 z-30 pointer-events-auto">
                          <button
                            type="button"
                            onClick={(e) => handleOpenEdit(e, product)}
                            className="p-2.5 rounded-full bg-[#1C1917] hover:bg-[#B86B35] text-white transition-all shadow-lg hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
                            title="Modeli Düzenle"
                            aria-label="Modeli Düzenle"
                          >
                            <Edit3 className="w-4 h-4 pointer-events-none" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => handleDelete(e, product)}
                            className="p-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all shadow-lg hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
                            title="Modeli Vitrinden Kaldır"
                            aria-label="Modeli Kaldır"
                          >
                            <Trash2 className="w-4 h-4 pointer-events-none" />
                          </button>
                        </div>
                      )}

                      {/* Hover Action */}
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-5 py-2.5 rounded-full bg-white text-[#1C1917] text-xs font-bold uppercase tracking-wider shadow-xl flex items-center space-x-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-3.5 h-3.5 text-[#B86B35]" />
                          <span>Detay & Renkleri İncele</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
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
              <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
                <p className="text-stone-500 text-sm mb-4">Bu kategoride şu anda listelenen ürün bulunmuyor.</p>
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
        </main>
      </div>

      <ChesterFooter />
      <ChesterWhatsAppFloat />

      {/* Product Detail Modal */}
      <ChesterQuickModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Add / Edit Product Modal */}
      <ChesterAddProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
        }}
        productToEdit={editingProduct}
      />
    </div>
  );
}

export const ChesterCategoryView: React.FC<{ categorySlug: string }> = ({ categorySlug }) => {
  return (
    <ProductProvider>
      <CategoryViewContent categorySlug={categorySlug} />
    </ProductProvider>
  );
};
