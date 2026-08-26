import React from 'react';
import Link from 'next/link';
import { SeoPageShell } from '@/themes/chester/components/SeoPageShell';
import { SeoBreadcrumbs } from '@/themes/chester/components/SeoBreadcrumbs';
import { FaqSection } from '@/themes/chester/components/FaqSection';
import { RelatedLinks } from '@/themes/chester/components/RelatedLinks';
import { SeoCta } from '@/themes/chester/components/SeoCta';
import { JsonLd } from '@/themes/chester/components/JsonLd';
import {
  ATELIER_NAME,
  BUSINESS_ADDRESS,
  DISPLAY_PHONE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from '@/themes/chester/mockData';

export const metadata = {
  title: 'Bağcılar Chester Koltuk İmalatı | Yerel Atölye - Chester Time',
  description:
    'Bağcılar Kirazlı’da chester koltuk imalatı, özel ölçü üretim ve döşeme. Atölyemizi ziyaret edin; imalatçıdan doğrudan fiyatla chester koltuk yaptırın.',
  alternates: { canonical: 'https://www.chestertime.com/bagcilar-chester-koltuk' },
  openGraph: {
    title: 'Bağcılar Chester Koltuk İmalatı | Chester Time',
    description:
      'Bağcılar Kirazlı’daki atölyemizde chester koltuk imalatı ve özel ölçü üretim. Yerinde kartela, imalatçı fiyatı, İstanbul geneli teslimat.',
    url: 'https://www.chestertime.com/bagcilar-chester-koltuk',
    images: [{ url: 'https://www.chestertime.com/images/chester/chestertime/chester_atelier_showroom.jpg' }],
  },
};

const faqs = [
  {
    question: "Bağcılar'da chester koltuk imalatı yapan yerler nerede?",
    answer:
      'Chester Time atölyesi Bağcılar Kirazlı Mahallesi 1145 Sokak No: 4/A adresindedir. Atölyemizi hafta içi ve cumartesi 09:00–19:30 arasında ziyaret edebilir, kumaş kartelamızı yerinde inceleyebilirsiniz.',
  },
  {
    question: 'Bağcılar ve çevresine teslimat var mı?',
    answer:
      'Evet. Atölyemiz Bağcılar’dadır; Kirazlı, Güneşli, Mahmutbey, Esenler, Güngören, Bahçelievler, Başakşehir başta olmak üzere İstanbul genelinde adrese teslimat yapıyoruz.',
  },
  {
    question: 'Atölyede neleri görebilirim?',
    answer:
      'Atölyemizde üretim aşamasındaki chester koltukları, 100’ü aşkın kumaş ve deri kartelasını, kapitone ve iskelet işçiliğini yerinde görebilirsiniz.',
  },
  {
    question: 'Bağcılar’da özel ölçü koltuk yaptırabilir miyim?',
    answer:
      'Evet. Salonunuzun ölçüsüne göre özel üretim yapıyoruz. Ölçü ve model değerlendirmesi için WhatsApp üzerinden bize ulaşabilir veya atölyemize gelebilirsiniz.',
  },
];

export default function BagcilarPage() {
  return (
    <SeoPageShell>
      <SeoBreadcrumbs
        items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Bağcılar Chester Koltuk' }]}
      />

      <h1 className="font-serif-luxe text-4xl sm:text-5xl font-bold mb-4">
        Bağcılar Chester Koltuk İmalatı
      </h1>
      <p className="text-lg text-stone-600 font-light leading-relaxed">
        {ATELIER_NAME}, Bağcılar Kirazlı Mahallesi&apos;ndeki atölyesinde chester koltuk imalatı,
        özel ölçü üretim ve koltuk döşeme hizmeti veren yerel bir imalatçıdır. Koltuğunuzu
        aracı olmadan, doğrudan üreticiden yaptırırsınız.
      </p>

      <img
        src="/images/chester/chestertime/chester_atelier_showroom.jpg"
        alt="Bağcılar Kirazlı'daki Chester Time atölyesi ve showroom alanı"
        className="mt-10 w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
      />

      <section className="mt-12 rounded-3xl bg-[#F5EBE1] p-7 sm:p-9">
        <h2 className="font-serif-luxe text-2xl font-bold mb-5">Atölye Adresi ve İletişim</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-stone-700 font-light leading-relaxed">
          <div>
            <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#B86B35] mb-1">Adres</span>
            {BUSINESS_ADDRESS}
          </div>
          <div>
            <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#B86B35] mb-1">Telefon</span>
            <a href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`} className="hover:text-[#B86B35] font-semibold">
              {DISPLAY_PHONE}
            </a>
          </div>
          <div>
            <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#B86B35] mb-1">Çalışma Saatleri</span>
            Pazartesi – Cumartesi: 09:00 – 19:30
          </div>
          <div>
            <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#B86B35] mb-1">Instagram</span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#B86B35] font-semibold">
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Bağcılar&apos;da Chester Koltuk Yaptırmak</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Bağcılar ve çevresinde chester koltuk arayanlar için atölyemizde modeli yerinde görme,
          kumaş kartelasını inceleme ve ölçüye göre sipariş verme imkânı sunuyoruz. Üretim
          süreci; ölçü alma, iskelet hazırlığı, sünger ve kumaş seçimi, döşeme, kapitone ve
          kalite kontrol adımlarından oluşur. Detayları{' '}
          <Link href="/chester-koltuk-imalati" className="text-[#B86B35] font-semibold hover:underline">
            chester koltuk imalatı
          </Link>{' '}
          sayfamızda bulabilirsiniz.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Hizmet ve Teslimat Bölgelerimiz</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Kirazlı, Güneşli, Mahmutbey, Esenler, Güngören, Bahçelievler, Başakşehir, İkitelli ve
          Küçükçekmece başta olmak üzere İstanbul genelinde teslimat yapıyoruz. Mevcut
          koltuğunuzun yenilenmesi için{' '}
          <Link href="/koltuk-doseme" className="text-[#B86B35] font-semibold hover:underline">
            koltuk döşeme
          </Link>{' '}
          hizmetimizden de yararlanabilirsiniz.
        </p>
      </section>

      <FaqSection faqs={faqs} title="Bağcılar İçin Sık Sorulan Sorular" />

      <RelatedLinks
        links={[
          { href: '/chester-koltuk', label: 'Chester Koltuk', description: 'Modeller, kumaşlar ve fiyat rehberi.' },
          { href: '/chester-koltuk-imalati', label: 'Chester Koltuk İmalatı', description: 'Ölçüden teslimata üretim sürecimiz.' },
          { href: '/kirazli-koltuk-doseme', label: 'Kirazlı Koltuk Döşeme', description: 'Kirazlı ve çevresine döşeme hizmeti.' },
          { href: '/ozel-tasarim-koltuk', label: 'Özel Tasarım Koltuk', description: 'Özel ölçü ve kişiye özel üretim.' },
        ]}
      />

      <SeoCta
        title="Bağcılar Atölyemizden Teklif Alın"
        subtitle="Atölyemizi ziyaret edebilir veya WhatsApp’tan yazarak randevu ve fiyat bilgisi alabilirsiniz."
        whatsappMessage={`Merhaba Chester Time, Bağcılar atölyenizden randevu ve chester koltuk fiyat bilgisi almak istiyorum.`}
        whatsappLabel="Randevu / Teklif Al"
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FurnitureStore',
          name: ATELIER_NAME,
          image: 'https://www.chestertime.com/images/chester/chester_logo.jpg',
          telephone: DISPLAY_PHONE,
          url: 'https://www.chestertime.com/bagcilar-chester-koltuk',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Kirazlı Mah. 1145 Sok. No: 4/A',
            addressLocality: 'Bağcılar',
            addressRegion: 'İstanbul',
            addressCountry: 'TR',
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '19:30',
            },
          ],
          areaServed: [
            'Bağcılar', 'Kirazlı', 'Güneşli', 'Mahmutbey', 'Esenler',
            'Güngören', 'Bahçelievler', 'Başakşehir', 'İkitelli', 'Küçükçekmece', 'İstanbul',
          ],
          sameAs: [INSTAGRAM_URL],
        }}
      />
    </SeoPageShell>
  );
}
