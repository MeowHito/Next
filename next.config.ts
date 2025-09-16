// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // ใช้ path ของ next01
  },
};

export default nextConfig;
