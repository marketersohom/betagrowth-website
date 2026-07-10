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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJWDC6BM');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="grain antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TJWDC6BM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
