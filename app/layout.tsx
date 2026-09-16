import type { Metadata } from "next";
import { Caveat, Patrick_Hand } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const hand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-hand",
});

const scribble = Caveat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-scribble",
});

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.ticker}`,
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    images: ["/arceus-prime-banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${hand.variable} ${scribble.variable} font-hand text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
