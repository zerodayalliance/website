"use client";

import { JSX } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconCalendarEvent,
  IconUsers,
  IconMail,
  IconTerminal2,
} from "@tabler/icons-react";

const navItems: {
  name: string;
  link: string;
  icon?: JSX.Element;
}[] = [
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
    link: "#contact",
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
  return <FloatingNav navItems={navItems} />;
}
