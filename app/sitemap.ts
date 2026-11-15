import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-content";
import { blogPosts } from "@/lib/blog-posts";

const baseUrl = siteConfig.url;

const staticPages = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/diensten", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/diensten/data-engineering", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/diensten/data-analytics", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/diensten/analytics-engineering", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/diensten/ai-interface", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/over-dennis", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticPages.map((p) => ({
    url: `${baseUrl}${p.path === "/" ? "" : p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
