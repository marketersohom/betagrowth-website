import type { Metadata } from "next";
import WorkClient from "./WorkClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Hospitality & wellness growth case studies: spa, coaching, retreat, peptide brand — Generation Beta",
  description: "Hospitality and wellness growth case studies with real engagement results: an 84 percent year-two revenue increase for a premium spa and hydrotherapy group in Phuket, a 36 percent rise in coaching enquiries for an executive coaching practice, an 18 percent lift in booking conversion for a wellness retreat group in India, and an 86 percent increase in enquiries for a UK research peptide brand.",
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Work", href: "/work" }]} />
      <WorkClient />
    </>
  );
}
