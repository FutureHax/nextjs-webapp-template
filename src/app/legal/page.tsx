import { ExpandableLegalPage } from "@futurehax/nextjs-common-ui/legal";

import { privacyContent, termsContent } from "@/lib/legal";

export default async function LegalPage({ searchParams }: { searchParams: Promise<{ section?: string }> }) {
  const { section } = await searchParams;
  const initialSection = section === "privacy" ? "privacy" : "terms";
  return (
    <ExpandableLegalPage
      terms={termsContent}
      privacy={privacyContent}
      title="Legal"
      description="Privacy policy and terms of service."
      initialSection={initialSection}
    />
  );
}
