import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ye line Vercel ko bolegi ki ESLint errors ko ignore kare aur site live kar de
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
