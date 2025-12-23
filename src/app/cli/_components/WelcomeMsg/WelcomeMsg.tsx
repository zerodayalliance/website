// import { version } from "@/../package.json";
import "./WelcomeMsg.modules.css";

const WelcomeMsg = () => {
  return (
    <header>
      <h2 className="appName">ZeroDay Alliance</h2>
      <h4 className="description">
        Securing Tomorrow, One Vulnerability at a Time. Join ZeroDay Alliance
        and pioneer the future of Cybersecurity.
      </h4>
      {/* <h5 className="appVersion">v{version}</h5> */}
      <h4 className="helpMsg">
        use <span className="command">help</span> for the list of all available
        commands
      </h4>
      <hr />
    </header>
  );
};

export default WelcomeMsg;
