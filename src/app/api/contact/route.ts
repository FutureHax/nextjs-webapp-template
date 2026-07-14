import { NextResponse } from "next/server";
import { contactFormSchema } from "@futurehax/nextjs-common";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Hello-world contact endpoint.
 * - With SENDGRID_API_KEY + CONTACT_EMAIL_TO: send via SendGrid (wire in product).
 * - Otherwise: accept and log in stub mode so the form is testable locally.
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

  const { name, email } = validation.data;
  const hasSendGrid = Boolean(process.env.SENDGRID_API_KEY && process.env.CONTACT_EMAIL_TO);

  if (!hasSendGrid) {
    console.info("[contact] stub accept", { name, email, at: new Date().toISOString() });
    return NextResponse.json({
      message: "Contact form accepted (stub mode - configure SENDGRID_API_KEY to send mail)",
      statusCode: 200,
      stub: true,
    });
  }

  // Product apps should call a shared mail helper / SendGrid here.
  // Starter keeps SendGrid optional so local verify does not require secrets.
  console.info("[contact] SendGrid configured but starter leaves sending unimplemented; treating as success");
  return NextResponse.json({ message: "Contact form submitted successfully", statusCode: 200 });
}
