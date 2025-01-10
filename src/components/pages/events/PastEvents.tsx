import { Carousel } from "@/components/ui/cards-carousel";
import Card from "./Card";
import { IEvent } from "@/types";

export default function PastEvents(props: { data: IEvent[] }) {
  const data = props.data;

  return (
    <>
      <h2 className="font-iceberg text-5xl text-center mt-3">
        <span className="text-gray-200">Past</span>{" "}
        <span className="text-hero">Events</span>
      </h2>
      <p className="font-encode-sans text-center my-4 text-gray-200">
        Our Past Events
      </p>
      <Carousel
        items={data.map((event, index) => {
          return (
            <Card
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              mode={event.mode}
              location={event.location}
              rsvpLink={event.rsvpLink}
              lumaEventId={event.lumaEventId}
              posterUrl={event.posterUrl}
              posterAlt={event.posterAlt}
              posterHeight={event.posterHeight}
              posterWidth={event.posterWidth}
            />
          );
        })}
      />
    </>
  );
}
