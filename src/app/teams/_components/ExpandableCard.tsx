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

const CustomPrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 bg-neutral-500 dark:bg-neutral-700 hover:bg-hero text-gray-200 rounded-full p-1 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Previous slide"
    >
      <IconArrowNarrowLeft size={20} />
    </button>
  );
};

const CustomNextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 bg-neutral-500 dark:bg-neutral-700 hover:bg-hero text-gray-200 rounded-full p-1 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Next slide"
    >
      <IconArrowNarrowRight size={20} />
    </button>
  );
};

export default function ExpandableCard({ team }: ExpandableCardProps) {
  const [active, setActive] = useState<IMember | boolean | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 1000,
    // cssEase: "linear",
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    customPaging: (i: number) => (
      <div
        style={{
          margin: "10px 5px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: i === activeSlide ? "#752626" : "#656565", // Active state
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#752626")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor =
            i === activeSlide ? "#752626" : "#656565")
        }
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
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
              className="flex absolute top-2 right-2 md:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-20"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden card-shadow"
            >
              <motion.div
                layoutId={`image-${active.name}-${id}`}
                className="relative"
              >
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.pfp.url}
                  alt={active.name}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top [mask:linear-gradient(to_bottom,white,white,transparent)]"
                />
                <div className="absolute bottom-0 left-0 pl-4">
                  <motion.h3
                    layoutId={`title-${active.name}-${id}`}
                    className="font-medium text-quaternary text-4xl font-iceberg"
                  >
                    {active.name}
                  </motion.h3>
                </div>
              </motion.div>

              <div>
                <div className="flex justify-between items-start px-4 py-2">
                  <motion.p
                    layoutId={`description-${active.name}-${active.role}-${id}`}
                    className="text-hero font-gidugu text-3xl"
                  >
                    {active.role}
                  </motion.p>
                  <div className="flex">
                    {active.linkedin && (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.linkedin}
                        target="_blank"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4"
                      >
                        <IconBrandLinkedin />
                      </motion.a>
                    )}
                    {active.github && (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.github}
                        target="_blank"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4"
                      >
                        <IconBrandGithub />
                      </motion.a>
                    )}
                    {active.twitter && (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.twitter}
                        target="_blank"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4"
                      >
                        <IconBrandX />
                      </motion.a>
                    )}
                    {active.threads && (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.threads}
                        target="_blank"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4"
                      >
                        <IconBrandThreads />
                      </motion.a>
                    )}
                    {active.instagram && (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.instagram}
                        target="_blank"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4"
                      >
                        <IconBrandInstagram />
                      </motion.a>
                    )}
                    {active.facebook && (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.facebook}
                        target="_blank"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4"
                      >
                        <IconBrandFacebook />
                      </motion.a>
                    )}
                    {active.website && (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={`${active.website}`}
                        target="_blank"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4"
                      >
                        <IconWorld />
                      </motion.a>
                    )}
                    {active.email && (
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={`mailto:${active.email}`}
                        target="_blank"
                        className="px-2 py-2 text-sm rounded-full font-bold bg-onhold text-primary ml-4"
                      >
                        <IconMail />
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="pt-2 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-8 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active && typeof active === "object" && active.bio}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-60 sm:max-w-md md:max-w-md lg:max-w-4xl mx-auto w-full">
        <Slider {...settings}>
          {team.membersCollection.items.map((card) => (
            <motion.div
              layoutId={`card-${card.name}-${id}`}
              key={card.name}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex mb-4 gap-4 flex-col items-center w-full">
                <motion.div layoutId={`image-${card.name}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={card.pfp.url}
                    alt={card.name}
                    className="w-40 h-full rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${card.name}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                  >
                    {card.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.name}-${card.role}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                  >
                    {card.role}
                  </motion.p>
                </div>
              </div>
            </motion.div>
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
