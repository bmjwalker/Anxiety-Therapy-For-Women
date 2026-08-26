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
      // Legacy Brighter Vision pages
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/burnout-and-stress",
        destination: "/burnout-anxiety-therapy",
        permanent: true,
      },
      {
        source: "/womens-issues",
        destination: "/high-performing-women-therapy",
        permanent: true,
      },
      {
        source: "/life-transitions",
        destination: "/life-transitions-therapy",
        permanent: true,
      },
      {
        source: "/career-counseling",
        destination: "/career-clarity-therapy",
        permanent: true,
      },
      {
        source: "/multicultural-and-biracial-clients",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/beyond-the-strong-one-course",
        destination: "https://fabulous-teacher-7023.kit.com/a2676e1c5d",
        permanent: true,
      },
      {
        source: "/2-day-intensive",
        destination: "/burnout-reset-intensive",
        permanent: true,
      },
      {
        source: "/burnout-reset-group",
        destination: "/6-week-burnout-group",
        permanent: true,
      },
      {
        source: "/client-forms",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/workplace-resources",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/executive-functioning-career-coaching-for-professional-women",
        destination: "/career-clarity-therapy",
        permanent: true,
      },
      {
        source: "/therapy-intensives",
        destination: "/burnout-reset-intensive",
        permanent: true,
      },
      // Indexed by Google but 404ing — old direct-slug URLs; content is preserved under /blog/archive
      {
        source: "/anxiety-therapy-near-me",
        destination: "/blog/archive/anxiety-therapy-near-me",
        permanent: true,
      },
      {
        source: "/the-hidden-cost-of-perfectionism-how-to-recognize-and-reclaim-your-power",
        destination: "/blog/archive/the-hidden-cost-of-perfectionism-how-to-recognize-and-reclaim-your-power",
        permanent: true,
      },
      {
        source: "/are-you-using-the-right-criteria-to-measure-your-self-worth",
        destination: "/blog/archive/are-you-using-the-right-criteria-to-measure-your-self-worth",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
