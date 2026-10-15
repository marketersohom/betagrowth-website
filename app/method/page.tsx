import type { Metadata } from "next";
import MethodClient from "./MethodClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Revenue Diagnostic, Build & Retainer | Generation Beta",
  description: "A three-phase revenue system for hotels and spas: a 15-day revenue diagnostic, a system architecture build, and an ongoing partnership. Thailand-based.",
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
      offers: [
        {
          "@type": "Offer",
          name: "The Path (sequential engagement)",
          price: "2500",
          priceCurrency: "USD",
          unitText: "per month",
        },
        {
          "@type": "Offer",
          name: "The Partnership (committed 9-month engagement)",
          price: "4999",
          priceCurrency: "USD",
          unitText: "per month",
        },
      ],
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
