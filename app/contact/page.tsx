import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Generation Beta | Revenue Consulting, Bangkok, Thailand",
  description: "Talk to Generation Beta about revenue consulting for your hotel, spa, or wellness brand. For existing clients, partnership enquiries, and press — new business starts with the Diagnostic. Based in Bangkok, Thailand, serving Southeast Asia.",
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <ContactClient />
    </>
  );
}
