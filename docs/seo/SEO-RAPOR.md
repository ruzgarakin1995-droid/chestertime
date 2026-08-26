# CHESTERTIME.COM — SEO + GEO + AEO Optimizasyon Raporu

**Marka:** Chester Time
**Site:** https://www.chestertime.com
**Tarih:** Ağustos 2026
**Kapsam:** SEO, GEO, AEO, Local SEO, Semantic SEO, Entity SEO, Conversion SEO

---

## 1. Mevcut SEO Durumu (Çalışma Öncesi)

### Güçlü yönler
- Next.js metadata ile sayfa title/description'ları tanımlıydı.
- Layout'ta Organization + LocalBusiness + WebSite JSON-LD mevcuttu.
- NAP verileri tek kaynakta (`src/themes/chester/mockData.ts`): tutarlılık için doğru mimari.
- robots.txt sitemap'e işaret ediyordu; sitemap route'u mevcuttu.
- WhatsApp tabanlı dönüşüm altyapısı (CTA builder) güçlüydü.

### Kritik problemler (tespit edilen)
| # | Problem | Etki | Durum |
|---|---------|------|-------|
| 1 | `layout.tsx` içindeki **global canonical**, TÜM sayfaları ana sayfaya canonical'liyordu | Tüm site indekslenemez hale gelebilirdi | ✅ Düzeltildi |
| 2 | 6 SEO landing sayfası **yetim sayfaydı** (header/footer/ana sayfadan link yok) | Crawl ve otorite aktarımı yok | ✅ Düzeltildi |
| 3 | Sitemap'te landing sayfalar yoktu | Keşfedilebilirlik düşük | ✅ Düzeltildi |
| 4 | Her landing sayfa ~50 kelimelik **thin content** | Sıralama şansı yok | ✅ Yeniden yazıldı |
| 5 | 2 sayfada **görünür içeriği olmayan FAQ schema** (Google politikasına aykırı) | Manuel işlem riski | ✅ Görünür FAQ ile eşitlendi |
| 6 | Ana sayfa H1'i keywordsüz: "Chester Time ile Evinizi Yenileyin." | Ana konu sinyali zayıf | ✅ "Özel Tasarım Chester / Koltuk İmalatı" yapıldı |
| 7 | OG image 404 (`chester_og.jpg` yok) | Sosyal paylaşım görseli bozuk | ✅ `chester_hero.jpg` olarak düzeltildi |
| 8 | Landing sayfalarda header/footer yok (ölü sayfa UX'i) | Hemen çıkma + gezinme kaybı | ✅ `SeoPageShell` ile siteye bağlandı |
| 9 | Sayfa bazlı canonical / BreadcrumbList / Service schema yok | Yapısal veri eksik | ✅ Eklendi |
| 10 | robots.txt'te standart dışı `Host:` direktifi | Yandex kalıntısı | ✅ Kaldırıldı |

---

## 2. Sayfa Mimarisi (Uygulanan)

Yeni URL üretilmedi; mevcut 6 sayfa güçlendirildi, cannibalization önlendi:

```
/                          → Marka + ana ticari hedef (imalat, özel tasarım, lokal)
├── /chester-koltuk        → Ticari pillar (modeller, fiyat, kumaş, rehber)
├── /chester-koltuk-imalati→ Transactional (üretim süreci, sipariş)
├── /ozel-tasarim-koltuk   → Özel tasarım + özel ölçü (entegre)
├── /koltuk-doseme         → Döşeme + chester döşeme/yenileme (entegre)
├── /bagcilar-chester-koltuk → Lokal cluster: Bağcılar + çevre ilçeler
├── /kirazli-koltuk-doseme   → Lokal cluster: Kirazlı + döşeme
└── /kategori/*            → Ürün kategori sayfaları (5 adet)
```

**Cannibalization kararları:**
- `/chester-koltuk-doseme` açılmadı → intent `/koltuk-doseme` içindeki "Chester Koltuk Döşeme" bölümüne entegre edildi.
- `/ozel-olcu-koltuk` açılmadı → intent `/ozel-tasarim-koltuk` içindeki "Özel Ölçü Koltuk Süreci" bölümüne entegre edildi.
- `/koltuk-imalati` (genel) açılmadı → ana sayfa + imalat sayfası ile çakışma riski; P2'de değerlendirilebilir.
- Her lokasyon için ayrı sayfa üretilmedi (doorway page riski). Bağcılar ve Kirazlı gerçek adresle doğrulanmış iki lokal sayfa olarak bırakıldı.

---

## 3. Keyword Map

| Keyword | Intent | Hedef URL | Öncelik | Tür |
|---|---|---|---|---|
| chester koltuk | Commercial | /chester-koltuk | P0 | Ana |
| chester koltuk modelleri | Commercial Investigation | /chester-koltuk + /kategori/tum-modeller | P0 | Ana |
| chester koltuk fiyatları | Commercial Investigation | /chester-koltuk | P0 | Ana |
| chester koltuk nedir | Informational | /chester-koltuk (bölüm) | P1 | Semantik |
| chester koltuk imalatı | Transactional | /chester-koltuk-imalati | P0 | Ana |
| chester koltuk imalatçısı | Transactional | /chester-koltuk-imalati | P0 | Ana |
| chester koltuk üreticisi | Transactional | /chester-koltuk-imalati | P1 | Semantik |
| chester koltuk üretimi | Transactional | /chester-koltuk-imalati | P1 | Semantik |
| chester koltuk satın al / sipariş | Transactional | /chester-koltuk-imalati (CTA) | P1 | Semantik |
| özel üretim chester koltuk | Transactional | /chester-koltuk-imalati | P1 | Semantik |
| özel ölçü chester koltuk | Transactional | /chester-koltuk-imalati + /ozel-tasarim-koltuk | P1 | Semantik |
| özel tasarım koltuk | Commercial | /ozel-tasarim-koltuk | P0 | Ana |
| özel tasarım koltuk imalatı | Transactional | /ozel-tasarim-koltuk | P0 | Ana |
| özel ölçü koltuk | Commercial | /ozel-tasarim-koltuk | P0 | Ana |
| özel ölçü koltuk imalatı | Transactional | /ozel-tasarim-koltuk | P1 | Semantik |
| kişiye özel koltuk | Commercial | /ozel-tasarim-koltuk | P2 | Semantik |
| butik koltuk üretimi | Commercial | /ozel-tasarim-koltuk | P2 | Semantik |
| koltuk imalatı | Commercial | / (destekleyici) | P1 | Semantik |
| koltuk döşeme | Commercial | /koltuk-doseme | P0 | Ana |
| koltuk döşemeci | Local/Commercial | /koltuk-doseme | P1 | Semantik |
| koltuk yenileme | Commercial | /koltuk-doseme | P1 | Semantik |
| koltuk kaplama | Commercial | /koltuk-doseme | P2 | Semantik |
| koltuk kumaş değişimi | Commercial | /koltuk-doseme | P1 | Semantik |
| chester koltuk döşeme | Commercial | /koltuk-doseme (bölüm) | P0 | Ana |
| chester koltuk yenileme | Commercial | /koltuk-doseme (bölüm + FAQ) | P1 | Semantik |
| koltuk tamiri ve döşeme | Commercial | /koltuk-doseme | P2 | Semantik |
| Bağcılar chester koltuk | Local | /bagcilar-chester-koltuk | P0 | Ana |
| Bağcılar chester koltuk imalatı | Local | /bagcilar-chester-koltuk | P0 | Ana |
| Bağcılar koltuk imalatçısı | Local | /bagcilar-chester-koltuk | P1 | Semantik |
| Bağcılar koltuk döşeme | Local | /bagcilar-chester-koltuk + /koltuk-doseme | P1 | Semantik |
| Bağcılar özel tasarım koltuk | Local | /bagcilar-chester-koltuk | P2 | Semantik |
| Bağcılar mobilya imalatı | Local | /bagcilar-chester-koltuk | P2 | Semantik |
| Kirazlı koltuk döşeme | Local | /kirazli-koltuk-doseme | P0 | Ana |
| Kirazlı koltuk döşemeci | Local | /kirazli-koltuk-doseme | P1 | Semantik |
| Kirazlı chester koltuk döşeme | Local | /kirazli-koltuk-doseme | P1 | Ana |
| Kirazlı koltuk imalatı | Local | /kirazli-koltuk-doseme (çapraz link) | P2 | Semantik |
| chester koltuk temizliği | Informational | /chester-koltuk (bölüm) → P2 blog | P2 | Semantik |
| modern/klasik koltuk imalatı | Commercial | /ozel-tasarim-koltuk | P3 | Semantik |
| salon koltuğu imalatı | Commercial | / + /ozel-tasarim-koltuk | P3 | Semantik |
| oturma grubu imalatı | Commercial | /kategori/oturma-takimlari | P3 | Semantik |

---

## 4. Title / Meta Description / H1 Önerileri (Uygulanan)

| Sayfa | Title | H1 |
|---|---|---|
| / | Chester Time \| İmalatçıdan Doğrudan Chester Koltuk & Özel Üretim | Özel Tasarım Chester Koltuk İmalatı |
| /chester-koltuk | Chester Koltuk Modelleri ve Fiyatları \| Chester Time | Chester Koltuk |
| /chester-koltuk-imalati | Chester Koltuk İmalatı \| İmalatçıdan Özel Üretim - Chester Time | Chester Koltuk İmalatı |
| /ozel-tasarim-koltuk | Özel Tasarım Koltuk ve Özel Ölçü Üretim \| Chester Time | Özel Tasarım Koltuk |
| /koltuk-doseme | Koltuk Döşeme ve Yenileme \| Chester Koltuk Döşeme - Chester Time | Koltuk Döşeme |
| /bagcilar-chester-koltuk | Bağcılar Chester Koltuk İmalatı \| Yerel Atölye - Chester Time | Bağcılar Chester Koltuk İmalatı |
| /kirazli-koltuk-doseme | Kirazlı Koltuk Döşeme \| Chester Döşeme ve Yenileme - Chester Time | Kirazlı Koltuk Döşeme |

Tüm sayfalar: benzersiz meta description (konum + fayda + CTA), sayfa bazlı canonical, OG/Twitter kartları, BreadcrumbList schema.

---

## 5. Internal Linking Planı (Uygulanan)

```
Ana sayfa ──(Hizmetlerimiz kartları + footer)──► 6 landing sayfası
/chester-koltuk ◄──► /chester-koltuk-imalati ◄──► /ozel-tasarim-koltuk
/koltuk-doseme ◄──► /kirazli-koltuk-doseme ◄──► /chester-koltuk
/bagcilar-chester-koltuk ──► hizmet sayfaları + kategoriler
Tüm landing sayfalar ──► /kategori/tum-modeller (ürün vitrini)
Tüm sayfalar ──► WhatsApp CTA (dönüşüm)
```

Anchor text politikası: doğal, kısmi eşleşmeli ("chester koltuk imalatı sayfamız", "koltuk döşeme hizmetimiz"); exact-match spam'den kaçınıldı.

---

## 6. Local SEO Planı

**Doğrulanmış NAP (tek kaynak: mockData.ts):**
- Ad: Chester Time
- Adres: Kirazlı Mah. 1145 Sok. No: 4/A, Bağcılar / İstanbul
- Telefon: 0536 799 14 40
- Saatler: Pzt–Cmt 09:00–19:30
- Instagram: @chester.time

**Uygulanan:**
- NAP; header top bar, footer, Bağcılar ve Kirazlı sayfalarında birebir aynı.
- Bağcılar sayfasına `FurnitureStore`, Kirazlı sayfasına `LocalBusiness` schema (adres, saat, areaServed).
- Teslimat bölgeleri (işletme onaylı — İstanbul geneli): Kirazlı, Güneşli, Mahmutbey, Esenler, Güngören, Bahçelievler, Başakşehir, İkitelli, Küçükçekmece doğal metin içinde anılıyor. Her bölge için ayrı sayfa ÜRETİLMEDİ.

**Google Business Profile önerileri (P1 — site dışı):**
- Birincil kategori: "Furniture manufacturer" / ikincil: "Upholstery shop", "Furniture store".
- Açıklamada: "İstanbul Bağcılar Kirazlı'da chester koltuk ve özel tasarım koltuk imalatı…" ifadesi.
- Hizmetler: chester koltuk imalatı, özel ölçü koltuk, koltuk döşeme, chester yenileme.
- Fotoğraflar: atölye, kapitone detay, teslimat kareleri (mevcut `real_deliveries` görselleri uygun).
- Website alanı: `https://www.chestertime.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
- Yorumlarda müşterinin hizmet/bölge anması doğal bırakılmalı; sahte yorum spam'i yapılmamalı.

---

## 7. GEO Planı (Yapay Zekâ Arama)

AI motorlarının (Google AI Overviews, Gemini, ChatGPT, Perplexity) alıntılayabileceği net varlık cümleleri her pillar sayfanın girişinde yer alıyor:

> "Chester Time, İstanbul Bağcılar Kirazlı'daki atölyesinde chester koltuk imalatı yapan bir üreticidir."

- Marka/entity tutarlılığı: her sayfada "Chester Time + Bağcılar Kirazlı + imalat/döşeme" üçlüsü.
- Organization/LocalBusiness/WebSite schema `@id` ile birbirine bağlı.
- Soru-cevap formatındaki bölümler ve kısa, doğrudan cevaplar AI alıntısına uygun.
- İleri adım (P3): aynı NAP ile dizin kayıtları (firma rehberleri) ve tutarlı sosyal profiller.

---

## 8. AEO Planı

Her landing sayfada **görünür FAQ bölümü + aynı veriden üretilen FAQPage schema** (tek veri kaynağı — içerik/schema ayrışması imkânsız):

| Sayfa | Örnek sorular |
|---|---|
| /chester-koltuk | Chester koltuk nedir? / Fiyatlar neye göre belirlenir? / Temizliği nasıl yapılır? |
| /chester-koltuk-imalati | İmalat ne kadar sürer? / Sipariş nasıl verilir? / Teslimat hangi bölgelere? |
| /ozel-tasarim-koltuk | Özel tasarım yaptırabilir miyim? / Özel ölçü süreci nasıl? |
| /koltuk-doseme | Döşeme fiyatları nasıl belirlenir? / Eski chester yenilenir mi? |
| /bagcilar-chester-koltuk | Bağcılar'da chester koltuk imalatı yapan yerler nerede? |
| /kirazli-koltuk-doseme | Kirazlı'da koltuk döşeme yapan yerler nerede? |

Cevaplar 40–80 kelime bandında, doğrudan cevap + detay formatında yazıldı.

---

## 9. Schema Planı (Uygulanan)

| Schema | Konum |
|---|---|
| Organization + LocalBusiness + WebSite (@graph, @id'li) | layout.tsx (tüm site) |
| BreadcrumbList | Tüm landing sayfalar (`SeoBreadcrumbs`) |
| FAQPage (görünür içerikle eşleşik) | 6 landing sayfa (`FaqSection`) |
| Service | 4 hizmet sayfası |
| FurnitureStore / LocalBusiness (tam NAP + areaServed) | Bağcılar / Kirazlı sayfaları |
| Product schema | P2 — kategori/ürün detayına önerilir (fiyatlar "Fiyat Al" modelinde olduğu için `offers` olmadan veya `priceSpecification` olmadan kullanılmalı) |

Doğrulama: Google Rich Results Test ile yayına almadan önce kontrol edilmeli.

---

## 10. Teknik SEO Kontrol Listesi

| Madde | Durum |
|---|---|
| Canonical (sayfa bazlı) | ✅ Düzeltildi |
| Sitemap (13 URL, öncelikli) | ✅ Güncellendi |
| robots.txt | ✅ Temizlendi |
| OG/Twitter kartları + geçerli OG görseli | ✅ Düzeltildi |
| BreadcrumbList / FAQPage / Service schema | ✅ Eklendi |
| Lazy loading | 🟡 P2: vitrin/teslimat görsellerine `loading="lazy"` önerilir (hero hariç) |
| next/image optimizasyonu | 🟡 P2: `images.unoptimized=true` kapalı; WebP/AVIF geçişi görsel hacmi büyürse değerlendirilmeli |
| Font loading | 🟡 P2: Playfair Display/Plus Jakarta Sans için `font-display: swap` kontrolü |
| hreflang | Gerekli değil (tek dil; gizli Google Translate widget'ı hreflang yerine geçmez) |
| 404 sayfası | 🟡 P2: özel 404 + ana sayfaya yönlendirme önerilir |
| Core Web Vitals | 🟡 P2: Lenis + Framer Motion ana sayfada ağır; landing sayfalar hafif. LCP görseli hero'da — preload denenebilir |
| Search Console | ⚠️ Aksiyon: sitemap'i GSC'ye gönderin, indeks kapsamını izleyin |

---

## 11. Conversion SEO (Uygulanan)

- Her landing sayfada premium koyu CTA bloğu (`SeoCta`): **WhatsApp Teklif** + **Telefon** butonları.
- CTA mesajları intent'e göre kişiselleştirildi ("Modelinizi Gönderin", "Fotoğraf Gönder, Teklif Al", "Randevu / Teklif Al").
- Mevcut 20 sn akıllı WhatsApp concierge ve yüzen buton korunuyor.
- Tasarım bozulmadı: CTA'lar mevcut renk/token sistemine uygun.

---

## 12. Blog İçerik Takvimi (30 Konu — P2/P3)

Blog mimarisi bilinçli olarak ertelendi; önce ticari sayfaların otoritesi oturtulmalı. Her yazı ilgili ticari sayfaya doğal link vermeli.

| # | Başlık | Ana Keyword | Intent | Hedef sayfa linki | Öncelik |
|---|---|---|---|---|---|
| 1 | Chester Koltuk Nedir? Tarihçesi ve Özellikleri | chester koltuk nedir | Info | /chester-koltuk | P1 |
| 2 | Chester Koltuk Fiyatlarını Etkileyen 7 Faktör | chester koltuk fiyatları | Comm. Inv. | /chester-koltuk | P1 |
| 3 | Chester Koltuk Nasıl Seçilir? | chester koltuk modelleri | Comm. Inv. | /kategori/tum-modeller | P1 |
| 4 | Chester Koltuk Ölçüleri: Salon İçin Doğru Ölçü Rehberi | chester koltuk ölçüleri | Info | /ozel-tasarim-koltuk | P1 |
| 5 | Chester Koltuk Kumaşı Nasıl Seçilir? | chester koltuk kumaşı | Info | /chester-koltuk | P1 |
| 6 | Chester Koltuk Renkleri ve Dekorasyon Önerileri | chester koltuk renkleri | Info | /chester-koltuk | P2 |
| 7 | Chester Koltuk Temizliği ve Bakımı | chester koltuk temizliği | Info | /chester-koltuk | P1 |
| 8 | Chester Koltuk İmalatı Nasıl Yapılır? Atölyeden Adımlar | chester koltuk imalatı | Info/Trans. | /chester-koltuk-imalati | P1 |
| 9 | Özel Ölçü Koltuk Avantajları | özel ölçü koltuk | Comm. Inv. | /ozel-tasarim-koltuk | P2 |
| 10 | Özel Tasarım Koltuk Nedir, Nasıl Yaptırılır? | özel tasarım koltuk | Info | /ozel-tasarim-koltuk | P2 |
| 11 | Koltuk Döşeme Nedir? Ne Zaman Yenileme Yapılır? | koltuk döşeme | Info | /koltuk-doseme | P1 |
| 12 | Eski Chester Koltuk Yenileme Rehberi | chester koltuk yenileme | Info | /koltuk-doseme | P2 |
| 13 | Koltuk Kumaş Değişimi mi, Yeni Koltuk mu? | koltuk kumaş değişimi | Comm. Inv. | /koltuk-doseme | P2 |
| 14 | Koltuk İmalatı Nasıl Yapılır? İskeletten Döşemeye | koltuk imalatı | Info | /chester-koltuk-imalati | P2 |
| 15 | Koltuk Satın Alırken Nelere Dikkat Edilmeli? | koltuk satın alma rehberi | Info | /kategori/tum-modeller | P2 |
| 16 | Küçük Salonlar İçin Koltuk Seçimi | küçük salon koltuk | Info | /ozel-tasarim-koltuk | P2 |
| 17 | Salon İçin Koltuk Seçimi: Ölçü ve Yerleşim | salon koltuğu | Info | /ozel-tasarim-koltuk | P3 |
| 18 | Deri mi Kadife mi? Chester İçin Malzeme Karşılaştırması | chester deri kadife | Comm. Inv. | /chester-koltuk | P2 |
| 19 | Kapitone (Düğme) İşçiliği Nedir? | kapitone işçiliği | Info | /chester-koltuk-imalati | P3 |
| 20 | Masif İskelet Neden Önemli? Gürgen İskelet Rehberi | koltuk iskeleti | Info | /chester-koltuk-imalati | P3 |
| 21 | Chester Koltuk Modern Dekorasyonda Nasıl Kullanılır? | chester modern dekorasyon | Info | /chester-koltuk | P3 |
| 22 | Ofis ve Makam Odası İçin Chester Koltuk | ofis chester koltuk | Comm. Inv. | /kategori/oturma-takimlari | P3 |
| 23 | Köşe Koltuk mu, Kanepe Takımı mı? | köşe koltuk oturma grubu | Comm. Inv. | /kategori/kose-koltuk-takimlari | P3 |
| 24 | Berjer Seçimi: Tekli Koltuk Nasıl Konumlandırılır? | berjer seçimi | Info | /kategori/berjer-puf-cesitleri | P3 |
| 25 | Silinebilir Kumaş Nedir? Leke Tutmaz Döşemelik Rehberi | silinebilir kumaş | Info | /chester-koltuk | P2 |
| 26 | Chester Koltuk Teslimat Süreci: Siparişten Kuruluma | chester koltuk sipariş | Info/Trans. | /chester-koltuk-imalati | P2 |
| 27 | Bağcılar'da Koltuk İmalatı: Atölye Ziyareti Rehberi | Bağcılar koltuk imalatı | Local | /bagcilar-chester-koltuk | P2 |
| 28 | Kirazlı'da Koltuk Döşeme Yaptırmadan Önce Bilmeniz Gerekenler | Kirazlı koltuk döşeme | Local | /kirazli-koltuk-doseme | P2 |
| 29 | Sünger Yoğunluğu (DNS) Nedir? Konfor İçin Rehber | sünger DNS | Info | /chester-koltuk-imalati | P3 |
| 30 | Chester Koltukta 2026 Renk ve Kumaş Trendleri | chester koltuk trendleri | Info | /chester-koltuk | P3 |

Her yazı için GEO/AEO fırsatı: girişte 40–80 kelimelik doğrudan cevap + FAQ bloğu; önerilen H2'ler yukarıdaki başlığın alt soruları olacak şekilde kurgulanmalı.

---

## 13. Önceliklendirilmiş Uygulama Planı

### P0 — Kritik (BU ÇALIŞMADA TAMAMLANDI ✅)
- Global canonical hatasının düzeltilmesi
- OG görseli 404 düzeltmesi, metadataBase + OG/OG varsayılanları
- 6 landing sayfanın pillar içeriğe dönüştürülmesi (görünür FAQ + schema eşleşmesi)
- Sitemap güncellemesi + robots.txt temizliği
- İç linkleme ağı (ana sayfa kartları, footer, RelatedLinks)
- Ana sayfa H1'inin keyword hedefli hale getirilmesi
- Lokal sayfalar: tam NAP + FurnitureStore/LocalBusiness schema

### P1 — Yüksek (1–4 hafta)
- Search Console: sitemap gönderimi + indeks takibi
- Google Business Profile optimizasyonu (bölüm 6)
- Blog takviminden P1 içeriklerinin (1–5, 7–8, 11) yayınlanması
- Vitrin görsellerine `loading="lazy"` ve alt-text ince ayarı

### P2 — Orta (1–3 ay)
- Özel 404 sayfası
- next/image + WebP değerlendirmesi
- Ürün detayına Product schema (fiyatsız modelle uyumlu)
- Görsel dosya adlarının SEO dostu yeniden adlandırılması (mevcut referanslar nedeniyle kontrollü yapılmalı; isimler halihazırda betimleyici)
- Core Web Vitals: ana sayfa animasyon yükünün LCP etkisi ölçümü

### P3 — İleri seviye (3+ ay)
- Firma rehberi/dizin kayıtları ile entity güçlendirme (tutarlı NAP)
- hreflang + EN içerik (yabancı müşteri hedeflenirse)
- Teslimat galerisine müşteri hikâyeleri (gerçek projeler, sahte yorum olmadan)
- Blog kümesinin tamamlanması ve topical authority derinleştirme

---

## 14. İçerik Kuralları Uyum Notu

Bu çalışmada:
- Uydurma adres/telefon/hizmet bilgisi kullanılmadı (tümü mevcut site verisinden).
- Sahte yorum/referans üretilmedi.
- Hizmet verilmeyen bölge iddiası oluşturulmadı (bölge listesi işletme onayıyla "teslimat" bağlamında).
- Sırf SEO için lokasyon sayfası üretilmedi.
- Keyword stuffing yapılmadı; içerikler doğal Türkçe ile yazıldı.
- Mevcut premium tasarım korundu; landing sayfalar sitenin mevcut renk/tipografi sistemini kullanıyor.
