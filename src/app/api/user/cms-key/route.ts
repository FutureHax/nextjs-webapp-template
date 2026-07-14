import { NextResponse } from "next/server";
import { cmsKeyFormSchema, validateModuleKey } from "@futurehax/nextjs-common";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Hello-world CMS download-key activation.
 * Validates against FutureHax CMS when a moduleId is provided (body or CMS_MODULE_ID).
 * Without a module id, accepts schema-valid keys in stub mode so local UI is testable.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const validation = cmsKeyFormSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({ error: "Validation failed", details: validation.error.issues }, { status: 400 });
  }

  const { key } = validation.data;
  const moduleId =
    validation.data.moduleId ?? process.env.CMS_MODULE_ID?.trim() ?? process.env.NEXT_PUBLIC_CMS_MODULE_ID?.trim();

  if (!moduleId) {
    console.info("[cms-key] stub accept (no CMS_MODULE_ID)", { keyLength: key.length });
    return NextResponse.json({
      entitled: true,
      source: "cms_key",
      stub: true,
      message: "Key accepted in stub mode. Set CMS_MODULE_ID to validate against the catalog.",
    });
  }

  const result = await validateModuleKey(moduleId, key);
  if (!result) {
    return NextResponse.json({ error: "Invalid or expired key" }, { status: 400 });
  }

  return NextResponse.json({
    entitled: true,
    tier: result.tier,
    source: result.source === "patron" ? "patreon" : "cms_key",
  });
}
