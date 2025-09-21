import NavBar from "@/components/NavBar";
import Hero from "@/components/pages/home/Hero";
import About from "@/components/pages/home/About";
import Logo from "@/components/Logo";
import TopLines from "@/components/pages/home/TopLines";
import BottomLines from "@/components/pages/home/BottomLines";
import Footer from "@/components/Footer";
import DurgaLogo from "@/components/DurgaLogo";

export default function Home() {
  return (
    <>
      <NavBar />
      <TopLines className="absolute top-0 left-0 -ml-72 -mt-5 sm:-ml-28 sm:-mt-14 md:-ml-16 md:-mt-14 opacity-60" />
      <header className="flex flex-row justify-between items-center h-lvh max-w-6xl mx-auto px-10 pt-40 pb-24 sm:pb-32 md:pb-40">
        <Hero />
        {/* <Logo className="p-3 flex-grow-0 flex-shrink-0 h-28 w-28 sm:h-48 sm:w-48 md:h-60 md:w-60" /> */}
        <DurgaLogo />
      </header>
      <main className="max-w-6xl mx-auto px-10">
        <h1 className="font-gidugu text-6xl text-hero text-center">About Us</h1>
        <About />
      </main>
      <BottomLines className="float-right -mt-96 opacity-60" />
      <Footer />
    </>
  );
}
