import { graphqlClient } from "@/lib/graphql/client";
import StartHelix from "@/components/pages/teams/StartHelix";
import Info from "@/components/pages/teams/Info";
import EndHelix from "@/components/pages/teams/EndHelix";
import ExpandableCard from "@/components/pages/teams/ExpandableCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITenuresCollectionQuery } from "@/types/teams";
import { GetTeams } from "./gql";

export const runtime = "edge";
export const revalidate = 60;

export default async function Teams() {
  const data: ITenuresCollectionQuery = await graphqlClient.request(GetTeams);

  const tenures = data.tenuresCollection.items;

  tenures.sort((a, b) => Number(b.id) - Number(a.id));

  tenures.map((tenure) =>
    tenure.teamsCollection.items.sort((a, b) => Number(a.id) - Number(b.id))
  );

  return (
    <>
      <StartHelix className="absolute top-0 right-0 z-0 max-w-full" />
      <div className="relative z-10 full-width">
        <div className="mt-10">
          <Info />
        </div>
        <div className="mt-10"></div>
        <Tabs defaultValue={tenures[0].slug}>
          <TabsList className="mx-auto mb-10 p-1.5 rounded-full bg-onhold dark:bg-primary">
            {tenures.map((tenure) => (
              <TabsTrigger
                key={tenure.id}
                value={tenure.slug}
                className="rounded-full data-[state=active]:bg-quaternary dark:data-[state=active]:bg-secondary"
              >
                {tenure.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tenures.map((tenure) => (
            <TabsContent key={tenure.id} value={tenure.slug}>
              {tenure.teamsCollection.items.map((team) => (
                <div key={team.id} className="mb-10">
                  <h1 className="font-gidugu text-6xl text-hero text-center">
                    {team.name}
                  </h1>
                  <ExpandableCard team={team} />
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <EndHelix className="float-left -mt-[26.5rem] opacity-60 max-w-full" />
    </>
  );
}
