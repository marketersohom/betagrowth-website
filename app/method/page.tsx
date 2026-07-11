import type { Metadata } from "next";
import MethodClient from "./MethodClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "The Method | Diagnostic, Architecture, Partnership — Generation Beta",
  description: "How a Generation Beta engagement runs. A 15-day Diagnostic, a scoped System Architecture build, and an optional ongoing Partnership. Fixed scope, fixed fee, at every phase.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Revenue Diagnostic",
      provider: { "@type": "Organization", name: "Generation Beta" },
      areaServed: "Southeast Asia",
      description: "A 15-day audit across 14 fields and six categories that produces a complete map of where revenue is leaking and what is causing it.",
      offers: {
        "@type": "Offer",
        price: "2500",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Service",
      name: "System Architecture",
      provider: { "@type": "Organization", name: "Generation Beta" },
      areaServed: "Southeast Asia",
      description: "Scoped, modular design and installation of the revenue systems identified in the Diagnostic's Priority Matrix.",
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "800",
          maxPrice: "14000",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "Service",
      name: "Ongoing Partnership",
      provider: { "@type": "Organization", name: "Generation Beta" },
      areaServed: "Southeast Asia",
      description: "Monthly embedded execution and quarterly performance reviews for systems already under management.",
      offers: {
        "@type": "Offer",
        price: "1200",
        priceCurrency: "USD",
        unitText: "per month",
      },
    },
  ],
};

export default function MethodPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Method", href: "/method" }]} />
      <MethodClient />
    </>
  );
}
