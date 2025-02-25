import type { NextConfig } from "next";

const API_URL = process.env.API_URL;

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/public/lotteries",
        destination: `${API_URL}/api/public/lotteries`,
      },
      {
        source: "/api/public/devices",
        destination: `${API_URL}/api/public/devices`,
      },
    ];
  },
};

export default nextConfig;
