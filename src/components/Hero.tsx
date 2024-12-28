import { FlipWords } from "./ui/flip-words";

const words = [
  "secure",
  "protected",
  "shielded",
  "defended",
  "fortified",
  "safer",
];

export const Hero = () => {
  return (
    <div>
      <h1 className="font-iceberg text-7xl -mt-40 ml-20 mb-4 dark:text-quaternary text-hero">
        ZeroDay Alliance
      </h1>
      <h2 className="font-encode-sans text-5xl ml-20 dark:text-gray-300 text-gray-500">
        <div className="mb-2">Let us come together and make</div>{" "}
        <div>
          <span>our society</span>{" "}
          <span>
            <FlipWords
              words={words}
              className="font-semibold dark:text-tertiary text-hero"
            />
          </span>
        </div>
      </h2>
      {/* <h2 className="font-Encode_Sans text-5xl mt-10 ml-20 dark:text-white text-onhold">
        Let us come together and make{" "}
      </h2>
      <h2 className="font-Encode_Sans text-5xl ml-20 dark:text-white text-onhold">
        our society{" "}
        <span className="font-Encode_Sans text-5xl dark:text-tertiary text-hero font-bold">
          Secure
        </span>
      </h2>
      <h2 className="font-Encode_Sans text-5xl mt-10 dark:text-white   ml-20 text-onhold">
        Let us come together and make{" "}
      </h2>
      <h2 className="font-Encode_Sans text-5xl ml-20 dark:text-white  text-onhold">
        our society{" "}
        <span className="font-Encode_Sans text-5xl dark:text-tertiary text-hero font-bold">
          Safer
        </span>
      </h2>
      <h2 className="font-Encode_Sans text-5xl mt-10 dark:text-white  ml-20 text-onhold">
        Let us come together and make{" "}
      </h2>
      <h2 className="font-Encode_Sans text-5xl ml-20 dark:text-white  text-onhold">
        our society{" "}
        <span className="font-Encode_Sans text-5xl dark:text-tertiary text-hero font-bold">
          Fortified
        </span>
      </h2>
      <h2 className="font-Encode_Sans text-5xl mt-10 dark:text-white  ml-20 text-onhold">
        Let us come together and make{" "}
      </h2>
      <h2 className="font-Encode_Sans text-5xl ml-20 dark:text-white  text-onhold">
        our society{" "}
        <span className="font-Encode_Sans text-5xl dark:text-tertiary text-hero font-bold">
          Shielded
        </span>
      </h2>
      <h2 className="font-Encode_Sans text-5xl mt-10 dark:text-white  ml-20 text-onhold">
        Let us come together and make{" "}
      </h2>
      <h2 className="font-Encode_Sans text-5xl ml-20 dark:text-white  text-onhold">
        our society{" "}
        <span className="font-Encode_Sans text-5xl dark:text-tertiary text-hero font-bold">
          Defended
        </span>
      </h2> */}
    </div>
  );
};

export default Hero;
