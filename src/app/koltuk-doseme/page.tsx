import React from 'react';
import Link from 'next/link';
import { SeoPageShell } from '@/themes/chester/components/SeoPageShell';
import { SeoBreadcrumbs } from '@/themes/chester/components/SeoBreadcrumbs';
import { FaqSection } from '@/themes/chester/components/FaqSection';
import { RelatedLinks } from '@/themes/chester/components/RelatedLinks';
import { SeoCta } from '@/themes/chester/components/SeoCta';
import { JsonLd } from '@/themes/chester/components/JsonLd';

export const metadata = {
  title: 'Koltuk Döşeme ve Yenileme | Chester Koltuk Döşeme - Chester Time',
  description:
    'Koltuk döşeme, kumaş değişimi, kaplama ve chester koltuk yenileme hizmeti. Bağcılar Kirazlı atölyemizde profesyonel döşemeci işçiliği ile teklif alın.',
  alternates: { canonical: 'https://www.chestertime.com/koltuk-doseme' },
  openGraph: {
    title: 'Koltuk Döşeme ve Yenileme | Chester Time',
    description:
      'Koltuk döşeme, kumaş/deri değişimi ve chester koltuk yenileme. Bağcılar Kirazlı atölyemizde döşemeci işçiliği, İstanbul geneli hizmet.',
    url: 'https://www.chestertime.com/koltuk-doseme',
    images: [{ url: 'https://www.chestertime.com/images/chester/chester_tufting_detail.jpg' }],
  },
};

const faqs = [
  {
    question: 'Koltuk döşeme fiyatları nasıl belirlenir?',
    answer:
      'Fiyat; koltuğun modeline ve ölçüsüne, seçilecek kumaş veya deriye, sünger yenileme ihtiyacına ve yapılacak onarımlara göre belirlenir. WhatsApp üzerinden koltuğunuzun fotoğrafını göndererek ön fiyat değerlendirmesi alabilirsiniz.',
  },
  {
    question: 'Eski chester koltuk yenilenir mi?',
    answer:
      'Evet. Mevcut chester koltuğunuzun iskeleti korunarak süngeri, kumaşı veya derisi yenilenir; kapitone ve düğme detayları yeniden işlenir. İskelet sağlamsa yenileme, sıfır üretime göre ekonomik bir seçenektir.',
  },
  {
    question: 'Koltuk kumaş değişimi ne kadar sürer?',
    answer:
      'Süre, koltuğun büyüklüğüne ve yapılacak işlemlerin kapsamına göre değişir. Kumaş değişimi ve yenileme işlerinde teslim süresi, ekspertiz sonrası netleştirilir.',
  },
  {
    question: 'Kumaş seçimini nasıl yapıyoruz?',
    answer:
      '100’ü aşkın silinebilir kumaş, kadife, nubuk ve deri seçeneğimizden oluşan kartelayı atölyemizde inceleyebilir veya WhatsApp üzerinden görsel isteyebilirsiniz.',
  },
  {
    question: 'Hangi tür koltuklar döşenir?',
    answer:
      'Chester koltuklar başta olmak üzere kanepe, berjer, köşe takımı ve puf gibi döşemeli mobilyalarda kumaş değişimi, kaplama ve yenileme hizmeti veriyoruz.',
  },
];

export default function KoltukDosemePage() {
  return (
    <SeoPageShell>
      <SeoBreadcrumbs
        items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Koltuk Döşeme' }]}
      />

      <h1 className="font-serif-luxe text-4xl sm:text-5xl font-bold mb-4">Koltuk Döşeme</h1>
      <p className="text-lg text-stone-600 font-light leading-relaxed">
        Chester Time, İstanbul Bağcılar Kirazlı&apos;daki atölyesinde koltuk döşeme, kumaş
        değişimi ve yenileme hizmeti verir. Mevcut koltuğunuz, iskeleti korunarak yeni kumaş
        veya deriyle, usta döşemeci işçiliğiyle yenilenir.
      </p>

      <img
        src="/images/chester/chester_tufting_detail.jpg"
        alt="Chester koltuk döşemesinde el kapitonesi ve düğme detayı işçiliği"
        className="mt-10 w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
      />

      <section className="mt-12">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Hizmet Kapsamımız</h2>
        <ul className="space-y-3 text-stone-600 font-light leading-relaxed list-none">
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Koltuk kumaş değişimi ve deri kaplama</li>
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Chester koltuk döşeme ve yenileme</li>
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Sünger yenileme ve oturum konforu iyileştirme</li>
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Kanepe, berjer, köşe takımı ve puf döşeme</li>
        </ul>
        <p className="text-stone-600 font-light leading-relaxed mt-4">
          Sağlam iskeletli bir koltuğu yenilemek, hem ekonomik hem de sürdürülebilir bir
          tercihtir. Yapılacak işlemler, koltuğunuzun durumuna göre ekspertiz sonrası netleştirilir.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Chester Koltuk Döşeme</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Chester koltukların döşemesi, kapitone ve düğme işçiliği nedeniyle özel ustalık ister.
          Atölyemizde eski chester koltuklar yenilenirken kapitone düzeni korunur, düğme ve
          kabara detayları aslına uygun şekilde yeniden işlenir. Chester koltuğunuzu sıfırdan
          yaptırmak isterseniz{' '}
          <Link href="/chester-koltuk-imalati" className="text-[#B86B35] font-semibold hover:underline">
            chester koltuk imalatı
          </Link>{' '}
          sayfamızı inceleyebilirsiniz.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Döşeme Süreci Nasıl İşler?</h2>
        <ol className="space-y-5">
          {[
            { title: 'Ekspertiz', text: 'Koltuğunuzun fotoğrafını WhatsApp’tan gönderin; durum ve yapılabilecekler değerlendirilir.' },
            { title: 'Kumaş Seçimi', text: 'Kartelamızdan silinebilir kumaş, kadife veya deri seçenekleri belirlenir.' },
            { title: 'Yenileme', text: 'Eski döşeme sökülür; sünger, kumaş ve detaylar usta eliyle yenilenir.' },
            { title: 'Teslim', text: 'Kontrol sonrası koltuğunuz teslim edilir; İstanbul geneli hizmet verilir.' },
          ].map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#B86B35] text-white text-sm font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-[15px] text-[#1C1917]">{step.title}</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed mt-1">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <FaqSection faqs={faqs} />

      <RelatedLinks
        links={[
          { href: '/chester-koltuk', label: 'Chester Koltuk', description: 'Yeni chester modelleri ve fiyat rehberi.' },
          { href: '/chester-koltuk-imalati', label: 'Chester Koltuk İmalatı', description: 'Sıfırdan özel üretim chester koltuk.' },
          { href: '/kirazli-koltuk-doseme', label: 'Kirazlı Koltuk Döşeme', description: 'Kirazlı ve çevresine yerel döşeme hizmeti.' },
          { href: '/ozel-tasarim-koltuk', label: 'Özel Tasarım Koltuk', description: 'Özel ölçü ve kişiye özel üretim.' },
        ]}
      />

      <SeoCta
        title="Yenileme Teklifi Alın"
        subtitle="Koltuğunuzun fotoğrafını WhatsApp’tan gönderin; döşeme seçenekleri ve fiyat değerlendirmesini hızlıca paylaşalım."
        whatsappMessage={`Merhaba Chester Time, koltuk döşeme / yenileme hizmeti için fotoğraf gönderip teklif almak istiyorum.`}
        whatsappLabel="Fotoğraf Gönder, Teklif Al"
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Koltuk Döşeme ve Yenileme',
          serviceType: 'Koltuk döşeme, kumaş değişimi ve chester yenileme',
          provider: { '@id': 'https://www.chestertime.com/#localbusiness' },
          areaServed: { '@type': 'City', name: 'İstanbul' },
          url: 'https://www.chestertime.com/koltuk-doseme',
        }}
      />
    </SeoPageShell>
  );
}
