import { buildOgMetadata } from "@futurehax/nextjs-common";

import { APP_TITLE, SITE_URL } from "@/lib/site";

export function pageMetadata(path: string, title: string, description: string) {
  return buildOgMetadata({
    siteName: APP_TITLE,
    baseUrl: SITE_URL,
    title,
    description,
    path,
  });
}
