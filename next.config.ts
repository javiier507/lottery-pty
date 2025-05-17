import type { NextConfig } from "next";

const API_URL = process.env.API_URL;

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/lorem/api/health-check",
        destination: `${API_URL}/api/health-check`,
      },
      {
        source: "/lorem/api/public/lotteries",
        destination: `${API_URL}/api/public/lotteries`,
      },
      {
        source: "/lorem/api/public/devices",
        destination: `${API_URL}/api/public/devices`,
      },
    ];
  },
};

export default nextConfig;
