"use client";

import { StatusPage } from "@futurehax/nextjs-common-ui";

import { APP_TITLE } from "@/lib/site";

export function StatusPageContent() {
  return <StatusPage title="Status" description={`Current operational status for ${APP_TITLE}.`} />;
}
