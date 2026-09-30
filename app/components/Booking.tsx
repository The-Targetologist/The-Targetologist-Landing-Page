"use client";

import { useEffect, useState } from "react";
import { CALENDLY_URL, contact } from "@/lib/content";
import { trackBooking } from "@/lib/tracking";
import { Icon } from "./Icons";

// Close to Calendly's month view, so the card barely moves once it reports
// its real height.
const INITIAL_HEIGHT = 600;

// Calendly pads the bottom of its page with ~130px of empty space. We crop
// most of it so the card ends just under the time zone picker.
const BOTTOM_CROP = 100;

// Tallest the calendar gets. Taller views (the time slot list) scroll inside
// the frame, keeping the card in proportion with the hero copy beside it.
const MAX_HEIGHT = 540;

// If Calendly never reports a height, reveal the frame this long after it
// loads rather than leaving the placeholder up.
const REVEAL_FALLBACK_MS = 4000;

// Ad-click UTMs from the landing URL, passed through to the Calendly booking.
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

// Calendly inline in the hero, so visitors can pick a time without scrolling.
// Once a call is booked, the calendar is swapped for a branded confirmation.
export function BookingCard() {
  const [src, setSrc] = useState<string | null>(null);
  const [scheduled, setScheduled] = useState(false);
  const [height, setHeight] = useState(INITIAL_HEIGHT);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const url = new URL(CALENDLY_URL);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("embed_domain", window.location.hostname);
    url.searchParams.set("hide_gdpr_banner", "1");
    // Hides Calendly's event details panel (host, title, description), so the
    // card shows just the calendar.
    url.searchParams.set("hide_event_type_details", "1");
    // Open on the visitor's current month. Left to itself, Calendly can open on
    // the previous month around month end and show "No times in <month>".
    const now = new Date();
    url.searchParams.set(
      "month",
      `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`,
    );
    const search = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = search.get(key);
      if (value) url.searchParams.set(key, value);
    }
    // The embed URL needs the page's hostname and query, only known in the browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSrc(url.toString());
  }, []);

  // Calendly posts its content height as it changes (month view, then taller
  // once a date is picked) and an event when a call is booked.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event === "calendly.page_height") {
        const reported = parseInt(e.data.payload?.height, 10);
        // Skip the tiny heights Calendly reports while it's still loading.
        // The first real height means the calendar has rendered.
        if (reported >= 300) {
          setHeight(reported);
          setReady(true);
        }
      } else if (e.data?.event === "calendly.event_scheduled") {
        trackBooking();
        setScheduled(true);
        // Tells the mobile sticky CTA to stop offering a booking.
        window.dispatchEvent(new Event("targetologist:booked"));
        document
          .getElementById("book")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  // Short views: frame is full height, its empty bottom cropped by the card.
  // Tall views: frame matches the card so Calendly scrolls inside it.
  const frame =
    height - BOTTOM_CROP <= MAX_HEIGHT
      ? { visible: height - BOTTOM_CROP, inner: height }
      : { visible: MAX_HEIGHT, inner: MAX_HEIGHT };

  return (
    <div
      id="book"
      className="relative w-full scroll-mt-6 rounded-3xl border border-line bg-white p-2 shadow-[0_30px_60px_-30px_rgba(2,2,2,0.35)] sm:p-3"
    >
      {scheduled ? (
        <Confirmation />
      ) : (
        <>
          <div className="flex items-center justify-between gap-3 px-3 pt-3 sm:px-4">
            <p className="font-semibold text-ink">Pick a Time for Your Call</p>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-text">
              <Icon name="calendar" className="size-3.5" />
              30 Min
            </span>
          </div>
          <div
            className="relative mt-1 overflow-hidden rounded-2xl"
            style={{ height: frame.visible }}
          >
            {src && (
              <iframe
                src={src}
                title="Book a call with The Targetologist"
                className={`w-full border-0 transition-opacity duration-500 ${
                  ready ? "opacity-100" : "opacity-0"
                }`}
                style={{ height: frame.inner }}
                onLoad={() => setTimeout(() => setReady(true), REVEAL_FALLBACK_MS)}
              />
            )}
            <CalendarSkeleton hidden={ready} />
          </div>
          <p className="px-3 pb-2 text-center text-xs text-muted">
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
        </>
      )}
    </div>
  );
}

// Calendar-shaped placeholder shown while Calendly loads, laid out like its
// month view so the swap feels like the calendar coming into focus.
function CalendarSkeleton({ hidden }: { hidden: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className={`absolute inset-0 flex flex-col items-center bg-white px-6 pt-8 transition-opacity duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex w-full max-w-xs animate-pulse flex-col items-center">
        <span className="h-6 w-32 rounded-full bg-line" />
        <div className="mt-8 flex w-full items-center justify-between px-6">
          <span className="size-5 rounded-full bg-line" />
          <span className="h-4 w-28 rounded-full bg-line" />
          <span className="size-5 rounded-full bg-line" />
        </div>
        <div className="mt-7 grid w-full grid-cols-7 place-items-center gap-y-5">
          {Array.from({ length: 35 }, (_, i) => (
            <span
              key={i}
              className={`size-7 rounded-full ${i < 7 ? "h-3 w-6 bg-line/70" : "bg-paper-alt"}`}
            />
          ))}
        </div>
      </div>
      <p className="mt-8 flex items-center gap-2 text-sm font-medium text-muted" role="status">
        <span className="size-4 animate-spin rounded-full border-2 border-brand/25 border-t-brand" />
        Loading available times…
      </p>
    </div>
  );
}

const nextSteps = [
  {
    title: "Check Your Inbox",
    text: "Your calendar invite has the time and call details. Add it to your calendar so it doesn't slip.",
  },
  {
    title: "We Prepare for Your Call",
    text: "We look over the details you shared so the 30 minutes are spent on your business.",
  },
  {
    title: "Your Call",
    text: "We review your current ads and tracking, and outline what we'd change first.",
  },
];

function Confirmation() {
  return (
    <div className="p-5 sm:p-7">
      <div className="text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-soft ring-8 ring-brand-soft/50">
          <span className="grid size-11 place-items-center rounded-full bg-brand text-white">
            <Icon name="check" className="size-6" strokeWidth={2.6} />
          </span>
        </span>
        <h3 className="mt-6 text-2xl font-semibold text-balance text-ink md:text-3xl">
          You&apos;re Booked
        </h3>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-muted">
          Your call is confirmed and a calendar invite is on its way to your
          inbox.
        </p>
      </div>

      <div className="mt-8 border-t border-line pt-7">
        <p className="text-sm font-semibold tracking-wide text-brand-text uppercase">
          What Happens Next
        </p>
        <ol className="mt-5 space-y-5">
          {nextSteps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-ink">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-6 text-center text-sm leading-relaxed text-muted">
        Need to reschedule? Use the link in your confirmation email, or reach us
        at{" "}
        <a
          href={`mailto:${contact.email}`}
          className="font-semibold text-ink underline underline-offset-2"
        >
          {contact.email}
        </a>
        .
      </p>
    </div>
  );
}
