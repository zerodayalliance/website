import { gql } from "graphql-request";
import { graphqlClient } from "@/lib/graphql/client";
import PastEvents from "@/components/pages/events/PastEvents";
import UpcomingEvents from "@/components/pages/events/UpcomingEvents";
import { IEvent, IGetEventsQuery } from "@/types";

const GetEvents = gql`
  query EventsCollection {
    eventsCollection {
      total
      skip
      limit
      items {
        _id
        title
        dateTime
        mode
        location
        rsvpLink
        lumaEventId
        poster {
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
`;

export default async function Events() {
  const res: IGetEventsQuery = await graphqlClient.request(GetEvents);
  const eventsData = res.eventsCollection.items;

  const upcomingEventsData: IEvent[] = [];
  const pastEventsData: IEvent[] = [];

  await eventsData.sort((a, b) => {
    return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
  });

  await eventsData.map((event) => {
    const dateTime = new Date(event.dateTime);
    const eventData = {
      title: event.title,
      date: `${dateTime.toDateString()}`,
      time: `${dateTime.toLocaleTimeString()} IST`,
      mode: event.mode,
      location: event.location,
      rsvpLink: event.rsvpLink,
      lumaEventId: event.lumaEventId,
      posterUrl: event.poster.url,
      posterAlt: event.poster.title,
      posterHeight: event.poster.height,
      posterWidth: event.poster.width,
    };
    if (event.rsvpLink || event.lumaEventId) {
      upcomingEventsData.push(eventData);
    } else {
      pastEventsData.push(eventData);
    }
  });

  return (
    <>
      <h1 className="font-encode-sans font-semibold text-2xl text-center mt-28 text-tertiary">
        Events
      </h1>
      <UpcomingEvents data={upcomingEventsData} />
      <PastEvents data={pastEventsData} />
    </>
  );
}
