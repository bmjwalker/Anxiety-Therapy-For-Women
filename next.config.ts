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
        source: "/multicultural-identity-therapy",
        destination: "/high-performing-women-therapy",
        permanent: true,
      },
      {
        source: "/beyond-the-strong-one-course",
        destination: "/career-burnout-clarity",
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
        destination: "/burnout-anxiety-therapy",
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
      // Old Brighter Vision blog URLs flagged as 404 in Search Console (Oct 2026)
      {
        source: "/how-to-go-from-stuck-to-unstuck",
        destination: "/blog/archive/how-to-get-unstuck-a-therapist-s-guide-for-high-achieving-women-in-life-transitions",
        permanent: true,
      },
      {
        source: "/how-to-choose-the-right-health-insurance",
        destination: "/blog/archive/how-to-choose-the-right-health-insurance-for-mental-health-coverage-during-open-enrollment",
        permanent: true,
      },
      {
        source: "/anxiety-resources",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/create-the-life-you-deserve",
        destination: "/blog/archive/create-the-life-you-deserve",
        permanent: true,
      },
      {
        source: "/codependence-in-disguise-how-high-performing-women-lose-themselves-in-success-service-and-survival",
        destination: "/blog/archive/codependence-in-disguise-how-high-performing-women-lose-themselves-in-success-service-and-survival",
        permanent: true,
      },
      {
        source: "/what-teachers-really-need-this-year-support-stability-and-space-to-breathe",
        destination: "/blog/archive/what-teachers-really-need-this-year-support-stability-and-space-to-breathe",
        permanent: true,
      },
      {
        source: "/burnout-is-costing-you-more-than-you-thing-how-to-protect-your-team-and-your-bottom-line",
        destination: "/blog/archive/burnout-is-costing-you-more-than-you-think-how-to-protect-your-team-and-your-bottom-line",
        permanent: true,
      },
      {
        source: "/adhd-high-performers-why-youre-not-meant-to-be-disciplined-and-why-thats-your-superpower",
        destination: "/blog/adhd-high-performers-why-youre-not-meant-to-be-disciplined-and-why-thats-your-superpower",
        permanent: true,
      },
      {
        source: "/high-functioning-burnout-in-women-why-youre-exhausted-even-if-youre-still-showing-up",
        destination: "/blog/high-functioning-burnout-in-women-why-youre-exhausted-even-if-youre-still-showing-up",
        permanent: true,
      },
      {
        source: "/thriving-in-uncertainty-a-guide-to-navigating-lifes-unpredictable-challenges",
        destination: "/blog/archive/thriving-through-uncertainty-how-high-performing-women-can-build-resilience-in-chaotic-times",
        permanent: true,
      },
      {
        source: "/summer-shift-breaking-free-from-career-stagnation-and-toxic-workplaces",
        destination: "/blog/archive/how-to-escape-career-stagnation-and-toxic-workplaces-this-summer",
        permanent: true,
      },
      {
        source: "/change-your-perspective-to-change-your-life",
        destination: "/blog/archive/change-your-perspective-to-change-your-life",
        permanent: true,
      },
      // Consolidated pages — content fully covered elsewhere, no legacy history
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
