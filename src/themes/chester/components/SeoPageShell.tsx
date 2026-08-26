import React from 'react';
import '../chester-theme.css';
import { ProductProvider } from '../context/ProductContext';
import { ChesterHeader } from './ChesterHeader';
import { ChesterFooter } from './ChesterFooter';

interface SeoPageShellProps {
  children: React.ReactNode;
}

/**
 * Shared chrome for SEO landing pages: site header + editorial
 * content column + footer, so landing pages are part of the site
 * (crawlable, navigable, consistent NAP in footer) instead of dead ends.
 */
export const SeoPageShell: React.FC<SeoPageShellProps> = ({ children }) => (
  <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] font-sans antialiased">
    <ProductProvider>
      <ChesterHeader />
      <main className="max-w-4xl mx-auto px-6 pt-36 lg:pt-40 pb-20">{children}</main>
      <ChesterFooter />
    </ProductProvider>
  </div>
);
