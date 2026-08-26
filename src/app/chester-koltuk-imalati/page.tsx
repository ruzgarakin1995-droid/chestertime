import React from 'react';
import Link from 'next/link';
import { SeoPageShell } from '@/themes/chester/components/SeoPageShell';
import { SeoBreadcrumbs } from '@/themes/chester/components/SeoBreadcrumbs';
import { FaqSection } from '@/themes/chester/components/FaqSection';
import { RelatedLinks } from '@/themes/chester/components/RelatedLinks';
import { SeoCta } from '@/themes/chester/components/SeoCta';
import { JsonLd } from '@/themes/chester/components/JsonLd';

export const metadata = {
  title: 'Chester Koltuk İmalatı | İmalatçıdan Özel Üretim - Chester Time',
  description:
    'Chester koltuk imalatı: ölçü alma, masif gürgen iskelet, sünger ve kumaş seçimi, el kapitonesi. Bağcılar Kirazlı atölyemizden özel üretim ve teslimat.',
  alternates: { canonical: 'https://www.chestertime.com/chester-koltuk-imalati' },
  openGraph: {
    title: 'Chester Koltuk İmalatı | İmalatçıdan Özel Üretim - Chester Time',
    description:
      'Bağcılar Kirazlı atölyemizde chester koltuk imalatı: masif gürgen iskelet, HR sünger, el kapitonesi. Özel ölçü üretim ve İstanbul geneli teslimat.',
    url: 'https://www.chestertime.com/chester-koltuk-imalati',
    images: [{ url: 'https://www.chestertime.com/images/chester/chester_craftsmanship.jpg' }],
  },
};

const steps = [
  { title: 'Ölçü Alma', text: 'Salonunuzun ölçüsü alınır; koltuğun genişliği, derinliği ve yerleşimi birlikte planlanır.' },
  { title: 'Tasarım', text: 'Model, kol formu, kapitone derinliği ve ayak detayı mekânınıza göre netleştirilir.' },
  { title: 'İskelet Hazırlığı', text: 'Koltuk iskeleti masif fırınlanmış gürgen ağacından hazırlanır; 10 yıl iskelet garantisi verilir.' },
  { title: 'Sünger Seçimi', text: 'Oturum konforuna göre 32–35 DNS yüksek yoğunluklu HR süngerler kullanılır.' },
  { title: 'Kumaş / Deri Seçimi', text: '100+ seçenekli karteladan silinebilir kumaş, kadife veya deri döşeme belirlenir.' },
  { title: 'Döşeme', text: 'Döşeme işlemi usta eliyle yapılır; gerginlik ve hat hizaları tek tek kontrol edilir.' },
  { title: 'Kapitone ve Düğme Detayları', text: 'Chester formunun karakteri olan el kapitonesi ve düğme/kabara detayları işlenir.' },
  { title: 'Kalite Kontrol', text: 'Dikişler, düğmeler, iskelet bağlantıları ve oturum konforu teslimat öncesi denetlenir.' },
  { title: 'Teslimat', text: 'Koltuğunuz korunaklı şekilde paketlenir; İstanbul genelinde adresinize teslim edilir.' },
];

const faqs = [
  {
    question: 'Chester koltuk imalatı ne kadar sürer?',
    answer:
      'İmalat süresi modele, kumaş teminine ve özel ölçü taleplerine göre değişir; genellikle 4–8 hafta arasında tamamlanır. Net teslim tarihi teklif aşamasında paylaşılır.',
  },
  {
    question: 'Özel ölçü chester koltuk siparişi nasıl verilir?',
    answer:
      'WhatsApp üzerinden model fotoğrafı ve salon ölçünüzü göndermeniz yeterlidir. Ön değerlendirme sonrası atölyemizde kumaş seçimi ve ölçü netleştirme yapılır, üretim planlanır.',
  },
  {
    question: 'İmalatta hangi malzemeler kullanılıyor?',
    answer:
      'Masif fırınlanmış gürgen iskelet, 32–35 DNS yüksek yoğunluklu HR sünger, 1. sınıf silinebilir kumaş ve döşemelik deri kullanıyoruz. Tüm malzeme seçenekleri teklif aşamasında detaylandırılır.',
  },
  {
    question: 'İmalatçıdan almak ne avantaj sağlar?',
    answer:
      'Doğrudan atölyeden aldığınız için aracı mağaza maliyeti ortadan kalkar; ölçü, kumaş ve renk üzerinde tam söz sahibi olursunuz. Üretim ve satış sonrası süreç tek elden yönetilir.',
  },
  {
    question: 'Teslimat hangi bölgelere yapılıyor?',
    answer:
      'Atölyemiz Bağcılar Kirazlı’dadır; İstanbul genelinde adrese teslimat yapıyoruz. Teslimat planı sipariş sırasında netleştirilir.',
  },
];

export default function ImalatPage() {
  return (
    <SeoPageShell>
      <SeoBreadcrumbs
        items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Chester Koltuk İmalatı' }]}
      />

      <h1 className="font-serif-luxe text-4xl sm:text-5xl font-bold mb-4">Chester Koltuk İmalatı</h1>
      <p className="text-lg text-stone-600 font-light leading-relaxed">
        Chester Time, İstanbul Bağcılar Kirazlı&apos;daki atölyesinde chester koltuk imalatı yapan
        bir üreticidir. Ölçü almadan teslimata kadar tüm üretim süreci kendi ustalarımız tarafından,
        butik ve proje bazlı üretim anlayışıyla yürütülür.
      </p>

      <img
        src="/images/chester/chester_craftsmanship.jpg"
        alt="Chester Time atölyesinde chester koltuk imalatı ve el kapitonesi işçiliği"
        className="mt-10 w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
      />

      <section className="mt-12">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-6">Chester Koltuk İmalatı Nasıl Yapılır?</h2>
        <ol className="space-y-5">
          {steps.map((step, index) => (
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
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Neden İmalatçıdan Chester Koltuk?</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Seri üretim mağaza ürünlerinin aksine, atölyemizde her koltuk sipariş üzerine üretilir.
          Böylece ölçü, kumaş, renk ve kapitone detayları tamamen size özel belirlenir. Aracı
          maliyeti olmadığı için fiyat doğrudan imalatçı avantajıyla sunulur. Üretim standartlarımızı{' '}
          <Link href="/#craftsmanship" className="text-[#B86B35] font-semibold hover:underline">
            iskelet &amp; zanaat standartlarımız
          </Link>{' '}
          bölümünde inceleyebilirsiniz.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Teslimat ve Hizmet Bölgeleri</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Atölyemiz Bağcılar Kirazlı Mahallesi&apos;ndedir; İstanbul genelinde adrese teslimat
          yapıyoruz. Bağcılar, Kirazlı, Güneşli, Mahmutbey, Esenler, Güngören, Bahçelievler,
          Başakşehir ve çevre ilçelerden atölyemizi ziyaret ederek kumaş kartelamızı yerinde
          görebilirsiniz.
        </p>
      </section>

      <FaqSection faqs={faqs} />

      <RelatedLinks
        links={[
          { href: '/chester-koltuk', label: 'Chester Koltuk', description: 'Modeller, kumaş seçenekleri ve fiyat rehberi.' },
          { href: '/ozel-tasarim-koltuk', label: 'Özel Tasarım Koltuk', description: 'Özel ölçü ve kişiye özel tasarım süreci.' },
          { href: '/bagcilar-chester-koltuk', label: 'Bağcılar Chester Koltuk', description: 'Bağcılar ve çevresine yerel hizmet ve atölye ziyareti.' },
          { href: '/kategori/tum-modeller', label: 'Tüm Modeller', description: 'Kanepe, berjer, köşe ve oturma takımı vitrini.' },
        ]}
      />

      <SeoCta
        title="Özel Üretim Chester Koltuk İçin Teklif Alın"
        subtitle="Model ve ölçünüzü WhatsApp’tan gönderin; imalat süreci ve teslimat tarihiyle birlikte teklif hazırlayalım."
        whatsappMessage={`Merhaba Chester Time, özel üretim chester koltuk için imalat fiyatı ve teslim süresi hakkında bilgi almak istiyorum.`}
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Chester Koltuk İmalatı',
          serviceType: 'Özel ölçü chester koltuk üretimi',
          provider: { '@id': 'https://www.chestertime.com/#localbusiness' },
          areaServed: { '@type': 'City', name: 'İstanbul' },
          url: 'https://www.chestertime.com/chester-koltuk-imalati',
        }}
      />
    </SeoPageShell>
  );
}
