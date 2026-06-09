import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ye line Vercel ko bolegi ki TypeScript errors ko ignore kare aur aage badhe
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
