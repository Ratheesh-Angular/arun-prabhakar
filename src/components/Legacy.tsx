import Image from "next/image";
import { Reveal } from "./Reveal";

export function Legacy() {
  return (
    <Reveal as="section" id="legacy" className="bg-bg-elevated py-0">
      <div className="mx-auto grid max-w-5xl md:min-h-[32rem] md:grid-cols-[1.05fr_1fr]">
        <figure className="m-0 overflow-hidden">
          <div className="relative h-[min(70vh,36rem)] w-full md:h-full md:min-h-[32rem]">
            <Image
              src="/legacy-ilayaraja.jpg"
              alt="Arun Prabhakar with legendary composer Ilayaraja"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </figure>
        <div className="flex max-w-md flex-col justify-center px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(2.5rem,8vw,4rem)] md:px-10 md:py-14 lg:pl-14 lg:pr-12">
          <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.2em] text-accent uppercase">
            Legacy
          </p>
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,2.85rem)] leading-[1.15] font-semibold tracking-[-0.01em]">
            Alongside legends of Tamil cinema
          </h2>
          <p className="text-muted">
            Years in the industry have brought Arun into the company of figures
            who shaped Tamil film music and storytelling — including the
            legendary Ilayaraja. These associations speak to a career built on
            trust, presence, and lasting relationships on and off the set.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
