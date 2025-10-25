import type { MetadataRoute } from "next";
import { projects } from "@/app/lib/projectData";
import { blogs } from "@/app/blog/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kojilab.vercel.app";

  // 🧩 Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: "2025-01-01", changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: "2025-01-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: "2025-01-01", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contacts`, lastModified: "2025-01-01", changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/cookie-policy`, lastModified: "2025-01-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/disclaimer`, lastModified: "2025-01-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: "2025-01-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: "2025-01-01", changeFrequency: "monthly", priority: 0.7 },
  ];

  // 🧩 Dynamic project pages
  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),  
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 🧩 Dynamic blog pages
  const blogUrls: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date).toISOString(),  
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // ✅ Return full sitemap
  return [...staticPages, ...projectUrls, ...blogUrls];
}
