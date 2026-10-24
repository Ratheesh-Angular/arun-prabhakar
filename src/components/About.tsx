import { Reveal } from "./Reveal";

export function About() {
  return (
    <Reveal as="section" id="about" className="section-band section-pad">
      <div className="site-shell">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow mb-4">About Us</p>
          <h1 className="type-section">
            Frames shaped across South Indian cinema
          </h1>
          <p className="type-lead mt-7">
            Light, lens, and story from Tamil Nadu roots to sets in Bangalore.
          </p>
          <p className="mt-7 text-[0.75rem] font-medium tracking-[0.14em] text-muted uppercase">
            Based in Bangalore · Tamil &amp; Kannada cinema
          </p>
          <div className="type-body mt-8 space-y-5">
            <p>
              Arun Prabhakar is a film director and cinematographer with deep
              roots in Tamil Nadu and a working base in Bangalore. His craft
              spans the camera and the director&apos;s chair, lighting, framing,
              and guiding stories from set to screen across Tamil and Kannada
              cinema.
            </p>
            <p>
              Educated at Christ University, Bengaluru, he brings a disciplined
              eye to every frame: reading light, choosing lenses, and shaping
              mood so the story lands with clarity and feeling.
            </p>
            <p>
              From temple courtyards to studio floors, his work is grounded in
              respect for the craft and the people who make South Indian cinema
              what it is.
            </p>
            <p>
              Across years in the industry, Arun has built relationships with
              artists, directors, and public figures. That presence continues to
              guide how he approaches every new project.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
