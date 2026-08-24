'use client';
import React from 'react';
import { MapPin, Phone, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { ATELIER_NAME, DISPLAY_PHONE, BUSINESS_ADDRESS, INSTAGRAM_HANDLE, INSTAGRAM_URL, buildWhatsAppUrl } from '../mockData';

export const ChesterShowroomVisit: React.FC = () => {
  return (
    <section id="showroom" className="py-20 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#B86B35] font-semibold block">
              Atölye & Showroom Ziyareti
            </span>
            <h2 className="font-serif-luxe text-3xl sm:text-4xl text-[#1C1917] font-bold">
              Atölyemize Gelin,<br />
              <span className="italic text-stone-500 font-light">Kumaşları Canlı İnceleyin.</span>
            </h2>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Bağcılar Kirazlı atölyemize dilediğiniz zaman gelip modellerimizi yerinde görebilir, yüzlerce kumaş kartelasından seçim yapabilir ve siparişinizi çay/kahve eşliğinde oluşturabilirsiniz.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 text-sm text-stone-800">
                <MapPin className="w-5 h-5 text-[#B86B35] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_ADDRESS}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-stone-800">
                <Phone className="w-5 h-5 text-[#B86B35] flex-shrink-0" />
                <span className="font-semibold">{DISPLAY_PHONE}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-stone-800">
                <svg className="w-5 h-5 text-[#B86B35] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#B86B35] transition-colors font-medium">
                  {INSTAGRAM_HANDLE} (Instagram Hesabımız)
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-stone-800">
                <Clock className="w-5 h-5 text-[#B86B35] flex-shrink-0" />
                <span>Pazartesi – Cumartesi: 09:00 – 19:30</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, atölyenizi ziyaret etmek ve konum bilgisi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-[#1C1917] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B86B35] transition-colors shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Ziyaret & Konum İste</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-stone-300 shadow-xl relative aspect-[16/10] bg-stone-900">
              <img
                src="/images/chester/chestertime/chester_atelier_showroom.jpg"
                alt="Chester Time Bağcılar İmalat & Showroom Atölyesi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-wider text-[#F3C287] font-semibold block mb-1">
                    Bağcılar / Kirazlı Atölyemiz
                  </span>
                  <p className="text-sm sm:text-base font-serif-luxe font-bold">
                    Kişiye Özel Ölçü ve İmalatçı Fiyatlarıyla Hizmetinizdeyiz
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
