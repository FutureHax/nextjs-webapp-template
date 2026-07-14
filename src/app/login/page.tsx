import { LoginPageContent } from "@/components/LoginPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/login", "Sign in", "Sign in to your FutureHax account.");

export default function LoginPage() {
  return <LoginPageContent />;
}
