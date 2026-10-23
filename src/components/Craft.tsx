import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Direction",
    text: "Guiding performance, pace, and story from the director's chair — keeping every scene aligned with the larger picture.",
  },
  {
    title: "Cinematography",
    text: "Light, lens, and composition that serve emotion: shaping mood on location and in controlled set environments.",
  },
  {
    title: "On-set camera",
    text: "Hands-on work with professional cinema cameras — including ARRI systems — from temple courtyards to studio floors.",
  },
];

export function Craft() {
  return (
    <Reveal
      as="section"
      id="craft"
      className="border-t border-fg/10 px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(4.5rem,12vw,7.5rem)]"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.2em] text-accent uppercase">
          Craft
        </p>
        <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,2.85rem)] leading-[1.15] font-semibold tracking-[-0.01em] md:mb-12">
          How the work takes shape
        </h2>
        <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((item, index) => (
            <Reveal
              key={item.title}
              as="div"
              className="border-t border-fg/12 pt-6 md:pt-7"
              delay={index * 120}
            >
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold text-fg">
                {item.title}
              </h3>
              <p className="max-w-sm text-[1.02rem] leading-relaxed text-muted">
                {item.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
