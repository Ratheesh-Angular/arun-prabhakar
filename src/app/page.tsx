import { Contact } from "@/components/Contact";
import { Craft } from "@/components/Craft";
import { Education } from "@/components/Education";
import { Hero } from "@/components/Hero";
import { Presence } from "@/components/Presence";
import { Signature } from "@/components/Signature";

export default function Home() {
  return (
    <main>
      <Hero />
      <Education />
      <Presence />
      <Craft />
      <Signature />
      <Contact teaser />
    </main>
  );
}
