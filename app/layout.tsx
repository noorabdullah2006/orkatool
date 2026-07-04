import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Main from "@/components/layout/Main/Main";
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
    default: "OrkaTool",
    template: "%s | OrkaTool",
  },

  description:
    "Free online calculators, converters, generators, developer tools, SEO tools, PDF tools, image tools, AI tools and much more.",

  keywords: [
    "Online Tools",
    "Calculators",
    "Converters",
    "Developer Tools",
    "SEO Tools",
    "PDF Tools",
    "Image Tools",
  ],

  authors: [
    {
      name: "OrkaTool",
    },
  ],

  creator: "OrkaTool",

  publisher: "OrkaTool",

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
  <Header />
  <Main>{children}</Main>
  <Footer />
</body>
    </html>
  );
}