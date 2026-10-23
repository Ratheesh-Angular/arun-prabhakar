"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 flex h-[3.75rem] items-center justify-between px-[clamp(1.25rem,4vw,2.5rem)] transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-fg/10 bg-bg/92 backdrop-blur-md"
          : "bg-gradient-to-b from-bg/80 to-transparent"
      }`}
    >
      <a
        href="#top"
        className="font-[family-name:var(--font-display)] text-[1.35rem] font-semibold tracking-[0.12em] text-fg"
        aria-label="Arun Prabhakar — back to top"
      >
        AP
      </a>
      <nav className="hidden gap-7 md:flex" aria-label="Primary">
        {[
          { href: "#about", label: "About" },
          { href: "#presence", label: "Presence" },
          { href: "#craft", label: "Craft" },
          { href: "#contact", label: "Contact" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[0.75rem] font-medium tracking-[0.12em] text-muted uppercase transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
