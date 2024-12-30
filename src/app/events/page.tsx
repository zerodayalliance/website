import PastEvents from "@/components/pages/events/PastEvents";
import UpcomingEvents from "@/components/pages/events/UpcomingEvents";

export default function Events() {
  return (
    <>
      <h1 className="font-encode-sans font-semibold text-2xl text-center mt-28 text-tertiary">
        Events
      </h1>
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}
