import { platforms, trustPoints } from "@/lib/content";
import { BookingCard } from "./Booking";
import { Icon } from "./Icons";
import { Logo } from "./Logo";
import { PlatformMark } from "./PlatformMark";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-6 pb-16 md:px-8 md:pt-8 md:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(#e4e4e4_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] [background-size:22px_22px]"
      />
      <div className="mx-auto max-w-6xl">
        <Logo className="h-10 w-auto text-ink md:h-12" />

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)] items-center gap-10 md:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink-soft sm:text-sm">
              <span className="size-2 shrink-0 rounded-full bg-brand" />
              Paid Advertising for US Businesses
            </p>
            <h1 className="mt-6 text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.4rem]">
              Turn Paid Ads Into More{" "}
              <span className="text-brand">Qualified Leads &amp; Booked Calls</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted md:text-xl">
              We manage Google and Meta advertising for US businesses, from
              campaign strategy and tracking to ongoing optimization.
            </p>
            <ul className="mt-8 space-y-3.5">
              {trustPoints.map((point) => (
                <li key={point} className="flex gap-3 font-medium text-ink-soft">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Icon name="check" className="size-3.5" strokeWidth={2.4} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-7">
              <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                Platforms We Manage
              </p>
              <ul className="flex flex-wrap items-center gap-4">
                {platforms.map((p) => (
                  <li key={p.key} className="flex items-center gap-2.5 font-semibold text-ink">
                    <PlatformMark platform={p.key} size="sm" />
                    {p.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <BookingCard />
        </div>
      </div>
    </section>
  );
}
