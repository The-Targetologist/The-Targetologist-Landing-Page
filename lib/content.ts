// All landing-page copy lives here so it can be edited without touching layout.
// Rule: real services, real tools, real work only. No invented stats or client names.
// Style: headings, titles, buttons and labels in Title Case; body text in sentence case.

export const CALENDLY_URL = "https://calendly.com/hamza-thetargetologist/30min";

export const contact = {
  email: "contact@thetargetologist.com",
  phone: "+1 (561) 872-8812",
  phoneHref: "tel:+15618728812",
  address: "1489 W. Palmetto Park Rd, Suite 500, Boca Raton, FL 33486, USA",
  privacyUrl: "https://thetargetologist.com/privacy-policy/",
  termsUrl: "https://thetargetologist.com/terms-and-conditions/",
};

export const adPlatforms = ["Meta", "Google", "LinkedIn", "Other Social"];
export const automationTools = ["GoHighLevel", "Zapier", "Skylead"];

export const problemRows = {
  without: [
    "Leads arrive from ads, referrals and LinkedIn, and land in different places",
    "Follow-up depends on someone remembering to do it",
    "The CRM is half set up, so nobody trusts it",
    "Ad spend goes up, but booked calls don't",
  ],
  with: [
    "Every lead source feeds one CRM pipeline",
    "Email and SMS nurture starts the moment a lead comes in",
    "Clear pipeline stages your team actually uses",
    "Campaigns are managed against booked calls, not just clicks",
  ],
};

export const services = [
  {
    key: "automation",
    title: "Automation",
    summary:
      "The system behind your leads, so every lead is captured, followed up and moved through your pipeline without manual work.",
    points: [
      "CRM and pipeline setup",
      "Email and SMS lead nurture sequences",
      "Workflow builds that connect your tools",
      "Booking and follow-up automation",
    ],
    tools: automationTools,
  },
  {
    key: "advertisement",
    title: "Advertisement",
    summary:
      "Paid campaigns planned, launched and managed to bring the right people into that system.",
    points: [
      "Campaign strategy and setup",
      "Ongoing management and optimization",
      "Audience targeting and retargeting",
      "Performance reporting",
    ],
    tools: adPlatforms,
  },
] as const;

export const comparison = [
  {
    topic: "What You Get",
    us: "A connected system of ads, CRM, follow-up and booking",
    them: "Ads or tools delivered in isolation",
  },
  {
    topic: "Follow-Up",
    us: "Automated email and SMS nurture from the first touch",
    them: "Leads are handed over and follow-up is left to you",
  },
  {
    topic: "Ads and Automation",
    us: "One team, so ad leads flow straight into your pipeline",
    them: "Separate vendors who don't talk to each other",
  },
  {
    topic: "Tools",
    us: "Built on proven platforms like GoHighLevel, Zapier and Skylead",
    them: "Another disconnected platform to log into",
  },
  {
    topic: "Approach",
    us: "Structured, repeatable systems with no hacks",
    them: "Short-term tactics and random outreach",
  },
  {
    topic: "What's Measured",
    us: "What happens after the click, all the way to the booked call",
    them: "Clicks and impressions",
  },
];

export const audiences = [
  {
    icon: "users",
    title: "Recruitment and Talent Agencies",
    text: "Keep candidate and client pipelines moving without chasing every lead by hand.",
  },
  {
    icon: "briefcase",
    title: "Consulting and Marketing Agencies",
    text: "Turn referrals and inbound interest into a predictable flow of discovery calls.",
  },
  {
    icon: "shield",
    title: "Financial Services Firms",
    text: "Nurture longer decision cycles with consistent, automated follow-up.",
  },
  {
    icon: "store",
    title: "Retail and Vending Businesses",
    text: "Capture enquiries from every channel and re-engage past customers.",
  },
  {
    icon: "health",
    title: "Healthcare and Medical",
    text: "Route buyer and patient enquiries into a clear pipeline with timely follow-up.",
  },
] as const;

export const steps = [
  {
    title: "Book a Free Strategy Call",
    text: "In 30 minutes we look at where your leads come from, how they're followed up and where they're being lost.",
  },
  {
    title: "We Build Your System",
    text: "Campaigns, CRM pipeline, nurture sequences and booking, set up and connected so nothing falls through.",
  },
  {
    title: "You Get a Consistent Pipeline",
    text: "Leads are captured, followed up and booked automatically, while we keep managing and improving performance.",
  },
];

export const caseStudies = [
  {
    industry: "Healthcare and Medical Equipment",
    title: "Lead Automation for a Refurbished Medical Device Seller",
    text: "A Zapier integration pulling order and lead data into GoHighLevel, email and SMS nurture across the full buyer lifecycle, and a retargeting campaign for a specific product offer. Suppression logic made sure recent buyers weren't contacted again.",
    tags: ["GoHighLevel", "Zapier", "Nurture", "Retargeting"],
  },
  {
    industry: "Employee Benefits and Insurance",
    title: "Full Lead Generation System for a Benefits Provider",
    text: "Zapier automations feeding GoHighLevel pipelines, with outreach workflows segmented by audience type, such as technician and veteran focused campaigns, plus ongoing monthly performance reporting.",
    tags: ["GoHighLevel", "Zapier", "Segmentation", "Reporting"],
  },
  {
    industry: "Apparel and E-commerce",
    title: "Win-Back Campaigns Across More Than 100 Shopify Stores",
    text: "GoHighLevel re-engagement for a multi-store apparel network of club and team stores, using segmented email and SMS win-back sequences for lapsed customers. It ran as both a seasonal campaign and an ongoing program.",
    tags: ["GoHighLevel", "Email and SMS", "Re-Engagement"],
  },
  {
    industry: "Import, Export and Trading",
    title: "Ads and Automation for a Multi-Service Trading Group",
    text: "Social media foundation, GoHighLevel automation and paid ad campaigns, covering lead capture and follow-up workflows across three separate service lines under one account.",
    tags: ["Paid Ads", "GoHighLevel", "Workflows"],
  },
];

export const faqs = [
  {
    q: "What Exactly Do You Do?",
    a: "We offer two services. With automation, we build CRM pipelines, email and SMS nurture sequences and workflows using GoHighLevel, Zapier and Skylead. With advertisement, we plan and manage paid campaigns on Meta, Google, LinkedIn and other social platforms. The two are built to work together, so ad leads flow straight into your follow-up.",
  },
  {
    q: "Do I Need Both Services?",
    a: "Not necessarily. On the strategy call we look at where leads are being lost and recommend where to start, whether that's ads, automation or both.",
  },
  {
    q: "Which Ad Platforms Do You Work With?",
    a: "Meta, including Facebook and Instagram, plus Google, LinkedIn and other social platforms, depending on where your buyers are.",
  },
  {
    q: "How Quickly Can We Get Started?",
    a: "It depends on scope. On the call we map out what needs to be built and give you a realistic timeline before anything starts.",
  },
  {
    q: "How Does Pricing Work? Is There a Contract?",
    a: "Pricing and engagement terms depend on what your system needs. We cover both openly on the strategy call, and there's no obligation to move forward.",
  },
  {
    q: "What Happens on the Free Strategy Call?",
    a: "It's a 30 minute working session. We review your current lead sources, follow-up and ad spend, point out the gaps, and outline what a system would look like for your business.",
  },
];

export const challenges = [
  "Not Enough Quality Leads",
  "Leads Aren't Followed Up Consistently",
  "Ad Spend Isn't Producing Booked Calls",
  "Our Tools and CRM Aren't Connected",
  "Something Else",
];
