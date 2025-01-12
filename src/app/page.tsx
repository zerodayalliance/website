import Hero from "@/components/pages/home/Hero";
import About from "@/components/pages/home/About";
import Logo from "@/components/Logo";
import TopLines from "@/components/pages/home/TopLines";
import BottomLines from "@/components/pages/home/BottomLines";

export default function Home() {
  return (
    <>
      <TopLines className="absolute top-0 left-0 -ml-56 -mt-10 sm:-ml-28 sm:-mt-14 md:-ml-16 md:-mt-14 opacity-70" />
      <header className="flex relative justify-between items-center flex-row h-lvh pt-40 pb-24 sm:pb-32 md:pb-40 mx-10 sm:mx-16 md:mx-20">
        <Hero />
        <Logo className="p-3 flex-grow-0 flex-shrink-0 h-28 w-28 sm:h-48 sm:w-48 md:h-60 md:w-60" />
      </header>
      <main className="flex justify-center items-center flex-col mx-10 sm:mx-16 md:mx-20">
        <h1 className="font-gidugu text-6xl text-hero">About Us</h1>
        <About />
      </main>
      <BottomLines className="float-right -mt-96 opacity-70" />
    </>
  );
}
