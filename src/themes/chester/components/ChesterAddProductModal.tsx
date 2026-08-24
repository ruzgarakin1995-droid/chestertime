'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Image as ImageIcon, Sparkles, Check, Plus, AlertCircle, Trash2, Edit3, Crop } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { ChesterProduct } from '../types';
import { ChesterImageCropper } from './ChesterImageCropper';

interface ChesterAddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productToEdit?: ChesterProduct | null;
}

export const ChesterAddProductModal: React.FC<ChesterAddProductModalProps> = ({
  isOpen,
  onClose,
  productToEdit,
}) => {
  const { addProduct, updateProduct } = useProducts();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('');
  const [category, setCategory] = useState<'sofa' | 'armchair' | 'set' | 'corner'>('sofa');
  const [startingPrice, setStartingPrice] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [leatherType, setLeatherType] = useState('1. Sınıf Silinebilir Kumaş / Hakiki Deri');
  const [badge, setBadge] = useState<'none' | 'new' | 'bestseller'>('new');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [imageUrlInput, setImageUrlInput] = useState<string>('');
  const [imageMode, setImageMode] = useState<'upload' | 'url'>('upload');

  // Cropper state
  const [isCropping, setIsCropping] = useState(false);
  const [rawImageForCrop, setRawImageForCrop] = useState<string>('');
  
  const [lengthCm, setLengthCm] = useState(230);
  const [depthCm, setDepthCm] = useState(95);
  const [heightCm, setHeightCm] = useState(80);

  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Populate form if editing existing product
  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name || '');
      setCategory(productToEdit.category || 'sofa');
      setStartingPrice(productToEdit.startingPrice || '');
      setTagline(productToEdit.tagline || '');
      setDescription(productToEdit.description || '');
      setLeatherType(productToEdit.leatherType || '1. Sınıf Silinebilir Kumaş / Hakiki Deri');
      if (productToEdit.isBestseller) setBadge('bestseller');
      else if (productToEdit.isNew) setBadge('new');
      else setBadge('none');
      setImagePreview(productToEdit.primaryImage || '');
      if (productToEdit.dimensions) {
        setLengthCm(productToEdit.dimensions.length || 230);
        setDepthCm(productToEdit.dimensions.depth || 95);
        setHeightCm(productToEdit.dimensions.height || 80);
      }
    } else {
      resetForm();
    }
  }, [productToEdit, isOpen]);

  // File Upload Handler (FileReader -> Trigger Cropper)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('Görsel boyutu 10MB\'dan küçük olmalıdır.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const rawData = reader.result as string;
        setRawImageForCrop(rawData);
        setIsCropping(true);
        setErrorMessage('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlApply = () => {
    if (imageUrlInput.trim()) {
      setRawImageForCrop(imageUrlInput.trim());
      setIsCropping(true);
      setErrorMessage('');
    }
  };

  const handleCropComplete = (croppedDataUrl: string) => {
    setImagePreview(croppedDataUrl);
    setIsCropping(false);
  };

  const handleReCrop = () => {
    if (imagePreview) {
      setRawImageForCrop(imagePreview);
      setIsCropping(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Lütfen ürün başlığını giriniz.');
      return;
    }
    if (!imagePreview) {
      setErrorMessage('Lütfen ürün için bir fotoğraf yükleyin veya görsel URL\'si girin.');
      return;
    }
    if (!startingPrice.trim()) {
      setErrorMessage('Lütfen imalat fiyatını belirtiniz (Örn: 27.500 ₺).');
      return;
    }
    if (!description.trim()) {
      setErrorMessage('Lütfen ürün açıklamasını giriniz.');
      return;
    }

    const formattedPrice = startingPrice.includes('₺') ? startingPrice.trim() : `${startingPrice.trim()} ₺`;

    const productPayload = {
      name: name.trim(),
      category,
      tagline: tagline.trim() || 'Fırınlanmış gürgen iskelet, silinebilir kumaş ve usta işi el kapitonesi.',
      description: description.trim(),
      startingPrice: formattedPrice,
      primaryImage: imagePreview,
      gallery: [imagePreview],
      leatherType: leatherType.trim() || '1. Sınıf Silinebilir Kumaş / Deri',
      tuftingDepth: 'Komple El Kapitonesi',
      cushionFill: '32 DNS Soft HR Sünger',
      warranty: '10 Yıl Masif İskelet Garantisi',
      dimensions: {
        length: Number(lengthCm) || 230,
        depth: Number(depthCm) || 95,
        height: Number(heightCm) || 80
      },
      availableLeathers: ['Antik Taba', 'Krem', 'Bordo', 'Siyah'],
      sizeOptions: [`${lengthCm} cm`, 'Standart Ölçü', 'Özel Mekan Ölçüsü'],
      isNew: badge === 'new',
      isBestseller: badge === 'bestseller'
    };

    if (productToEdit) {
      updateProduct(productToEdit.id, productPayload);
    } else {
      addProduct(productPayload);
    }

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      resetForm();
      onClose();
      // Scroll smoothly to showcase section
      const vitrinElem = document.getElementById('vitrin');
      if (vitrinElem) {
        vitrinElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 700);
  };

  const resetForm = () => {
    setName('');
    setCategory('sofa');
    setStartingPrice('');
    setTagline('');
    setDescription('');
    setLeatherType('1. Sınıf Silinebilir Kumaş / Hakiki Deri');
    setBadge('new');
    setImagePreview('');
    setImageUrlInput('');
    setRawImageForCrop('');
    setIsCropping(false);
    setLengthCm(230);
    setDepthCm(95);
    setHeightCm(80);
    setErrorMessage('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto overscroll-contain"
          onClick={(e) => {
            if (e.target === e.currentTarget && !isCropping) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-white text-stone-900 rounded-3xl shadow-2xl border border-stone-200 my-auto max-h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 bg-[#FAF7F2]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-[#B86B35] text-white flex items-center justify-center shadow-md">
                  {productToEdit ? <Edit3 className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-serif-luxe text-xl sm:text-2xl font-bold text-[#1C1917]">
                    {productToEdit ? 'Modeli Düzenle' : 'Yeni Koltuk Modeli Ekle'}
                  </h3>
                  <p className="text-xs text-stone-500 font-light">
                    {productToEdit
                      ? `"${productToEdit.name}" modelinin bilgilerini ve görselini güncelleyin.`
                      : 'Kategori seçin, görsel yükleyin, kırpın ve bilgileri doldurarak vitrine ekleyin.'}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-200/60 transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="overflow-y-auto p-6 sm:p-8 space-y-6 custom-modal-scroll">
              
              {errorMessage && (
                <div className="flex items-center space-x-2 p-3.5 rounded-2xl bg-red-50 text-red-700 text-xs border border-red-200">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {isSuccess && (
                <div className="flex items-center space-x-2 p-3.5 rounded-2xl bg-emerald-50 text-emerald-800 text-xs border border-emerald-200">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-semibold">
                    {productToEdit ? 'Değişiklikler başarıyla kaydedildi!' : 'Ürün başarıyla vitrine eklendi!'}
                  </span>
                </div>
              )}

              {/* 1. Görsel Yükleme & Kırpma Bölümü */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
                  1. Ürün Fotoğrafı & Kırpma / Hizalama <span className="text-red-500">*</span>
                </label>

                {/* Cropper View If Active */}
                {isCropping && rawImageForCrop ? (
                  <ChesterImageCropper
                    imageSrc={rawImageForCrop}
                    onCropComplete={handleCropComplete}
                    onCancel={() => setIsCropping(false)}
                    aspectRatio={4 / 3}
                  />
                ) : (
                  <>
                    <div className="flex items-center space-x-2 mb-3">
                      <button
                        type="button"
                        onClick={() => setImageMode('upload')}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          imageMode === 'upload'
                            ? 'bg-[#1C1917] text-white shadow-sm'
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        Bilgisayardan / Galeriden Yükle
                      </button>
                      <button
                        type="button"
                        onClick={() => setImageMode('url')}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          imageMode === 'url'
                            ? 'bg-[#1C1917] text-white shadow-sm'
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        Görsel Bağlantısı (URL) İle Ekle
                      </button>
                    </div>

                    {imageMode === 'upload' ? (
                      <div>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept="image/*"
                          className="hidden"
                        />
                        {!imagePreview ? (
                          <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-stone-300 hover:border-[#B86B35] rounded-3xl p-8 text-center cursor-pointer bg-stone-50 hover:bg-[#FAF7F2] transition-all group"
                          >
                            <div className="w-12 h-12 rounded-full bg-white border border-stone-200 mx-auto flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                              <Upload className="w-5 h-5 text-[#B86B35]" />
                            </div>
                            <p className="text-sm font-bold text-stone-800 mb-1">
                              Fotoğraf seçmek için tıklayın veya sürükleyin
                            </p>
                            <p className="text-xs text-stone-500">
                              Seçtikten sonra görseli tam 4:3 vitrin oranına göre kaydırıp kırpabilirsiniz.
                            </p>
                          </div>
                        ) : (
                          <div className="relative rounded-2xl overflow-hidden border border-stone-300 bg-stone-100 aspect-[4/3] max-w-md mx-auto shadow-md">
                            <img
                              src={imagePreview}
                              alt="Önizleme"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-3.5">
                              <button
                                type="button"
                                onClick={handleReCrop}
                                className="px-3.5 py-1.5 rounded-full bg-[#B86B35] hover:bg-[#944D1E] text-white text-xs font-bold transition-all shadow-md flex items-center space-x-1.5 cursor-pointer"
                              >
                                <Crop className="w-3.5 h-3.5" />
                                <span>Yeniden Kırp / Hizala</span>
                              </button>

                              <div className="flex items-center space-x-2">
                                <button
                                  type="button"
                                  onClick={() => fileInputRef.current?.click()}
                                  className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-stone-800 text-xs font-bold transition-colors shadow"
                                >
                                  Değiştir
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setImagePreview('')}
                                  className="p-1.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white text-xs transition-colors"
                                  title="Görseli Kaldır"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <input
                            type="url"
                            placeholder="https://... veya /images/chester/..."
                            value={imageUrlInput}
                            onChange={(e) => setImageUrlInput(e.target.value)}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#B86B35]"
                          />
                          <button
                            type="button"
                            onClick={handleUrlApply}
                            className="px-4 py-2.5 rounded-xl bg-[#1C1917] text-white text-xs font-bold uppercase hover:bg-[#B86B35] transition-colors"
                          >
                            Kırp & Uygula
                          </button>
                        </div>
                        {imagePreview && (
                          <div className="relative rounded-2xl overflow-hidden border border-stone-300 bg-stone-100 aspect-[4/3] max-w-md mx-auto shadow-md">
                            <img
                              src={imagePreview}
                              alt="Önizleme"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-3 left-3">
                              <button
                                type="button"
                                onClick={handleReCrop}
                                className="px-3.5 py-1.5 rounded-full bg-[#B86B35] hover:bg-[#944D1E] text-white text-xs font-bold transition-all shadow-md flex items-center space-x-1.5 cursor-pointer"
                              >
                                <Crop className="w-3.5 h-3.5" />
                                <span>Yeniden Kırp / Hizala</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* 2. Kategori Seçimi */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
                  2. Kategori <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'sofa', label: 'Kanepe Çeşitleri', icon: '🛋️' },
                    { id: 'armchair', label: 'Berjer Puf Çeşitleri', icon: '🪑' },
                    { id: 'set', label: 'Oturma Takımları', icon: '🏠' },
                    { id: 'corner', label: 'Köşe L Koltuk', icon: '📐' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        category === cat.id
                          ? 'border-[#B86B35] bg-[#FAF7F2] ring-2 ring-[#B86B35]/30 shadow-sm'
                          : 'border-stone-200 bg-white hover:border-stone-300'
                      }`}
                    >
                      <span className="text-xl mb-1">{cat.icon}</span>
                      <span className={`text-xs font-bold ${category === cat.id ? 'text-[#B86B35]' : 'text-stone-700'}`}>
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Başlık ve Fiyat */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                    3. Ürün Başlığı / Model Adı <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Vizon Kadife 3'lü Chester Koltuk"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-stone-300 text-sm focus:outline-none focus:border-[#B86B35] focus:ring-2 focus:ring-[#B86B35]/20 bg-stone-50/50"
                  />
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                    İmalat Fiyatı <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: 27.500 ₺"
                    value={startingPrice}
                    onChange={(e) => setStartingPrice(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-stone-300 text-sm font-semibold focus:outline-none focus:border-[#B86B35] focus:ring-2 focus:ring-[#B86B35]/20 bg-stone-50/50"
                  />
                </div>
              </div>

              {/* 4. Slogan & Kumaş / Deri Tipi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                    Kısa Slogan / Vurgu
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Silinebilir kadife kumaş ve masif ahşap ayaklar."
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl border border-stone-300 text-xs focus:outline-none focus:border-[#B86B35] bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                    Kumaş / Deri Türü
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: 1. Kalite İthal Kadife / Silinebilir Deri"
                    value={leatherType}
                    onChange={(e) => setLeatherType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl border border-stone-300 text-xs focus:outline-none focus:border-[#B86B35] bg-stone-50/50"
                  />
                </div>
              </div>

              {/* 5. Açıklama */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                  4. Ürün Açıklaması <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Ürünün iskelet yapısı, sünger kalitesi, kullanım alanı ve tasarım detayları hakkında bilgi yazın..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-stone-300 text-sm focus:outline-none focus:border-[#B86B35] focus:ring-2 focus:ring-[#B86B35]/20 bg-stone-50/50"
                />
              </div>

              {/* 6. Rozet Seçimi & Boyutlar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                    Vitrin Rozeti / Etiketi
                  </label>
                  <div className="flex space-x-2">
                    {[
                      { id: 'new', label: 'Yeni Model' },
                      { id: 'bestseller', label: 'Çok Satan' },
                      { id: 'none', label: 'Rozet Yok' },
                    ].map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setBadge(b.id as any)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          badge === b.id
                            ? 'bg-[#1C1917] text-white border-[#1C1917] font-bold'
                            : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                    Ölçüler (Genişlik × Derinlik × Yükseklik cm)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="number"
                      placeholder="Boy (cm)"
                      value={lengthCm}
                      onChange={(e) => setLengthCm(Number(e.target.value))}
                      className="px-3 py-2 rounded-xl border border-stone-300 text-xs text-center focus:outline-none focus:border-[#B86B35]"
                    />
                    <input
                      type="number"
                      placeholder="Derinlik"
                      value={depthCm}
                      onChange={(e) => setDepthCm(Number(e.target.value))}
                      className="px-3 py-2 rounded-xl border border-stone-300 text-xs text-center focus:outline-none focus:border-[#B86B35]"
                    />
                    <input
                      type="number"
                      placeholder="Yükseklik"
                      value={heightCm}
                      onChange={(e) => setHeightCm(Number(e.target.value))}
                      className="px-3 py-2 rounded-xl border border-stone-300 text-xs text-center focus:outline-none focus:border-[#B86B35]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-stone-200 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-stone-300 text-stone-700 text-xs font-bold uppercase tracking-wider hover:bg-stone-100 transition-colors"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  disabled={isSuccess || isCropping}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B86B35] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#944D1E] transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {isSuccess
                      ? 'Kaydediliyor...'
                      : productToEdit
                      ? 'Değişiklikleri Kaydet'
                      : 'Modeli Vitrine Ekle'}
                  </span>
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
