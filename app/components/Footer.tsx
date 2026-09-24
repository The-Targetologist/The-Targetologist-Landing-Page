import { contact } from "@/lib/content";
import { Icon } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 pt-12 pb-28 text-white/60 md:px-8 md:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Logo className="h-11 w-auto text-white" />
          <p className="mt-4 text-sm leading-relaxed">
            Revenue systems for B2B service businesses. Serving US-based
            businesses.
          </p>
        </div>
        <ul className="space-y-3 text-sm">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2.5 hover:text-white"
            >
              <Icon name="mail" className="size-4 text-brand" />
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center gap-2.5 hover:text-white"
            >
              <Icon name="phone" className="size-4 text-brand" />
              {contact.phone}
            </a>
          </li>
          <li className="flex items-start gap-2.5">
            <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-brand" />
            {contact.address}
          </li>
        </ul>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:justify-between">
        <p>Copyright {new Date().getFullYear()} The Targetologist. All rights reserved.</p>
        <div className="flex gap-5">
          <a href={contact.privacyUrl} className="hover:text-white">
            Privacy Policy
          </a>
          <a href={contact.termsUrl} className="hover:text-white">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
