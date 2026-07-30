import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eddy-host.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Eddy Gaetan | Event Host, Moderator & Speaker',
    template: '%s | Eddy Gaetan',
  },
  description:
    'Eddy Gaetan is an event host, moderator and speaker bringing presence, energy and purpose to conferences, ceremonies and live conversations.',
  keywords: [
    'moderator',
    'master of ceremonies',
    'conference host',
    'event moderator',
    'panel host',
    'keynote host',
    'communication expert',
  ],
  authors: [{ name: 'Eddy Gaetan' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Eddy Gaetan',
    title: 'Eddy Gaetan | Event Host, Moderator & Speaker',
    description:
      'Presence, energy and purpose for conferences, ceremonies and live conversations.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Eddy Gaetan hosting an event with a microphone',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eddy Gaetan | Event Host, Moderator & Speaker',
    description:
      'Presence, energy and purpose for conferences, ceremonies and live conversations.',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  themeColor: '#05070f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="blue-stage min-h-screen font-sans text-silver antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-royal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
