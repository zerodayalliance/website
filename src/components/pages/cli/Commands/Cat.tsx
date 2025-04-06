import { FC } from "react";
import classes from "./Commands.module.css";

interface IProps {
  fileName: string;
}

const Cat: FC<IProps> = (props) => {
  let { fileName } = props;
  fileName = fileName.trim();
  fileName.toLowerCase();

  switch (fileName) {
    case "about":
      return (
        <div>
          <h4 className={classes.description}>
            We, the official cybersecurity club of Sister Nivedita University,
            are a dynamic community of students passionate about exploring the
            ever-evolving world of cybersecurity. Our mission is to foster
            knowledge, collaboration, and hands-on experience in the field of
            digital security. Here’s what you can expect:
          </h4>
          <ul className={classes.catList}>
            <li>
              <b>Learn:</b> Stay updated on zero-day vulnerabilities and the
              latest security trends.
            </li>
            <li>
              <b>Collaborate:</b> Work with peers on projects and challenges.
            </li>
            <li>
              <b>Share:</b> Exchange resources, tips, and tools for ethical
              hacking.
            </li>
            <li>
              <b>Discuss:</b> Engage in conversations about cybersecurity news,
              strategies, and innovations.
            </li>
            <li>
              <b>Network:</b> Connect with future professionals in the field.
            </li>
          </ul>
        </div>
      );
    case "events":
      return (
        <ul className={classes.catList}>
          <li>Phantom Breach CTF</li>
          <li>Cybersecurity for AI Professionals</li>
          <li>Securing Generative AI: Risks & Strategies</li>
          <li>Bug Hunt 404</li>
          <li>403: Permission Denied</li>
          <li>Team: Blue</li>
          <li>Cyber Security Technology</li>
          <li>Cyber Security & Cloud</li>
          <li>Cyber Security & Cloud</li>
        </ul>
      );
    case "teams":
      return (
        <ul className={classes.catList}>
          <li>Tech Team (Cyber Security)</li>
          <li>Tech Team (Web Development)</li>
          <li>Graphics Team</li>
          <li>Event Management Team</li>
          <li>PR & Social Media Team</li>
          <li>Outreach Team</li>
        </ul>
      );
    case "faq":
      return <div>Coming Soon...</div>;
    case "contact":
      return (
        <ul className={classes.catList}>
          <li>
            <span>Website: </span>
            <span>
              <a
                href="https://zerodayalliance.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                zerodayalliance.pages.dev
              </a>
            </span>
          </li>
          <li>
            <span>GitHub: </span>
            <span>
              <a
                href="https://github.com/ZeroDay-Alliance-SNU"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ZeroDay-Alliance-SNU
              </a>
            </span>
          </li>
          <li>
            <span>LinkedIn: </span>
            <span>
              <a
                href="https://www.linkedin.com/company/zeroday-alliance-snu"
                target="_blank"
                rel="noopener noreferrer"
              >
                @zeroday-alliance-snu
              </a>
            </span>
          </li>
          <li>
            <span>Instagram: </span>
            <span>
              <a
                href="https://www.instagram.com/zerodayalliance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @zerodayalliance
              </a>
            </span>
          </li>
          <li>
            <span>X: </span>
            <span>
              <a
                href="https://x.com/zerodayalliance"
                target="_blank"
                rel="noopener noreferrer"
              >
                @zerodayalliance
              </a>
            </span>
          </li>
        </ul>
      );
    case "":
      setTimeout(() => {
        window.open("https://takeb1nzyto.space", "_blank");
      }, 420);
      return <div>🐈</div>;
    default:
      return <div>{fileName}: No such file or directory</div>;
  }
};

export default Cat;
