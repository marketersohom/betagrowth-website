import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/sanity";

const BASE_URL = "https://betagrowthpartners.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getPostSlugs();

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/work",
    "/method",
    "/diagnostic",
    "/revenue-leak-architecture",
    "/insights",
    "/faq",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const postRoutes = slugs.map((s) => ({
    url: `${BASE_URL}/insights/${s.slug.current}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...postRoutes];
}
