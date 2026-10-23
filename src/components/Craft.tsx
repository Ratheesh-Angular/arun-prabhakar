import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Direction",
    text: "Guiding performance, pace, and story with a clear eye for the whole picture.",
  },
  {
    title: "Cinematography",
    text: "Light, lens, and composition that serve emotion — not just the shot list.",
  },
  {
    title: "On-set camera",
    text: "Hands-on work with professional cinema cameras, from temple courtyards to studio floors.",
  },
];

export function Craft() {
  return (
    <Reveal
      as="section"
      id="craft"
      className="border-t border-fg/12 px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(4rem,12vw,7rem)]"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.2em] text-accent uppercase">
          Craft
        </p>
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,2.85rem)] leading-[1.15] font-semibold tracking-[-0.01em]">
          How the work takes shape
        </h2>
        <ul className="mt-2 grid gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((item) => (
            <li key={item.title} className="border-t border-fg/12 pt-6 md:pt-7">
              <h3 className="mb-2 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold text-fg">
                {item.title}
              </h3>
              <p className="max-w-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
