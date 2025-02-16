"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Contactcard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "GitHub",
    description: "ZeroDay-Alliance-SNU",
    link: "https://github.com/ZeroDay-Alliance-SNU",
  },
  {
    title: "LinkedIn",
    description: "zeroday-alliance-snu",
    link: "https://www.linkedin.com/company/zeroday-alliance-snu/",
  },
  {
    title: "Instagram",
    description: "zerodayalliance",
    link: "https://www.instagram.com/zerodayalliance/",
  },
];
