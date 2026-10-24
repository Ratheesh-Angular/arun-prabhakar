import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="section-band pt-[calc(4rem+1.5rem)] pb-[clamp(3.5rem,10vw,5.5rem)] md:pt-[calc(4rem+2rem)]"
      aria-label="Introduction"
    >
      <div className="site-shell">
        <figure className="cinema-card hero-animate m-0">
          <div className="media-frame">
            <Image
              src="/banner-image.jpeg"
              alt="Kadhal Yuddham banner with Tamil Film Producers Council credit for Arun Prabhakaran"
              width={1280}
              height={512}
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="h-auto w-full"
            />
          </div>
        </figure>

        <div className="hero-animate-delay mt-[clamp(2.25rem,6vw,3.5rem)] mb-[clamp(2.25rem,6vw,3.5rem)] max-w-3xl">
          <h1 className="type-hero">Arun Prabhakar</h1>
          <p className="mt-4 text-[clamp(1.1rem,2.4vw,1.3rem)] text-muted">
            Film Director &amp; Cinematographer
          </p>
          <p className="type-body mt-6 max-w-xl">
            Bangalore based film director and cinematographer working across
            Tamil and Kannada cinema, shaping stories through light, lens, and
            direction.
          </p>
        </div>

        <figure className="cinema-card m-0">
          <div className="media-frame">
            <Image
              src="/ap-holding-camera.jpeg"
              alt="Arun Prabhakar standing with a professional cinema camera"
              width={1200}
              height={1600}
              sizes="(max-width: 1152px) 100vw, 720px"
              className="mx-auto h-auto w-full max-w-xl"
            />
          </div>
          <figcaption className="caption-panel">
            <p className="type-caption">
              On location with the camera, ready for the next frame.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
