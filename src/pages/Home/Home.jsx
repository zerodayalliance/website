import { MantineProvider, Container, Title } from "@mantine/core";
import "@mantine/core/styles.css";
import classes from "./Home.module.css";

function Home() {
  return (
    <MantineProvider>
      <Container className={classes.comingSoon}>
        <Title>Coming Soon...</Title>
      </Container>
    </MantineProvider>
  );
}

export default Home;
