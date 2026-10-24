import Image from "next/image";
import { Reveal } from "./Reveal";

export function Signature() {
  return (
    <Reveal
      as="section"
      id="signature"
      className="section-band section-pad"
    >
      <div className="site-shell space-y-10 md:space-y-12">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Project</p>
          <h2 className="type-section">Kadhal Yuddham</h2>
          <p className="type-body mt-5">
            A credited work that brings story, lyrics, and direction together
            under one vision.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">On set</p>
            <h3 className="type-subhead">
              From the director&apos;s chair to the camera
            </h3>
            <p className="type-body mt-6">
              Whether writing the story, shaping lyrics, or guiding the frame,
              Arun works close to the craft on location, with the crew, and
              behind the lens.
            </p>
            <p className="type-body mt-5">
              His credit on Kadhal Yuddham reflects that full spectrum approach:
              story, lyrics, and direction under one name.
            </p>
            <p className="mt-8 text-[0.75rem] font-medium tracking-[0.15em] text-accent uppercase">
              Story · Lyrics · Direction
            </p>
          </div>

          <figure className="cinema-card m-0">
            <div className="media-frame">
              <Image
                src="/ap-working-with-camera.jpeg"
                alt="Arun Prabhakar working with a professional cinema camera on set"
                width={1536}
                height={2048}
                sizes="(max-width: 1024px) 100vw, 560px"
                className="mx-auto h-auto w-full max-w-md"
              />
            </div>
            <figcaption className="caption-panel">
              <p className="font-display text-[1.3rem] font-medium text-fg">
                Camera &amp; direction
              </p>
              <p className="type-caption mt-1.5">Hands on with the frame</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </Reveal>
  );
}
