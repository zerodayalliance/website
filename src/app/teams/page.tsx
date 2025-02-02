import { gql } from "graphql-request";
import { graphqlClient } from "@/lib/graphql/client";
import StartHelix from "@/components/pages/teams/StartHelix";
import Info from "@/components/pages/teams/Info";
import EndHelix from "@/components/pages/teams/EndHelix";
import ExpandableCard from "@/components/pages/teams/ExpandableCard";
import { IGetTeamsQuery } from "@/types";

const GetTeams = gql`
  query TeamsCollection {
    teamsCollection {
      total
      skip
      limit
      items {
        _id
        id
        name
        membersCollection {
          total
          skip
          limit
          items {
            _id
            uid
            name
            role
            bio
            linkedin
            github
            twitter
            instagram
            facebook
            email
          }
        }
      }
    }
  }
`;

export const runtime = "edge";
export const revalidate = 60;

export default async function Teams() {
  const data: IGetTeamsQuery = await graphqlClient.request(GetTeams);
  const teamsData = data.teamsCollection.items;
  console.log(teamsData);

  return (
    <>
      <div className="absolute top-0 right-0 z-0 full-width">
        <StartHelix />
      </div>
      <div className="relative z-10 full-width">
        <div className="mt-10">
          <Info />
        </div>
        <div
          style={{ height: "60vh", overflowY: "auto", scrollbarWidth: "none" }}
        >
          <div className="mt-20"></div>
          {teamsData
            .slice()
            .reverse()
            .map((team) => (
              <div key={team.id} className="mb-40">
                <h1 className="font-gidugu text-6xl text-hero text-center">
                  {team.name}
                </h1>
                <ExpandableCard team={team} />
              </div>
            ))}
        </div>
      </div>
      <EndHelix className="full-width" />
    </>
  );
}
