import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Faq from "../../components/FAQ";
import About from "../../components/About";

function Home() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Navbar />
      <Hero />
      <About />
      <Faq />
      <Footer />
    </MantineProvider>
  );
}

export default Home;
