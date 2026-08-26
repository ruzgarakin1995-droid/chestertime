import React from 'react';
import Link from 'next/link';
import { SeoPageShell } from '@/themes/chester/components/SeoPageShell';
import { SeoBreadcrumbs } from '@/themes/chester/components/SeoBreadcrumbs';
import { FaqSection } from '@/themes/chester/components/FaqSection';
import { RelatedLinks } from '@/themes/chester/components/RelatedLinks';
import { SeoCta } from '@/themes/chester/components/SeoCta';
import { JsonLd } from '@/themes/chester/components/JsonLd';

export const metadata = {
  title: 'Özel Tasarım Koltuk ve Özel Ölçü Üretim | Chester Time',
  description:
    'Özel tasarım ve özel ölçü koltuk imalatı: kişiye özel kumaş, renk ve ölçü seçenekleri. Bağcılar Kirazlı atölyemizde butik üretim, imalatçıdan doğrudan.',
  alternates: { canonical: 'https://www.chestertime.com/ozel-tasarim-koltuk' },
  openGraph: {
    title: 'Özel Tasarım Koltuk ve Özel Ölçü Üretim | Chester Time',
    description:
      'Kişiye özel tasarım ve özel ölçü koltuk imalatı. Kumaş, renk ve ölçü tamamen size özel; Bağcılar Kirazlı atölyemizde üretim.',
    url: 'https://www.chestertime.com/ozel-tasarim-koltuk',
    images: [{ url: 'https://www.chestertime.com/images/chester/chester_modern_luxe.jpg' }],
  },
};

const faqs = [
  {
    question: 'Özel tasarım koltuk yaptırabilir miyim?',
    answer:
      'Evet. Beğendiğiniz bir modeli, fotoğrafı veya aklınızdaki tasarımı WhatsApp üzerinden göndermeniz yeterli. Atölyemizde ölçü, kumaş ve detaylar birlikte netleştirilir, üretim size özel planlanır.',
  },
  {
    question: 'Özel ölçü koltuk imalatı nasıl işliyor?',
    answer:
      'Önce salonunuzun ölçüsü alınır veya gönderdiğiniz ölçüler üzerinden değerlendirme yapılır. Ardından genişlik, derinlik ve oturum yüksekliği mekânınıza göre belirlenir ve üretim bu ölçülerle başlar.',
  },
  {
    question: 'Kumaş ve rengi kendim seçebilir miyim?',
    answer:
      'Evet. 100’ü aşkın silinebilir kumaş, kadife, nubuk ve deri seçeneğimiz bulunur. Kartelayı atölyemizde inceleyebilir veya WhatsApp üzerinden görsel isteyebilirsiniz.',
  },
  {
    question: 'Özel üretim koltuk ne kadar sürede teslim edilir?',
    answer:
      'Teslim süresi modele ve kumaş teminine göre değişmekle birlikte genellikle 4–8 haftadır. Net tarih, teklif aşamasında paylaşılır.',
  },
  {
    question: 'Özel tasarım koltuk hazır üründen neden daha avantajlı?',
    answer:
      'Hazır ürünlerde ölçü, kumaş ve renk sabittir. Özel üretimde koltuk salonunuza tam oturur, malzeme kalitesini kendiniz belirlersiniz ve imalatçıdan doğrudan fiyat alırsınız.',
  },
];

export default function OzelTasarimPage() {
  return (
    <SeoPageShell>
      <SeoBreadcrumbs
        items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Özel Tasarım Koltuk' }]}
      />

      <h1 className="font-serif-luxe text-4xl sm:text-5xl font-bold mb-4">Özel Tasarım Koltuk</h1>
      <p className="text-lg text-stone-600 font-light leading-relaxed">
        Chester Time, İstanbul Bağcılar Kirazlı&apos;daki atölyesinde özel tasarım ve özel ölçü
        koltuk imalatı yapar. Koltuğunuzun ölçüsü, kumaşı, rengi ve detayları hazır ürün
        kalıplarına değil, sizin mekânınıza ve zevkinize göre belirlenir.
      </p>

      <img
        src="/images/chester/chester_modern_luxe.jpg"
        alt="Chester Time özel tasarım modern chester koltuk"
        className="mt-10 w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
      />

      <section className="mt-12">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Neden Özel Üretim Koltuk?</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Standart mağaza ürünleri sabit ölçü ve sınırlı kumaşla satılır. Özel üretimde ise
          koltuk, salonunuzun ölçüsüne tam oturur; kumaş, renk, sünger yoğunluğu ve ayak detayını
          siz belirlersiniz. Küçük salonlar için kompakt ölçüler, geniş mekânlar için büyük
          takımlar üretilebilir. Bu yaklaşım, özellikle ölçü sorunu yaşanan alanlarda en doğru
          çözümdür.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Özel Ölçü Koltuk Süreci</h2>
        <ol className="space-y-5">
          {[
            { title: 'Danışmanlık', text: 'WhatsApp üzerinden model, fotoğraf ve taleplerinizi paylaşın; ön değerlendirme yapalım.' },
            { title: 'Ölçü Alma', text: 'Salon ölçünüz alınır veya gönderdiğiniz ölçüler üzerinden plan yapılır.' },
            { title: 'Tasarım Onayı', text: 'Kumaş, renk ve detaylar atölyemizde veya dijital kartela üzerinden netleştirilir.' },
            { title: 'Üretim', text: 'Masif gürgen iskelet ve seçtiğiniz malzemelerle koltuğunuz atölyemizde üretilir.' },
            { title: 'Teslimat', text: 'Kalite kontrol sonrası İstanbul genelinde adresinize teslim edilir.' },
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

      <section className="mt-12">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Kimler İçin Uygun?</h2>
        <ul className="space-y-3 text-stone-600 font-light leading-relaxed list-none">
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Salonuna tam ölçü koltuk arayanlar</li>
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Beğendiği modeli kendi seçtiği kumaş ve renkle isteyenler</li>
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Ofis, otel veya proje bazlı toplu üretim ihtiyacı olanlar</li>
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Fotoğraftaki bir modelin benzerini yaptırmak isteyenler</li>
        </ul>
        <p className="text-stone-600 font-light leading-relaxed mt-4">
          Üretim standartlarımız hakkında bilgi için{' '}
          <Link href="/chester-koltuk-imalati" className="text-[#B86B35] font-semibold hover:underline">
            chester koltuk imalatı
          </Link>{' '}
          sayfamızı, mevcut modellerimiz için{' '}
          <Link href="/chester-koltuk" className="text-[#B86B35] font-semibold hover:underline">
            chester koltuk
          </Link>{' '}
          rehberimizi inceleyebilirsiniz.
        </p>
      </section>

      <FaqSection faqs={faqs} />

      <RelatedLinks
        links={[
          { href: '/chester-koltuk', label: 'Chester Koltuk', description: 'Modeller, kumaşlar ve fiyat rehberi.' },
          { href: '/chester-koltuk-imalati', label: 'Chester Koltuk İmalatı', description: 'Ölçüden teslimata üretim sürecimiz.' },
          { href: '/koltuk-doseme', label: 'Koltuk Döşeme', description: 'Mevcut koltuğunuz için yenileme ve kaplama.' },
          { href: '/bagcilar-chester-koltuk', label: 'Bağcılar Chester Koltuk', description: 'Atölyemizi ziyaret edin, kartelayı yerinde görün.' },
        ]}
      />

      <SeoCta
        title="Özel Ölçü İçin İletişime Geçin"
        subtitle="Koltuk modelinizi veya salon fotoğrafınızı gönderin; size özel ölçü, kumaş ve fiyat teklifi hazırlayalım."
        whatsappMessage={`Merhaba Chester Time, özel tasarım / özel ölçü koltuk için danışmanlık ve fiyat almak istiyorum.`}
        whatsappLabel="Modelinizi Gönderin"
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Özel Tasarım ve Özel Ölçü Koltuk İmalatı',
          serviceType: 'Kişiye özel koltuk üretimi',
          provider: { '@id': 'https://www.chestertime.com/#localbusiness' },
          areaServed: { '@type': 'City', name: 'İstanbul' },
          url: 'https://www.chestertime.com/ozel-tasarim-koltuk',
        }}
      />
    </SeoPageShell>
  );
}
