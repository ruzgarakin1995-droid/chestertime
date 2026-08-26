import type { Metadata } from 'next';
import './globals.css';
import { ATELIER_NAME, DISPLAY_PHONE, BUSINESS_ADDRESS, INSTAGRAM_URL } from '@/themes/chester/mockData';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chestertime.com'),
  title: 'Chester Time | İmalatçıdan Doğrudan Chester Koltuk & Özel Üretim',
  description: 'Bağcılar Kirazlı atölyemizde; masif fırınlanmış gürgen iskelet, silinebilir kumaş/deri ve usta işi el kapitonesiyle kişiye özel Chester koltuk üretimi.',
  alternates: { canonical: 'https://www.chestertime.com/' },
  openGraph: {
    siteName: ATELIER_NAME,
    locale: 'tr_TR',
    type: 'website',
    url: 'https://www.chestertime.com/',
    title: 'Chester Time | İmalatçıdan Doğrudan Chester Koltuk & Özel Üretim',
    description: 'Bağcılar Kirazlı atölyemizde; masif gürgen iskelet, silinebilir kumaş/deri ve usta işi el kapitonesiyle kişiye özel Chester koltuk üretimi.',
    images: [{ url: 'https://www.chestertime.com/images/chester/chester_hero.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chester.time',
  },
  icons: {
    icon: '/images/chester/chester_logo.jpg',
    shortcut: '/images/chester/chester_logo.jpg',
    apple: '/images/chester/chester_logo.jpg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/chester/chester_logo.jpg" />
        <link rel="apple-touch-icon" href="/images/chester/chester_logo.jpg" />
        <meta name="theme-color" content="#161412" />
        {/* Structured data for Organization / LocalBusiness to help GEO/AEO */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.siteStructuredData = true;
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.chestertime.com/#organization",
                  "name": ATELIER_NAME,
                  "url": "https://www.chestertime.com/",
                  "telephone": DISPLAY_PHONE,
                  "sameAs": [INSTAGRAM_URL]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.chestertime.com/#localbusiness",
                  "name": ATELIER_NAME,
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": BUSINESS_ADDRESS
                  },
                  "telephone": DISPLAY_PHONE,
                  "url": "https://www.chestertime.com/",
                  "image": "/images/chester/chester_logo.jpg",
                  "openingHoursSpecification": [
                    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "19:30" }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.chestertime.com/#website",
                  "url": "https://www.chestertime.com/",
                  "name": ATELIER_NAME
                }
              ]
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'tr',
                  includedLanguages: 'tr,en,de,fr,ru,ar',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
      </head>
      <body className="bg-[#FDFBF7] text-[#1C1917] antialiased">
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        {children}
      </body>
    </html>
  );
}
