"use client";
import { useEffect } from "react";

interface RsvpBtnProps {
  rsvpLink: string | null;
  lumaEventId: string | null;
}

export default function RsvpBtn({ rsvpLink, lumaEventId }: RsvpBtnProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.lu.ma/checkout-button.js";
    script.id = "luma-checkout";
    script.defer = true;
    document.body.appendChild(script);

    window?.luma?.initCheckout();

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <a
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
    </>
  );
}
