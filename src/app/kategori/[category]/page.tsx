import React from 'react';
import { ChesterCategoryView } from '@/themes/chester/components/ChesterCategoryView';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { category: string } }) {
  const map: Record<string, string> = {
    'kanepe-cesitleri': 'Kanepe Çeşitleri | Chester Time',
    'sofa': 'Kanepe Çeşitleri | Chester Time',
    'berjer-puf-cesitleri': 'Berjer ve Puf Çeşitleri | Chester Time',
    'armchair': 'Berjer ve Puf Çeşitleri | Chester Time',
    'oturma-takimlari': 'Oturma Takımları | Chester Time',
    'set': 'Oturma Takımları | Chester Time',
    'kose-koltuk-takimlari': 'Köşe L Koltuk Takımları | Chester Time',
    'corner': 'Köşe L Koltuk Takımları | Chester Time',
    'tum-modeller': 'Tüm Chester Koltuk Modelleri | Chester Time',
    'all': 'Tüm Chester Koltuk Modelleri | Chester Time',
  };

  const title = map[params.category] || 'Chester Koltuk Modelleri | Chester Time';

  return {
    title,
    description: 'Chester Time imalatçı fiyatlarıyla özel üretim Chester koltuk modelleri ve kategorileri.',
    alternates: { canonical: `https://www.chestertime.com/kategori/${params.category}` },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  return <ChesterCategoryView categorySlug={params.category} />;
}
