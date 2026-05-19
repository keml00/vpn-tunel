import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VPN Buy & Sell - Личный VPN сервис | Безопасный интернет от 200₽",
  description: "Безопасный личный VPN сервис для защиты вашего интернет-соединения. Безлимитный трафик, до 5 устройств, WireGuard протокол. Тарифы от 200₽/мес. Соответствует законодательству РФ.",
  keywords: ["vpn", "впн", "vpn сервис", "личный vpn", "безопасный интернет", "wireguard", "защита данных", "vpn россия", "vpn купить", "дешевый vpn"],
  authors: [{ name: "VPN Buy & Sell" }],
  creator: "VPN Buy & Sell",
  publisher: "VPN Buy & Sell",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://tunel-delta.vercel.app/',
    siteName: 'VPN Buy & Sell',
    title: 'VPN Buy & Sell - Личный VPN сервис от 200₽',
    description: 'Безопасный личный VPN для защиты интернет-соединения. Безлимитный трафик, WireGuard, до 5 устройств. Тарифы от 200₽/мес.',
    images: [
      {
        url: 'https://tunel-delta.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VPN Buy & Sell - Безопасный VPN сервис',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VPN Buy & Sell - Личный VPN сервис от 200₽',
    description: 'Безопасный личный VPN для защиты интернет-соединения. Безлимитный трафик, WireGuard, до 5 устройств.',
    images: ['https://tunel-delta.vercel.app/og-image.png'],
  },
  alternates: {
    canonical: 'https://tunel-delta.vercel.app/',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://tunel-delta.vercel.app/" />
        <meta name="theme-color" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
