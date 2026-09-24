import { adPlatforms, automationTools } from "@/lib/content";
import { Icon, type IconName } from "./Icons";
import { Logo } from "./Logo";
import { CtaButton } from "./ui";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-18 md:px-8">
        <Logo className="h-10 w-auto text-ink md:h-12" />
        <a
          href="#book"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand sm:inline-flex"
        >
          Book a Free Strategy Call
        </a>
      </div>
    </header>
  );
}

const flow: { icon: IconName; label: string; detail: string }[] = [
  { icon: "target", label: "Ad and Lead Sources", detail: "Meta, Google, LinkedIn and referrals" },
  { icon: "users", label: "One CRM Pipeline", detail: "Every lead captured in GoHighLevel" },
  { icon: "mail", label: "Automated Nurture", detail: "Email and SMS from the first touch" },
  { icon: "calendar", label: "Booked Strategy Calls", detail: "Straight onto your calendar" },
];

function SystemCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand/15 blur-3xl"
      />
      <div className="rounded-3xl border border-line bg-white p-5 shadow-[0_30px_60px_-30px_rgba(2,2,2,0.35)] md:p-6">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Your Revenue System</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand">
            <span className="size-1.5 animate-pulse rounded-full bg-brand" />
            Connected
          </span>
        </div>
        <ol className="relative space-y-3">
          <span
            aria-hidden
            className="absolute top-6 bottom-6 left-[1.6rem] w-px bg-gradient-to-b from-brand/60 via-brand/30 to-brand/60"
          />
          {flow.map((step) => (
            <li
              key={step.label}
              className="relative flex items-center gap-4 rounded-2xl border border-line bg-paper-alt/60 p-3"
            >
              <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-xl bg-white text-brand ring-1 ring-line">
                <Icon name={step.icon} className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.95rem] font-semibold text-ink">
                  {step.label}
                </span>
                <span className="block text-sm text-muted">
                  {step.detail}
                </span>
              </span>
              <Icon name="check" className="size-5 shrink-0 text-brand" />
            </li>
          ))}
        </ol>
        <p className="mt-5 rounded-2xl bg-ink px-4 py-3 text-center text-sm font-medium text-white">
          Every step is connected. Nothing is lost.
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(#e4e4e4_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] [background-size:22px_22px]"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink-soft sm:text-sm">
            <span className="size-2 shrink-0 rounded-full bg-brand" />
            Ads and Automation for B2B Service Businesses
          </p>
          <h1 className="mt-6 text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.6rem]">
            Stop Losing the Leads{" "}
            <span className="relative text-brand sm:whitespace-nowrap">
              You Already Pay For
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-brand/35"
              >
                <path
                  d="M2 9c60-6 180-8 296-3"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted md:text-xl">
            We run your ads on Meta, Google, LinkedIn and other social
            platforms, and build the CRM and follow-up automation behind them,
            so every lead is captured, nurtured and booked.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaButton />
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-2 py-3 font-semibold text-ink underline decoration-line-strong decoration-2 underline-offset-8 transition-colors hover:decoration-brand"
            >
              See How It Works
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            A 30 minute call with no obligation. No hacks and no random outreach.
          </p>

          <div className="mt-10 border-t border-line pt-6">
            <p className="text-xs font-semibold tracking-wider text-muted uppercase">
              Platforms and Tools We Work With
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] font-medium text-ink-soft">
              {[...adPlatforms.slice(0, 3), ...automationTools].map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        <SystemCard />
      </div>
    </section>
  );
}
