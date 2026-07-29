import type { Metadata, Viewport } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import AnalyticsTracker from "@/components/AnalyticsTracker";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blocklogsecurity.com"),

  title: {
    default: "Blocklog — AI Compliance Infrastructure for Regulated Enterprises",
    template: "%s | Blocklog",
  },

  description:
    "Blocklog creates tamper-evident audit trails, cryptographic evidence packages, and regulator-ready exports for AI systems operating under Indian regulations. Built for banks, NBFCs, healthcare, and regulated enterprises.",

  keywords: [
    "AI compliance India",
    "RBI AI governance",
    "SEBI regulation 16C",
    "DPDP Act compliance",
    "AI audit trail",
    "tamper-evident logs",
    "cryptographic audit",
    "AI governance",
    "ISO 42001",
    "AI evidence package",
    "AI regulatory compliance",
    "Blocklog",
    "compliance infrastructure",
    "enterprise AI compliance",
  ],

  authors: [{ name: "Blocklog" }],
  creator: "Blocklog",
  publisher: "Blocklog",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://blocklogsecurity.com",
    siteName: "Blocklog",
    title: "AI Compliance Infrastructure for Regulated Enterprises",
    description:
      "When RBI or SEBI asks for your AI decision trail, can you produce it within 24 hours? Blocklog makes it possible.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blocklog — AI Compliance Infrastructure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blocklog — AI Compliance Infrastructure",
    description:
      "Tamper-evident audit trails and cryptographic evidence for AI systems under Indian regulations.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  alternates: {
    canonical: "https://blocklogsecurity.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,
              anonymize_ip: true,
            });
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${geist.variable} ${geistMono.variable}`}
      >
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
