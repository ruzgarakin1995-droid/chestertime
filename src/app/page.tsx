import React from 'react';
import { ChesterTheme } from '@/themes/chester/ChesterTheme';

export const metadata = {
  title: 'Chester Time | İmalatçıdan Doğrudan Chester Koltuk & Özel Üretim',
  description: 'Bağcılar Kirazlı atölyemizde; masif fırınlanmış gürgen iskelet, silinebilir kumaş/deri ve usta işi el kapitonesiyle kişiye özel Chester koltuk üretimi. İmalatçı fiyat avantajı.',
  icons: {
    icon: '/images/chester/chester_logo.jpg',
    apple: '/images/chester/chester_logo.jpg',
    shortcut: '/images/chester/chester_logo.jpg',
  }
};

export default function Home() {
  return <ChesterTheme />;
}
