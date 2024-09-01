import { Center, Flex, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Faq from "../../components/FAQ";
import About from "../../components/About";
import Events from "../../components/Events";

function Home() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Navbar />
      <Hero />
      <About />
      {/* <Events/> */}
      <Faq />
      <Footer />
    </MantineProvider>
  );
}

export default Home;
