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
  "Google, Meta and LinkedIn Ads under one team",
  "Conversion tracking set up before we scale spend",
  "Clear monthly reporting on leads and booked calls",
];

// Headline numbers for the proof strip, e.g.
//   { value: "$1.2M+", label: "Ad Spend Managed" }
// The strip stays hidden until at least one real, verifiable result is added.
export const results: { value: string; label: string }[] = [];

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

export const caseStudies = [
  {
    industry: "Import, Export and Trading",
    title: "Paid Campaigns Across Three Service Lines",
    text: "Paid ad campaigns for a multi-service trading group, with lead capture and follow-up set up for three separate service lines under one account.",
  },
  {
    industry: "Healthcare and Medical Equipment",
    title: "Retargeting for a Medical Device Seller",
    text: "A retargeting campaign built around a specific product offer for a refurbished medical device seller, with suppression logic so recent buyers weren't contacted again.",
  },
  {
    industry: "Employee Benefits and Insurance",
    title: "Segmented Campaigns for a Benefits Provider",
    text: "Campaigns segmented by audience type, such as technician and veteran focused messaging, with ongoing monthly performance reporting.",
  },
];

export const reasons = [
  {
    icon: "target",
    title: "Managed Against Booked Calls",
    text: "We optimize for qualified leads and calls on your calendar, not clicks and impressions.",
  },
  {
    icon: "bolt",
    title: "Tracking First",
    text: "Conversion tracking is set up properly from the start, so every budget decision is based on real leads.",
  },
  {
    icon: "calendar",
    title: "Clear Monthly Reporting",
    text: "You see what you spent, what it produced and what we're changing next.",
  },
  {
    icon: "users",
    title: "One Team, Every Platform",
    text: "Google, Meta and LinkedIn run by one team, so budget moves to whatever is working.",
  },
] as const;
