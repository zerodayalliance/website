import {
  MantineProvider,
  Container,
  Stack,
  Flex,
  Title,
  Paper,
  Avatar,
  Text,
} from "@mantine/core";
import "@mantine/core/styles.css";
import classes from "./Teams.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import teams from "./data";

const Teams = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Navbar />
      <Container className={classes.container}>
        <Title className={classes.heading} order={1}>
          Meet Our Core Teams
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
                  {team.members.map((member, index) => {
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
                        <Text ta="center" fz="md" fw={400} mt="xs">
                          {member.bio}
                        </Text>
                      </Paper>
                    );
                  })}
                </Flex>
              </Stack>
            );
          })}
        </Stack>
      </Container>
      <Footer/>
    </MantineProvider>
  );
};

export default Teams;
