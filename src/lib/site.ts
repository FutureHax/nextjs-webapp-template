/** Resolves template placeholders to hello-world defaults until clone-time replace. */
function resolvePlaceholder(raw: string, fallback: string): string {
  return raw.includes("{{") ? fallback : raw;
}

export const APP_NAME = resolvePlaceholder("{{APP_NAME}}", "futurehax-starter");
export const APP_TITLE = resolvePlaceholder("{{APP_TITLE}}", "FutureHax Starter");
export const GITHUB_ORG = resolvePlaceholder("{{GITHUB_ORG}}", "FutureHax");
export const DOMAIN = resolvePlaceholder("{{DOMAIN}}", "localhost:3000");

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? (DOMAIN.startsWith("localhost") ? `http://${DOMAIN}` : `https://${DOMAIN}`);
