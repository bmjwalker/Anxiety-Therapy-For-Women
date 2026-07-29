import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/why-high-performing-women-overthink",
        destination: "/blog/why-high-performing-women-overthink",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
