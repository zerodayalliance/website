import { cn } from "@/lib/utils";

const About = ({ className }: { className?: string }) => {
  return (
    <div id="#about" className={cn(`flex flex-col`, className)}>
      <h2 className="font-iceberg text-4xl md:text-5xl mb-2 dark:text-white text-onhold">
        Discover who <span className="text-hero"> we</span> are{" "}
      </h2>
      <h2 className="font-encodesans text-2xl dark:text-tertiary text-primary">
        We, the official cybersecurity club of Sister Nivedita University, are a
        dynamic community of students passionate about exploring the
        ever-evolving world of cybersecurity. Our mission is to foster
        knowledge, collaboration, and hands-on experience in the field of
        digital security. Through workshops, hackathons, CTF challenges and
        expert talks, we equip our members with the skills needed to protect and
        defend against cyber threats. Whether you&apos;re a beginner or a
        seasoned pro, ZeroDay Alliance offers a platform to learn, innovate and
        contribute to the shared objectives.
      </h2>
    </div>
  );
};

export default About;
