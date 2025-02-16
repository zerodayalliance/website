import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz | ZeroDay Alliance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
