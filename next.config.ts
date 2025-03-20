import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:false,
  experimental: {
    serverComponentsExternalPackages: ["pdf-parse"],
  },  
};

export default nextConfig;
