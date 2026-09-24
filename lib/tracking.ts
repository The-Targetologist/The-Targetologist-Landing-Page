// Ad-platform tracking config. Every ID is optional: a platform's tag only
// loads when its ID is set, so the page works (untracked) until IDs are added.
export const tracking = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID, // e.g. AW-123456789
  googleAdsLeadLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL,
  googleAdsBookingLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_BOOKING_LABEL,
  linkedInPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
  linkedInLeadConversionId: process.env.NEXT_PUBLIC_LINKEDIN_LEAD_CONVERSION_ID,
  linkedInBookingConversionId:
    process.env.NEXT_PUBLIC_LINKEDIN_BOOKING_CONVERSION_ID,
};

type Conversion = "lead" | "booking";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    lintrk?: (action: string, data: Record<string, unknown>) => void;
  }
}

// Fires the conversion on every platform that is configured and loaded.
//   lead    = qualifying form submitted
//   booking = Calendly call actually scheduled
export function trackConversion(conversion: Conversion) {
  if (typeof window === "undefined") return;

  window.fbq?.("track", conversion === "lead" ? "Lead" : "Schedule");

  const label =
    conversion === "lead"
      ? tracking.googleAdsLeadLabel
      : tracking.googleAdsBookingLabel;
  if (tracking.googleAdsId && label) {
    window.gtag?.("event", "conversion", {
      send_to: `${tracking.googleAdsId}/${label}`,
    });
  }

  const linkedInId =
    conversion === "lead"
      ? tracking.linkedInLeadConversionId
      : tracking.linkedInBookingConversionId;
  if (linkedInId) {
    window.lintrk?.("track", { conversion_id: Number(linkedInId) });
  }
}
