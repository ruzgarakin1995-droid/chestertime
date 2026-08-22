import { ChesterProduct, LeatherOption } from './types';

export const ATELIER_NAME = "Chester Time";
export const ATELIER_TAGLINE = "İmalatçıdan Doğrudan Chester & Tasarım Koltuk Üretimi";
export const DISPLAY_PHONE = "0536 799 14 40";
export const WHATSAPP_NUMBER = "+905367991440";
export const BUSINESS_ADDRESS = "Kirazlı Mah. 1145 Sok. No: 4/A, Bağcılar / İstanbul, Türkiye";
export const INSTAGRAM_HANDLE = "@chester.time";
export const INSTAGRAM_URL = "https://instagram.com/chester.time";

export function buildWhatsAppUrl(message: string): string {
  const cleanPhone = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export const LEATHER_OPTIONS: LeatherOption[] = [
  {
    id: "vintage-taba",
    name: "Antik Taba Silinebilir Deri",
    category: "Vintage Pull-Up",
    origin: "1. Sınıf İthal Silinebilir Döşemelik Deri",
    hex: "#B86B35",
    description: "Zamanla yıpranmayan, nemli bezle kolayca silinen, sıcak taba tonuyla evlere sıcaklık katan popüler Chester derisi.",
    image: "/images/chester/chestertime/product_tan_chester.jpg",
    thickness: "Dayanıklı & Silinebilir Yüzey"
  },
  {
    id: "emerald-velvet",
    name: "Zümrüt Yeşili Lüks Kadife",
    category: "İtalyan Kadife",
    origin: "Su İtici & Leke Tutmaz Dokuma",
    hex: "#1E4D36",
    description: "Işık yansımalarıyla zengin duran, yumuşacık dokulu ve kolay temizlenebilen kadife kumaş.",
    image: "/images/chester/chestertime/product_green_pouf.jpg",
    thickness: "Yüksek Gramajlı Sık Dokuma"
  },
  {
    id: "bordeaux-classic",
    name: "Asil Bordo / Vişne Kumaş & Deri",
    category: "Hakiki İtalyan Derisi",
    origin: "Klasik Chester Renk Serisi",
    hex: "#6B1D28",
    description: "Klasik salon ve çalışma odalarının vazgeçilmezi olan tok ve asil bordo tonu.",
    image: "/images/chester/chestertime/product_red_chester.jpg",
    thickness: "Ağır Gramajlı Döşemelik"
  },
  {
    id: "cream-babyface",
    name: "Krem & Ekru Babyface Kumaş",
    category: "İtalyan Kadife",
    origin: "Yumuşak Tuşeli İpeksi Kumaş",
    hex: "#EFE8DC",
    description: "Geniş ve aydınlık salonlar için ferah, leke tutmaz ve çocuklu ailelere uygun yumuşak doku.",
    image: "/images/chester/chestertime/delivery_cream_chester.jpg",
    thickness: "Silinebilir & Nefes Alan"
  },
  {
    id: "black-charcoal",
    name: "Gece Siyahı Mat Deri",
    category: "Hakiki İtalyan Derisi",
    origin: "Modern & Karizmatik Seri",
    hex: "#1A1918",
    description: "Ofis, çalışma odası veya modern şömineli salonlar için karizmatik mat siyah deri kaplama.",
    image: "/images/chester/chestertime/delivery_black_chester.jpg",
    thickness: "Ekstra Mukavemetli"
  }
];

export const CHESTER_PRODUCTS: ChesterProduct[] = [
  {
    id: "dyna-kanepe",
    name: "Dyna Kanepe (Tasarım Koltuk)",
    category: "sofa",
    tagline: "Şık, kaliteli ve unutulmaz. Modern düz kol tasarımı ve masif ahşap ayaklar.",
    description: "Chester Time özel tasarım serisinin en çok satan modeli. Hem modern hem sıcak havasıyla salonunuzun havasını değiştirir. 32 DNS soft sünger ile yüksek konfor sunar.",
    startingPrice: "24.500 ₺",
    dimensions: { length: 230, depth: 95, height: 80 },
    leatherType: "Antik Taba Deri / Silinebilir Kumaş",
    tuftingDepth: "Düz Modern Hatlar & Masif Ayak",
    cushionFill: "32 DNS HR Sünger + Elyaf Dolgu",
    warranty: "10 Yıl Masif İskelet Garantisi",
    primaryImage: "/images/chester/chestertime/product_dyna_kanepe.jpg",
    gallery: ["/images/chester/chestertime/product_dyna_kanepe.jpg", "/images/chester/chestertime/delivery_camel_straight.jpg"],
    availableLeathers: ["Antik Taba Deri", "Krem Kumaş", "Koyu Yeşil", "Antrasit"],
    sizeOptions: ["210 cm (3'lü)", "230 cm (Geniş 3'lü)", "260 cm (4'lü)", "Özel Ölçü"],
    isBestseller: true
  },
  {
    id: "lord-tan-chester",
    name: "Klasik Taba 3'lü Chester Koltuk",
    category: "sofa",
    tagline: "Derin el kapitonesi, fırınlanmış gürgen iskelet ve el çakımı kabaralar.",
    description: "Zamanın eskitemediği klasik Chesterfield formu. Bağcılar atölyemizde usta eller tarafından tek tek düğümlenir. İmalatçıdan doğrudan en uygun fiyat avantajı.",
    startingPrice: "27.500 ₺",
    dimensions: { length: 235, depth: 100, height: 78 },
    leatherType: "1. Kalite Taba Silinebilir Deri",
    tuftingDepth: "Derin El Kapitonesi & Çelik Çekme Düğmeler",
    cushionFill: "32 DNS Çökmeyen Sünger Katmanı",
    warranty: "10 Yıl Masif İskelet Garantisi",
    primaryImage: "/images/chester/chestertime/product_tan_chester.jpg",
    gallery: ["/images/chester/chestertime/product_tan_chester.jpg", "/images/chester/chestertime/delivery_tan_ottoman.jpg"],
    availableLeathers: ["Antik Taba", "Puro Kahve", "Bordo", "Ekru Krem"],
    sizeOptions: ["210 cm", "235 cm Standart", "270 cm Geniş", "Özel Salon Ölçüsü"],
    isBestseller: true
  },
  {
    id: "royal-bordo-chester",
    name: "Bordo / Kırmızı Chester Kanepe",
    category: "sofa",
    tagline: "Asil vişne-bordo rengiyle mekanınıza sıcak ve prestijli bir atmosfer katar.",
    description: "Zengin bordo tonu ve derin düğümleme işçiliğiyle salonunuzun baş köşesine yakışan özel üretim modelimiz.",
    startingPrice: "26.900 ₺",
    dimensions: { length: 230, depth: 100, height: 78 },
    leatherType: "Bordo Silinebilir Deri / Kadife",
    tuftingDepth: "Klasik Derin Kapitone",
    cushionFill: "32 DNS Sünger Dolgu",
    warranty: "10 Yıl Masif İskelet Garantisi",
    primaryImage: "/images/chester/chestertime/product_red_chester.jpg",
    gallery: ["/images/chester/chestertime/product_red_chester.jpg"],
    availableLeathers: ["Bordo Deri", "Vişne Kadife", "Taba", "Siyah"],
    sizeOptions: ["210 cm", "230 cm", "260 cm", "Özel Ölçü"],
    isNew: true
  },
  {
    id: "chester-berjer-puf-set",
    name: "Chester Berjer & Ayak Pufu Seti",
    category: "armchair",
    tagline: "Yüksek sırtlı ergonomik okuma berjeri ve uyumlu kapitone ayak pufu.",
    description: "Şömine önü, TV karşısı veya salon köşesi için hem dinlendirici hem çok şık berjer ve puf takımı. Masif torna ayaklı.",
    startingPrice: "16.500 ₺",
    dimensions: { length: 85, depth: 90, height: 105 },
    leatherType: "Antik Taba Deri / Nubuk",
    tuftingDepth: "Sırt Kapitone Düğmeleme",
    cushionFill: "Soft Oturum Süngeri",
    warranty: "10 Yıl İskelet Garantisi",
    primaryImage: "/images/chester/chestertime/product_berjer_puf.jpg",
    gallery: ["/images/chester/chestertime/product_berjer_puf.jpg", "/images/chester/chestertime/product_purple_berjer.jpg"],
    availableLeathers: ["Antik Taba", "Puro Kahve", "Zümrüt Yeşili", "Mürdüm Moru"],
    sizeOptions: ["Tek Berjer", "Berjer + Ayak Pufu Takımı"],
    isBestseller: true
  },
  {
    id: "green-round-pouf-daybed",
    name: "Zümrüt Yeşili Yuvarlak Kapitone Puf",
    category: "armchair",
    tagline: "Geniş yuvarlak formuyla hem orta sehpa hem ekstra oturum ve dinlenme alanı.",
    description: "Tüm çevresi ve üstü el kapitonesiyle döşenmiş, torna masif ayaklı, çok amaçlı lüks salon pufu.",
    startingPrice: "12.500 ₺",
    dimensions: { length: 100, depth: 100, height: 45 },
    leatherType: "Zümrüt Yeşili İtalyan Kadife",
    tuftingDepth: "Komple El Kapitonesi",
    cushionFill: "32 DNS Yoğun Sünger",
    warranty: "10 Yıl İskelet Garantisi",
    primaryImage: "/images/chester/chestertime/product_green_pouf.jpg",
    gallery: ["/images/chester/chestertime/product_green_pouf.jpg"],
    availableLeathers: ["Zümrüt Yeşili", "Taba Deri", "Bordo", "Krem"],
    sizeOptions: ["Ø 90 cm", "Ø 110 cm", "Özel Çap"]
  },
  {
    id: "cream-luxe-chester",
    name: "Ekru / Krem Kadife Chester Koltuk",
    category: "sofa",
    tagline: "Ferah ve aydınlık salonlar için leke tutmaz silinebilir ekru kumaş Chester.",
    description: "Açık renk mobilya sevenler için modern ve klasik dokunuşları bir araya getiren zengin modelimiz.",
    startingPrice: "26.500 ₺",
    dimensions: { length: 240, depth: 100, height: 78 },
    leatherType: "Silinebilir Ekru Babyface Kumaş",
    tuftingDepth: "Derin El Kapitonesi",
    cushionFill: "32 DNS Soft Sünger",
    warranty: "10 Yıl İskelet Garantisi",
    primaryImage: "/images/chester/chestertime/delivery_cream_chester.jpg",
    gallery: ["/images/chester/chestertime/delivery_cream_chester.jpg"],
    availableLeathers: ["Ekru Krem", "Vizon", "Açık Gri", "Mint Yeşili"],
    sizeOptions: ["210 cm", "240 cm", "270 cm", "Özel Ölçü"]
  },
  {
    id: "black-leather-chester",
    name: "Gece Siyahı Deri Chester Koltuk",
    category: "sofa",
    tagline: "Mat siyah deri dokusu, ağırbaşlı ve karizmatik duruşuyla şık mekanlara özel.",
    description: "Ofis, bekleme salonu veya modern salonlar için zamansız karizmatik tasarım.",
    startingPrice: "28.500 ₺",
    dimensions: { length: 230, depth: 100, height: 78 },
    leatherType: "1. Sınıf Siyah Silinebilir Deri",
    tuftingDepth: "Derin El Kapitonesi",
    cushionFill: "32 DNS Sünger Katmanı",
    warranty: "10 Yıl İskelet Garantisi",
    primaryImage: "/images/chester/chestertime/delivery_black_chester.jpg",
    gallery: ["/images/chester/chestertime/delivery_black_chester.jpg"],
    availableLeathers: ["Mat Siyah", "Antrasit", "Taba", "Kahve"],
    sizeOptions: ["210 cm", "230 cm", "260 cm", "Özel Ölçü"]
  },
  {
    id: "chester-corner-suite",
    name: "Chester Time Köşe & L Koltuk Takımı",
    category: "corner",
    tagline: "Geniş aileler ve salonlar için kesintisiz kapitone sırtlı L koltuk konforu.",
    description: "Odanızın köşe yönüne ve ölçülerine göre sıfırdan üretilir. İster sağ ister sol köşe olarak sipariş verebilirsiniz.",
    startingPrice: "46.000 ₺",
    dimensions: { length: 320, depth: 240, height: 78 },
    leatherType: "İstenen Renkte Deri veya Kumaş",
    tuftingDepth: "Komple Kapitone Sırt & Kol",
    cushionFill: "32 DNS Rahat Oturum Süngeri",
    warranty: "10 Yıl İskelet Garantisi",
    primaryImage: "/images/chester/chestertime/product_cognac_chester.jpg",
    gallery: ["/images/chester/chestertime/product_cognac_chester.jpg"],
    availableLeathers: ["Antik Taba", "Krem", "Yeşil", "Antrasit"],
    sizeOptions: ["280 × 200 cm", "320 × 240 cm", "360 × 280 cm", "Özel Oda Ölçüsü"],
    isBestseller: true
  },
  {
    id: "office-cafe-project",
    name: "Cafe, Restoran & Ofis Chester Projeleri",
    category: "set",
    tagline: "Toplu ve ticari mekanlar için yüksek dayanımlı imalat fiyatlı Chester üretimi.",
    description: "Kafe, restoran, otel lobisi ve yönetici ofisleri için adetli üretim ve mekan projelendirme desteği.",
    startingPrice: "Özel Proje Fiyatı",
    dimensions: { length: 200, depth: 90, height: 78 },
    leatherType: "Ağır Hizmet Silinebilir Deri",
    tuftingDepth: "Yoğun Kullanıma Uygun Güçlendirilmiş Düğüm",
    cushionFill: "35 DNS Yüksek Yoğunluklu Sünger",
    warranty: "10 Yıl İskelet Garantisi",
    primaryImage: "/images/chester/chestertime/delivery_office_project.jpg",
    gallery: ["/images/chester/chestertime/delivery_office_project.jpg"],
    availableLeathers: ["Taba", "Kahve", "Siyah", "Bordo", "Yeşil"],
    sizeOptions: ["Adetli Özel İmalat", "Sedir Tipi Chester", "Loca Koltukları"]
  }
];
