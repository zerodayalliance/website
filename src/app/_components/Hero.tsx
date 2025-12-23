import { FlipWords } from "@/components/ui/flip-words";

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
      {/* <Link href="#about">
        <p className="mt-10 max-w-fit px-4 py-1.5 rounded-full font-bold tracking-widest transform hover:scale-105 bg-hero hover:bg-quaternary text-gray-50 hover:text-gray-200 transition-colors duration-200">
          Learn More
        </p>
      </Link> */}
    </div>
  );
};

export default Hero;
