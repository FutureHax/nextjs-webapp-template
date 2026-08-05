import { createHealthHandler } from "@futurehax/nextjs-common";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const GET = createHealthHandler({
  service: "nextjs-webapp-template",
  checks: {
    api: async () => ({ status: "healthy" }),
  },
});
