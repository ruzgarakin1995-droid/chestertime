'use client';
import React from 'react';
import { Camera, ArrowUpRight } from 'lucide-react';
import { ATELIER_NAME, INSTAGRAM_HANDLE, INSTAGRAM_URL, buildWhatsAppUrl } from '../mockData';

export const CustomerDeliveriesGrid: React.FC = () => {
  const [selectedDelivery, setSelectedDelivery] = React.useState<{
    title: string;
    location: string;
    image: string;
    tag: string;
  } | null>(null);

  const deliveries = [
    {
      title: "Çikolata Kahve Hakiki Deri Chester",
      location: "Bakırköy, İstanbul Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_1_brown_luxury.webp",
      tag: "Hakiki Deri İmalatı"
    },
    {
      title: "Klasik Taba Deri Chester Kanepe",
      location: "Başakşehir, İstanbul Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_2_cognac_classic.webp",
      tag: "Vintage Taba Deri"
    },
    {
      title: "Taba Chester & Yuvarlak Kapitone Puf",
      location: "Ataşehir Rezidans Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_3_tan_puf.webp",
      tag: "Koltuk + Puf Takım"
    },
    {
      title: "Lüks Yönetici Ofisi Chester Takımı",
      location: "Levent Plaza Ofis Projesi",
      image: "/images/chester/chestertime/real_deliveries/delivery_4_executive_office.webp",
      tag: "Kurumsal Özel İmalat"
    },
    {
      title: "Taba Deri 3+2+1+1 Komple Salon Takımı",
      location: "Florya Villa Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_5_tan_salon_set.webp",
      tag: "Tam Salon Seti"
    },
    {
      title: "Zümrüt Yeşili Deri Chester L Köşe",
      location: "Sarıyer Rezidans Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_6_emerald_corner.webp",
      tag: "Özel L-Köşe Tasarım"
    },
    {
      title: "Lobi & VIP Lounge Chester Köşe Takımı",
      location: "Beşiktaş Butik Otel Teslimatı",
      image: "/images/chester/chestertime/real_deliveries/delivery_7_hotel_lobby_green.webp",
      tag: "Lüks Proje Teslimatı"
    },
    {
      title: "Hardal Sarısı Kadife Chester Köşe",
      location: "Kadıköy Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_8_mustard_corner.webp",
      tag: "Silinebilir Kadife"
    },
    {
      title: "Antik Bordo Hakiki Deri Chester",
      location: "Beylikdüzü Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_9_bordeaux_classic.webp",
      tag: "Klasik Bordo Deri"
    }
  ];

  return (
    <section id="deliveries" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white text-[#B86B35] text-[11px] font-sans uppercase tracking-widest mb-3 font-semibold border border-stone-200">
              <Camera className="w-3.5 h-3.5" />
              <span>Gerçek Müşteri Fotoğrafları</span>
            </div>
            <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-bold">
              Müşterilerimizin Evlerinden Kareler
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light mt-2 max-w-2xl">
              Atölyemizden çıkıp Türkiye'nin dört bir yanındaki evlere ve ofislere kurulan Chester Time koltukları.
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-bold uppercase tracking-wider hover:bg-stone-100 transition-colors shadow-sm"
          >
            <svg className="w-4 h-4 text-[#B86B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>Instagram'da Daha Fazlası ({INSTAGRAM_HANDLE})</span>
          </a>
        </div>

        {/* Deliveries Grid - 9 Items 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveries.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedDelivery(item)}
              className="group cursor-pointer relative bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium tracking-wide flex items-center space-x-1.5 shadow-lg">
                    <Camera className="w-3.5 h-3.5 text-[#F3C287]" />
                    <span>Büyüt & İncele</span>
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] bg-[#F5EBE1] text-[#B86B35] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium truncate ml-2">
                      {item.location}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-sm text-[#1C1917] mt-1 group-hover:text-[#B86B35] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Modal */}
        {selectedDelivery && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedDelivery(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDelivery(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Kapat"
              >
                ✕
              </button>
              <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedDelivery.image}
                  alt={selectedDelivery.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-5 bg-[#1C1917] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-[10px] bg-[#B86B35] text-white font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {selectedDelivery.tag}
                    </span>
                    <span className="text-xs text-stone-400">
                      {selectedDelivery.location}
                    </span>
                  </div>
                  <h4 className="font-serif-luxe text-lg font-bold">
                    {selectedDelivery.title}
                  </h4>
                </div>
                <a
                  href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, müşteriden fotoğraflarda yer alan "${selectedDelivery.title}" modeli hakkında fiyat ve bilgi almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#B86B35] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#944D1E] transition-colors inline-flex items-center justify-center space-x-2 flex-shrink-0"
                >
                  <span>Bu Modeli Sor</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Box */}
        <div className="mt-12 p-8 rounded-3xl bg-[#1C1917] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-serif-luxe text-2xl font-bold mb-1">
              Sizin Salonunuza Hangi Renk ve Ölçü Yakışır?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light">
              Salonunuzun fotoğrafını ve istediğiniz rengi WhatsApp'tan gönderin, size özel en uygun imalat fiyatını çıkaralım.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl("Merhaba " + ATELIER_NAME + ", salonum için koltuk yaptırmak istiyorum. Fotoğraf gönderip fiyat almak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-[#B86B35] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#944D1E] transition-colors flex items-center justify-center space-x-2 flex-shrink-0 shadow-lg"
          >
            <span>WhatsApp'tan Fotoğraf Gönder</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
