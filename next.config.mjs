import path from "node:path";
import { fileURLToPath } from "node:url";

const isDev = process.env.NODE_ENV !== "production";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
  "font-src 'self' fonts.gstatic.com data:",
  ["connect-src 'self'", "https://cms.futurehax.com", "https://cdn.futurehax.com", "https://*.futurehax.com"].join(" "),
  "img-src 'self' data: blob: https:",
  "frame-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Only force HTTPS upgrades when the public site URL is itself HTTPS.
  ...(process.env.NEXT_PUBLIC_SITE_URL?.startsWith("https") ? ["upgrade-insecure-requests"] : []),
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  output: process.env.OUTPUT_STANDALONE === "1" || process.env.DOCKER_BUILD === "1" ? "standalone" : undefined,
  outputFileTracingRoot: path.join(__dirname),
  transpilePackages: ["@futurehax/nextjs-common", "@futurehax/nextjs-common-ui"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: cspDirectives },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          ...(!isDev && process.env.NEXT_PUBLIC_SITE_URL?.startsWith("https")
            ? [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
