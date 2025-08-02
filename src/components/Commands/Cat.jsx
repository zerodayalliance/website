import classes from "./Commands.module.css";

const Cat = (props) => {
  let { fileName } = props;
  fileName = fileName.trim();
  fileName.toLowerCase();

  switch (fileName) {
    case "about":
      return (
        <div>
          <h4 className={classes.description}>
            Welcome to ZeroDay Alliance, SNU students passionate about
            cybersecurity and ethical hacking. Here’s what you can expect:
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
                href={window.location.origin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {window.location.host}
              </a>
            </span>
          </li>
          <li>
            <span>GitHub: </span>
            <span>
              <a
                href="https://github.com/zerodayalliance"
                target="_blank"
                rel="noopener noreferrer"
              >
                @zerodayalliance
              </a>
            </span>
          </li>
          <li>
            <span>LinkedIn: </span>
            <span>
              <a
                href="https://www.linkedin.com/company/zeroday-alliance"
                target="_blank"
                rel="noopener noreferrer"
              >
                company/zeroday-alliance
              </a>
            </span>
          </li>
          <li>
            <span>Instagram: </span>
            <span>
              <a
                href="https://www.instagram.com/zerodayalliance"
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
