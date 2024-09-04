import { Text, Title, Button, Image, Box } from "@mantine/core";
// import image from './image.svg';
import logo from "/src/assets/back.png";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title} order={1}>
          Securing Tomorrow, <br /> One Vulnerability at a Time.
        </Title>
        <Title fw={500} order={4} c="dimmed" mb={5}>
          Join ZeroDay Alliance SNU and pioneer the future of Cybersecurity.
        </Title>
        <div className={classes.controls}>
          <Link to="/#about">
            <Button size="lg">Learn More</Button>
          </Link>
        </div>
      </div>
      <Image src={logo} className={classes.image} />
    </div>
  );
};
export default Hero;
