import { Text, Title, Button, Image, Box } from "@mantine/core";
// import image from './image.svg';
import logo from "/src/assets/back.png";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          Cybersecurity and Ethical Hacking
        </Title>
        <Text fw={500} fz="lg" mb={5}>
          Securing Tomorrow, One Vulnerability at a Time. <br />
          Join ZeroDay Alliance SNU and pioneer the future of Cybersecurity.
        </Text>
        <div className={classes.controls}>
          <Button className={classes.control}>Join</Button>
         
        </div>
      </div>
      <Image src={logo} className={classes.image} />
    </div>
    
  );
};
export default Hero;
