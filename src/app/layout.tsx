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
  metadataBase: new URL("https://sharnabh.sbdevstudio.in"),
  title: "Sharnabh Banerjee | iOS Developer Portfolio",
  description: "Professional iOS Developer portfolio of Sharnabh Banerjee, featuring native Swift/SwiftUI projects, App Store highlights, and tech specifications.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Sharnabh Banerjee | iOS Developer Portfolio",
    description: "Explore the professional iOS apps, shipped StoreKit products, and B2B workflows of Sharnabh Banerjee.",
    url: "https://sharnabh.sbdevstudio.in",
    siteName: "Sharnabh Banerjee Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Sharnabh Banerjee iOS Developer Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharnabh Banerjee | iOS Developer Portfolio",
    description: "Explore native iOS applications and projects by Sharnabh Banerjee.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
