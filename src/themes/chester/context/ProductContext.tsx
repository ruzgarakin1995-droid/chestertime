'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChesterProduct } from '../types';
import { CHESTER_PRODUCTS } from '../mockData';

interface ProductContextType {
  products: ChesterProduct[];
  addProduct: (newProduct: Omit<ChesterProduct, 'id'> & { id?: string }) => void;
  deleteProduct: (id: string) => void;
  resetToDefaults: () => void;
  isCustomProduct: (id: string) => boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const STORAGE_KEY = 'chestertime_custom_products_v1';

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customProducts, setCustomProducts] = useState<ChesterProduct[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load custom products from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCustomProducts(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load custom products from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save custom products to localStorage whenever they change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customProducts));
    } catch (e) {
      console.error('Failed to save custom products to localStorage:', e);
    }
  }, [customProducts, isLoaded]);

  const addProduct = (newProductData: Omit<ChesterProduct, 'id'> & { id?: string }) => {
    const id = newProductData.id || `custom-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const product: ChesterProduct = {
      ...newProductData,
      id,
      gallery: newProductData.gallery && newProductData.gallery.length > 0 ? newProductData.gallery : [newProductData.primaryImage],
      sizeOptions: newProductData.sizeOptions && newProductData.sizeOptions.length > 0 ? newProductData.sizeOptions : ["210 cm", "235 cm Standart", "Özel Ölçü"],
      availableLeathers: newProductData.availableLeathers && newProductData.availableLeathers.length > 0 ? newProductData.availableLeathers : ["Antik Taba", "Krem", "Bordo", "Siyah"],
      warranty: newProductData.warranty || "10 Yıl Masif İskelet Garantisi",
      cushionFill: newProductData.cushionFill || "32 DNS Soft HR Sünger",
      tuftingDepth: newProductData.tuftingDepth || "El Kapitonesi",
      leatherType: newProductData.leatherType || "1. Sınıf Silinebilir Kumaş / Deri",
      dimensions: newProductData.dimensions || { length: 230, depth: 95, height: 80 }
    };

    setCustomProducts((prev) => [product, ...prev]);
  };

  const deleteProduct = (id: string) => {
    setCustomProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const resetToDefaults = () => {
    setCustomProducts([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing localStorage:', e);
    }
  };

  const isCustomProduct = (id: string) => {
    return customProducts.some((p) => p.id === id);
  };

  // Combine custom products (first) with base catalog products
  const products = [...customProducts, ...CHESTER_PRODUCTS];

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        resetToDefaults,
        isCustomProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
