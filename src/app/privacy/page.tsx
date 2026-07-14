import { LegalDocument } from "@futurehax/nextjs-common-ui";

import { privacyContent } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/privacy",
  "Privacy Policy",
  `Privacy Policy for ${privacyContent.title === "Privacy Policy" ? "this FutureHax app" : privacyContent.title}.`,
);

export default function PrivacyPage() {
  return <LegalDocument {...privacyContent} />;
}
