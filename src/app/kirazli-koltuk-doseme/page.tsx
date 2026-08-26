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
} from '@/themes/chester/mockData';

export const metadata = {
  title: 'Kirazlı Koltuk Döşeme | Chester Döşeme ve Yenileme - Chester Time',
  description:
    'Kirazlı ve Bağcılar çevresinde koltuk döşeme, kumaş değişimi ve chester yenileme. Atölyemiz Kirazlı Mahallesi’nde; hızlı teklif için bize ulaşın.',
  alternates: { canonical: 'https://www.chestertime.com/kirazli-koltuk-doseme' },
  openGraph: {
    title: 'Kirazlı Koltuk Döşeme | Chester Time',
    description:
      'Kirazlı Mahallesi’ndeki atölyemizde koltuk döşeme, kumaş değişimi ve chester koltuk yenileme. Bağcılar ve İstanbul geneline hizmet.',
    url: 'https://www.chestertime.com/kirazli-koltuk-doseme',
    images: [{ url: 'https://www.chestertime.com/images/chester/chestertime/chester_atelier_showroom.jpg' }],
  },
};

const faqs = [
  {
    question: "Kirazlı'da koltuk döşeme yapan yerler nerede?",
    answer:
      'Chester Time atölyesi Kirazlı Mahallesi 1145 Sokak No: 4/A, Bağcılar adresindedir. Döşeme ve yenileme işleriniz için atölyemize gelebilir veya WhatsApp üzerinden fotoğraf göndererek teklif alabilirsiniz.',
  },
  {
    question: 'Kirazlı ve çevresinden koltuk alımı/teslimatı yapıyor musunuz?',
    answer:
      'Evet. Kirazlı başta olmak üzere Bağcılar, Güneşli, Mahmutbey, Esenler ve İstanbul genelinde hizmet veriyoruz. Teslimat planı iş kapsamında netleştirilir.',
  },
  {
    question: 'Chester koltuğumun döşemesi yenilenebilir mi?',
    answer:
      'Evet. İskeleti sağlam chester koltukların kumaşı veya derisi yenilenir; kapitone ve düğme detayları aslına uygun şekilde yeniden işlenir.',
  },
  {
    question: 'Döşeme için kumaşı nereden seçebilirim?',
    answer:
      'Atölyemizdeki 100’ü aşkın silinebilir kumaş, kadife, nubuk ve deri kartelasından seçim yapabilirsiniz; isterseniz kartela görsellerini WhatsApp üzerinden de paylaşırız.',
  },
];

export default function KirazliPage() {
  return (
    <SeoPageShell>
      <SeoBreadcrumbs
        items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Kirazlı Koltuk Döşeme' }]}
      />

      <h1 className="font-serif-luxe text-4xl sm:text-5xl font-bold mb-4">Kirazlı Koltuk Döşeme</h1>
      <p className="text-lg text-stone-600 font-light leading-relaxed">
        {ATELIER_NAME} atölyesi Kirazlı Mahallesi&apos;ndedir. Kirazlı, Bağcılar ve çevresinde
        koltuk döşeme, kumaş değişimi ve chester koltuk yenileme hizmeti veriyoruz; İstanbul
        genelinden gelen talepleri de atölyemizde karşılıyoruz.
      </p>

      <img
        src="/images/chester/chestertime/chester_atelier_showroom.jpg"
        alt="Kirazlı Mahallesi Bağcılar'daki Chester Time döşeme atölyesi"
        className="mt-10 w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
      />

      <section className="mt-12 rounded-3xl bg-[#F5EBE1] p-7 sm:p-9">
        <h2 className="font-serif-luxe text-2xl font-bold mb-4">Atölyemiz</h2>
        <p className="text-sm text-stone-700 font-light leading-relaxed">
          Adres: {BUSINESS_ADDRESS}
          <br />
          Telefon: <a href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`} className="font-semibold hover:text-[#B86B35]">{DISPLAY_PHONE}</a>
          <br />
          Çalışma Saatleri: Pazartesi – Cumartesi, 09:00 – 19:30
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Kirazlı&apos;da Koltuk Döşeme Hizmetimiz</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Koltuğunuzun kumaşını veya derisini değiştirmek, süngerini yenilemek ya da komple
          kaplama yaptırmak istediğinizde süreci mümkün olan en kısa yoldan başlatıyoruz:
          WhatsApp&apos;tan fotoğraf gönderin, durum değerlendirmesi ve fiyat ön bilgisi
          paylaşalım. İş kapsamı; kumaş/deri değişimi, sünger yenileme ve gerekli onarımlar
          olarak belirlenir. Hizmet kapsamımızın detaylarını{' '}
          <Link href="/koltuk-doseme" className="text-[#B86B35] font-semibold hover:underline">
            koltuk döşeme
          </Link>{' '}
          sayfamızda bulabilirsiniz.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Chester Koltuk Yenileme</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Chester koltuklar, kapitone işçiliği nedeniyle her döşemecinin uzmanlık alanına
          girmez. Atölyemizde chester formunun düğme düzeni ve kol kıvrımları korunarak yenileme
          yapılır. Yeni bir chester koltuk yaptırmak isterseniz{' '}
          <Link href="/chester-koltuk" className="text-[#B86B35] font-semibold hover:underline">
            chester koltuk
          </Link>{' '}
          rehberimize göz atabilirsiniz.
        </p>
      </section>

      <FaqSection faqs={faqs} title="Kirazlı İçin Sık Sorulan Sorular" />

      <RelatedLinks
        links={[
          { href: '/koltuk-doseme', label: 'Koltuk Döşeme', description: 'Döşeme hizmetimizin tam kapsamı ve süreci.' },
          { href: '/chester-koltuk', label: 'Chester Koltuk', description: 'Yeni chester modelleri ve fiyat rehberi.' },
          { href: '/chester-koltuk-imalati', label: 'Chester Koltuk İmalatı', description: 'Sıfırdan özel üretim chester koltuk.' },
          { href: '/bagcilar-chester-koltuk', label: 'Bağcılar Chester Koltuk', description: 'Bağcılar ve çevresine imalat hizmeti.' },
        ]}
      />

      <SeoCta
        title="Kirazlı'dan Hızlı Teklif Alın"
        subtitle="Koltuğunuzun fotoğrafını gönderin; döşeme seçenekleri ve fiyat değerlendirmesini aynı gün paylaşalım."
        whatsappMessage={`Merhaba Chester Time, Kirazlı'dan koltuk döşeme hizmeti için teklif almak istiyorum.`}
        whatsappLabel="Hızlı Teklif Al"
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: ATELIER_NAME,
          image: 'https://www.chestertime.com/images/chester/chester_logo.jpg',
          telephone: DISPLAY_PHONE,
          url: 'https://www.chestertime.com/kirazli-koltuk-doseme',
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
          areaServed: ['Kirazlı', 'Bağcılar', 'Güneşli', 'Mahmutbey', 'Esenler', 'İstanbul'],
        }}
      />
    </SeoPageShell>
  );
}
