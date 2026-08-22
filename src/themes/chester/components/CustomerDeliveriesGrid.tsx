'use client';
import React from 'react';
import { Camera, ArrowUpRight } from 'lucide-react';
import { ATELIER_NAME, INSTAGRAM_HANDLE, INSTAGRAM_URL, buildWhatsAppUrl } from '../mockData';

export const CustomerDeliveriesGrid: React.FC = () => {
  const deliveries = [
    {
      title: "Mint Yeşili Chester Teslimatı",
      location: "Bakırköy, İstanbul Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_1_mint.jpg",
      tag: "Özel Renk Kumaş"
    },
    {
      title: "Klasik Taba Deri Chester",
      location: "Başakşehir, İstanbul Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_2_brown.jpg",
      tag: "Vintage Taba Deri"
    },
    {
      title: "Dyna Modern Taba Koltuk",
      location: "Ataşehir Rezidans Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_3_camel.jpg",
      tag: "Modern Tasarım"
    },
    {
      title: "Zümrüt Yeşili Deri Chester",
      location: "Sarıyer Villa Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_4_green.jpg",
      tag: "Zümrüt Yeşil Deri"
    },
    {
      title: "Ekru Kadife Chester & Altın Ayna",
      location: "Florya Villa Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_5_ecru.jpg",
      tag: "Silinebilir Kadife"
    },
    {
      title: "Asil Bordo Chester Kanepe",
      location: "Beylikdüzü Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_6_black.jpg",
      tag: "Klasik Bordo Deri"
    },
    {
      title: "Taba Berjer & Kapitone Puf Seti",
      location: "Kadıköy Müşterimiz",
      image: "/images/chester/chestertime/real_deliveries/delivery_7_tan_puf.jpg",
      tag: "Koltuk + Puf Takım"
    },
    {
      title: "Cafe & VIP Ofis Loca Projesi",
      location: "Kurumsal Proje Teslimatı",
      image: "/images/chester/chestertime/real_deliveries/delivery_8_office.jpg",
      tag: "Özel İmalat"
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

        {/* Deliveries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deliveries.map((item, i) => (
            <div key={i} className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-stone-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
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
                  <h3 className="font-sans font-bold text-sm text-[#1C1917] mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

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
