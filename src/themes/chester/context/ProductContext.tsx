'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
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
  refreshProducts: () => Promise<void>;
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

  // Fetch from server API (Single Source of Truth)
  const fetchFromServer = useCallback(async () => {
    try {
      const res = await fetch('/api/products', {
        method: 'GET',
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (res.ok) {
        const data = await res.json();
        if (data) {
          const serverDeleted = Array.isArray(data.deletedIds) ? data.deletedIds : [];
          setDeletedIds(serverDeleted);
          try {
            localStorage.setItem(STORAGE_DELETED_KEY, JSON.stringify(serverDeleted));
          } catch (e) {}

          if (Array.isArray(data.customProducts)) {
            const cleanCustom = data.customProducts.filter((p: any) => !serverDeleted.includes(p.id));
            setCustomProducts(cleanCustom);
            try {
              localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(cleanCustom));
            } catch (e) {}
          }
          if (data.editedProductsMap && typeof data.editedProductsMap === 'object') {
            setEditedProductsMap(data.editedProductsMap);
            try {
              localStorage.setItem(STORAGE_EDITED_KEY, JSON.stringify(data.editedProductsMap));
            } catch (e) {}
          }
        }
      }
    } catch (e) {
      console.warn('Server sync fetch failed, using local cache:', e);
    }
  }, []);

  // Post action to server API and sync confirmed state
  const syncActionToServer = async (action: 'add' | 'update' | 'delete' | 'reset', payload: any) => {
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, payload }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.success) {
          const serverDeleted = Array.isArray(data.deletedIds) ? data.deletedIds : [];
          setDeletedIds(serverDeleted);
          try {
            localStorage.setItem(STORAGE_DELETED_KEY, JSON.stringify(serverDeleted));
          } catch (e) {}

          if (Array.isArray(data.customProducts)) {
            const cleanCustom = data.customProducts.filter((p: any) => !serverDeleted.includes(p.id));
            setCustomProducts(cleanCustom);
            try {
              localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(cleanCustom));
            } catch (e) {}
          }

          if (data.editedProductsMap && typeof data.editedProductsMap === 'object') {
            setEditedProductsMap(data.editedProductsMap);
            try {
              localStorage.setItem(STORAGE_EDITED_KEY, JSON.stringify(data.editedProductsMap));
            } catch (e) {}
          }
        }
      }
    } catch (e) {
      console.error(`Failed to sync ${action} to server:`, e);
    }
  };

  // Load from local cache for instant first paint, then immediately sync from server
  useEffect(() => {
    try {
      const storedDeleted = localStorage.getItem(STORAGE_DELETED_KEY);
      if (storedDeleted) {
        setDeletedIds(JSON.parse(storedDeleted));
      }

      const storedCustom = localStorage.getItem(STORAGE_CUSTOM_KEY);
      if (storedCustom) {
        setCustomProducts(JSON.parse(storedCustom));
      }

      const storedEdited = localStorage.getItem(STORAGE_EDITED_KEY);
      if (storedEdited) {
        setEditedProductsMap(JSON.parse(storedEdited));
      }

      const storedAuth = localStorage.getItem(STORAGE_ADMIN_AUTH_KEY);
      if (storedAuth === 'true') setIsAdmin(true);
    } catch (e) {
      console.error('Failed to load state from localStorage:', e);
    } finally {
      setIsLoaded(true);
      fetchFromServer();
    }
  }, [fetchFromServer]);

  // Window focus & periodic sync to ensure all devices and tabs are live
  useEffect(() => {
    const handleFocus = () => {
      fetchFromServer();
    };
    window.addEventListener('focus', handleFocus);
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        fetchFromServer();
      }
    });

    const interval = setInterval(fetchFromServer, 10000);

    return () => {
      window.removeEventListener('focus', handleFocus);
      clearInterval(interval);
    };
  }, [fetchFromServer]);

  // Save changes to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(customProducts));
    } catch (e) {}
  }, [customProducts, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_DELETED_KEY, JSON.stringify(deletedIds));
    } catch (e) {}
  }, [deletedIds, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_EDITED_KEY, JSON.stringify(editedProductsMap));
    } catch (e) {}
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
      startingPrice: 'Fiyat Al',
      gallery: newProductData.gallery && newProductData.gallery.length > 0 ? newProductData.gallery : [newProductData.primaryImage],
      sizeOptions: newProductData.sizeOptions && newProductData.sizeOptions.length > 0 ? newProductData.sizeOptions : ["210 cm", "235 cm Standart", "Özel Ölçü"],
      availableLeathers: newProductData.availableLeathers && newProductData.availableLeathers.length > 0 ? newProductData.availableLeathers : ["Antik Taba", "Krem", "Bordo", "Siyah"],
      warranty: newProductData.warranty || "10 Yıl Masif İskelet Garantisi",
      cushionFill: newProductData.cushionFill || "32 DNS Soft HR Sünger",
      tuftingDepth: newProductData.tuftingDepth || "El Kapitonesi",
      leatherType: newProductData.leatherType || "1. Sınıf Silinebilir Kumaş / Deri",
      dimensions: newProductData.dimensions || { length: 230, depth: 95, height: 80 }
    };

    setDeletedIds((prev) => prev.filter((dId) => dId !== id));
    setCustomProducts((prev) => [product, ...prev.filter(p => p.id !== id)]);
    syncActionToServer('add', product);
  };

  const updateProduct = (id: string, updatedData: Partial<ChesterProduct>) => {
    const isCustom = customProducts.some((p) => p.id === id);
    if (isCustom) {
      setCustomProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updatedData } : p))
      );
    } else {
      setEditedProductsMap((prev) => ({
        ...prev,
        [id]: { ...(prev[id] || {}), ...updatedData },
      }));
    }

    syncActionToServer('update', { id, updatedData });
  };

  const deleteProduct = (id: string) => {
    if (!id) return;
    
    // 1. Remove from customProducts immediately in state
    setCustomProducts((prev) => prev.filter((p) => p.id !== id));
    
    // 2. Add to deletedIds immediately in state
    setDeletedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));

    // 3. Clean from edited map
    setEditedProductsMap((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });

    // 4. Update localStorage immediately synchronously
    try {
      const storedCustom = localStorage.getItem(STORAGE_CUSTOM_KEY);
      if (storedCustom) {
        const filtered = JSON.parse(storedCustom).filter((p: any) => p.id !== id);
        localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(filtered));
      }
      const storedDeleted = localStorage.getItem(STORAGE_DELETED_KEY);
      const delList: string[] = storedDeleted ? JSON.parse(storedDeleted) : [];
      if (!delList.includes(id)) {
        delList.push(id);
        localStorage.setItem(STORAGE_DELETED_KEY, JSON.stringify(delList));
      }
    } catch (e) {}

    // 5. Send delete to server API
    syncActionToServer('delete', { id });
  };

  const resetToDefaults = () => {
    setCustomProducts([]);
    setDeletedIds([]);
    setEditedProductsMap({});
    try {
      localStorage.removeItem(STORAGE_CUSTOM_KEY);
      localStorage.removeItem(STORAGE_DELETED_KEY);
      localStorage.removeItem(STORAGE_EDITED_KEY);
    } catch (e) {}

    syncActionToServer('reset', {});
  };

  const isCustomProduct = (id: string) => {
    return customProducts.some((p) => p.id === id);
  };

  // Compile final product list:
  // 1. Custom products (excluding any id in deletedIds)
  // 2. Base CHESTER_PRODUCTS (excluding any id in deletedIds and applying edited overrides)
  const finalCustom = customProducts.filter((p) => !deletedIds.includes(p.id));
  const baseProcessed = CHESTER_PRODUCTS.filter(
    (p) => !deletedIds.includes(p.id)
  ).map((p) => {
    const overrides = editedProductsMap[p.id];
    return overrides ? { ...p, ...overrides } : p;
  });

  const products = [...finalCustom, ...baseProcessed];

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
        refreshProducts: fetchFromServer,
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
