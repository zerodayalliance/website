import { useEffect } from "react";
import WelcomeMsg from "../../components/WelcomeMsg";
import Terminal from "../../components/Terminal";
import decor from "../../lib/consoleDecor";
import "./Cli.modules.css";

const Cli = () => {
  useEffect(() => {
    decor();
  }, []);

  return (
    <div id="cli-container">
      <div id="cli">
        <WelcomeMsg />
        <Terminal />
      </div>
    </div>
  );
};

export default Cli;
