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
};

export default nextConfig;
