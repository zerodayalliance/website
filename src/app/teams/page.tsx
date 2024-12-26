import NavBar from "@/components/NavBar";
import StartHelix from "@/components/teams/StartHelix";
import Info from "@/components/teams/Info";
import EndHelix from "@/components/teams/EndHelix";
import LeadsCG from "@/components/ui/teams/Leads";
import TechCS from "@/components/ui/teams/TechCS";
import TechWD from "@/components/ui/teams/TechWD";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 right-0 z-0">
        <StartHelix />
      </div>
      <div className="relative z-10">
        <NavBar />
        <div className="mt-10">
          <Info />
        </div>
        <LeadsCG />
        <TechCS />
        <TechWD/>
      </div>
      <EndHelix />
    </>
  );
}