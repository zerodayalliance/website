import type { Metadata } from "next";
import {
  Encode_Sans,
  Encode_Sans_Condensed,
  Gidugu,
  Iceberg,
} from "next/font/google";
import "@/styles/globals.css";

const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const encodeSansCondensed = Encode_Sans_Condensed({
  variable: "--font-encode-sans-condensed",
  subsets: ["latin"],
  weight: ["300", "700"],
});

const gidugu = Gidugu({
  variable: "--font-gidugu",
  subsets: ["latin"],
  weight: "400",
});

const iceberg = Iceberg({
  variable: "--font-iceberg",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ZeroDay Alliance",
  description:
    "ZeroDay Alliance is the official Cybersecurity Club of Sister Nivedita University, Kolkata. Join us for ethical hacking workshops, Capture the Flag (CTF) competitions, and hands-on cybersecurity training - the best student cybersecurity club in Kolkata.",
  keywords: [
    "ZeroDay Alliance",
    "Cybersecurity Club Kolkata",
    "Best Cybersecurity Club in Kolkata",
    "Student Cybersecurity Club Kolkata",
    "Sister Nivedita University Cybersecurity Club",
    "Ethical Hacking Club Kolkata",
    "Cybersecurity Workshops Kolkata",
    "Capture The Flag Kolkata",
    "CTF Competitions Kolkata",
    "Cybersecurity Events Kolkata",
    "Ethical Hacking Workshop for Students Kolkata",
    "Cybersecurity Hackathon Kolkata",
    "SNU Cybersecurity Club",
  ],
  robots: "index, follow",
  creator: "ZeroDay Alliance",
  authors: [{ name: "ZeroDay Alliance", url: "https://zerodayalliance.tech" }],

  openGraph: {
    type: "website",
    url: "https://zerodayalliance.tech",
    title: "ZeroDay Alliance",
    description:
      "Join ZeroDay Alliance, the official Cybersecurity Club of Sister Nivedita University, Kolkata for Hands-on ethical hacking workshops, CTF competitions & cybersecurity events.",
    images: [
      {
        url: "https://zerodayalliance.tech/banner.png",
        width: 1200,
        height: 630,
        alt: "ZeroDay Alliance",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ZeroDay Alliance",
    description:
      "Join ZeroDay Alliance, the official Cybersecurity Club of Sister Nivedita University, Kolkata for Hands-on ethical hacking workshops, CTF competitions & cybersecurity events.",
    images: ["https://zerodayalliance.tech/banner.png"],
    creator: "@zerodayalliance",
  },

  // please follow these hierarchy to update the themed logo during festive seasons -Agnik
  icons: {
    icon: "/images.favicon/diwali.ico",
    shortcut: "/images.favicon/diwali.ico",
    apple: "/images.favicon/diwali.ico",
  },

  other: {
    canonical: "https://zerodayalliance.tech",
    copyright: "ZeroDay Alliance",
    rating: "General",
    "http-equiv": "X-UA-Compatible",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${encodeSans.variable} ${encodeSansCondensed.variable} ${gidugu.variable} ${iceberg.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
