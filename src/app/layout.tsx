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
  title: "ZeroDay Alliance SNU",
  description: "Securing Tomorrow, One Vulnerability at a Time",
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
