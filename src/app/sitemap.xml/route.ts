import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.chestertime.com';
  const today = new Date().toISOString().split('T')[0];

  // path -> [priority, changefreq]
  const pages: Array<{ path: string; priority: string; changefreq: string }> = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    // SEO landing pages (hizmet + lokal pillar sayfalar)
    { path: '/chester-koltuk', priority: '0.9', changefreq: 'monthly' },
    { path: '/chester-koltuk-imalati', priority: '0.9', changefreq: 'monthly' },
    { path: '/ozel-tasarim-koltuk', priority: '0.9', changefreq: 'monthly' },
    { path: '/koltuk-doseme', priority: '0.9', changefreq: 'monthly' },
    { path: '/bagcilar-chester-koltuk', priority: '0.8', changefreq: 'monthly' },
    { path: '/kirazli-koltuk-doseme', priority: '0.8', changefreq: 'monthly' },
    // Ürün kategorileri
    { path: '/kategori/tum-modeller', priority: '0.7', changefreq: 'weekly' },
    { path: '/kategori/kanepe-cesitleri', priority: '0.7', changefreq: 'weekly' },
    { path: '/kategori/berjer-puf-cesitleri', priority: '0.7', changefreq: 'weekly' },
    { path: '/kategori/oturma-takimlari', priority: '0.7', changefreq: 'weekly' },
    { path: '/kategori/kose-koltuk-takimlari', priority: '0.7', changefreq: 'weekly' },
  ];

  const urls = pages
    .map(({ path, priority, changefreq }) => {
      return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
