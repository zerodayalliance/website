import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines| ZeroDay Alliance SNU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
