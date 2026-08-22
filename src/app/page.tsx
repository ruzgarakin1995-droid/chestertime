import React from 'react';
import { ChesterTheme } from '@/themes/chester/ChesterTheme';

export const metadata = {
  title: 'Chester Time | İmalatçıdan Doğrudan Chester Koltuk & Özel Üretim',
  description: 'Bağcılar Kirazlı atölyemizde; masif fırınlanmış gürgen iskelet, silinebilir kumaş/deri ve usta işi el kapitonesiyle kişiye özel Chester koltuk üretimi. İmalatçı fiyat avantajı.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/hy-favicon.jpg', sizes: 'any' }
    ],
    apple: '/images/hy-favicon.jpg',
    shortcut: '/favicon.svg',
  }
};

export default function Home() {
  return <ChesterTheme />;
}
