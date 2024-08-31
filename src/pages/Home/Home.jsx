import { MantineProvider, Container, Title } from "@mantine/core";
import "@mantine/core/styles.css";
import classes from "./Home.module.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

function Home() {
  return (
    <MantineProvider>
      <Navbar />
      <Hero />
    </MantineProvider>
  );
}

export default Home;
