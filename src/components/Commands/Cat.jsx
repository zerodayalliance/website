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
          <li>Event 1</li>
          <li>Event 2</li>
        </ul>
      );
    case "teams":
      return (
        <ul className={classes.catList}>
          <li>Team 1</li>
          <li>Team 2</li>
          <li>Team 3</li>
          <li>Team 4</li>
        </ul>
      );
    case "faq":
      return <div>FAQ</div>;
    case "contact":
      return (
        <ul className={classes.catList}>
          <li>
            <span>Website: </span>
            <span>
              <a
                href="https://zeroday-alliance.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                zeroday-alliance.pages.dev
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
