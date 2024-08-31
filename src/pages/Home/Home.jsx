import { MantineProvider, Container, Title } from "@mantine/core";
import "@mantine/core/styles.css";
import classes from "./Home.module.css";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <MantineProvider>
      <Navbar />
    </MantineProvider>
  );
}

export default Home;
