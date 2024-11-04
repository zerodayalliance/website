import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Faq from "../../components/FAQ";
import About from "../../components/About";
import Events from "../../components/Events";
import ScrollToHashElement from "../../utils/ScrollToHashElement";

import classes from "./Home.module.css";

function Home() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <ScrollToHashElement />
      <Navbar navOverride={classes.homeNav} />
      <Hero />
      <About />
      <Events />
      <Faq />
      <Footer />
    </MantineProvider>
  );
}

export default Home;
