import { div } from "framer-motion/client"


export const About = () => {
  return (
    <div className="flex w-50% mt-60 ml-20">
      <div>
      </div>
      <div >
        <h1 className="font-gidugu text-5xl  text-hero ">About Us</h1>
        <h2 className="font-iceberg text-6xl mt-5  text-onhold">Discover who we <span className="text-hero"> we</span> are </h2>
        <h2 className="font-encodesans text-2xl mt-5 mr-5 text-hero ">We, the official cybersecurity club of Sister Nivedita University, are a dynamic community of students passionate about exploring the ever-evolving world of cybersecurity. Our mission is to foster knowledge, collaboration, and hands-on experience in the field of digital security. Through workshops, hackathons, CTF challenges and expert talks, we equip our members with the skills needed to protect and defend against cyber threats. Whether you're a beginner or a seasoned pro, ZeroDay Alliance offers a platform to learn, innovate and contribute to the shared objectives.
        </h2>
      </div>
    </div>
  );
}

export default About