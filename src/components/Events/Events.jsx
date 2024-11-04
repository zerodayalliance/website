import {
  Container,
  Title,
  SimpleGrid,
  Card,
  AspectRatio,
  Image,
  Text,
} from "@mantine/core";
import classes from "./Events.module.css";

import { upcomingEvents } from "../../config/events";

const Events = () => {
  return (
    <Container id="events" py="xl" className={classes.container}>
      <Title className={classes.heading} order={1}>
        Events
      </Title>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        style={{ maxWidth: `${22 * 2 + 2}rem`, margin: "0 auto" }}
      >
        {upcomingEvents.map((event, index) => {
          return (
            <Card
              p="md"
              radius="md"
              className={classes.card}
              id={`${event.hash}`}
              key={index}
            >
              <AspectRatio ratio="1">
                <Image radius={5} src={event.banner} alt="Event Poster" />
              </AspectRatio>
              <Text size="xl" fw={600} className={classes.title} mt={5}>
                {event.name}
              </Text>
              <Text>📅 {event.date}</Text>
              <Text>⏲ {event.time}</Text>
              <Text>📳 {event.mode}</Text>
              <Text>📍 {event.location}</Text>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Events;
