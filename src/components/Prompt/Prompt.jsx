import { userName, hostName, defaultDir } from "../../config/PS1";
import "./Prompt.modules.css";

const Prompt = () => {
  return (
    <>
      <span className="userName">{userName}</span>
      <span className="at">@</span>
      <span className="hostName">{hostName}</span>
      <span className="colon"> : </span>
      <span className="dirName">{defaultDir}</span>
    </>
  );
};

export default Prompt;
