/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  // Required for Sanity Studio embedded in Next.js App Router
  transpilePackages: ["sanity", "@sanity/ui", "@sanity/icons", "styled-components"],
};

export default nextConfig;
