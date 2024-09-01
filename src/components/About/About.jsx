import { Title, Text, Button, Container } from "@mantine/core";
import classes from "./About.module.css";

const About = () => {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>Know More About us </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Get to know more about our community from the community profiles
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            component="a"
            href="https://www.linkedin.com/company/zeroday-alliance-snu/"
          >
            Linkedin
          </Button>
          <Button
            className={classes.control}
            size="lg"
            component="a"
            href="https://github.com/ZeroDay-Alliance-SNU"
          >
            Github
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default About;
