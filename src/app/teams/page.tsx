import { graphqlClient } from "@/lib/graphql/client";
import StartHelix from "./_components/StartHelix";
import Info from "./_components/Info";
import EndHelix from "./_components/EndHelix";
import ExpandableCard from "./_components/ExpandableCard";
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
      <StartHelix className="absolute top-0 right-0 z-0 opacity-70 max-w-full" />
      <div className="relative z-10 full-width">
        <div className="mt-10">
          <Info />
        </div>
        <div className="mt-10"></div>
        <Tabs defaultValue={tenures[0].slug}>
          <TabsList className="mx-auto mb-10 p-1.5 gap-1.5 rounded-full bg-onhold dark:bg-primary">
            {tenures.reverse().map((tenure) => (
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
      <EndHelix className="float-left -mt-[24rem] opacity-50 max-w-full" />
    </>
  );
}
