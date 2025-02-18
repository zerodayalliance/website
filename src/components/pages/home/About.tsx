import { Suspense } from "react";
import Image from "next/image";
import groupPhoto from "@/assets/img/group.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div id="#about" className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col lg:flex-row my-5">
        <Suspense fallback={<p>Loading...</p>}>
          <Image
            className="rounded-3xl w-96"
            src={groupPhoto}
            alt="Group Photo"
          />
        </Suspense>
        <div className="pt-10 pl-0 lg:pt-0 lg:pl-10 z-50">
          <h2 className="font-iceberg text-4xl md:text-5xl mb-2 dark:text-white text-onhold">
            Discover<span className="text-hero"> Who </span>we are
          </h2>
          <h2 className="font-encodesans text-xl sm:text-2xl  dark:text-gray-200 text-gray-800">
            We, the official cybersecurity club of Sister Nivedita University,
            are a dynamic community of students passionate about exploring the
            ever-evolving world of cybersecurity. Our mission is to foster
            knowledge, collaboration, and hands-on experience in the field of
            digital security.
          </h2>
        </div>
      </div>

      <div className="my-5 z-50">
        <h2 className="font-iceberg text-4xl md:text-5xl mb-2 dark:text-white text-onhold">
          Discover<span className="text-hero"> What </span>we do
        </h2>
        <h2 className="font-encodesans text-xl sm:text-2xl dark:text-gray-200 text-gray-800">
          Through workshops, CTF competitions and expert talks, we equip our
          members with the skills needed to protect and defend against cyber
          threats. Whether you&apos;re a beginner or a seasoned pro, ZeroDay
          Alliance offers a platform to learn, innovate and contribute to the
          shared objectives.
        </h2>
      </div>

      <div className="flex flex-row items-center z-50 gap-5">
        <Link href="/events">
          <p className="mt-5 max-w-fit px-5 py-2 rounded-full font-bold tracking-widest transform hover:scale-105 bg-hero hover:bg-quaternary text-gray-50 hover:text-gray-200 transition-colors duration-200">
            Our Events
          </p>
        </Link>
        <Link href="/teams">
          <p className="mt-5 max-w-fit px-5 py-2 rounded-full font-bold tracking-widest transform hover:scale-105 bg-hero hover:bg-quaternary text-gray-50 hover:text-gray-200 transition-colors duration-200">
            Our Teams
          </p>
        </Link>
      </div>
    </div>
  );
};

export default About;
