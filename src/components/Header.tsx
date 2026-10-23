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
      className={`fixed top-0 right-0 left-0 z-40 flex h-[3.75rem] items-center justify-between px-[clamp(1.25rem,4vw,2.5rem)] transition-[background,border-color,backdrop-filter] duration-400 ${
        scrolled
          ? "border-b border-fg/12 bg-bg/92 backdrop-blur-md"
          : "bg-gradient-to-b from-bg/85 to-transparent"
      }`}
    >
      <a
        href="#top"
        className="font-[family-name:var(--font-display)] text-[1.2rem] font-semibold tracking-wide"
      >
        Arun Prabhakar
      </a>
      <nav className="hidden gap-7 md:flex" aria-label="Primary">
        {[
          { href: "#about", label: "About" },
          { href: "#legacy", label: "Legacy" },
          { href: "#contact", label: "Contact" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[0.8rem] font-medium tracking-[0.08em] text-muted uppercase transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
