import { Suspense } from "react";
import Image from "next/image";

import Hero from "@/components/pages/home/Hero";
import About from "@/components/pages/home/About";

import Logo from "@/components/Logo";
import TopLines from "@/components/pages/home/TopLines";
import BottomLines from "@/components/pages/home/BottomLines";

import groupPhoto from "@/assets/img/group.jpg";

export default function Home() {
  return (
    <>
      <TopLines className="absolute top-0 left-0 -ml-16 -mt-16 -z-50 opacity-80" />
      <header className="flex justify-between items-center flex-row pt-40 pb-24 sm:pb-32 md:pb-40 mx-10 sm:mx-16 md:mx-20">
        <Hero />
        <Logo className="p-3 self-start flex-grow-0 flex-shrink-0 h-28 w-28 sm:h-48 sm:w-48 md:h-60 md:w-60" />
      </header>
      <main className="flex justify-center items-center flex-col pt-20 mx-10 sm:mx-16 md:mx-20">
        <h1 className="font-gidugu text-6xl mb-5 text-hero">About Us</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <Suspense
            fallback={
              <div className="dark:text-tertiary text-primary">Loading...</div>
            }
          >
            <Image
              className="rounded-3xl w-96"
              src={groupPhoto}
              alt="Group Photo"
            />
          </Suspense>
          <About className="pt-10 pl-0 lg:pt-0 lg:pl-10 z-50" />
        </div>
      </main>
      <BottomLines className="float-right -mt-96 -z-50 opacity-80" />
    </>
  );
}
