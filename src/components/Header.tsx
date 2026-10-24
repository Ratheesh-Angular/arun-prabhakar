"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/#presence", label: "Presence" },
  { href: "/#craft", label: "Craft" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-[background,border-color,backdrop-filter,box-shadow] duration-300 ${
        scrolled || menuOpen
          ? "border-b border-fg/10 bg-bg/95 shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-lg"
          : "bg-gradient-to-b from-bg/85 to-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-[clamp(1.35rem,4.5vw,2.75rem)]">
        <Link
          href="/"
          className="font-display text-[1.35rem] font-medium tracking-[0.04em] text-fg"
          aria-label="Filmographer home"
          onClick={() => setMenuOpen(false)}
        >
          Filmographer
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.72rem] font-medium tracking-[0.14em] text-muted uppercase transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-0.5 w-full bg-fg transition-transform duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-fg transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-fg transition-transform duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`border-t border-fg/10 bg-bg md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="m-0 flex list-none flex-col gap-1 px-[clamp(1.35rem,4.5vw,2.75rem)] py-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 text-[0.95rem] font-medium tracking-[0.1em] text-fg uppercase transition-colors hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
