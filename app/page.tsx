import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Hotel & Spa Revenue Consultants, Thailand | Generation Beta",
  description: "We find where premium hotels and spas lose revenue, build the systems to recover it, and run them with you. Revenue consulting across Southeast Asia.",
};

export default function Home() {
  return <HomeClient />;
}
