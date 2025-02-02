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
    title: "Github",
    description:
      "ZeroDay-Alliance-SNU",
    link: "https://github.com/ZeroDay-Alliance-SNU",
  },
  {
    title: "LinkedIn",
    description:
    "zeroday-alliance-snu",
    link: "https://netflhttps://www.linkedin.com/company/zeroday-alliance-snu/posts/?feedView=allix.com",
  },
  {
    title: "Instagram",
    description:
      "zerodayalliancesnu",
    link: "https://www.instagram.com/zerodayalliancesnu/#",
  },
];

