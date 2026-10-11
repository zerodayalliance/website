"use client";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconBrandThreads,
  IconBrandInstagram,
  IconBrandFacebook,
  IconWorld,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Slider, { type Settings, type CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ITeam, IMember } from "@/types/teams";

interface ExpandableCardProps {
  team: ITeam;
}

const CustomPrevArrow = ({ onClick, className }: CustomArrowProps) => {
  const isDisabled = className?.includes("slick-disabled");
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 bg-neutral-500 dark:bg-neutral-700 hover:bg-hero text-gray-200 rounded-full p-1 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
        isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
      }`}
      aria-label="Previous slide"
    >
      <IconArrowNarrowLeft size={20} />
    </button>
  );
};

const CustomNextArrow = ({ onClick, className }: CustomArrowProps) => {
  const isDisabled = className?.includes("slick-disabled");
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 bg-neutral-500 dark:bg-neutral-700 hover:bg-hero text-gray-200 rounded-full p-1 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
        isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
      }`}
      aria-label="Next slide"
    >
      <IconArrowNarrowRight size={20} />
    </button>
  );
};

export default function ExpandableCard({ team }: ExpandableCardProps) {
  const [active, setActive] = useState<IMember | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const memberCount = team.membersCollection.items.length;

  const settings: Settings = {
    dots: memberCount > 1,
    arrows: memberCount > 1,
    infinite: memberCount > 4,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true,
    beforeChange: () => {
      isDraggingRef.current = true;
    },
    afterChange: () => {
      isDraggingRef.current = false;
    },
    dotsClass: "slick-dots custom-dots",
    customPaging: () => (
      <div
        className="custom-dot"
        style={{
          margin: "10px 5px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#656565",
          transition: "background-color 0.2s",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: memberCount > 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: memberCount > 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: memberCount > 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: memberCount > 1,
        },
      },
    ],
  };

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

  // @ts-expect-error lmao
  useOutsideClick(ref, () => setActive(null));

  return (
    <>
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
              key={`button-${active.name}-${id}`}
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
              className="flex absolute top-2 right-2 md:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-20"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden card-shadow"
            >
              <div className="relative">
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.pfp.url}
                  alt={active.name}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top [mask:linear-gradient(to_bottom,white,white,transparent)]"
                />
                <div className="absolute bottom-0 left-0 pl-4">
                  <h3 className="font-medium text-quaternary text-4xl font-iceberg">
                    {active.name}
                  </h3>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start px-4 py-2">
                  <p className="text-hero font-gidugu text-3xl">
                    {active.role}
                  </p>
                  <div className="flex">
                    {active.linkedin && (
                      <a
                        href={active.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4 hover:opacity-80 transition-opacity"
                      >
                        <IconBrandLinkedin />
                      </a>
                    )}
                    {active.github && (
                      <a
                        href={active.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4 hover:opacity-80 transition-opacity"
                      >
                        <IconBrandGithub />
                      </a>
                    )}
                    {active.twitter && (
                      <a
                        href={active.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4 hover:opacity-80 transition-opacity"
                      >
                        <IconBrandX />
                      </a>
                    )}
                    {active.threads && (
                      <a
                        href={active.threads}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4 hover:opacity-80 transition-opacity"
                      >
                        <IconBrandThreads />
                      </a>
                    )}
                    {active.instagram && (
                      <a
                        href={active.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4 hover:opacity-80 transition-opacity"
                      >
                        <IconBrandInstagram />
                      </a>
                    )}
                    {active.facebook && (
                      <a
                        href={active.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4 hover:opacity-80 transition-opacity"
                      >
                        <IconBrandFacebook />
                      </a>
                    )}
                    {active.website && (
                      <a
                        href={`${active.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4 hover:opacity-80 transition-opacity"
                      >
                        <IconWorld />
                      </a>
                    )}
                    {active.email && (
                      <a
                        href={`mailto:${active.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4 hover:opacity-80 transition-opacity"
                      >
                        <IconMail />
                      </a>
                    )}
                  </div>
                </div>
                <div className="pt-2 relative px-4">
                  <div className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-8 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {active && typeof active === "object" && active.bio}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-60 sm:max-w-md md:max-w-md lg:max-w-4xl mx-auto w-full">
        <Slider {...settings}>
          {team.membersCollection.items.map((card) => (
            <div
              key={card.name}
              onClick={() => {
                if (isDraggingRef.current) return;
                setActive(card);
              }}
              className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition-colors duration-200 outline-none select-none"
            >
              <div className="flex mb-4 gap-4 flex-col items-center w-full">
                <div>
                  <Image
                    width={100}
                    height={100}
                    src={card.pfp.url}
                    alt={card.name}
                    className="w-40 h-full rounded-lg object-cover object-top pointer-events-none"
                  />
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                    {card.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                    {card.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
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
