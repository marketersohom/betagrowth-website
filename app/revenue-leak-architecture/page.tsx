import type { Metadata } from "next";
import FrameworkClient from "./FrameworkClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "The hotel revenue audit framework | 6 categories, 14 fields",
  description: "The complete hotel revenue audit framework behind Generation Beta's Diagnostic — spa pricing architecture, direct booking conversion friction, and partnership channel gaps across six categories and fourteen audit fields, built from direct operator work and structured wellness mystery-shopping research across Southeast Asian hospitality businesses.",
};

export default function RevenueLeakArchitecturePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Framework", href: "/revenue-leak-architecture" }]} />
      <FrameworkClient />
    </>
  );
}
