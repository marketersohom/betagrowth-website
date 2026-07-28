import type { Metadata } from "next";
import WorkClient from "./WorkClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Hospitality growth case studies: Amla Spa Group, Tony Meechai — Generation Beta",
  description: "Hospitality growth case studies with real engagement results: a luxury spa revenue case study showing an 84 percent year-two increase for Amla Spa Group, and a 36 percent increase in coaching enquiries for Tony Meechai. The specific leaks found and systems built.",
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Work", href: "/work" }]} />
      <WorkClient />
    </>
  );
}
