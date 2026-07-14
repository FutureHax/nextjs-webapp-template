import { LegalDocument } from "@futurehax/nextjs-common-ui";

import { termsContent } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/terms", "Terms of Service", `Terms of Service for this FutureHax application.`);

export default function TermsPage() {
  return <LegalDocument {...termsContent} />;
}
