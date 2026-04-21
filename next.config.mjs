/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion"],
    serverComponentsExternalPackages: ["sanity"],
  },
  // Required for Sanity Studio embedded in Next.js App Router
  transpilePackages: ["@sanity/ui", "@sanity/icons", "styled-components"],
};

export default nextConfig;
