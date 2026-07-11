/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion"],
    serverComponentsExternalPackages: ["sanity"],
  },
  // Required for Sanity Studio embedded in Next.js App Router
  transpilePackages: ["@sanity/ui", "@sanity/icons", "styled-components"],
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
      // Dead index cleanup — old "Growth Diagnostic / Growth Architecture / Growth Partnership"
      // build is gone from the live site but still indexed with stale content. 301 to current equivalents.
      {
        source: "/the-growth-diagnostic",
        destination: "/diagnostic",
        permanent: true,
      },
      {
        source: "/growth-architecture",
        destination: "/method#phase-02",
        permanent: true,
      },
      {
        source: "/growth-partnership",
        destination: "/method#phase-03",
        permanent: true,
      },
      {
        source: "/get-in-touch",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/book-service",
        destination: "/diagnostic",
        permanent: true,
      },
      {
        source: "/service-page/managed-it-services",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
