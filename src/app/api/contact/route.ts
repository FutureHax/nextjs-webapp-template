import { NextResponse } from "next/server";
import { contactFormSchema, isContactEmailConfigured, sendContactEmail } from "@futurehax/nextjs-common";

import { APP_TITLE, SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Contact endpoint: validate with the shared schema, deliver with the shared
 * SendGrid mailer. Set `SENDGRID_DISABLED=true` to log instead of sending.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload", statusCode: 400 }, { status: 400 });
  }

  const validation = contactFormSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: "Validation failed", details: validation.error.issues, statusCode: 400 },
      { status: 400 },
    );
  }

  if (!isContactEmailConfigured()) {
    console.error("[contact] SendGrid is not configured (SENDGRID_API_KEY / CONTACT_EMAIL_TO)");
    return NextResponse.json({ error: "Contact form is not configured.", statusCode: 503 }, { status: 503 });
  }

  try {
    await sendContactEmail(validation.data, {
      productName: APP_TITLE,
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL,
    });
  } catch (err) {
    console.error("[contact] sendContactEmail failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Failed to send message. Please try again.", statusCode: 500 }, { status: 500 });
  }

  return NextResponse.json({ message: "Message sent successfully", statusCode: 200 });
}
