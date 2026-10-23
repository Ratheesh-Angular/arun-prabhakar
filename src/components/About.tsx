import { Reveal } from "./Reveal";

export function About() {
  return (
    <Reveal
      as="section"
      id="about"
      className="border-t border-fg/10 px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(4.5rem,12vw,7.5rem)]"
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.2em] text-accent uppercase">
          About
        </p>
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,2.85rem)] leading-[1.15] font-semibold tracking-[-0.01em]">
          Frames shaped by Tamil cinema
        </h2>
        <p className="mb-8 font-[family-name:var(--font-display)] text-[clamp(1.35rem,3.5vw,1.85rem)] leading-[1.35] font-medium text-fg italic">
          Light, lens, and story — from Tamil Nadu roots to sets in Bangalore.
        </p>
        <p className="mb-4 text-[0.75rem] font-medium tracking-[0.14em] text-muted uppercase">
          Based in Bangalore · Tamil cinema
        </p>
        <p className="mb-[1.15rem] text-[1.05rem] leading-relaxed text-muted">
          Arun Prabhakar is a film director and cinematographer with deep roots
          in Tamil Nadu and a working base in Bangalore. His craft spans the
          camera and the director&apos;s chair — lighting, framing, and guiding
          stories from set to screen.
        </p>
        <p className="mb-[1.15rem] text-[1.05rem] leading-relaxed text-muted">
          On location and in production, he brings a disciplined eye to every
          frame: reading light, choosing lenses, and shaping mood so the story
          lands with clarity and feeling.
        </p>
        <p className="text-[1.05rem] leading-relaxed text-muted">
          From temple courtyards to studio floors, his work is grounded in
          respect for the craft and the people who make Tamil cinema what it is.
        </p>
      </div>
    </Reveal>
  );
}
