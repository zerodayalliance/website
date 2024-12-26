"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";


export const projects = [
  {
    title: "Github",
    description:
      "https://github.com/ZeroDay-Alliance-SNU",
    link: "https://github.com/ZeroDay-Alliance-SNU",
  },
  {
    title: "LinkedIn",
    description:
    "https://netflhttps://www.linkedin.com/ company/zeroday-alliance-snu/posts/?feedView=allix.com",
    link: "https://netflhttps://www.linkedin.com/company/zeroday-alliance-snu/posts/?feedView=allix.com",
  },
  {
    title: "Instagram",
    description:
      "https://www.instagram.com/ zerodayalliancesnu/#",
    link: "https://www.instagram.com/zerodayalliancesnu/#",
  },
];

export default function Contactcard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}