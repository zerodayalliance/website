import StartHelix from "@/components/teams/StartHelix";
import Info from "@/components/teams/Info";
import EndHelix from "@/components/teams/EndHelix";
import ExpandableCard from "@/components/ui/teams/ExpandableCard";
import {
  Leads,
  TechCS,
  TechWD,
  EM,
  GT,
  OT,
  PR,
} from "@/components/teams/teams";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 right-0 z-0 full-width">
        <StartHelix />
      </div>
      <div className="relative z-10 full-width">
        <div className="mt-10">
          <Info />
        </div>
        <h1 className="font-gidugu text-6xl text-hero text-center mt-4">
          Community Leads
        </h1>
        <ExpandableCard cards={Leads} />
        <h1 className="font-gidugu text-6xl text-hero text-center mt-4">
          Tech Team (Cyber Security)
        </h1>
        <ExpandableCard cards={TechCS} />
        <h1 className="font-gidugu text-6xl text-hero text-center mt-4">
          Tech Team (Web Development)
        </h1>
        <ExpandableCard cards={TechWD} />
        <h1 className="font-gidugu text-6xl text-hero text-center mt-4">
          Event Management Team
        </h1>
        <ExpandableCard cards={EM} />
        <h1 className="font-gidugu text-6xl text-hero text-center mt-4">
          Graphics Team
        </h1>
        <ExpandableCard cards={GT} />
        <h1 className="font-gidugu text-6xl text-hero text-center mt-4">
          Outreach Team
        </h1>
        <ExpandableCard cards={OT} />
        <h1 className="font-gidugu text-6xl text-hero text-center mt-4">
          PR & Social Media Team
        </h1>
        <ExpandableCard cards={PR} />
      </div>
      <EndHelix className="full-width" />
    </>
  );
}
