import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-end overflow-hidden"
      aria-label="Introduction"
    >
      <div className="letterbox letterbox--top" aria-hidden="true" />
      <div className="letterbox letterbox--bottom" aria-hidden="true" />

      <div className="absolute inset-0">
        <Image
          src="/hero-camera.jpg"
          alt="Arun Prabhakar beside a professional cinema camera on location"
          fill
          priority
          sizes="100vw"
          className="hero-ken object-cover object-[62%_center] md:object-[55%_center]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,8,0.98)_0%,rgba(8,8,8,0.5)_36%,rgba(8,8,8,0.2)_58%,rgba(8,8,8,0.45)_100%),radial-gradient(ellipse_at_50%_35%,transparent_0%,rgba(8,8,8,0.5)_100%)]"
          aria-hidden="true"
        />
      </div>

      <div className="hero-animate relative z-10 mx-auto w-full max-w-5xl px-[clamp(1.25rem,4vw,2.5rem)] pt-[calc(3.75rem+2rem)] pb-[clamp(3.5rem,11vh,6rem)] md:pb-[clamp(4.5rem,12vh,7.5rem)]">
        <p className="bangalore-chip mb-4 inline-block border border-accent/70 px-2.5 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-accent uppercase">
          Bangalore
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,12vw,5.75rem)] leading-[0.95] font-semibold tracking-[-0.02em] md:text-[clamp(4.5rem,7vw,6.25rem)]">
          Arun Prabhakar
        </h1>
        <p className="mt-3.5 text-[clamp(1rem,2.5vw,1.2rem)] font-normal text-muted">
          Film Director &amp; Cinematographer
        </p>
        <div className="mt-7 hidden flex-wrap gap-3 md:flex">
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
    </section>
  );
}
