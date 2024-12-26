"use client";
import { IconBrandInstagram,IconBrandLinkedin,IconBrandGithub,IconBrandFacebook,IconBrandX,IconMail } from '@tabler/icons-react';
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function LeadsCG() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
    <h1 className="font-gidugu text-6xl text-hero text-center mt-4">Community Leads</h1>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top [mask:linear-gradient(to_top,white,white,transparent)]"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <div className="flex">
                  {active.socialLinks?.map((link, index) => (
                    <motion.a
                    key={index}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={link.href}
                      target="_blank"
                      className="px-3 py-3 text-sm rounded-full font-bold bg-green-500 text-white ml-4"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-7xl mx-auto w-full flex justify-center items-center flex-wrap gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-48 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black z-20"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Dibyataru Chakraborty",
    description: "President",
    src: "https://res.cloudinary.com/dzajsi427/image/upload/v1729787612/wanderlust_DEV/mbj0tckirk2ov2vqvvrm.png",
    socialLinks: [
      { href: "https://www.linkedin.com/in/dibyataru-chakraborty", icon: <IconBrandLinkedin stroke={2} /> },
      { href: "https://github.com/Dibyataru-Chakraborty", icon: <IconBrandGithub stroke={2} /> },
    ],
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione labore at necessitatibus nulla autem illo sapiente optio eligendi? Vero repudiandae excepturi obcaecati placeat consectetur incidunt corporis adipisci veniam omnis accusantium.
          Ipsam, accusamus sit! Aperiam ducimus quos ex repellendus deserunt error consectetur a iste sequi facilis provident hic corrupti pariatur, accusantium omnis dolorum, dolores quis iusto maxime assumenda, sed quas! Ipsam.
        </p>
      );
    },
  },
  {
    title: "Salini Dutta",
    description: "VP | Events Lead",
    src: "https://res.cloudinary.com/dzajsi427/image/upload/v1729787612/wanderlust_DEV/mbj0tckirk2ov2vqvvrm.png",
    socialLinks: [
      { href: "https://www.linkedin.com/in/salini-dutta-87865a2aa/", icon: <IconBrandLinkedin stroke={2} /> },
    ],
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione labore at necessitatibus nulla autem illo sapiente optio eligendi? Vero repudiandae excepturi obcaecati placeat consectetur incidunt corporis adipisci veniam omnis accusantium.
          Ipsam, accusamus sit! Aperiam ducimus quos ex repellendus deserunt error consectetur a iste sequi facilis provident hic corrupti pariatur, accusantium omnis dolorum, dolores quis iusto maxime assumenda, sed quas! Ipsam.
        </p>
      );
    },
  },
  {
    title: "Soumyadeep Dutta",
    description: "VP | Cyber Security Lead",
    src: "https://res.cloudinary.com/dzajsi427/image/upload/v1729787612/wanderlust_DEV/mbj0tckirk2ov2vqvvrm.png",
    socialLinks: [
      { href: "https://www.linkedin.com/in/elli0t43/", icon: <IconBrandLinkedin stroke={2} /> },
      { href: "https://github.com/elli0t43", icon: <IconBrandGithub stroke={2} /> },
    ],
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione labore at necessitatibus nulla autem illo sapiente optio eligendi? Vero repudiandae excepturi obcaecati placeat consectetur incidunt corporis adipisci veniam omnis accusantium.
          Ipsam, accusamus sit! Aperiam ducimus quos ex repellendus deserunt error consectetur a iste sequi facilis provident hic corrupti pariatur, accusantium omnis dolorum, dolores quis iusto maxime assumenda, sed quas! Ipsam.
        </p>
      );
    },
  },
];
