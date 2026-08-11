import type { MetadataRoute } from "next";
import { archivedPosts } from "@/lib/archived-posts";

const baseUrl = "https://anxietytherapyforwomen.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/good-faith-estimate`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/rates-insurance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/groups`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Service pages
    {
      url: `${baseUrl}/burnout-anxiety-therapy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/career-clarity-therapy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/life-transitions-therapy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/high-performing-women-therapy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/multicultural-identity-therapy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Program pages
    {
      url: `${baseUrl}/6-week-burnout-group`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/burnout-reset-intensive`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reset-circle`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career-burnout-clarity`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Blog posts
    {
      url: `${baseUrl}/blog/the-benefits-youre-not-using`,
      lastModified: new Date("2026-08-09"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/the-real-reason-youre-exhausted-its-not-the-chores`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/the-science-of-burnout-what-the-research-actually-says-and-why-youre-not-just-tired`,
      lastModified: new Date("2026-05-15"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/high-functioning-burnout-in-women-why-youre-exhausted-even-if-youre-still-showing-up`,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/adhd-high-performers-why-youre-not-meant-to-be-disciplined-and-why-thats-your-superpower`,
      lastModified: new Date("2025-11-09"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/why-high-performing-women-overthink`,
      lastModified: new Date("2025-08-24"),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    // Archived blog posts (legacy domain content)
    ...archivedPosts.map((post) => ({
      url: `${baseUrl}/blog/archive/${post.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
