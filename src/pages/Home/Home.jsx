import { MantineProvider, Container, Title } from "@mantine/core";
import "@mantine/core/styles.css";
import classes from "./Home.module.css";
import Navbar from "../../components/Navbar";
import Home1 from "../../components/Home1";

function Home() {
  return (
    <MantineProvider>
      <Navbar />
      <Home1 />
    </MantineProvider>
  );
}

export default Home;
