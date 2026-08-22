'use client';
import React from 'react';
import { ShieldCheck, CheckCircle2, Hammer, Award, DollarSign } from 'lucide-react';
import { ATELIER_NAME, buildWhatsAppUrl } from '../mockData';

export const CraftsmanshipStandards: React.FC = () => {
  const standards = [
    {
      title: "1. Fırınlanmış Masif Gürgen İskelet",
      description: "Sunta veya dayanıksız kavak yerine; fırınlanmış Karadeniz gürgeni kullanılır. 10 yıl iskelet garantilidir, asla gıcırdamaz veya esnemez."
    },
    {
      title: "2. Çökmeyen 32 - 35 DNS Sünger",
      description: "Zamanla yumuşayıp çöken kalitesiz süngerler yerine; oturum formunu yıllarca koruyan yüksek yoğunluklu HR sünger katmanları tercih edilir."
    },
    {
      title: "3. Usta İşi El Kapitonesi",
      description: "Çelik çekme ipler ve tek tek elle düğümlenen derin kapitone işçiliği. Düğmeler asla kopmaz veya gevşemez."
    },
    {
      title: "4. Doğrudan İmalat Fiyat Avantajı",
      description: "Mağaza ve aracı komisyonu olmadan, doğrudan Bağcılar atölyemizden en uygun fiyatla birinci sınıf koltuk sahibi olursunuz."
    }
  ];

  return (
    <section id="craftsmanship" className="py-20 lg:py-24 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Atelier Photo */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-stone-300 shadow-2xl relative">
              <img
                src="/images/chester/chestertime/product_cognac_chester.jpg"
                alt="Chester Time İmalat Kalitesi"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/80 backdrop-blur-md text-white border border-white/20">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-[#F3C287] flex-shrink-0" />
                  <div>
                    <span className="font-serif-luxe text-base font-bold block">
                      10 Yıl Masif İskelet Garantisi
                    </span>
                    <span className="text-xs text-stone-300 font-light">
                      Her ürünümüz fırınlanmış gürgen ağacından titizlikle üretilir.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Why Chester Time? */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F5EBE1] text-[#B86B35] text-[11px] font-sans uppercase tracking-widest font-semibold">
              <Hammer className="w-3.5 h-3.5" />
              <span>Neden Chester Time?</span>
            </div>

            <h2 className="font-serif-luxe text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-bold leading-tight">
              Kaliteli Malzeme,<br />
              <span className="italic font-light text-[#B86B35]">İmalatçı Fiyatı.</span>
            </h2>

            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Koltuk satın alırken sadece dış görünüşe değil, içine de güvenmelisiniz. Bağcılar atölyemizde her aşamayı açık ve şeffaf bir şekilde üretiyoruz.
            </p>

            <div className="space-y-3.5 pt-2">
              {standards.map((item, i) => (
                <div key={i} className="flex items-start space-x-3.5 p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#B86B35] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif-luxe text-base font-bold text-[#1C1917]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-light leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl(`Merhaba ${ATELIER_NAME}, atölyenizdeki imalat süreci ve koltuk siparişi hakkında bilgi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#1C1917] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B86B35] transition-colors shadow-lg"
              >
                <span>Atölyemize Danışın (WhatsApp)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
