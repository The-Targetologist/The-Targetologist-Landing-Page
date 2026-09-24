"use server";

import { challenges } from "@/lib/content";

export type LeadState =
  | { status: "idle" }
  | {
      status: "error";
      errors: Partial<Record<LeadField, string>>;
      // Echoed back so the form can be re-filled after React resets it.
      values: Record<LeadField, string>;
      attempt: number;
    }
  | {
      status: "success";
      lead: { name: string; email: string; challenge: string };
    };

type LeadField = "name" | "email" | "company" | "challenge";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "li_fat_id",
] as const;

function field(formData: FormData, key: string, max = 200) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "website")) {
    return { status: "success", lead: { name: "", email: "", challenge: "" } };
  }

  const name = field(formData, "name", 100);
  const email = field(formData, "email", 200);
  const company = field(formData, "company", 150);
  const challenge = field(formData, "challenge", 100);

  const errors: Partial<Record<LeadField, string>> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";
  if (!challenges.includes(challenge))
    errors.challenge = "Please choose your biggest challenge.";
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      errors,
      values: { name, email, company, challenge },
      attempt: Date.now(),
    };
  }

  const attribution = Object.fromEntries(
    UTM_KEYS.map((key) => [key, field(formData, key)]).filter(([, v]) => v),
  );

  await forwardLead({
    name,
    email,
    company,
    challenge,
    ...attribution,
    source: "ad-landing-page",
    submittedAt: new Date().toISOString(),
  });

  return { status: "success", lead: { name, email, challenge } };
}

// Sends the lead to LEAD_WEBHOOK_URL (e.g. a GoHighLevel inbound webhook or a
// Zapier catch hook). A delivery failure never blocks the visitor from booking.
async function forwardLead(payload: Record<string, string>) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    console.warn(
      "[lead] LEAD_WEBHOOK_URL is not set; lead was not forwarded:",
      payload.email,
    );
    return;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) console.error("[lead] Webhook responded", res.status);
  } catch (err) {
    console.error("[lead] Webhook delivery failed:", err);
  }
}
