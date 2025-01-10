import Image from "next/image";
import { Suspense } from "react";
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
  return (
    <div className="flex justify-center items-center flex-col overflow-visible w-80 mx-auto p-5 rounded-xl shadow-xl bg-zinc-900 text-gray-300 z-10">
      <Suspense fallback={<p>Loading...</p>}>
        <Image
          height={posterHeight}
          width={posterWidth}
          alt={posterAlt}
          src={posterUrl}
          className="h-w-72 w-72 rounded-sm"
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
          className="mt-4 shadow-[inset_0_0_0_2px_#616467] text-black px-6 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
          data-luma-action="checkout"
          data-luma-event-id={lumaEventId}
          href={
            lumaEventId ? `https://lu.ma/event/${lumaEventId}` : rsvpLink || "/"
          }
          target="_blank"
        >
          RSVP
        </a>
      )}
    </div>
  );
}
