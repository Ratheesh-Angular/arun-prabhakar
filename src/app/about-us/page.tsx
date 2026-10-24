import type { Metadata } from "next";
import { About } from "@/components/About";
import { Education } from "@/components/Education";

export const metadata: Metadata = {
  title: "About Us | Arun Prabhakar",
  description:
    "About Arun Prabhakar, film director and cinematographer based in Bangalore, working across Tamil and Kannada cinema.",
};

export default function AboutUsPage() {
  return (
    <main className="pt-16">
      <About />
      <Education />
    </main>
  );
}
