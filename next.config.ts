import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/why-high-performing-women-overthink",
        destination: "/blog/why-high-performing-women-overthink",
        permanent: true,
      },
      {
        source: "/blog/archive/why-high-performing-women-overthink-and-how-to-break-the-cycle",
        destination: "/blog/why-high-performing-women-overthink",
        permanent: true,
      },
      {
        source: "/blog/archive/adhd-high-performers-why-you-re-not-meant-to-be-disciplined-and-why-that-s-your-superpower",
        destination: "/blog/adhd-high-performers-why-youre-not-meant-to-be-disciplined-and-why-thats-your-superpower",
        permanent: true,
      },
      {
        source: "/blog/archive/high-functioning-burnout-in-women-why-you-re-exhausted-even-if-you-re-still-showing-up",
        destination: "/blog/high-functioning-burnout-in-women-why-youre-exhausted-even-if-youre-still-showing-up",
        permanent: true,
      },
      {
        source: "/blog/archive/the-science-of-burnout-what-the-research-actually-says-and-why-you-re-not-just-tired",
        destination: "/blog/the-science-of-burnout-what-the-research-actually-says-and-why-youre-not-just-tired",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
