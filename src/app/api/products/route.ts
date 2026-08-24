import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'products_store.json');

// In-memory fallback in case of read-only serverless filesystem
let memoryStore = {
  customProducts: [] as any[],
  deletedIds: [] as string[],
  editedProductsMap: {} as Record<string, any>
};

function readStore() {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const data = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data);
      memoryStore = {
        customProducts: parsed.customProducts || [],
        deletedIds: parsed.deletedIds || [],
        editedProductsMap: parsed.editedProductsMap || {}
      };
    }
  } catch (error) {
    console.error('Error reading products_store.json:', error);
  }
  return memoryStore;
}

function writeStore(store: typeof memoryStore) {
  memoryStore = store;
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(store, null, 2), 'utf-8');
  } catch (error) {
    console.error('Warning: could not write to products_store.json (using memory fallback):', error);
  }
}

export async function GET() {
  const store = readStore();
  return NextResponse.json(store, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
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
      store.customProducts = [newProduct, ...store.customProducts.filter(p => p.id !== newProduct.id)];
    } else if (action === 'update') {
      const { id, updatedData } = payload;
      const isCustom = store.customProducts.some(p => p.id === id);
      if (isCustom) {
        store.customProducts = store.customProducts.map(p =>
          p.id === id ? { ...p, ...updatedData } : p
        );
      } else {
        store.editedProductsMap = {
          ...store.editedProductsMap,
          [id]: { ...(store.editedProductsMap[id] || {}), ...updatedData }
        };
      }
    } else if (action === 'delete') {
      const { id } = payload;
      store.customProducts = store.customProducts.filter(p => p.id !== id);
      if (!store.deletedIds.includes(id)) {
        store.deletedIds.push(id);
      }
    } else if (action === 'reset') {
      store = {
        customProducts: [],
        deletedIds: [],
        editedProductsMap: {}
      };
    } else if (action === 'sync') {
      if (payload) {
        // Merge instead of overwrite to prevent other devices from resurrecting deleted products
        const incomingCustom = payload.customProducts || [];
        const incomingDeleted = payload.deletedIds || [];
        const incomingEdited = payload.editedProductsMap || {};

        // Merge custom products (incoming + existing, deduplicated by id)
        const existingCustomIds = new Set(store.customProducts.map((p: any) => p.id));
        const newCustom = incomingCustom.filter((p: any) => !existingCustomIds.has(p.id));
        store.customProducts = [...store.customProducts, ...newCustom];

        // Merge deletedIds (union of both arrays)
        const mergedDeletedSet = new Set([...store.deletedIds, ...incomingDeleted]);
        store.deletedIds = Array.from(mergedDeletedSet);

        // Merge editedProductsMap (existing edits take precedence)
        store.editedProductsMap = {
          ...incomingEdited,
          ...store.editedProductsMap
        };
      }
    }

    writeStore(store);

    return NextResponse.json({ success: true, ...store }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
