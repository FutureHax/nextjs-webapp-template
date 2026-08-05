import { createLiveHandler } from "@futurehax/nextjs-common/status";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const GET = createLiveHandler({ service: "nextjs-webapp-template" });
