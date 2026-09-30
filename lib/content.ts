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
  "$1.5M+ in ad spend managed across Google and Meta",
  "Conversion tracking set up before we scale spend",
  "US-based team in Boca Raton, Florida",
];

// Headline numbers above the case studies, totalled from the ad account
// portfolios (Google Ads and Meta Ads Manager screenshots), rounded down:
//   spend        $426K Google (newsletter) + ~$1.08M Meta (4 arbitrage
//                accounts) + A$9K Google (caravan) + $1.5K Meta (home care)
//   conversions  ~2M Google (newsletter) + 670K Meta (one arbitrage account
//                that reports a total) + 840 + 59
//   campaigns    456 Meta (arbitrage) + 53 Google (newsletter) + 14 (caravan)
export const results = [
  { value: "$1.5M+", label: "Ad Spend Managed" },
  { value: "2.5M+", label: "Conversions Tracked" },
  { value: "500+", label: "Campaigns Managed" },
];

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

// Case study cards, from the portfolios Hamza shared. Clients are described
// rather than named until each one agrees to be shown. Figures are copied
// from the ad account screenshots in those portfolios.
export type CaseStudy = {
  client: string;
  industry: string;
  platform: "google" | "meta";
  result: { value: string; label: string };
  stats: { value: string; label: string }[];
  did: string;
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Caravan Storage Business",
    industry: "Local Storage, Australia",
    platform: "google",
    result: { value: "840", label: "Tracked conversions" },
    stats: [
      { value: "A$10.76", label: "Cost per conversion" },
      { value: "A$9.04K", label: "Ad spend" },
    ],
    did: "Search and Performance Max campaigns for lead forms and phone calls, with conversion tracking, budget control and ongoing optimization.",
  },
  {
    client: "Home Care Service",
    industry: "Healthcare Services",
    platform: "meta",
    result: { value: "59", label: "Leads from Meta lead forms" },
    stats: [
      { value: "$25.22", label: "Avg. cost per lead" },
      { value: "$21.80", label: "Best ad set CPL" },
    ],
    did: "Facebook lead form campaigns with creative testing and ad set tracking, to find the creative and audience delivering the lowest cost per lead.",
  },
  {
    client: "Newsletter Publisher",
    industry: "Digital Media",
    platform: "google",
    result: { value: "2M", label: "Subscriber conversions" },
    stats: [
      { value: "$0.21", label: "Cost per conversion" },
      { value: "$426K", label: "Ad spend" },
    ],
    did: "High-volume Google display campaigns to grow a newsletter audience at scale, optimized by cost, conversion volume, device and audience.",
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
