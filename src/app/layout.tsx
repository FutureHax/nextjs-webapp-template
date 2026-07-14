import "@/styles/global.css";

import type { Metadata, Viewport } from "next";
import React from "react";
import { buildOgMetadata } from "@futurehax/nextjs-common";

import { AppShell } from "@/components/AppShell";
import ChakraProviders from "@/providers/ChakraProviders";
import { APP_TITLE, GITHUB_ORG, SITE_URL } from "@/lib/site";

const og = buildOgMetadata({
  siteName: APP_TITLE,
  baseUrl: SITE_URL,
  title: APP_TITLE,
  description: `${APP_TITLE} - FutureHax Next.js starter`,
});

export const metadata: Metadata = {
  ...og,
  keywords: "nextjs, react, typescript, chakra-ui, futurehax",
  authors: [{ name: GITHUB_ORG }],
  creator: GITHUB_ORG,
  manifest: "/manifest.json",
  applicationName: APP_TITLE,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/icon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#e53935",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ChakraProviders>
          <AppShell>{children}</AppShell>
        </ChakraProviders>
      </body>
    </html>
  );
}
