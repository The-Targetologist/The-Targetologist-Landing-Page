import Image from "next/image";
import {
  automationNote,
  caseStudies,
  clientLogos,
  faqs,
  platforms,
  reasons,
  results,
  scope,
} from "@/lib/content";
import { Icon } from "./Icons";
import { PlatformMark, platformAccent } from "./PlatformMark";
import { CtaButton, Section, SectionHeading } from "./ui";

export function Proof() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Recent Work"
        title="Campaigns We've Run for Businesses Like Yours"
      />
      {results.length > 0 && (
        <dl className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {results.map((r) => (
            <div
              key={r.label}
              className="flex flex-col-reverse rounded-3xl bg-ink p-6 text-center text-white"
            >
              <dt className="mt-2 text-sm text-white/70">{r.label}</dt>
              <dd className="text-3xl font-semibold text-brand tabular-nums md:text-4xl">
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
      <div className="grid gap-5 md:grid-cols-3">
        {caseStudies.map((c) => (
          <article
            key={c.title}
            className="flex flex-col rounded-3xl border border-line bg-white p-7"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-brand-text">{c.industry}</p>
              {c.platforms && (
                <div className="flex shrink-0 gap-1.5">
                  {c.platforms.map((p) => (
                    <PlatformMark key={p} platform={p} size="xs" />
                  ))}
                </div>
              )}
            </div>
            <h3 className="mt-3 text-xl leading-snug font-semibold text-ink">
              {c.client ?? c.title}
            </h3>
            {c.result && (
              <div className="mt-5 rounded-2xl bg-brand-soft px-5 py-4">
                <p className="text-3xl font-semibold text-brand-text tabular-nums">
                  {c.result.value}
                </p>
                <p className="mt-1 text-sm font-medium text-ink-soft">
                  {c.result.label}
                </p>
              </div>
            )}
            {c.client && (
              <p className="mt-5 text-xs font-semibold tracking-wider text-muted uppercase">
                What We Did
              </p>
            )}
            <p className={`leading-relaxed text-muted ${c.client ? "mt-2" : "mt-3"}`}>
              {c.did}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ClientLogos() {
  if (clientLogos.length === 0) return null;
  return (
    <section className="border-y border-line px-5 py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold tracking-wide text-muted uppercase">
          Brands We&apos;ve Worked With
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {clientLogos.map((logo) => (
            <li key={logo.name} className="relative h-10 w-32 md:h-12 md:w-36">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="144px"
                className="object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Manage() {
  return (
    <Section className="bg-paper-alt">
      <SectionHeading eyebrow="What We Manage" title="Your Paid Ads, End to End" />
      <div className="grid gap-5 md:grid-cols-3">
        {platforms.map((p) => {
          return (
            <article
              key={p.key}
              className="relative overflow-hidden rounded-3xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(2,2,2,0.3)]"
            >
              <span aria-hidden className={`absolute inset-x-0 top-0 h-1 ${platformAccent[p.key]}`} />
              <PlatformMark platform={p.key} />
              <h3 className="mt-5 text-xl font-semibold text-ink">{p.name}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
            </article>
          );
        })}
      </div>

      <div className="relative mt-5 overflow-hidden rounded-3xl bg-ink px-6 py-10 md:px-10 md:py-12">
        <div
          aria-hidden
          className="absolute -bottom-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[100px]"
        />
        <p className="relative text-center text-sm font-semibold tracking-wide text-white/60 uppercase">
          Included on Every Account
        </p>
        <ol className="relative mt-9 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
          <span
            aria-hidden
            className="absolute top-7 right-[10%] left-[10%] hidden border-t-2 border-dashed border-brand/40 md:block"
          />
          {scope.map((s, i) => (
            <li
              key={s.label}
              className="relative flex flex-col items-center text-center last:col-span-2 sm:last:col-span-1"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-ink text-brand ring-1 ring-white/15">
                <Icon name={s.icon} className="size-6" />
              </span>
              <span className="mt-4 text-xs font-semibold text-white/60 tabular-nums">
                0{i + 1}
              </span>
              <span className="mt-1 text-lg font-semibold text-white">{s.label}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2.5 text-center text-muted">
        <Icon name="bolt" className="mt-0.5 size-5 shrink-0 text-brand" />
        <span>
          {automationNote}{" "}
          <span className="font-semibold text-ink">Just ask on the call.</span>
        </span>
      </p>
    </Section>
  );
}

export function WhyUs() {
  return (
    <Section className="bg-paper-alt">
      <SectionHeading eyebrow="Why Work With Us" title="Ads Run for Results, Not Reports" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-3xl border border-line bg-white p-6">
            <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">
              <Icon name={r.icon} className="size-5.5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{r.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{r.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Questions Before You Book?"
          intro="If your question isn't here, bring it to the call and we'll answer it there."
        />
        <div className="divide-y divide-line rounded-3xl border border-line bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 md:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand transition-transform group-open:rotate-45">
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

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-20 text-center md:px-8 md:py-28">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]"
      />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance text-white md:text-[2.75rem]">
          Ready to Get More From Your Ad Spend?
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-white/70">
          In 30 minutes we&apos;ll review your current campaigns and tracking,
          and show you what we&apos;d change first.
        </p>
        <div className="mt-9">
          <CtaButton />
        </div>
        <p className="mt-5 text-sm text-white/50">No obligation and no hard sell.</p>
      </div>
    </section>
  );
}
