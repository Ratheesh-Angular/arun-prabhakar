import Image from "next/image";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Reveal
      as="section"
      id="education"
      className="section-band--elevated section-pad"
    >
      <div className="site-shell">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="eyebrow mb-4">Education</p>
          <h2 className="type-section">Christ University, Bengaluru</h2>
        </div>

        <div className="cinema-card grid overflow-hidden lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="media-frame border-b border-fg/10 lg:border-r lg:border-b-0">
            <Image
              src="/christ-university.png"
              alt="Christ University main building campus, Bengaluru"
              width={1357}
              height={753}
              sizes="(max-width: 1024px) 100vw, 700px"
              className="h-auto w-full"
            />
          </div>
          <div className="flex flex-col justify-center p-[clamp(1.75rem,4.5vw,2.75rem)]">
            <p className="inline-flex w-fit border border-accent/40 px-2.5 py-1 text-[0.7rem] font-medium tracking-[0.16em] text-accent uppercase">
              Academic foundation
            </p>
            <h3 className="type-subhead mt-6">Where the journey began</h3>
            <p className="type-body mt-5">
              An academic foundation in Bengaluru, grounding the craft that
              continues on set today.
            </p>
            <p className="type-caption mt-8">
              Hosur Main Road, Bhavani Nagar,
              <br />
              Bengaluru, Karnataka 560029
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
