import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const baseUrl = "https://bknddevelopment.github.io/creative-security-networks";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Creative Security Networks - Advanced Security Solutions",
    template: "%s | Creative Security Networks"
  },
  description: "Professional security camera installation and monitoring services. Protecting businesses and homes with cutting-edge technology and 24/7 support.",
  keywords: ["security cameras", "security systems", "surveillance", "monitoring", "access control", "alarm systems", "CCTV", "security installation", "business security", "home security"],
  authors: [{ name: "Creative Security Networks" }],
  creator: "Creative Security Networks",
  publisher: "Creative Security Networks",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Creative Security Networks - Advanced Security Solutions",
    description: "Professional security camera installation and monitoring services. Protecting businesses and homes with cutting-edge technology and 24/7 support.",
    url: baseUrl,
    siteName: "Creative Security Networks",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Creative Security Networks - Your Trusted Security Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Security Networks - Advanced Security Solutions",
    description: "Professional security camera installation and monitoring services. 24/7 support.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@creativesecnet",
  },
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: 'google-verification-code', // Replace with actual verification code
    yandex: 'yandex-verification-code', // Replace with actual verification code
    yahoo: 'yahoo-verification-code', // Replace with actual verification code
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}