import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Generation Beta | Revenue Leak Architecture for hospitality & wellness, Bangkok",
  description: "Hospitality revenue management agency in Bangkok — we find the structural reasons hospitality and wellness businesses in Southeast Asia lose 20 to 40 percent of revenue they've already earned, then rebuild the systems that stop it. Start with a $2,500 Diagnostic.",
};

export default function Home() {
  return <HomeClient />;
}
