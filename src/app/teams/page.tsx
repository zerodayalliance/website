import { gql } from "graphql-request";
import { graphqlClient } from "@/lib/graphql/client";
import StartHelix from "@/components/pages/teams/StartHelix";
import Info from "@/components/pages/teams/Info";
import EndHelix from "@/components/pages/teams/EndHelix";
import ExpandableCard from "@/components/pages/teams/ExpandableCard";
import { IGetTeams202425Query } from "@/types/teams";

const GetTeams = gql`
  query Teams202425Collection {
    teams202425Collection(limit: 15) {
      total
      skip
      limit
      items {
        _id
        id
        name
        membersCollection(limit: 15) {
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
            pfp {
              title
              description
              contentType
              size
              url
              width
              height
            }
          }
        }
      }
    }
  }
`;

export const runtime = "edge";
export const revalidate = 60;

export default async function Teams() {
  const data: IGetTeams202425Query = await graphqlClient.request(GetTeams);
  const teamsData = data.teams202425Collection.items;

  await teamsData.sort((a, b) => {
    return Number(b.id) - Number(a.id);
  });

  return (
    <>
      <StartHelix className="absolute top-0 right-0 z-0 max-w-full" />
      <div className="relative z-10 full-width">
        <div className="mt-10">
          <Info />
        </div>
        <div className="mt-10"></div>
        {teamsData
          .slice()
          .reverse()
          .map((team) => (
            <div key={team.id} className="mb-10">
              <h1 className="font-gidugu text-6xl text-hero text-center">
                {team.name}
              </h1>
              <ExpandableCard team={team} />
            </div>
          ))}
      </div>
      <EndHelix className="float-left -mt-[26.5rem] opacity-60 max-w-full" />
    </>
  );
}
