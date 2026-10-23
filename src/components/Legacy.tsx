import Image from "next/image";
import { Reveal } from "./Reveal";

export function Legacy() {
  return (
    <Reveal as="section" id="presence" className="relative bg-bg-elevated">
      <div className="relative min-h-[65svh] w-full md:min-h-[80svh]">
        <Image
          src="/legacy-ilayaraja.jpg"
          alt="Arun Prabhakar with legendary composer Ilayaraja"
          fill
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-bg/25"
          aria-hidden="true"
        />
        <div className="credit-strip credit-strip--animate absolute right-0 bottom-0 left-0 z-10 px-[clamp(1.25rem,4vw,2.5rem)] py-5 md:py-7">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
            <div>
              <p className="m-0 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.25rem)] font-semibold tracking-wide text-fg">
                With Ilayaraja
              </p>
              <p className="mt-1 m-0 text-[0.7rem] font-medium tracking-[0.2em] text-accent uppercase">
                Tamil cinema
              </p>
            </div>
            <p className="m-0 max-w-md text-[0.95rem] leading-relaxed text-muted md:text-right">
              Years in the industry have placed Arun alongside voices that
              shaped Tamil film music and storytelling — including the legendary
              Ilayaraja. A career built on trust, presence, and lasting
              relationships on and off the set.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
