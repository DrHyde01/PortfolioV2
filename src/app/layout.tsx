import { Nunito_Sans, Montserrat } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

export const nunito = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Developped by Stefan Heyd',
  description: 'My new portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
