import type { MetadataRoute } from "next";
import { createStaticSitemap } from "@futurehax/nextjs-common";

import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return createStaticSitemap(SITE_URL, [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/login", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  ]).map((entry) => ({
    ...entry,
    lastModified: new Date(),
  }));
}
