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
    title: "LinkedIn",
    description: "company/zeroday-alliance",
    link: "https://www.linkedin.com/company/zeroday-alliance",
  },
  {
    title: "GitHub",
    description: "@zerodayalliance",
    link: "https://github.com/zerodayalliance",
  },
  {
    title: "Instagram",
    description: "@zerodayalliance",
    link: "https://www.instagram.com/zerodayalliance",
  },
  {
    title: "X (Twitter)",
    description: "@zerodayalliance",
    link: "https://x.com/zerodayalliance",
  },
  {
    title: "YouTube",
    description: "@zerodayalliance",
    link: "https://youtube.com/@zerodayalliance?sub_confirmation=1",
  },
  {
    title: "Email",
    description: "hello@zerodayalliance.tech",
    link: "mailto:hello@zerodayalliance.tech",
  },
];
