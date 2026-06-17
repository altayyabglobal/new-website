import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/leadSchema";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const webhook = process.env.SHEETS_WEBHOOK_URL;
  const payload = {
    ...parsed.data,
    submittedAt: new Date().toISOString(),
    source: "website",
    userAgent: req.headers.get("user-agent") ?? "",
  };

  if (!webhook) {
    console.log("[lead] SHEETS_WEBHOOK_URL not set — payload:", payload);
    return NextResponse.json({ ok: true, stored: "console" });
  }

  try {
    // Google Apps Script /exec returns 302; follow it manually with GET
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "manual",
    });
    let finalRes = res;
    if (res.status === 301 || res.status === 302) {
      const location = res.headers.get("location");
      if (location) finalRes = await fetch(location, { cache: "no-store" });
    }
    if (!finalRes.ok) {
      const text = await finalRes.text().catch(() => "");
      console.error("[lead] webhook non-2xx", finalRes.status, text);
      return NextResponse.json(
        { ok: false, error: "Could not save lead, please try WhatsApp" },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true, stored: "sheets" });
  } catch (err) {
    console.error("[lead] webhook fetch failed", err);
    return NextResponse.json(
      { ok: false, error: "Network error, please try WhatsApp" },
      { status: 502 },
    );
  }
}
