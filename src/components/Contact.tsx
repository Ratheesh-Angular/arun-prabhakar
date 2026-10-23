import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <Reveal
      as="section"
      id="contact"
      className="px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(5rem,14vw,8.5rem)] text-center"
    >
      <div className="mx-auto max-w-lg">
        <a
          href="tel:+919343726271"
          className="inline-block font-[family-name:var(--font-display)] text-[clamp(2.25rem,8vw,4rem)] leading-none font-semibold tracking-wide transition-colors hover:text-accent"
        >
          +91 93437 26271
        </a>
        <p className="mt-4 text-[0.75rem] font-medium tracking-[0.18em] text-muted uppercase">
          Bangalore
        </p>
        <p className="mt-2 text-[0.85rem] text-muted">
          arunprabhakarfilms.com
        </p>
        <div className="mt-8 hidden flex-wrap justify-center gap-3 md:flex">
          <a
            href="tel:+919343726271"
            className="inline-flex min-h-12 items-center justify-center bg-accent px-6 text-[0.85rem] font-semibold tracking-[0.06em] text-bg uppercase transition-colors hover:bg-accent-hover"
          >
            Call
          </a>
          <a
            href="https://wa.me/919343726271"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center border border-fg/20 px-6 text-[0.85rem] font-semibold tracking-[0.06em] text-fg uppercase transition-colors hover:border-accent hover:text-accent"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </Reveal>
  );
}
