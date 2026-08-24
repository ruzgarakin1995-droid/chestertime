import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chester Time | İmalatçıdan Doğrudan Chester Koltuk & Özel Üretim',
  description: 'Bağcılar Kirazlı atölyemizde; masif fırınlanmış gürgen iskelet, silinebilir kumaş/deri ve usta işi el kapitonesiyle kişiye özel Chester koltuk üretimi.',
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
