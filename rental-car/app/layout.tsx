import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import 'modern-normalize/modern-normalize.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CarRental',
  description:
    'Find and rent the perfect car for your journey. Easy booking, great prices, and reliable vehicles.',
  openGraph: {
    title: 'CarRental',
    description:
      'Browse a wide selection of rental cars and book your perfect ride بسهولة.',
    url: '',
    siteName: 'CarRental',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'CarRental - Find your perfect car',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
