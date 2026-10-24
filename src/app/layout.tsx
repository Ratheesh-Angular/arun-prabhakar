import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCta } from "@/components/StickyCta";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteUrl = "https://arunprabhakarfilms.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arun Prabhakar | Film Director & Cinematographer",
  description:
    "Arun Prabhakar, Film Director and Cinematographer based in Bangalore. Tamil and Kannada cinema. Call or WhatsApp +91 93437 26271.",
  keywords: [
    "Arun Prabhakar",
    "film director",
    "cinematographer",
    "filmographer",
    "Tamil cinema",
    "Kannada cinema",
    "Bangalore",
    "filmmaker",
    "Kadhal Yuddham",
  ],
  authors: [{ name: "Arun Prabhakar" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Arun Prabhakar | Film Director & Cinematographer",
    description:
      "Film Director and Cinematographer in Bangalore. Tamil and Kannada cinema. Contact +91 93437 26271.",
    siteName: "Arun Prabhakar Films",
    images: [
      {
        url: "/ap-holding-camera.jpeg",
        width: 1536,
        height: 2048,
        alt: "Arun Prabhakar with a cinema camera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Prabhakar | Film Director & Cinematographer",
    description:
      "Film Director and Cinematographer in Bangalore. Tamil and Kannada cinema.",
    images: ["/ap-holding-camera.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="bg-bg font-sans text-fg antialiased pb-[calc(4rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        <div className="grain" aria-hidden="true" />
        <Header />
        {children}
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
