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
  title: "ZeroDay Alliance – Best Cybersecurity Club in Kolkata | Sister Nivedita University",
  description: "ZeroDay Alliance is the official Cybersecurity Club of Sister Nivedita University, Kolkata. Join us for ethical hacking workshops, Capture the Flag (CTF) competitions, and hands-on cybersecurity training – the best student cybersecurity club in Kolkata.",
  keywords: [
    "Cybersecurity Club Kolkata",
    "Best Cybersecurity Club in Kolkata",
    "Student Cybersecurity Club Kolkata",
    "Sister Nivedita University Cybersecurity Club",
    "ZeroDay Alliance",
    "Ethical Hacking Club Kolkata",
    "Cybersecurity Workshops Kolkata",
    "Capture the Flag Kolkata",
    "Cybersecurity Events Kolkata",
    "Ethical Hacking Workshop for Students Kolkata",
    "Cybersecurity Hackathon Kolkata",
    "SNU Cybersecurity Club"
  ],
  robots: "index, follow",
  authors: [
    { name: "ZeroDay Alliance" },
    { name: "Sister Nivedita University" }
  ],
  openGraph: {
    type: "website",
    url: "https://zerodayalliance.tech/",
    title: "ZeroDay Alliance – Best Cybersecurity Club in Kolkata | SNU",
    description: "Join ZeroDay Alliance – the official Cybersecurity Club of Sister Nivedita University, Kolkata. Hands-on ethical hacking workshops, CTF competitions & cybersecurity events.",
    images: [
      {
        url: "https://zerodayalliance.tech/assets/images/zeroday-banner.jpg",
        width: 1200,
        height: 630,
        alt: "ZeroDay Alliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroDay Alliance – Best Cybersecurity Club in Kolkata | SNU",
    description: "SNU’s official Cybersecurity Club. Workshops, Hackathons, CTFs & Ethical Hacking training in Kolkata.",
    images: ["https://zerodayalliance.tech/assets/images/zeroday-banner.jpg"],
  },

  // please follow these hierarchy to update the themed logo during festive seasons -Agnik 
  icons: {
    icon: "images.favicon/durga_puja_logo.ico",   
    shortcut: "images.favicon/durga_puja_logo.ico",
    apple: "images.favicon/durga_puja_logo.ico",
  },

  other: {
    canonical: "https://zerodayalliance.tech/",
    copyright: "ZeroDay Alliance, Sister Nivedita University",
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
      >
        {children}
      </body>
    </html>
  );
}
