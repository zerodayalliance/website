import NavBar from "@/components/NavBar";
import TopLines from "./_components/TopLines";
import Hero from "./_components/Hero";
import About from "./_components/About";
import BottomLines from "./_components/BottomLines";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <TopLines className="absolute top-0 left-0 -ml-72 -mt-5 sm:-ml-28 sm:-mt-14 md:-ml-16 md:-mt-14 opacity-60" />

      <main className="max-w-6xl mx-auto px-10">
        <Hero />
        <About />
      </main>

      <BottomLines className="float-right -mt-96 opacity-60" />
      <Footer />
    </>
  );
}
