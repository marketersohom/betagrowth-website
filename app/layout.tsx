import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import JsonLd from "@/components/JsonLd";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Generation Beta | Revenue Growth Partners",
  description: "Growth marketing and revenue architecture agency operating out of Bangkok, serving hospitality, wellness, and professional services across Southeast Asia — including Thailand, Singapore, and Indonesia.",
  keywords: "revenue growth, growth marketing agency, business consulting, hospitality consulting, wellness marketing, diagnostic audit, Bangkok, Southeast Asia, Thailand, Singapore, Indonesia",
  openGraph: {
    title: "Generation Beta | Revenue Growth Partners",
    description: "Growth marketing and revenue architecture agency operating out of Bangkok, serving hospitality, wellness, and professional services across Southeast Asia.",
    siteName: "Generation Beta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="grain antialiased">
        <JsonLd />
        <CustomCursor />
        <Nav />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
