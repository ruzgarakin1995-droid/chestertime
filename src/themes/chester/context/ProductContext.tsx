'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChesterProduct } from '../types';
import { CHESTER_PRODUCTS } from '../mockData';

interface ProductContextType {
  products: ChesterProduct[];
  addProduct: (newProduct: Omit<ChesterProduct, 'id'> & { id?: string }) => void;
  updateProduct: (id: string, updatedData: Partial<ChesterProduct>) => void;
  deleteProduct: (id: string) => void;
  resetToDefaults: () => void;
  isCustomProduct: (id: string) => boolean;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const STORAGE_CUSTOM_KEY = 'chestertime_custom_products_v2';
const STORAGE_DELETED_KEY = 'chestertime_deleted_product_ids_v2';
const STORAGE_EDITED_KEY = 'chestertime_edited_products_v2';
const STORAGE_ADMIN_AUTH_KEY = 'chestertime_admin_authenticated_v2';

// Valid admin passwords
const VALID_PASSWORDS = ['chester1440', 'chester123', 'admin123', '1440'];

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customProducts, setCustomProducts] = useState<ChesterProduct[]>([]);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);
  const [editedProductsMap, setEditedProductsMap] = useState<Record<string, Partial<ChesterProduct>>>({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedCustom = localStorage.getItem(STORAGE_CUSTOM_KEY);
      if (storedCustom) setCustomProducts(JSON.parse(storedCustom));

      const storedDeleted = localStorage.getItem(STORAGE_DELETED_KEY);
      if (storedDeleted) setDeletedIds(JSON.parse(storedDeleted));

      const storedEdited = localStorage.getItem(STORAGE_EDITED_KEY);
      if (storedEdited) setEditedProductsMap(JSON.parse(storedEdited));

      const storedAuth = localStorage.getItem(STORAGE_ADMIN_AUTH_KEY);
      if (storedAuth === 'true') setIsAdmin(true);
    } catch (e) {
      console.error('Failed to load state from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(customProducts));
    } catch (e) {
      console.error('Error saving custom products:', e);
    }
  }, [customProducts, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_DELETED_KEY, JSON.stringify(deletedIds));
    } catch (e) {
      console.error('Error saving deleted products:', e);
    }
  }, [deletedIds, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_EDITED_KEY, JSON.stringify(editedProductsMap));
    } catch (e) {
      console.error('Error saving edited products:', e);
    }
  }, [editedProductsMap, isLoaded]);

  // Auth functions
  const login = (password: string): boolean => {
    const trimmed = password.trim();
    if (VALID_PASSWORDS.includes(trimmed)) {
      setIsAdmin(true);
      try {
        localStorage.setItem(STORAGE_ADMIN_AUTH_KEY, 'true');
      } catch (e) {}
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    try {
      localStorage.removeItem(STORAGE_ADMIN_AUTH_KEY);
    } catch (e) {}
  };

  // Product CRUD
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

  const updateProduct = (id: string, updatedData: Partial<ChesterProduct>) => {
    // If it's a custom product, update it in customProducts list
    const isCustom = customProducts.some((p) => p.id === id);
    if (isCustom) {
      setCustomProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updatedData } : p))
      );
    } else {
      // If it's a base product, store the override in editedProductsMap
      setEditedProductsMap((prev) => ({
        ...prev,
        [id]: { ...(prev[id] || {}), ...updatedData },
      }));
    }
  };

  const deleteProduct = (id: string) => {
    const isCustom = customProducts.some((p) => p.id === id);
    if (isCustom) {
      setCustomProducts((prev) => prev.filter((p) => p.id !== id));
    } else {
      setDeletedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }
  };

  const resetToDefaults = () => {
    setCustomProducts([]);
    setDeletedIds([]);
    setEditedProductsMap({});
    try {
      localStorage.removeItem(STORAGE_CUSTOM_KEY);
      localStorage.removeItem(STORAGE_DELETED_KEY);
      localStorage.removeItem(STORAGE_EDITED_KEY);
    } catch (e) {
      console.error('Error clearing localStorage:', e);
    }
  };

  const isCustomProduct = (id: string) => {
    return customProducts.some((p) => p.id === id);
  };

  // Compile final product list:
  // 1. Custom products
  // 2. Base CHESTER_PRODUCTS (excluding deletedIds and applying edited overrides)
  const baseProcessed = CHESTER_PRODUCTS.filter(
    (p) => !deletedIds.includes(p.id)
  ).map((p) => {
    const overrides = editedProductsMap[p.id];
    return overrides ? { ...p, ...overrides } : p;
  });

  const products = [...customProducts, ...baseProcessed];

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        resetToDefaults,
        isCustomProduct,
        isAdmin,
        login,
        logout,
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
