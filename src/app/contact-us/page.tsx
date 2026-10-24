import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Arun Prabhakar",
  description:
    "Contact Arun Prabhakar in Bangalore for direction and cinematography. Call or WhatsApp +91 93437 26271.",
};

export default function ContactUsPage() {
  return (
    <main className="pt-16">
      <Contact />
    </main>
  );
}
