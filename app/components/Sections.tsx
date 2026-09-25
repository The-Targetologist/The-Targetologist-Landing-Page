import {
  audiences,
  caseStudies,
  comparison,
  faqs,
  problemRows,
  services,
  steps,
} from "@/lib/content";
import { Icon } from "./Icons";
import { CtaButton, Section, SectionHeading, Tag } from "./ui";

export function Problem() {
  return (
    <Section className="bg-paper-alt">
      <SectionHeading
        eyebrow="The Real Problem"
        title={
          <>
            Most Businesses Don&apos;t Have a Lead Problem.{" "}
            <span className="text-brand">They Have a System Problem.</span>
          </>
        }
        intro="Leads come in, but they're scattered, followed up late or not at all, and the ad budget keeps paying for conversations that never happen."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-line bg-white p-7 md:p-9">
          <p className="text-sm font-semibold tracking-wide text-muted uppercase">
            Without a System
          </p>
          <ul className="mt-6 space-y-4">
            {problemRows.without.map((row) => (
              <li key={row} className="flex gap-3 text-ink-soft">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-line text-muted">
                  <Icon name="x" className="size-3.5" />
                </span>
                {row}
              </li>
            ))}
          </ul>
          <p className="mt-7 border-t border-line pt-5 font-medium text-muted">
            The result is lost opportunities and unpredictable revenue.
          </p>
        </div>
        <div className="rounded-3xl bg-ink p-7 text-white md:p-9">
          <p className="text-sm font-semibold tracking-wide text-brand uppercase">
            With a Targetologist System
          </p>
          <ul className="mt-6 space-y-4">
            {problemRows.with.map((row) => (
              <li key={row} className="flex gap-3 text-white/90">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Icon name="check" className="size-3.5" />
                </span>
                {row}
              </li>
            ))}
          </ul>
          <p className="mt-7 border-t border-white/15 pt-5 font-medium text-white/70">
            The result is a pipeline you can plan around.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What We Do"
        title="Two Services, One Connected System"
        intro="Ads bring the right people in. Automation makes sure none of them slip away. We run both, so they work as one."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.key}
            className="group flex flex-col rounded-3xl border border-line bg-white p-7 transition-shadow hover:shadow-[0_24px_50px_-28px_rgba(2,2,2,0.3)] md:p-9"
          >
            <div className="flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                <Icon
                  name={service.key === "automation" ? "bolt" : "target"}
                  className="size-6"
                />
              </span>
              <h3 className="text-2xl font-semibold text-ink">
                {service.title}
              </h3>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {service.summary}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-ink-soft">
                  <Icon
                    name="check"
                    className="mt-0.5 size-5 shrink-0 text-brand"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                {service.key === "automation" ? "Built With" : "Platforms"}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Comparison() {
  return (
    <Section className="bg-ink">
      <SectionHeading
        tone="dark"
        eyebrow="How We're Different"
        title="Not Another Agency That Stops at the Click"
        intro="Most agencies run ads or set up tools. We build what happens between the first click and the booked call."
      />
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <div className="hidden bg-white/5 text-sm font-semibold md:grid md:grid-cols-[0.8fr_1.2fr_1.2fr]">
          <div className="px-6 py-5 text-white/50" />
          <div className="border-l border-white/10 px-6 py-5 text-brand">
            The Targetologist
          </div>
          <div className="border-l border-white/10 px-6 py-5 text-white/50">
            Typical Agency
          </div>
        </div>
        {comparison.map((row) => (
          <div
            key={row.topic}
            className="grid grid-cols-1 border-white/10 not-first:border-t md:grid-cols-[0.8fr_1.2fr_1.2fr] md:border-t"
          >
            <div className="px-5 pt-5 pb-3 text-base font-semibold text-white md:px-6 md:py-6 md:text-sm">
              {row.topic}
            </div>
            <div className="mx-5 flex gap-3 rounded-2xl bg-brand/[0.1] px-4 py-3.5 text-white md:mx-0 md:rounded-none md:border-l md:border-white/10 md:bg-brand/[0.07] md:px-6 md:py-6">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand">
                <Icon name="check" className="size-3" strokeWidth={2.6} />
              </span>
              <span className="text-[0.95rem] leading-snug">
                <span className="block text-xs font-semibold tracking-wider text-brand uppercase md:hidden">
                  The Targetologist
                </span>
                {row.us}
              </span>
            </div>
            <div className="flex gap-3 px-5 pt-3.5 pb-5 text-white/50 md:border-l md:border-white/10 md:px-6 md:py-6">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/10">
                <Icon name="x" className="size-3" strokeWidth={2.6} />
              </span>
              <span className="text-[0.95rem] leading-snug">
                <span className="block text-xs font-semibold tracking-wider text-white/40 uppercase md:hidden">
                  Typical Agency
                </span>
                {row.them}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton />
      </div>
    </Section>
  );
}

export function Audience() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Who This Is For"
        title="Built for B2B Service Businesses That Run on Conversations"
        intro="If your revenue depends on turning enquiries into booked calls, this is for you. These are the industries we work with."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {audiences.map((a, i) => (
          <div
            key={a.title}
            className={`rounded-3xl border border-line bg-white p-6 transition-colors hover:border-brand/40 lg:col-span-2 ${
              i === 3 ? "lg:col-start-2" : ""
            }`}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">
              <Icon name={a.icon} className="size-5.5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{a.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{a.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="how-it-works" className="bg-paper-alt">
      <SectionHeading
        eyebrow="How It Works"
        title="Three Steps to a Pipeline That Runs Itself"
      />
      <ol className="grid gap-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-3xl border border-line bg-white p-7 md:p-8"
          >
            <span className="text-5xl font-semibold text-brand/25 tabular-nums">
              0{i + 1}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute top-1/2 -right-4 z-10 hidden size-8 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-brand md:grid"
              >
                <Icon name="arrow" className="size-4" />
              </span>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-12 text-center">
        <CtaButton />
      </div>
    </Section>
  );
}

export function Proof() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Recent Work"
        title="Systems We've Built for Businesses Like Yours"
        intro="Every business comes to us with a different problem. Here's a look at what we built for a few of them."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {caseStudies.map((c) => (
          <article
            key={c.title}
            className="flex flex-col rounded-3xl border border-line bg-white p-7 md:p-8"
          >
            <p className="text-sm font-semibold text-brand">{c.industry}</p>
            <h3 className="mt-3 text-xl leading-snug font-semibold text-ink">
              {c.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{c.text}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {c.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section className="bg-paper-alt">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions Before You Book?"
            intro="If your question isn't here, bring it to the call and we'll answer it there."
          />
        </div>
        <div className="divide-y divide-line rounded-3xl border border-line bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 md:px-8">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-lg font-semibold text-ink">
                {f.q}
                <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand transition-transform">
                  <Icon name="plus" className="size-4" strokeWidth={2.4} />
                </span>
              </summary>
              <p className="-mt-1 pb-6 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
