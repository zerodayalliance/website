import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import image from "/src/assets/null.jpeg";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
  Button,
} from "@mantine/core";
import classes from "./Events.module.css";

const eventData = [
  {
    name: "upcoming",
    time: "NA",
    meetingLink: "#",
    mode: "Online",
    speakerName: "NA",
  },
  {
    name: "To be announced",
    time: "4:00 PM",
    meetingLink: "https://example.com/ai-conference",
    mode: "Offline",
    speakerName: "Jane Doe",
  },
  {
    name: "To be announced",
    time: "6:00 PM",
    meetingLink: "https://example.com/web-dev-bootcamp",
    mode: "Online",
    speakerName: "John Smith",
  },
];

const Events = () => {
  const linkProps = {
    href: "https://mantine.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const theme = useMantineTheme();

  return (
    <Group id="events" className={classes.cardsContainer}>
      {eventData.map((event, index) => (
        <Card key={index} withBorder radius="md" className={classes.card}>
          <Card.Section>
            <a {...linkProps}>
              <Image src={image} height={200} fit="cover" />
            </a>
          </Card.Section>

          <Text className={classes.title} fw={500} component="a" {...linkProps}>
            {event.name}
          </Text>

          <Group justify="space-between" className={classes.footer}>
            <Center>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                size={34}
                radius="xl"
                mr="xs"
              />
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
  );
};

export default Events;
