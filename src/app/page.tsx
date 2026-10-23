import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Craft } from "@/components/Craft";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Legacy } from "@/components/Legacy";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Legacy />
        <Craft />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
