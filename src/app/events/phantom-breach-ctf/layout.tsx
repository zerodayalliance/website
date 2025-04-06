import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phantom Breach CTF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
