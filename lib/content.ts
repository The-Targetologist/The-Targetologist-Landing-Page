// All landing-page copy lives here so it can be edited without touching layout.
// Rule: real services, real tools, real work only. No invented stats or client names.
// Style: headings, titles, buttons and labels in Title Case; body text in sentence case.

export const CALENDLY_URL = "https://calendly.com/hamza-thetargetologist/30min";

export const CTA_LABEL = "Book Call";

export const contact = {
  email: "contact@thetargetologist.com",
  phone: "+1 (561) 872-8812",
  phoneHref: "tel:+15618728812",
  address: "1489 W. Palmetto Park Rd, Suite 500, Boca Raton, FL 33486, USA",
  privacyUrl: "https://thetargetologist.com/privacy-policy/",
  termsUrl: "https://thetargetologist.com/terms-and-conditions/",
};

export const trustPoints = [
  "Conversion tracking set up before we scale spend",
  "Clear monthly reporting on leads and booked calls",
  "US-based team in Boca Raton, Florida",
];

// Headline numbers for the proof strip, e.g.
//   { value: "$1.2M+", label: "Ad Spend Managed" }
// The strip stays hidden until at least one real, verifiable result is added.
export const results: { value: string; label: string }[] = [];

// Client logos for the strip under the hero. Put the files in public/logos/
// and list them here, only for clients who've agreed to be shown, e.g.
//   { name: "Acme Co", src: "/logos/acme.svg" }
// The section stays hidden until at least one logo is added.
export const clientLogos: { name: string; src: string }[] = [];

export const platforms = [
  {
    key: "google",
    name: "Google Ads",
    text: "Show up when buyers are already searching for what you offer.",
  },
  {
    key: "meta",
    name: "Meta Ads",
    text: "Reach and retarget your buyers across Facebook and Instagram.",
  },
  {
    key: "linkedin",
    name: "LinkedIn Ads",
    text: "Target decision makers by job title, company and industry.",
  },
] as const;

export const scope = [
  { icon: "compass", label: "Strategy" },
  { icon: "sliders", label: "Setup" },
  { icon: "target", label: "Tracking" },
  { icon: "trend", label: "Optimization" },
  { icon: "chart", label: "Reporting" },
] as const;

// Automation stays a secondary, one-line mention so it doesn't compete with ads.
export const automationNote =
  "Need more than ads? We can also set up CRM and follow-up automation, so every lead gets a fast response.";

// Case study cards. For each real one from Hamza, fill in:
//   client    the client or brand name, shown as the card heading
//   result    the headline number, e.g. { value: "-42%", label: "Cost Per Lead" }
//   platforms the ad platforms used, shown as small logos
// Cards without a client or result fall back to the title and skip the result
// block, so the current cards keep working until the real ones arrive.
export type CaseStudy = {
  client?: string;
  industry: string;
  title: string;
  did: string;
  result?: { value: string; label: string };
  platforms?: ("google" | "meta" | "linkedin")[];
};

export const caseStudies: CaseStudy[] = [
  {
    industry: "Import, Export and Trading",
    title: "Paid Campaigns Across Three Service Lines",
    did: "Paid ad campaigns for a multi-service trading group, with lead capture and follow-up set up for three separate service lines under one account.",
  },
  {
    industry: "Healthcare and Medical Equipment",
    title: "Retargeting for a Medical Device Seller",
    did: "A retargeting campaign built around a specific product offer for a refurbished medical device seller, with suppression logic so recent buyers weren't contacted again.",
  },
  {
    industry: "Employee Benefits and Insurance",
    title: "Segmented Campaigns for a Benefits Provider",
    did: "Campaigns segmented by audience type, such as technician and veteran focused messaging, with ongoing monthly performance reporting.",
  },
];

// Answers marked GENERIC defer to the call until real details are confirmed:
// minimum ad budget, fee structure, contract terms and landing page work.
// Replace them once those are known.
export const faqs = [
  {
    q: "Which Ad Platforms Do You Manage?",
    a: "Google Ads, Meta Ads (Facebook and Instagram) and LinkedIn Ads. We focus on the platforms where your buyers are.",
  },
  {
    // GENERIC
    q: "What Budget and Pricing Should I Expect?",
    a: "It depends on your market, goals and the platforms involved. On the call we'll suggest a realistic ad budget and walk you through our pricing and terms, with no obligation.",
  },
  {
    // GENERIC
    q: "Do You Help With Landing Pages?",
    a: "Where your ads send people matters as much as the ads. On the call we'll look at your current pages and whether they're ready for paid traffic.",
  },
  {
    q: "How Do You Track Results?",
    a: "We set up conversion tracking to measure real leads and booked calls, not just clicks, and send clear monthly reports.",
  },
  {
    q: "What Happens After I Book a Call?",
    a: "You'll get a calendar invite straight away. On the 30 minute call we review your ads, tracking and goals, and outline what we'd change first.",
  },
];

export const reasons = [
  {
    icon: "target",
    title: "Quality Over Volume",
    text: "We optimize for leads that turn into calls on your calendar, not cheap clicks and impressions.",
  },
  {
    icon: "trend",
    title: "Budget Follows Results",
    text: "We move spend toward the campaigns and platforms producing leads, and cut what isn't working.",
  },
  {
    icon: "chart",
    title: "Tracking and Reporting You Can Trust",
    text: "Conversion tracking is set up properly from the start, and each month you see what you spent, what it produced and what we're changing next.",
  },
] as const;
