import { ContactPageContent } from "@/components/ContactPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/contact",
  "Contact",
  "Get in touch with FutureHax about products, access, or support.",
);

export default function ContactPage() {
  return <ContactPageContent />;
}
