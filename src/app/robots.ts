import type { MetadataRoute } from "next";
import { createRobots } from "@futurehax/nextjs-common";

import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return createRobots({
    baseUrl: SITE_URL,
    disallow: ["/api/", "/private/"],
  });
}
