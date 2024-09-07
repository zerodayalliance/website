import { Text, Title, Button, Image } from "@mantine/core";
import image from "/src/assets/aboutpic.jpeg";
import classes from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title} order={2} size="h1">
          About Us
        </Title>
        <Text fz="lg">
          Welcome to ZeroDay Alliance, where SNU students passionate about
          cybersecurity and ethical hacking come together to learn about the
          latest security trends and zero-day vulnerabilities, collaborate on
          projects and challenges, share resources and tools, discuss news and
          strategies, and network with future professionals in the field.
        </Text>
        <div className={classes.controls}>
          <Link to="/teams">
            <Button variant="outline" className={classes.control1} size="md">
              Meet Our Teams
            </Button>
          </Link>
        </div>
      </div>
      <Image src={image} className={classes.image} alt="group photo" />
    </div>
  );
};

export default About;
