import { Carousel } from "@/components/ui/cards-carousel";
import Card from "./Card";
import { IEvent } from "@/types";

export default function PastEvents(props: { data: IEvent[] }) {
  const data = props.data;

  return (
    <>
      <h2 className="font-iceberg text-5xl text-center mt-10 mb-5">
        <span className="text-gray-900 dark:text-gray-200">Past</span>{" "}
        <span className="text-hero">Events</span>
      </h2>
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
