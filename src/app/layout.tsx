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
  title: {
    default: "Sharnabh Banerjee | iOS Developer Portfolio — Swift, SwiftUI & App Store Apps",
    template: "%s | Sharnabh Banerjee Portfolio",
  },
  description:
    "Professional iOS Developer portfolio of Sharnabh Banerjee. Explore native Swift & SwiftUI projects, App Store applications (Bulkmart, 7Sales), macOS apps (Mindflow), speech therapy tools (LeoLingo), shipped products, and technical specifications. Open to work and freelance opportunities.",
  keywords: [
    "Sharnabh Banerjee",
    "iOS Developer",
    "iOS Developer Portfolio",
    "Swift Developer",
    "SwiftUI Developer",
    "Apple Developer",
    "App Store Developer",
    "macOS Developer",
    "Mobile App Developer",
    "iOS App Development",
    "SwiftUI Portfolio",
    "UIKit Developer",
    "Xcode Developer",
    "Native iOS Apps",
    "Bulkmart App",
    "7Sales App",
    "Mindflow macOS",
    "LeoLingo Speech Therapy",
    "Freelance iOS Developer",
    "Hire iOS Developer",
    "Indian iOS Developer",
    "Swift Portfolio",
    "CoreData",
    "CloudKit",
    "Combine Framework",
    "AVFoundation",
    "CoreLocation",
    "Google Maps iOS",
    "React Native Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Sharnabh Banerjee", url: "https://sharnabh.sbdevstudio.in" }],
  creator: "Sharnabh Banerjee",
  publisher: "Sharnabh Banerjee",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sharnabh.sbdevstudio.in",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Sharnabh Banerjee | iOS Developer Portfolio — Swift, SwiftUI & App Store Apps",
    description:
      "Explore professional iOS applications, shipped App Store products, macOS tools, and B2B workflows built by Sharnabh Banerjee. Native Swift/SwiftUI developer open to freelance and full-time opportunities.",
    url: "https://sharnabh.sbdevstudio.in",
    siteName: "Sharnabh Banerjee Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Sharnabh Banerjee — iOS Developer Portfolio showcasing Swift, SwiftUI, and App Store applications",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharnabh Banerjee | iOS Developer Portfolio",
    description:
      "Native iOS applications, App Store products, and macOS tools by Sharnabh Banerjee. Built with Swift, SwiftUI, UIKit, and modern Apple frameworks.",
    images: ["/og-image.png"],
  },
  other: {
    "theme-color": "#007aff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-TileColor": "#007aff",
  },
  category: "technology",
};

// JSON-LD Structured Data for Schema.org
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sharnabh.sbdevstudio.in/#website",
      url: "https://sharnabh.sbdevstudio.in",
      name: "Sharnabh Banerjee | iOS Developer Portfolio",
      description:
        "Professional iOS Developer portfolio featuring native Swift/SwiftUI projects, App Store applications, and technical specifications.",
      publisher: { "@id": "https://sharnabh.sbdevstudio.in/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://sharnabh.sbdevstudio.in/#person",
      name: "Sharnabh Banerjee",
      url: "https://sharnabh.sbdevstudio.in",
      jobTitle: "iOS Developer",
      description:
        "High-performing iOS Developer specializing in building native, pixel-perfect mobile applications using SwiftUI and UIKit. Proven track record in modular system design, routing optimizations, and API integrations.",
      sameAs: [
        "https://www.linkedin.com/in/sharnabh/",
        "https://github.com/Sharnabh",
      ],
      email: "banerjeesharnabh@gmail.com",
      knowsAbout: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "Xcode",
        "iOS App Development",
        "macOS App Development",
        "CoreData",
        "CloudKit",
        "Combine",
        "AVFoundation",
        "CoreLocation",
        "Google Maps SDK",
        "App Store Connect",
        "React Native",
        "Next.js",
        "Node.js",
        "Kotlin",
        "PostgreSQL",
        "Rust",
      ],
      alumniOf: {
        "@type": "Organization",
        name: "Infosys",
      },
      worksFor: {
        "@type": "Organization",
        name: "7Systems",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://sharnabh.sbdevstudio.in/#projects",
      name: "iOS & macOS Projects by Sharnabh Banerjee",
      numberOfItems: 4,
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "Mindflow",
          description: "A premium, native macOS application for mind mapping and flowcharting optimized for layout visualization.",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "macOS",
          url: "https://github.com/Sharnabh/MindFlow",
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "LeoLingo",
          description: "An interactive iOS app targeted at children with speech delays. Includes waveform recognition and gamified vocal lessons.",
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS",
          url: "https://github.com/Sharnabh/LeoLingo",
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "Bulkmart",
          description: "A comprehensive B2B wholesale marketplace iOS app for procurement workflows, bulk pricing, and invoice reporting.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "iOS",
          url: "https://apps.apple.com/in/app/bulkmart/id6762193786",
        },
        {
          "@type": "SoftwareApplication",
          position: 4,
          name: "7Sales",
          description: "A field sales coordination application mapping store outlets, generating optimized driving directions, and enabling real-time order bookings.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "iOS",
          url: "https://apps.apple.com/in/app/7sales-manage-field-staff/id6449617122",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://sharnabh.sbdevstudio.in/#webpage",
      url: "https://sharnabh.sbdevstudio.in",
      name: "Sharnabh Banerjee | iOS Developer Portfolio",
      isPartOf: { "@id": "https://sharnabh.sbdevstudio.in/#website" },
      about: { "@id": "https://sharnabh.sbdevstudio.in/#person" },
      description:
        "Browse Sharnabh Banerjee's professional iOS Developer portfolio featuring Swift/SwiftUI projects, shipped App Store products, and career experience.",
      inLanguage: "en-US",
    },
  ],
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
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
