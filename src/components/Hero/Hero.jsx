import { Text, Title, TextInput, Button, Image } from '@mantine/core';
// import image from './image.svg';
import logo from "/src/assets/back.png";
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Cybersecurity and Ethical Hacking</Title>
        <Text fw={500} fz="lg" mb={5}>
          Cybersecurity and Ethical Hacking
        </Text>
        <div className={classes.controls}>
          <Button className={classes.control}>Join</Button>
        </div>
      </div>
      <Image src={logo} className={classes.image} />
    </div>
  );
}
export default Hero;