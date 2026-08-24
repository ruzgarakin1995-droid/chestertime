import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Persistent data paths
const PRIMARY_DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE_PATH = path.join(PRIMARY_DATA_DIR, 'products_store.json');

interface StoreData {
  customProducts: any[];
  deletedIds: string[];
  editedProductsMap: Record<string, any>;
}

let inMemoryStore: StoreData = {
  customProducts: [],
  deletedIds: [],
  editedProductsMap: {}
};

function ensureDir(dirPath: string) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  } catch (e) {
    console.error('Failed to create directory:', dirPath, e);
  }
}

function readStore(): StoreData {
  try {
    ensureDir(PRIMARY_DATA_DIR);
    if (fs.existsSync(DATA_FILE_PATH)) {
      const data = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data);
      inMemoryStore = {
        customProducts: Array.isArray(parsed.customProducts) ? parsed.customProducts : [],
        deletedIds: Array.isArray(parsed.deletedIds) ? parsed.deletedIds : [],
        editedProductsMap: parsed.editedProductsMap && typeof parsed.editedProductsMap === 'object' ? parsed.editedProductsMap : {}
      };
    }
  } catch (error) {
    console.error('Error reading products_store.json from disk:', error);
  }
  return inMemoryStore;
}

function writeStore(store: StoreData): boolean {
  inMemoryStore = store;
  try {
    ensureDir(PRIMARY_DATA_DIR);
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(store, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing products_store.json to disk:', error);
    return false;
  }
}

export async function GET() {
  const store = readStore();
  const deletedSet = new Set(store.deletedIds || []);
  const cleanStore = {
    customProducts: (store.customProducts || []).filter((p: any) => !deletedSet.has(p.id)),
    deletedIds: store.deletedIds || [],
    editedProductsMap: store.editedProductsMap || {}
  };

  return NextResponse.json(cleanStore, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
    }
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, payload } = body;

    let store = readStore();

    if (action === 'add') {
      const newProduct = payload;
      if (newProduct && newProduct.id) {
        // Remove from deletedIds if previously deleted
        store.deletedIds = (store.deletedIds || []).filter((id: string) => id !== newProduct.id);
        // Prepend new product, avoid duplicates
        store.customProducts = [newProduct, ...(store.customProducts || []).filter((p: any) => p.id !== newProduct.id)];
      }
    } else if (action === 'update') {
      const { id, updatedData } = payload;
      if (id && updatedData) {
        const isCustom = (store.customProducts || []).some((p: any) => p.id === id);
        if (isCustom) {
          store.customProducts = (store.customProducts || []).map((p: any) =>
            p.id === id ? { ...p, ...updatedData } : p
          );
        } else {
          store.editedProductsMap = {
            ...(store.editedProductsMap || {}),
            [id]: { ...((store.editedProductsMap || {})[id] || {}), ...updatedData }
          };
        }
      }
    } else if (action === 'delete') {
      const { id } = payload;
      if (id) {
        if (!store.deletedIds.includes(id)) {
          store.deletedIds = [...(store.deletedIds || []), id];
        }
        store.customProducts = (store.customProducts || []).filter((p: any) => p.id !== id);
        if (store.editedProductsMap && store.editedProductsMap[id]) {
          const updatedEdited = { ...store.editedProductsMap };
          delete updatedEdited[id];
          store.editedProductsMap = updatedEdited;
        }
      }
    } else if (action === 'reset') {
      store = {
        customProducts: [],
        deletedIds: [],
        editedProductsMap: {}
      };
    }

    writeStore(store);

    const deletedSet = new Set(store.deletedIds || []);
    const cleanStore = {
      customProducts: (store.customProducts || []).filter((p: any) => !deletedSet.has(p.id)),
      deletedIds: store.deletedIds || [],
      editedProductsMap: store.editedProductsMap || {}
    };

    return NextResponse.json({ success: true, ...cleanStore }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
  } catch (error: any) {
    console.error('API Error in /api/products:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
