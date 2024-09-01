import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {  MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Faq from "../../components/FAQ";
import About from "../../components/About";
import Events from "../../components/Events";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

function Home() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <ScrollToHashElement />
      <Navbar />
      <Hero />
      <About />
      <Events/>
      <Faq />
      <Footer />
    </MantineProvider>
  );
}

export default Home;
