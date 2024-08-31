import "./WelcomeMsg.modules.css";

const WelcomeMsg = () => {
  return (
    <header>
      <h2 className="appName">ZeroDay Alliance SNU</h2>
      <h4 className="description">
        Securing Tomorrow, One Vulnerability at a Time. Join ZeroDay Alliance
        SNU and pioneer the future of Cybersecurity.
      </h4>
      <h4 className="helpMsg">
        use <span className="command">help</span> for the list of all available
        commands
      </h4>
      <hr />
    </header>
  );
};

export default WelcomeMsg;
