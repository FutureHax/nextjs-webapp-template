import { createStatusHandler } from "@futurehax/nextjs-common/status";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const GET = createStatusHandler({
  service: "nextjs-webapp-template",
  checks: {
    api: async () => ({ status: "healthy", message: "API reachable" }),
  },
});
