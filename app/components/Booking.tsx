"use client";

import { useActionState, useEffect, useState } from "react";
import { submitLead, type LeadState } from "@/app/actions";
import { CALENDLY_URL, challenges, contact } from "@/lib/content";
import { trackConversion } from "@/lib/tracking";
import { Icon } from "./Icons";

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "li_fat_id",
];

// Ad-click attribution from the landing URL, carried into the lead and booking.
function useAttribution() {
  const [params, setParams] = useState<Record<string, string>>({});
  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const key of ATTRIBUTION_KEYS) {
      const value = search.get(key);
      if (value) found[key] = value;
    }
    // Reading the URL is only possible after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParams(found);
  }, []);
  return params;
}

const initialState: LeadState = { status: "idle" };

export function Booking() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const attribution = useAttribution();
  const booked = state.status === "success";
  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : undefined;

  useEffect(() => {
    if (state.status === "success" && state.lead.email) trackConversion("lead");
  }, [state]);

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-ink px-5 py-20 md:px-8 md:py-28"
    >
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="text-white">
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand uppercase">
            <span className="size-1.5 rounded-full bg-brand" />
            Free Strategy Call
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-[2.75rem]">
            Build a System That Actually Works
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Tell us a little about your business, then pick a time. In 30
            minutes we&apos;ll map where your leads are being lost and what to
            fix first.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "A review of your lead sources, follow-up and ad spend",
              "The gaps costing you booked calls",
              "A clear outline of the system we'd build",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-white/85">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand">
                  <Icon name="check" className="size-3.5" strokeWidth={2.4} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-white/50">
            No obligation and no hard sell.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-2xl sm:p-6 md:p-8">
          <Steps current={booked ? 2 : 1} />
          {booked ? (
            <CalendlyStep lead={state.lead} attribution={attribution} />
          ) : (
            <form
              key={state.status === "error" ? state.attempt : "form"}
              action={formAction}
              className="mt-6 space-y-5"
            >
              <Field
                label="Full Name"
                name="name"
                autoComplete="name"
                defaultValue={values?.name}
                error={errors.name}
              />
              <Field
                label="Work Email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={values?.email}
                error={errors.email}
              />
              <Field
                label="Company"
                name="company"
                autoComplete="organization"
                defaultValue={values?.company}
                optional
              />
              <div>
                <label
                  htmlFor="challenge"
                  className="block text-sm font-semibold text-ink"
                >
                  What&apos;s Your Biggest Challenge Right Now?
                </label>
                <select
                  id="challenge"
                  name="challenge"
                  required
                  defaultValue={values?.challenge ?? ""}
                  aria-invalid={!!errors.challenge}
                  className="mt-2 w-full appearance-none rounded-xl border border-line-strong bg-white bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%23667085%22%20stroke-width=%222%22><path%20d=%22M6%209l6%206%206-6%22/></svg>')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat px-4 py-3.5 pr-11 text-ink transition-colors outline-none focus:border-brand focus:ring-4 focus:ring-brand/15 aria-invalid:border-brand"
                >
                  <option value="" disabled>
                    Choose One
                  </option>
                  {challenges.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.challenge && (
                  <p className="mt-1.5 text-sm text-brand">{errors.challenge}</p>
                )}
              </div>

              {/* Honeypot for bots; hidden from people and screen readers. */}
              <div aria-hidden className="absolute -left-[9999px]">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              {Object.entries(attribution).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={value} />
              ))}

              <button
                type="submit"
                disabled={pending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-4 text-[15px] font-semibold whitespace-nowrap text-white sm:px-7 sm:text-base shadow-[0_8px_24px_-8px_rgba(228,87,46,0.6)] transition-colors hover:bg-brand-dark disabled:opacity-70"
              >
                {pending ? "Please Wait" : "Continue to Pick a Time"}
                {!pending && <Icon name="arrow" className="size-5" />}
              </button>
              <p className="text-center text-xs text-muted">
                By continuing you agree to our{" "}
                <a
                  href={contact.privacyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Steps({ current }: { current: 1 | 2 }) {
  return (
    <ol className="flex items-center gap-2 text-xs font-semibold whitespace-nowrap sm:gap-3 sm:text-sm">
      {["Your Details", "Pick a Time"].map((label, i) => {
        const n = i + 1;
        const active = n <= current;
        return (
          <li key={label} className="flex items-center gap-2 sm:gap-3">
            {i > 0 && (
              <span className="hidden h-px w-5 bg-line-strong min-[360px]:block sm:w-10" />
            )}
            <span
              className={`grid size-7 place-items-center rounded-full text-xs ${
                active ? "bg-brand text-white" : "bg-line text-muted"
              }`}
            >
              {n < current ? (
                <Icon name="check" className="size-3.5" strokeWidth={2.6} />
              ) : (
                n
              )}
            </span>
            <span className={active ? "text-ink" : "text-muted"}>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  optional,
  defaultValue,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
  defaultValue?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink">
        {label}
        {optional && <span className="font-normal text-muted"> (Optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={!optional}
        defaultValue={defaultValue}
        aria-invalid={!!error}
        className="mt-2 w-full rounded-xl border border-line-strong px-4 py-3.5 text-ink transition-colors outline-none placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15 aria-invalid:border-brand"
      />
      {error && <p className="mt-1.5 text-sm text-brand">{error}</p>}
    </div>
  );
}

function CalendlyStep({
  lead,
  attribution,
}: {
  lead: { name: string; email: string; challenge: string };
  attribution: Record<string, string>;
}) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(CALENDLY_URL);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("embed_domain", window.location.hostname);
    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("name", lead.name);
    url.searchParams.set("email", lead.email);
    // a1 fills the first custom question on the Calendly event, if one exists.
    url.searchParams.set("a1", lead.challenge);
    for (const key of ATTRIBUTION_KEYS.slice(0, 5)) {
      if (attribution[key]) url.searchParams.set(key, attribution[key]);
    }
    // The embed URL needs the page's hostname, only known in the browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSrc(url.toString());
  }, [lead, attribution]);

  // Calendly posts this message to the parent page when a call is booked.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event === "calendly.event_scheduled") {
        trackConversion("booking");
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="mt-6">
      <p className="text-ink">
        Thanks{lead.name ? `, ${lead.name.split(" ")[0]}` : ""}. Now pick a time
        that works for you.
      </p>
      <div className="-mx-2 mt-4 h-[700px] overflow-hidden rounded-2xl md:-mx-4">
        {src && (
          <iframe
            src={src}
            title="Book your free strategy call"
            className="h-full w-full border-0"
          />
        )}
      </div>
      <p className="mt-3 text-center text-xs text-muted">
        Calendar not loading?{" "}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-ink underline underline-offset-2"
        >
          Open the Booking Page
        </a>
      </p>
    </div>
  );
}
