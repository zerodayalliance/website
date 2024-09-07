import { useEffect } from "react";
import {
  MantineProvider,
  Container,
  Group,
  Stack,
  Flex,
  Title,
  Paper,
  Avatar,
  Text,
  ActionIcon,
  rem,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import "@mantine/core/styles.css";
import classes from "./Teams.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import teams from "../../config/teams";

const Teams = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <MantineProvider defaultColorScheme="dark">
      <Navbar />
      <Container className={classes.container}>
        <Title className={classes.heading} order={1}>
          Our Core Teams
        </Title>
        <Stack align="stretch" justify="center" gap="xl">
          {teams.map((team, index) => {
            return (
              <Stack align="stretch" justify="center" gap="xs" key={index}>
                <Title className={classes.teamName} order={2}>
                  {team.name}
                </Title>
                <Flex
                  className={classes.teamMembers}
                  gap="md"
                  justify="center"
                  align="center"
                  direction="row"
                  wrap="wrap"
                >
                  {!team.members && <Text size="xl">Coming Soon...</Text>}
                  {team.members &&
                    team.members.map((member, index) => {
                      return (
                        <Paper
                          className={classes.memberCard}
                          withBorder
                          key={index}
                        >
                          <Avatar
                            src={member.avatar}
                            size={100}
                            radius={100}
                            mx="auto"
                          />
                          <Text ta="center" fz="lg" fw={600} mt="sm">
                            {member.name}
                          </Text>
                          <Text ta="center" fz="sm" c="dimmed">
                            {member.role}
                          </Text>
                          {/* <Text ta="center" fz="md" fw={400} mt="xs">
                            {member.bio}
                          </Text> */}
                          <Group justify="center" mt={25}>
                            {member.linkedin && (
                              <ActionIcon
                                size="lg"
                                variant="default"
                                radius="xl"
                                component="a"
                                target="_blank"
                                href={member.linkedin}
                              >
                                <IconBrandLinkedin
                                  style={{ width: rem(18), height: rem(18) }}
                                  stroke={1.5}
                                />
                              </ActionIcon>
                            )}
                            {member.github && (
                              <ActionIcon
                                size="lg"
                                variant="default"
                                radius="xl"
                                component="a"
                                target="_blank"
                                href={member.github}
                              >
                                <IconBrandGithub
                                  style={{ width: rem(18), height: rem(18) }}
                                  stroke={1.5}
                                />
                              </ActionIcon>
                            )}
                            {member.x && (
                              <ActionIcon
                                size="lg"
                                variant="default"
                                radius="xl"
                                component="a"
                                target="_blank"
                                href={member.x}
                              >
                                <IconBrandX
                                  style={{ width: rem(18), height: rem(18) }}
                                  stroke={1.5}
                                />
                              </ActionIcon>
                            )}
                          </Group>
                        </Paper>
                      );
                    })}
                </Flex>
              </Stack>
            );
          })}
        </Stack>
      </Container>
      <Footer />
    </MantineProvider>
  );
};

export default Teams;
