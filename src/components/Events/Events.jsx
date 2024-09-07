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
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {upcomingEvents.map((event, index) => {
          return (
            <Card key={index} p="md" radius="md" className={classes.card}>
              <AspectRatio ratio="auto">
                <Image width={100} radius={5} src={event.banner} />
              </AspectRatio>
              <Text size="xl" fw={700} className={classes.title} mt={5}>
                {event.name}
              </Text>
              <Text c="dimmed" fw={700}>
                📅 {event.date}
              </Text>
              <Text c="dimmed" fw={700}>
                ⏲ {event.time}
              </Text>
              <Text c="dimmed" size="sm" fw={700}>
                📳 {event.mode}
              </Text>
              <Text c="dimmed" fw={700}>
                📍 {event.location}
              </Text>
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
