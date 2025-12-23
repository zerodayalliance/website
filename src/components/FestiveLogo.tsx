"use client";
import React from "react";
import Image from "next/image";

function FestiveLogo() {
  return (
    <div>
      <Image
        src="/logo/diwali.png"
        alt="Festive Logo"
        width={1500}
        height={1500}
        className="w-full max-w-[10rem] sm:max-w-[15rem] md:max-w-[20rem] px-3"
      />
    </div>
  );
}

export default FestiveLogo;
