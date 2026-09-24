import type { ReactNode } from "react";
import { Icon } from "./Icons";

// Every CTA on the page scrolls to the qualifying form (#book), the single
// conversion point. No CTA leaves the page.
export function CtaButton({
  children = "Book a Free Strategy Call",
  variant = "primary",
  className = "",
}: {
  children?: ReactNode;
  variant?: "primary" | "light";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-brand text-white shadow-[0_8px_24px_-8px_rgba(228,87,46,0.6)] hover:bg-brand-dark"
      : "bg-white text-ink hover:bg-brand-soft";
  return (
    <a
      href="#book"
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles} ${className}`}
    >
      {children}
      <Icon
        name="arrow"
        className="size-5 transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand uppercase">
      <span className="size-1.5 rounded-full bg-brand" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-[2.75rem] ${
          tone === "light" ? "text-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-lg leading-relaxed text-pretty ${
            tone === "light" ? "text-muted" : "text-white/65"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`px-5 py-20 md:px-8 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Tag({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${
        tone === "light"
          ? "border-line bg-white text-ink-soft"
          : "border-white/15 bg-white/5 text-white/80"
      }`}
    >
      {children}
    </span>
  );
}
