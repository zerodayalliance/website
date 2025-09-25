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
import { INavItem } from "@/types";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: INavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!; // eslint-disable-line
      let positionY = scrollYProgress.get(); // eslint-disable-line

      if (positionY > 0 && positionY < 0.3) {
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
          `flex justify-center items-center mx-auto sm:max-w-md max-w-xs max-h-12
          fixed top-5 px-2 py-2 inset-x-0 z-[5000] font-encode-sans
          border border-transparent backdrop-blur-sm rounded-full
          dark:border-white/[0.2] dark:bg-gray-800/20 bg-white/20
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] `,
          className
        )}
      >
        {navItems.map((navItem: INavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              `relative flex justify-center items-center group px-1.5 py-1 rounded-full h-full w-full
              dark:text-gray-200 text-gray-800 hover:text-gray-200`
            )}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute block inset-0 h-full w-full rounded-3xl bg-gradient-to-b from-secondary to-quaternary"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <span className="block sm:hidden z-[5100]">{navItem.icon}</span>
            <span className="hidden sm:block text-md z-[5100]">
              {navItem.name}
            </span>
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
