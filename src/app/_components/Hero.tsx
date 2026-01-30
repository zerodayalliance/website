"use client";

import { FlipWords } from "@/components/ui/flip-words";
import Logo from "./Logo";
// import FestiveLogo from "./FestiveLogo";

const words = [
  "secure",
  "protected",
  "shielded",
  "defended",
  "fortified",
  "safer",
];

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center h-lvh max-w-6xl mx-auto px-10 pt-40 pb-24 sm:pb-32 md:pb-40">
      <div className="z-10">
        <h1 className="font-iceberg text-5xl sm:text-6xl md:text-7xl mb-4 dark:text-quaternary text-hero">
          ZeroDay Alliance
        </h1>
        <h2 className="font-encode-sans max-w-fit text-2xl sm:text-3xl md:text-4xl dark:text-gray-300 text-gray-500">
          <span>
            Let us come together and make <br className="hidden lg:block" /> our
            society
          </span>{" "}
          <br className="block sm:hidden" />
          <span>
            <FlipWords
              words={words}
              className="font-semibold dark:text-tertiary text-hero"
            />
          </span>
        </h2>
        <a href="#about">
          <p className="mt-10 max-w-fit px-4 py-1.5 rounded-full font-bold tracking-widest transform hover:scale-105 bg-primary hover:bg-hero text-gray-50 hover:text-gray-200 transition-colors duration-200">
            Discover More
          </p>
        </a>
      </div>

      <Logo className="p-3 flex-grow-0 flex-shrink-0 h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 mb-6 md:mb-0" />
      {/* <FestiveLogo /> */}
    </section>
  );
};

export default Hero;
