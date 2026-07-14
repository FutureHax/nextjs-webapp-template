import { StatusPageContent } from "@/components/StatusPageContent";
import { pageMetadata } from "@/lib/seo";
import { APP_TITLE } from "@/lib/site";

export const metadata = pageMetadata("/status", `${APP_TITLE} status`, `Operational status for ${APP_TITLE}.`);

export default function StatusPage() {
  return <StatusPageContent />;
}
