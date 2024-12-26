"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconCalendarEvent,
  IconUsers,
  IconMail,
  IconTerminal2,
} from "@tabler/icons-react";
import { TnavItem } from "@/types";

const navItems: TnavItem[] = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome />,
  },
  {
    name: "Events",
    link: "#events",
    icon: <IconCalendarEvent />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMail />,
  },
  {
    name: "Teams",
    link: "/teams",
    icon: <IconUsers />,
  },
  {
    name: "CLI",
    link: "/cli",
    icon: <IconTerminal2 />,
  },
];

export default function NavBar() {
  return (
    <nav>
      <FloatingNav navItems={navItems} />
    </nav>
  );
}
