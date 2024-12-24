"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TnavItem } from "@/types";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: TnavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const positionY = scrollYProgress.get();
      const direction = current! - positionY!;

      if (positionY > 0 && positionY < 0.2) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          `flex items-center justify-evenly mx-auto sm:max-w-lg max-w-xs max-h-12
          fixed top-5 px-4 py-2 inset-x-0 z-[5000] font-encode-sans
          border border-transparent backdrop-blur-sm rounded-full
          dark:border-white/[0.2] dark:bg-gray-800/20 bg-white/20
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] `,
          className
        )}
      >
        {navItems.map((navItem: TnavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              `relative flex items-center px-3 py-1 rounded-full 
              dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 
              hover:bg-gradient-to-b from-secondary to-quaternary`
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden text-sm sm:block">{navItem.name}</span>
          </Link>
        ))}
        {/* <button className="relative font-medium text-sm px-2 py-1 border rounded-full border-neutral-200 dark:border-white/[0.2] text-black dark:text-white hover:bg-gradient-to-b from-primary to-hero">
          <span className="hidden text-sm sm:block">CLI</span>
          <span className="block sm:hidden">
            <IconTerminal2 />
          </span>
          <span className="absolute inset-x-0 w-1/2 -bottom-px mx-auto bg-gradient-to-r from-transparent via-red-700 to-transparent h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
