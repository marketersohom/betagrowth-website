import type { Metadata } from "next";
import DiagnosticClient from "./DiagnosticClient";
import { faq } from "./faq-data";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "The Revenue Diagnostic | $2,500 fixed fee | Generation Beta",
  description: "A 15-day, 14-field revenue audit for hospitality and wellness businesses doing $500K to $10M a year. Know exactly where you're losing revenue, with a report you can act on immediately.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Revenue Diagnostic",
  provider: { "@type": "Organization", name: "Generation Beta" },
  areaServed: "Southeast Asia",
  description: "A 15-day revenue audit across 14 fields and six categories for hospitality and wellness businesses doing $500K to $10M USD annually.",
  offers: {
    "@type": "Offer",
    price: "2500",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function DiagnosticPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Diagnostic", href: "/diagnostic" }]} />
      <DiagnosticClient />
    </>
  );
}
