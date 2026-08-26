import React from 'react';
import Link from 'next/link';
import { SeoPageShell } from '@/themes/chester/components/SeoPageShell';
import { SeoBreadcrumbs } from '@/themes/chester/components/SeoBreadcrumbs';
import { FaqSection } from '@/themes/chester/components/FaqSection';
import { RelatedLinks } from '@/themes/chester/components/RelatedLinks';
import { SeoCta } from '@/themes/chester/components/SeoCta';
import { JsonLd } from '@/themes/chester/components/JsonLd';

export const metadata = {
  title: 'Chester Koltuk Modelleri ve Fiyatları | Chester Time',
  description:
    'Özel ölçü chester koltuk modelleri, kumaş ve deri seçenekleri, fiyatları etkileyen faktörler. Bağcılar Kirazlı atölyemizde imalatçıdan doğrudan üretim.',
  alternates: { canonical: 'https://www.chestertime.com/chester-koltuk' },
  openGraph: {
    title: 'Chester Koltuk Modelleri ve Fiyatları | Chester Time',
    description:
      'Özel ölçü chester koltuk modelleri, kumaş ve deri seçenekleri, imalatçıdan doğrudan fiyat. Bağcılar Kirazlı / İstanbul.',
    url: 'https://www.chestertime.com/chester-koltuk',
    images: [{ url: 'https://www.chestertime.com/images/chester/chester_hero.jpg' }],
  },
};

const faqs = [
  {
    question: 'Chester koltuk nedir?',
    answer:
      'Chester koltuk; derin kapitone (düğme) işçiliği, kıvrık kolçakları ve genellikle deri veya kadife döşemesiyle tanınan klasik İngiliz koltuk formudur. Chester Time, bu formu Bağcılar Kirazlı’daki atölyesinde özel ölçü ve renk seçenekleriyle üretir.',
  },
  {
    question: 'Chester koltuk özel ölçü yapılır mı?',
    answer:
      'Evet. Tüm chester koltuk modellerimizi salonunuzun ölçüsüne göre özel üretiyoruz. Ölçü alma sonrası genişlik, derinlik ve oturum yüksekliği mekânınıza göre planlanır; WhatsApp üzerinden fotoğraf ve ölçü göndererek ön teklif alabilirsiniz.',
  },
  {
    question: 'Chester koltuk fiyatları neye göre belirlenir?',
    answer:
      'Fiyat; seçilen kumaş veya deri türüne, koltuğun ölçüsüne, sünger yoğunluğuna, kapitone ve düğme detaylarına göre değişir. Net fiyat için model ve ölçü bilgisi yeterlidir; imalatçıdan doğrudan satış yaptığımız için aracı maliyeti yoktur.',
  },
  {
    question: 'Chester koltuk hangi kumaşlardan üretilir?',
    answer:
      'Silinebilir kadife, nubuk, babyface kumaş, hakiki ve silinebilir döşemelik deri seçeneklerimiz bulunur. Kumaş ve deri kartelamızı atölyemizde görebilir veya WhatsApp üzerinden kartela görsellerini isteyebilirsiniz.',
  },
  {
    question: 'Chester koltuk temizliği nasıl yapılır?',
    answer:
      'Silinebilir kumaş ve deri seçeneklerimiz nemli, yumuşak bir bezle kolayca temizlenir. Kadife yüzeylerde yumuşak fırça ile toz alma önerilir; kimyasal içerikli temizleyicilerden kaçınılmalıdır.',
  },
  {
    question: 'Chester koltuk modern dekorasyona uygun mudur?',
    answer:
      'Evet. Klasik kapitone formu; düz hatlı, açık renkli ve minimalist kumaşlarla üretildiğinde modern salonlara da uyum sağlar. Atölyemizde hem klasik hem modern çizgide chester modelleri üretilmektedir.',
  },
];

export default function ChesterKoltukPage() {
  return (
    <SeoPageShell>
      <SeoBreadcrumbs
        items={[{ name: 'Ana Sayfa', href: '/' }, { name: 'Chester Koltuk' }]}
      />

      <h1 className="font-serif-luxe text-4xl sm:text-5xl font-bold mb-4">Chester Koltuk</h1>
      <p className="text-lg text-stone-600 font-light leading-relaxed">
        Chester Time, İstanbul Bağcılar Kirazlı’daki atölyesinde chester koltuk üretimi yapan bir
        imalatçıdır. Kapitone işçiliği, masif gürgen iskelet ve yüzlerce kumaş/deri seçeneğiyle
        chester koltukları özel ölçü olarak, imalatçıdan doğrudan fiyatla üretiyoruz.
      </p>

      <img
        src="/images/chester/chester_hero.jpg"
        alt="Chester Time atölyesinde üretilen taba deri chester koltuk"
        className="mt-10 w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
      />

      <section className="mt-12">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Chester Koltuk Nedir?</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Chester koltuk, kökeni 18. yüzyıl İngiltere’sine dayanan; derin el kapitonesi (düğme
          işçiliği), kıvrık kolçakları ve tok duruşuyla tanınan zamansız bir koltuk formudur.
          Günümüzde hem klasik salonların hem de modern dekorasyonların odak parçası olarak
          tercih edilir. Atölyemizde chester formu; kanepe, berjer, puf ve köşe takımı olarak
          isteğe özel ölçülerle üretilir.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Neden Chester Koltuk Tercih Edilir?</h2>
        <ul className="space-y-3 text-stone-600 font-light leading-relaxed list-none">
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Derin kapitone ve düğme detaylarıyla mekâna güçlü bir karakter katar.</li>
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Masif iskelet ve yüksek yoğunluklu süngerle üretildiğinde onlarca yıl kullanılır.</li>
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Deri, kadife veya nubuk döşemeyle her dekorasyon stiline uyarlanabilir.</li>
          <li className="flex gap-3"><span className="text-[#B86B35] font-bold">•</span> Özel ölçü üretildiğinde küçük salonlardan geniş ofislere kadar her mekâna tam oturur.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Kumaş ve Deri Seçenekleri</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Chester koltuk üretiminde silinebilir kadife, nubuk, babyface kumaş, hakiki ve
          silinebilir döşemelik deri kullanıyoruz. Antik taba, zümrüt yeşili, bordo, krem,
          gece mavisi ve mat siyah en çok tercih edilen renkler arasındadır. 100&apos;ü aşkın
          kumaş ve deri kartelamızı{' '}
          <Link href="/#fabric-studio" className="text-[#B86B35] font-semibold hover:underline">
            kumaş &amp; deri stüdyomuzda
          </Link>{' '}
          inceleyebilirsiniz.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Ölçüler ve Özel Ölçü Üretim</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Standart chester kanepelerimiz 190 cm&apos;den 280 cm&apos;ye kadar farklı genişliklerde
          üretilir; köşe takımlarımız oda ölçünüze göre sıfırdan planlanır. Salonunuz için en doğru
          ölçüyü birlikte belirlemek üzere{' '}
          <Link href="/ozel-tasarim-koltuk" className="text-[#B86B35] font-semibold hover:underline">
            özel tasarım koltuk
          </Link>{' '}
          sayfamızdaki süreci izleyebilirsiniz.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Chester Koltuk Fiyatları Nasıl Belirlenir?</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Chester koltuk fiyatları; seçilen döşeme malzemesine, koltuğun ölçüsüne, sünger
          yoğunluğuna ve kapitone/düğme detaylarına göre belirlenir. Chester Time bir imalatçı
          olduğu için fiyatlar doğrudan atölyeden sunulur; aracı mağaza maliyeti eklenmez.
          Üretim sürecimizin adımlarını{' '}
          <Link href="/chester-koltuk-imalati" className="text-[#B86B35] font-semibold hover:underline">
            chester koltuk imalatı
          </Link>{' '}
          sayfamızda bulabilirsiniz.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-serif-luxe text-2xl sm:text-3xl font-bold mb-4">Temizlik ve Bakım</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Silinebilir deri ve kumaş seçeneklerimiz nemli bezle kolayca temizlenir; kadife
          yüzeylerde yumuşak fırça önerilir. Doğrudan güneş ışığına uzun süre maruz bırakmamak ve
          keskin kimyasallardan kaçınmak döşemenin ömrünü uzatır. Mevcut chester koltuğunuzun
          bakımını yaptırmak isterseniz{' '}
          <Link href="/koltuk-doseme" className="text-[#B86B35] font-semibold hover:underline">
            koltuk döşeme ve yenileme
          </Link>{' '}
          hizmetimizden yararlanabilirsiniz.
        </p>
      </section>

      <FaqSection faqs={faqs} />

      <RelatedLinks
        links={[
          { href: '/chester-koltuk-imalati', label: 'Chester Koltuk İmalatı', description: 'Ölçüden teslimata 9 adımlı üretim sürecimiz.' },
          { href: '/ozel-tasarim-koltuk', label: 'Özel Tasarım Koltuk', description: 'Özel ölçü, kumaş ve renk seçenekleriyle kişiye özel üretim.' },
          { href: '/koltuk-doseme', label: 'Koltuk Döşeme', description: 'Kumaş değişimi, kaplama ve chester yenileme hizmeti.' },
          { href: '/kategori/tum-modeller', label: 'Tüm Chester Modelleri', description: 'Kanepe, berjer, köşe ve oturma takımı modellerimiz.' },
        ]}
      />

      <SeoCta
        whatsappMessage={`Merhaba Chester Time, chester koltuk modelleriniz ve özel ölçü fiyatları hakkında bilgi almak istiyorum.`}
      />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Chester Koltuk Üretimi',
          serviceType: 'Özel ölçü chester koltuk imalatı',
          provider: { '@id': 'https://www.chestertime.com/#localbusiness' },
          areaServed: { '@type': 'City', name: 'İstanbul' },
          url: 'https://www.chestertime.com/chester-koltuk',
        }}
      />
    </SeoPageShell>
  );
}
