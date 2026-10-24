import Image from "next/image";
import { Reveal } from "./Reveal";

const featured = {
  src: "/legacy-ilayaraja.jpg",
  width: 651,
  height: 960,
  title: "With Ilayaraja",
  subtitle: "Tamil cinema legend",
  lines: [
    "Ilayaraja stands among the greatest composers Indian cinema has ever known.",
    "His music shaped generations of Tamil film storytelling with emotion and mastery.",
    "Sharing a frame with him is a moment of deep respect for Arun.",
    "It reflects trust earned through years of presence in the industry.",
    "A quiet reminder that craft grows through the company of true legends.",
  ],
};

const frames = [
  {
    src: "/ap-with-shivarajkumar.jpeg",
    width: 720,
    height: 720,
    title: "With Shivarajkumar",
    subtitle: "Kannada cinema",
    lines: [
      "Shivarajkumar is a defining star of Kannada cinema and a beloved screen presence.",
      "His films carry energy, warmth, and a lasting connection with audiences.",
      "Standing beside him marks Arun's place across South Indian film circles.",
      "It is a proud moment that bridges Tamil roots and Kannada industry respect.",
      "A photograph that speaks of friendship, craft, and shared cinematic ground.",
    ],
  },
  {
    src: "/ap-with-upendra.jpeg",
    width: 1200,
    height: 1800,
    title: "With Upendra",
    subtitle: "Kannada director",
    lines: [
      "Upendra is known for bold ideas and a distinctive voice in Kannada film.",
      "As a director and performer, he has influenced a generation of storytellers.",
      "This meeting brings two creative minds together on common artistic ground.",
      "For Arun, it is a valued connection with a filmmaker of strong vision.",
      "A moment that celebrates courage, originality, and the power of cinema.",
    ],
  },
  {
    src: "/ap-with-rk-selvamani.jpeg",
    width: 912,
    height: 1600,
    title: "With RK Selvamani",
    subtitle: "Tamil director",
    lines: [
      "RK Selvamani is a respected name in Tamil cinema direction.",
      "His films are remembered for intensity, craft, and strong screen presence.",
      "Sharing this frame reflects Arun's ties within Tamil film leadership.",
      "It is a bond built on sets, stories, and mutual regard for the medium.",
      "A picture of mentors, peers, and the lasting spirit of Tamil cinema.",
    ],
  },
  {
    src: "/ap-with-sadhu-kokila.jpeg",
    width: 1536,
    height: 2048,
    title: "With Sadhu Kokila",
    subtitle: "Actor",
    lines: [
      "Sadhu Kokila brings humour, music, and memorable performances to Kannada cinema.",
      "His versatility has made him a familiar and loved face on screen.",
      "This photograph captures a warm industry friendship beyond the camera.",
      "For Arun, such moments keep the journey personal as well as professional.",
      "A celebration of creative souls who keep film culture lively and human.",
    ],
  },
  {
    src: "/ap-with-rajasimman.jpeg",
    width: 720,
    height: 1022,
    title: "With Rajasimman",
    subtitle: "Actor",
    lines: [
      "Rajasimman is known for powerful character work on the Tamil screen.",
      "His presence adds force and feeling to the stories he joins.",
      "Standing with him shows Arun's circle across acting and direction.",
      "These relationships grow from shared hours on set and mutual trust.",
      "A frame that honours the artists who give cinema its living pulse.",
    ],
  },
  {
    src: "/ap-with-gandhi-kannadasan.jpeg",
    width: 720,
    height: 960,
    title: "With Gandhi Kannadasan",
    subtitle: "Industry",
    lines: [
      "Gandhi Kannadasan is part of the wider creative world Arun moves in.",
      "Industry friendships like this support long careers in film.",
      "The photograph marks respect, goodwill, and shared paths in cinema.",
      "It reflects how relationships off camera strengthen work on camera.",
      "A quiet tribute to the people who walk the journey together.",
    ],
  },
  {
    src: "/ap-with-thirumavalavan.jpeg",
    width: 1511,
    height: 2015,
    title: "With Thirumavalavan",
    subtitle: "Public life",
    lines: [
      "Thol. Thirumavalavan is a prominent voice in public life and social thought.",
      "This meeting shows Arun's presence beyond the film set alone.",
      "It is a moment of dialogue between cinema and civic leadership.",
      "Such frames speak to respect across different spheres of influence.",
      "A reminder that storytelling and public life often share the same stage.",
    ],
  },
];

export function Presence() {
  return (
    <section id="presence" className="section-band section-pad">
      <div className="site-shell">
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <p className="eyebrow mb-4">Presence</p>
          <h2 className="type-section">On and off the set</h2>
          <p className="type-body mt-5">
            A career built on trust, presence, and lasting relationships across
            Tamil and Kannada cinema.
          </p>
        </Reveal>

        <Reveal className="cinema-card mb-10 grid overflow-hidden md:mb-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="media-frame min-h-[18rem] border-b border-fg/10 lg:border-r lg:border-b-0">
            <Image
              src={featured.src}
              alt={featured.title}
              width={featured.width}
              height={featured.height}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="mx-auto h-auto w-full max-w-sm"
            />
          </div>
          <div className="flex flex-col justify-center p-[clamp(1.75rem,4.5vw,2.75rem)]">
            <p className="eyebrow mb-4">{featured.subtitle}</p>
            <h3 className="type-subhead">{featured.title}</h3>
            <div className="type-body mt-5 space-y-3.5">
              {featured.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <ul className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {frames.map((frame, index) => (
            <Reveal
              key={frame.src}
              as="li"
              className="cinema-card"
              delay={Math.min(index * 50, 200)}
            >
              <figure className="m-0 flex h-full flex-col">
                <div className="media-frame min-h-[16rem]">
                  <Image
                    src={frame.src}
                    alt={frame.title}
                    width={frame.width}
                    height={frame.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="mx-auto h-auto max-h-[22rem] w-full object-contain"
                  />
                </div>
                <figcaption className="caption-panel mt-auto">
                  <p className="font-display text-[1.35rem] font-medium text-fg">
                    {frame.title}
                  </p>
                  <p className="mt-1.5 text-[0.7rem] font-medium tracking-[0.15em] text-accent uppercase">
                    {frame.subtitle}
                  </p>
                  <div className="type-caption mt-4 space-y-2.5">
                    {frame.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
