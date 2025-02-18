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
    description: "company/zeroday-alliance-snu",
    link: "https://www.linkedin.com/company/zeroday-alliance-snu/",
  },
  {
    title: "GitHub",
    description: "@ZeroDay-Alliance-SNU",
    link: "https://github.com/ZeroDay-Alliance-SNU",
  },
  {
    title: "Instagram",
    description: "@zerodayalliance",
    link: "https://www.instagram.com/zerodayalliance/",
  },
  {
    title: "X (Twitter)",
    description: "@zerodayalliance",
    link: "https://x.com/zerodayalliance",
  },
  {
    title: "YouTube",
    description: "@ZeroDayAllianceSNU",
    link: "https://youtube.com/@ZeroDayAllianceSNU?sub_confirmation=1",
  },
  {
    title: "Email",
    description: "zerodayalliance@gmail.com",
    link: "mailto:zerodayalliance@gmail.com",
  },
];
