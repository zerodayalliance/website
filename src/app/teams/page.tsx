// import { gql } from "graphql-request";
// import { graphqlClient } from "@/lib/graphql/client";
import StartHelix from "@/components/pages/teams/StartHelix";
import Info from "@/components/pages/teams/Info";
import EndHelix from "@/components/pages/teams/EndHelix";
import ExpandableCard from "@/components/ui/teams/ExpandableCard";
import {
  Leads,
  TechCS,
  TechWD,
  EM,
  GT,
  OT,
  PR,
} from "@/components/pages/teams/teams";
// import { IGetTeamsQuery } from "@/types";

// const GetTeams = gql`
//   query TeamsCollection {
//     teamsCollection {
//       total
//       skip
//       limit
//       items {
//         _id
//         id
//         name
//         membersCollection {
//           total
//           skip
//           limit
//           items {
//             _id
//             uid
//             name
//             role
//             bio
//             linkedin
//             github
//             twitter
//             instagram
//             facebook
//             email
//           }
//         }
//       }
//     }
//   }
// `;

export const runtime = "edge";
export const revalidate = 60;

export default async function Teams() {
  // const data: IGetTeamsQuery = await graphqlClient.request(GetTeams);
  // const teamsData = data.teamsCollection.items;
  // console.log(teamsData);

  return (
    <>
      <div className="absolute top-0 right-0 z-0 full-width">
        <StartHelix />
      </div>
      <div className="relative z-10 full-width">
        <div className="mt-10">
          <Info />
        </div>
        <div style={{ height: '60vh', overflowY: 'auto', scrollbarWidth: 'none' }}>
          <h1 className="font-gidugu text-6xl text-hero text-center mt-20">
            Community Leads
          </h1>
          <ExpandableCard cards={Leads} />
          <h1 className="font-gidugu text-6xl text-hero text-center mt-40">
            Tech Team (Cyber Security)
          </h1>
          <ExpandableCard cards={TechCS} />
          <h1 className="font-gidugu text-6xl text-hero text-center mt-40">
            Tech Team (Web Development)
          </h1>
          <ExpandableCard cards={TechWD} />
          <h1 className="font-gidugu text-6xl text-hero text-center mt-40">
            Event Management Team
          </h1>
          <ExpandableCard cards={EM} />
          <h1 className="font-gidugu text-6xl text-hero text-center mt-40">
            Graphics Team
          </h1>
          <ExpandableCard cards={GT} />
          <h1 className="font-gidugu text-6xl text-hero text-center mt-40">
            Outreach Team
          </h1>
          <ExpandableCard cards={OT} />
          <h1 className="font-gidugu text-6xl text-hero text-center mt-40">
            PR & Social Media Team
          </h1>
          <div className="mb-40">
          <ExpandableCard cards={PR} />
          </div>
        </div>
      </div>
      <EndHelix className="full-width" />
    </>
  );
}
