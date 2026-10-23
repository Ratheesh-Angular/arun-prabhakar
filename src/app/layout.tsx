import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://arunprabhakarfilms.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arun Prabhakar — Film Director & Cinematographer",
  description:
    "Arun Prabhakar — Film Director & Cinematographer based in Bangalore. Tamil cinema craft. Call or WhatsApp +91 93437 26271.",
  keywords: [
    "Arun Prabhakar",
    "film director",
    "cinematographer",
    "Tamil cinema",
    "Bangalore",
    "filmmaker",
  ],
  authors: [{ name: "Arun Prabhakar" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Arun Prabhakar — Film Director & Cinematographer",
    description:
      "Film Director & Cinematographer · Bangalore · Tamil cinema. Contact +91 93437 26271.",
    siteName: "Arun Prabhakar Films",
    images: [
      {
        url: "/hero-camera.jpg",
        width: 1200,
        height: 1600,
        alt: "Arun Prabhakar with a cinema camera on location",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Prabhakar — Film Director & Cinematographer",
    description:
      "Film Director & Cinematographer · Bangalore · Tamil cinema.",
    images: ["/hero-camera.jpg"],
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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-bg text-fg antialiased pb-[calc(4rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
