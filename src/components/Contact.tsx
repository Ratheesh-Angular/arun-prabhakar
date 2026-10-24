import { Reveal } from "./Reveal";

type ContactProps = {
  teaser?: boolean;
};

export function Contact({ teaser = false }: ContactProps) {
  if (teaser) {
    return (
      <Reveal as="section" id="contact" className="section-band section-pad">
        <div className="site-shell">
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="type-section text-[clamp(1.9rem,4vw,2.65rem)]">
              Let&apos;s talk about your next frame
            </h2>
            <p className="type-body mx-auto mt-5 max-w-md">
              Reach Arun for direction, cinematography, and on set
              collaborations.
            </p>
            <a href="/contact-us" className="btn-outline mt-9">
              Contact Us
            </a>
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal as="section" id="contact" className="section-band section-pad">
      <div className="site-shell">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-4">Contact Us</p>
          <h1 className="type-section">Get in touch</h1>
          <p className="type-body mx-auto mt-5 max-w-md">
            Reach Arun for direction, cinematography, and on set collaborations.
          </p>
          <a
            href="tel:+919343726271"
            className="font-display mt-8 inline-block text-[clamp(2.25rem,7vw,3.5rem)] leading-none font-medium tracking-[0.02em] transition-colors hover:text-accent"
          >
            +91 93437 26271
          </a>
          <p className="mt-6 text-[0.75rem] font-medium tracking-[0.15em] text-muted uppercase">
            Bangalore · Karnataka · 560095
          </p>
          <p className="type-caption mt-2.5">arunprabhakarfilms.com</p>
        </div>
      </div>
    </Reveal>
  );
}
