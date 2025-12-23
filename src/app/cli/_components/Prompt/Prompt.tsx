import { userName, defaultDir } from "@/config/PS1";

import "./Prompt.modules.css";
import { useEffect, useState } from "react";

const Prompt = () => {
  const [hostName, setHostName] = useState("");

  useEffect(() => {
    setHostName(window.location.hostname);
    // document.title = `${userName}@${window.location.hostname}:${defaultDir}`;
  }, []);

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
