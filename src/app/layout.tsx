import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCta } from "@/components/StickyCta";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
