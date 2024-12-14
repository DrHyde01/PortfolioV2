import { Nunito_Sans, Montserrat } from 'next/font/google';

import Header from '../components/header';
import Footer from '@/components/footer';
import ThemeContextProvider from '@/context/themeContext';

import type { Metadata } from 'next';
import type { Viewport } from 'next';
import './globals.css';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Developped by Stefan Heyd',
  description: 'My new portfolio',
};
export const viewport: Viewport = {
  themeColor: '#020617',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body>
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
