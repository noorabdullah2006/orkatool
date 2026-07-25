import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/islamic-tools/inheritance-calculator',
        destination: '/calculator-tools/inheritance-calculator',
        permanent: true,
      },
      {
        source: '/tools/inheritance-calculator',
        destination: '/calculator-tools/inheritance-calculator',
        permanent: true,
      },
      {
        source: '/tools/zakat-calculator',
        destination: '/calculator-tools/zakat-calculator',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
