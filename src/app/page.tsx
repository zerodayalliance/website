import NavBar from "@/components/NavBar";
import Sidevector from "@/components/Sidevector";
import Hero from "@/components/Hero"; 
import Biglogo from "@/components/Biglogo";
import About from "@/components/About";
import Endvector from "@/components/Endvector";
export default function Home() {
  return (
    <>
      <Sidevector />
      <NavBar />
      <Hero  /> 
      <div  className="flex w-50% -mt-80  mr-15 float-right">
        <Biglogo className="-mt-80" />
      </div>
      
      <About />
      
      <div className="flex justify-end">
      <Endvector />
      </div>
      
    </>
  );
}
