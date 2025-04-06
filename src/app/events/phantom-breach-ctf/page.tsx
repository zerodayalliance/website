"use client";

import { useEffect } from "react";

export default function PhantomBreachCtf() {
  useEffect(() => {
    window.location.href = "https://dub.sh/phantom-breach-ctf";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="font-iceberg text-5xl text-quaternary">Loading...</h1>
    </div>
  );
}
