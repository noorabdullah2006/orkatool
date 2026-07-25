import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Main from "@/components/layout/main";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orkatool.com"),
  title: {
    default: "OrkaTool — Free Online Tools & Calculators",
    template: "%s | OrkaTool",
  },
  description:
    "Free online tools designed to be fast, accurate, and easy to use.",
  openGraph: {
    siteName: "OrkaTool",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@orkatool",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

/* ── Global JSON-LD: Organization + WebSite ──────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://orkatool.com/#organization",
      name: "OrkaTool",
      url: "https://orkatool.com",
      description:
        "Free online calculators, text tools, productivity tools and utilities designed to be fast, accurate and easy to use.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@orkatool.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://orkatool.com/#website",
      url: "https://orkatool.com",
      name: "OrkaTool",
      publisher: {
        "@id": "https://orkatool.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://orkatool.com/tools?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <Header />

        <Main>
          {children}
        </Main>

        <Footer />

      </body>
    </html>
  );
}