import { Reveal } from "./Reveal";

const pillars = [
  {
    number: "01",
    title: "Direction",
    text: "Guiding performance, pace, and story from the director's chair, keeping every scene aligned with the larger picture.",
  },
  {
    number: "02",
    title: "Cinematography",
    text: "Light, lens, and composition that serve emotion, shaping mood on location and in controlled set environments.",
  },
  {
    number: "03",
    title: "On set camera",
    text: "Hands on work with professional cinema cameras, including ARRI systems, from temple courtyards to studio floors.",
  },
];

export function Craft() {
  return (
    <Reveal
      as="section"
      id="craft"
      className="section-band--elevated section-pad"
    >
      <div className="site-shell">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="eyebrow mb-4">Craft</p>
          <h2 className="type-section">How the work takes shape</h2>
          <p className="type-body mt-5">
            Direction, cinematography, and camera. Three disciplines, one
            cinematic eye.
          </p>
        </div>

        <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-3 md:gap-8">
          {pillars.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              className="border-t border-fg/12 pt-7"
              delay={index * 100}
            >
              <p className="text-[0.75rem] font-medium tracking-[0.16em] text-accent">
                {item.number}
              </p>
              <h3 className="type-subhead mt-5 text-[1.75rem]">{item.title}</h3>
              <p className="type-body mt-4">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
