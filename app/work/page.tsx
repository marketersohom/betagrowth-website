import type { Metadata } from "next";
import WorkClient from "./WorkClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Case studies: Amla Spa Group, Tony Meechai — Generation Beta",
  description: "Real engagement results, an 84 percent year-two revenue increase for Amla Spa Group, a 36 percent increase in coaching enquiries for Tony Meechai. The specific leaks found and systems built.",
};

export default function WorkPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Work", href: "/work" }]} />
      <WorkClient />
    </>
  );
}
