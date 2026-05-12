import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Generation Beta",
    short_name: "Gen Beta",
    description:
      "Revenue Leak Architecture for hospitality, wellness, and professional services.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0112",
    theme_color: "#3d1147",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
