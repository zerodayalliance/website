import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { Title } from "@mantine/core";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Group,
  Center,
  Avatar,
  rem,
  Button,
} from "@mantine/core";
import classes from "./Events.module.css";

const eventData = [
  {
    name: "upcoming",
    time: "NA",
    meetingLink: "#",
    mode: "NA",
    speakerName: "NA",
  },
  {
    name: "To be announced",
    time: "NA",
    meetingLink: "NA",
    mode: "Offline",
    speakerName: "NA",
  },
  {
    name: "To be announced",
    time: "NA",
    meetingLink: "NA",
    mode: "Online",
    speakerName: "NA",
  },
];

const Events = () => {
  const linkProps = {
    href: "https://mantine.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <div id="events">
      <Title ta="center" className={classes.title1}>
        Upcoming Events
      </Title>
      <Group className={classes.cardsContainer}>
        {eventData.map((event, index) => (
          <Card key={index} withBorder radius="md" className={classes.card}>
            <Card.Section>
              <a {...linkProps}>
                <Image
                  src="https://media1.tenor.com/m/-4_cFnz_D3YAAAAC/btc-mechanics-ordinals.gif"
                  height={200}
                  fit="cover"
                />
              </a>
            </Card.Section>

            <Text
              className={classes.title}
              fw={500}
              component="a"
              {...linkProps}
            >
              {event.name}
            </Text>

            <Group justify="space-between" className={classes.footer}>
              <Center>
                <Avatar src="" size={34} radius="xl" mr="xs" />
                <Text fz="sm" inline>
                  {event.speakerName}
                </Text>
              </Center>

              <Group gap={8} mr={0}>
                <ActionIcon
                  className={classes.action}
                  style={{ backgroundColor: "black" }}
                >
                  <IconBrandLinkedin
                    style={{ width: rem(16), height: rem(16), color: "white" }}
                  />
                </ActionIcon>
                <ActionIcon
                  className={classes.action}
                  style={{ backgroundColor: "black" }}
                >
                  <IconBrandGithub
                    style={{ width: rem(16), height: rem(16), color: "white" }}
                  />
                </ActionIcon>
              </Group>
            </Group>

            <Text fz="sm" c="dimmed" lineClamp={4}>
              Date: {event.time}
            </Text>
            <Text fz="sm" c="dimmed" lineClamp={4}>
              Mode: {event.mode}
            </Text>
            <Button
              component="a"
              href={event.meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              style={{ width: "100%" }}
            >
              Join
            </Button>
          </Card>
        ))}
      </Group>
    </div>
  );
};

export default Events;
