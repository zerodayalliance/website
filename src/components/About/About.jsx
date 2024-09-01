import { Text, Title, TextInput, Button, Image } from "@mantine/core";
import image from "/src/assets/aboutpic.jpeg";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Know More About Us...</Title>
        <Text fz="sm" c="dimmed">
          Welcome to ZeroDay Alliance, where SNU students passionate about
          cybersecurity and ethical hacking come together to learn about the
          latest security trends and zero-day vulnerabilities, collaborate on
          projects and challenges, share resources and tools, discuss news and
          strategies, and network with future professionals in the field.
        </Text>

        <div className={classes.controls}>
          <Button className={classes.control1} size="lg">
            Join The Community
          </Button>
        </div>
      </div>
      <Image src={image} className={classes.image} />
    </div>
  );
};

export default About;
