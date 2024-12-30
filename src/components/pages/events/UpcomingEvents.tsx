"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function UpcomingEvents() {
  return (
    <>
      <h2 className="font-iceberg text-5xl text-center mt-3">
        <span className="text-gray-200">Upcoming</span>{" "}
        <span className="text-hero">Events</span>
      </h2>
      <p className="font-encode-sans text-center mt-4 text-gray-200">
        Our Upcoming Events
      </p>
    </>
  );
}
