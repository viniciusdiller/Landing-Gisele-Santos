import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn-img-src.imobibrasil.app.br",
      },
      {
        protocol: "https",
        hostname: "imgs2.cdn-imobibrasil.com.br",
      },
    ],
  },
};

export default nextConfig;
