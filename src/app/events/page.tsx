import { gql } from "graphql-request";
import { graphqlClient } from "@/lib/graphql/client";
import NavBar from "@/components/NavBar";
import TopLines from "@/components/pages/home/TopLines";
import UpcomingEvents from "@/components/pages/events/UpcomingEvents";
import PastEvents from "@/components/pages/events/PastEvents";
import Footer from "@/components/Footer";
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

declare global {
  interface Window {
    luma: {
      initCheckout: () => void;
    };
  }
}

export const runtime = "edge";
export const revalidate = 60;

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
      date: `${new Intl.DateTimeFormat("en-IN", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      }).format(dateTime)}`,
      time: `${new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).format(dateTime)} IST`,
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
      <NavBar />
      <TopLines className="absolute top-0 left-0 -ml-72 -mt-5 sm:-ml-28 sm:-mt-14 md:-ml-16 md:-mt-14 opacity-60 -z-10" />
      <h1 className="font-encode-sans font-semibold text-2xl text-center mt-28 text-hero">
        Events
      </h1>
      <UpcomingEvents data={upcomingEventsData} />
      <PastEvents data={pastEventsData} />
      <Footer />
    </>
  );
}
