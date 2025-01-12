"use client";
import Image from "next/image";
import { useEffect, Suspense } from "react";
import { IEvent } from "@/types";
import {
  IconCalendarWeek,
  IconClock,
  IconMapPin,
  IconWorld,
} from "@tabler/icons-react";

export default function Card({
  title,
  date,
  time,
  mode,
  location,
  rsvpLink,
  lumaEventId,
  posterUrl,
  posterAlt,
  posterHeight,
  posterWidth,
}: IEvent) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.lu.ma/checkout-button.js";
    script.id = "luma-checkout";
    script.defer = true;
    document.body.appendChild(script);
    window?.luma?.initCheckout();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col overflow-visible w-80 mx-auto p-5 rounded-xl shadow-xl dark:shadow-md dark:shadow-zinc-700 dark:bg-zinc-900 bg-zinc-100 text-gray-800 dark:text-gray-200 z-10">
      <Suspense fallback={<p>Loading...</p>}>
        <Image
          height={posterHeight}
          width={posterWidth}
          alt={posterAlt}
          src={posterUrl}
          className="h-w-72 w-72 rounded-sm select-none"
        />
      </Suspense>
      <div className="flex flex-col items-start justify-center min-w-full space-y-1.5 mt-4">
        <p className="font-bold text-xl md:text-2xl md:font-normal">{title}</p>
        <p className="flex flex-row items-center justify-center gap-2 font-normal text-lg">
          <span>
            <IconCalendarWeek size={23} />
          </span>
          <span>{date}</span>
        </p>
        <p className="flex flex-row items-center justify-center gap-2 font-normal text-lg">
          <span>
            <IconClock size={23} />
          </span>
          <span>{time}</span>
        </p>
        <p className="flex flex-row items-center justify-center gap-2 font-normal text-lg">
          <span>
            {mode.toLocaleLowerCase() === "online" ? (
              <IconWorld size={23} />
            ) : (
              <IconMapPin size={23} />
            )}
          </span>
          <span>
            <span>{location}</span>
          </span>
        </p>
      </div>
      {(rsvpLink || lumaEventId) && (
        <a
          // className="mt-4 shadow-[inset_0_0_0_2px_#616467] text-black px-6 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
          // className="mt-4 px-6 py-2 inline-flex animate-shimmer items-center justify-center rounded-full border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-zinc-400 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50"
          className="mt-5 select-none relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50"
          data-luma-action="checkout"
          data-luma-event-id={lumaEventId}
          href={
            lumaEventId ? `https://lu.ma/event/${lumaEventId}` : rsvpLink || "/"
          }
          target="_blank"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--quaternary)_0%,var(--onhold)_50%,var(--quaternary)_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-6 py-1.5 text-lg font-normal dark:bg-zinc-800 bg-zinc-200 dark:text-zinc-50 text-zinc-950 backdrop-blur-3xl">
            RSVP
          </span>
        </a>
      )}
    </div>
  );
}
