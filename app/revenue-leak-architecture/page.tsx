import type { Metadata } from "next";
import FrameworkClient from "./FrameworkClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "The Revenue Leak Architecture framework | 6 categories, 14 fields",
  description: "The complete framework behind Generation Beta's Diagnostic. Six categories, fourteen audit fields, built from direct operator work and structured ghost-shop research across Southeast Asian hospitality and wellness businesses.",
};

export default function RevenueLeakArchitecturePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Framework", href: "/revenue-leak-architecture" }]} />
      <FrameworkClient />
    </>
  );
}
