"use client";

import { useEffect, useState } from "react";

// Sticky bottom CTA on phones. Appears after the hero and hides while the
// booking section is on screen, so it never covers the form.
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const book = document.getElementById("book");
    let pastHero = false;
    let bookInView = false;
    const update = () => setVisible(pastHero && !bookInView);

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.6;
      update();
    };
    const observer = new IntersectionObserver(([entry]) => {
      bookInView = entry.isIntersecting;
      update();
    });
    if (book) observer.observe(book);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="#book"
        tabIndex={visible ? 0 : -1}
        className="flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 font-semibold text-white"
      >
        Book a Free Strategy Call
      </a>
    </div>
  );
}
