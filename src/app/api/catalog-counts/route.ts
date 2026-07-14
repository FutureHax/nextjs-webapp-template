import { NextResponse } from "next/server";
import { fetchCatalogCounts } from "@futurehax/nextjs-common";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** Same-origin proxy so the browser is not blocked by CMS CORS. */
export async function GET() {
  const counts = await fetchCatalogCounts();
  if (!counts) {
    return NextResponse.json({ modules: 0, apps: 0, websites: 0, stub: true });
  }
  return NextResponse.json(counts);
}
