import { MantineProvider} from "@mantine/core";
import "@mantine/core/styles.css";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import Faq from "../../components/FAQ";

function Home() {
  return (
    <MantineProvider>
      <Navbar />
      <Hero />
      <Faq />
      <Footer />
    </MantineProvider>
  );
}

export default Home;
