import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Header } from 'app/components/shared/Header';
import { Footer } from 'app/components/shared/Footer';

import 'app/sass/globals.sass';

const roboto = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Future World',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
