import PastEvents from "@/components/pages/events/PastEvents";
import UpcomingEvents from "@/components/pages/events/UpcomingEvents";
import { IEvent } from "@/types";

// Mock data test
import { res } from "@/../temp/mock";

const upcomingEventsData: IEvent[] = [];
const pastEventsData: IEvent[] = [];

const eventsData = res.data.eventsCollection.items;

eventsData.map((event) => {
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

export default function Events() {
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
