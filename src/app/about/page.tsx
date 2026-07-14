import { AboutSection } from "@futurehax/nextjs-common-ui";

import { aboutContent } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/about", aboutContent.title, aboutContent.description);

export default function AboutPage() {
  return <AboutSection {...aboutContent} />;
}
