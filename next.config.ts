import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'build',
  reactStrictMode:false,
  experimental: {
    serverComponentsExternalPackages: ["pdf-parse"],
  },  
};

export default nextConfig;
