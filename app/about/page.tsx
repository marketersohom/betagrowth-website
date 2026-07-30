import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Sohom Mukherjee, Revenue Consultant, Thailand — Generation Beta",
  description: "Sohom Mukherjee is a hospitality and wellness revenue consultant based in Bangkok, Thailand, and founder of Generation Beta, working with a limited number of hospitality, wellness, and professional services clients across Southeast Asia at any one time.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sohom Mukherjee",
  jobTitle: "Founder",
  worksFor: { "@type": "Organization", name: "Generation Beta" },
  url: "https://betagrowthpartners.com/about",
  image: "https://betagrowthpartners.com/portrait_about.jpg",
  sameAs: ["https://linkedin.com/in/digitalsohom-mukherjee"],
  knowsLanguage: ["English", "Bengali", "Hindi"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <AboutClient />
    </>
  );
}
