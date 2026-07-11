import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Generation Beta | Bangkok, Thailand",
  description: "For existing clients, partnership enquiries, and press. New business starts with the Diagnostic. Based in Bangkok, available for travel across Southeast Asia.",
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <ContactClient />
    </>
  );
}
