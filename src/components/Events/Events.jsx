import { IconBrandLinkedin, IconBrandInstagram } from "@tabler/icons-react";
import {
  Container,
  Title,
  SimpleGrid,
  Card,
  AspectRatio,
  Image,
  Text,
  Group,
  ActionIcon,
  rem,
} from "@mantine/core";
import classes from "./Events.module.css";

import { upcomingEvents } from "../../config/events";

const Events = () => {
  return (
    <Container id="events" py="xl" className={classes.container}>
      <Title className={classes.heading} order={1}>
        Events
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} style={{maxWidth:`${27*2}rem` , margin: '0 auto'}}>
        {upcomingEvents.map((event, index) => {
          return (
            <Card key={index} p="md" radius="md" className={classes.card}>
              <AspectRatio ratio="auto">
                <Image
                  radius={5}
                  src={event.banner}
                  alt="Event Poster"
                />
              </AspectRatio>
              <Text size="xl" fw={600} className={classes.title} mt={5}>
                {event.name}
              </Text>
              <Text>📅 {event.date}</Text>
              <Text>⏲ {event.time}</Text>
              <Text>📳 {event.mode}</Text>
              <Text>📍 {event.location}</Text>
              {/* <Group mt={10}>
                <ActionIcon
                  size="lg"
                  variant="default"
                  radius="xl"
                  component="a"
                  target="_blank"
                  href={event.linkedin}
                >
                  <IconBrandLinkedin
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  variant="default"
                  radius="xl"
                  component="a"
                  target="_blank"
                  href={event.instagram}
                >
                  <IconBrandInstagram
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Group> */}
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Events;
