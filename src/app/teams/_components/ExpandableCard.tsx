"use client";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Slider, { type Settings, type CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ITeam, IMember } from "@/types/teams";
import MemberModal from "./MemberModal";

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
  const [active, setActive] = useState<IMember | null>(null);
  const isDraggingRef = useRef(false);
  const justClosedRef = useRef(false);
  const sliderRef = useRef<Slider | null>(null);

  const handleClose = useCallback(() => {
    justClosedRef.current = true;
    setActive(null);
    setTimeout(() => {
      justClosedRef.current = false;
    }, 350);
  }, []);

  const memberCount = team.membersCollection.items.length;

  useEffect(() => {
    if (!sliderRef.current || memberCount <= 1) return;
    if (active) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
  }, [active, memberCount]);

  const settings: Settings = useMemo(
    () => ({
      dots: memberCount > 1,
      arrows: memberCount > 1,
      infinite: memberCount > 4,
      autoplay: memberCount > 1,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      pauseOnFocus: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
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
    }),
    [memberCount]
  );

  return (
    <>
      <MemberModal member={active} onClose={handleClose} />
      <ul className="max-w-60 sm:max-w-md md:max-w-md lg:max-w-4xl mx-auto w-full">
        <Slider ref={sliderRef} {...settings}>
          {team.membersCollection.items.map((card) => (
            <div
              key={card.name}
              onClick={() => {
                if (isDraggingRef.current || justClosedRef.current) return;
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
