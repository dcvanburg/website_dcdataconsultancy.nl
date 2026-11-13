import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/cases", destination: "/", permanent: true },
      { source: "/industrieen", destination: "/over-dennis", permanent: true },
      { source: "/diensten/modern-data-stack", destination: "/diensten", permanent: true },
      { source: "/diensten/dbt-consultancy", destination: "/diensten/analytics-engineering", permanent: true },
      { source: "/diensten/azure-data-engineering", destination: "/diensten/data-engineering", permanent: true },
    ];
  },
};

export default nextConfig;
