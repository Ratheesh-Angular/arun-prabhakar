import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <Reveal
      as="section"
      id="contact"
      className="border-t border-fg/12 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,163,90,0.18),transparent_55%),#0c0c0c] px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(4rem,12vw,7rem)] text-center"
    >
      <div className="mx-auto max-w-md">
        <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.2em] text-accent uppercase">
          Address
        </p>
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,2.85rem)] leading-[1.15] font-semibold tracking-[-0.01em]">
          Get in touch
        </h2>
        <p className="mb-4 text-[0.85rem] tracking-[0.12em] text-muted uppercase">
          Bangalore, India
        </p>
        <a
          href="tel:+919343726271"
          className="mb-7 inline-block font-[family-name:var(--font-display)] text-[clamp(1.85rem,6vw,2.75rem)] leading-tight font-semibold tracking-wide transition-colors hover:text-accent"
        >
          +91 93437 26271
        </a>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="tel:+919343726271"
            className="inline-flex min-h-12 items-center justify-center bg-accent px-6 text-[0.85rem] font-semibold tracking-[0.06em] text-bg uppercase transition-colors hover:bg-accent-hover"
          >
            Call now
          </a>
          <a
            href="https://wa.me/919343726271"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center border border-fg/12 px-6 text-[0.85rem] font-semibold tracking-[0.06em] text-fg uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </Reveal>
  );
}
