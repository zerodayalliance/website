import { useState, useEffect, useRef } from "react";
import Prompt from "../Prompt";
import StdIn from "../StdIn";
import StdOut from "../StdOut";
import StdErr from "../StdErr";
import { exec } from "../../lib/CmdExec";
import "./Terminal.modules.css";

const Terminal = () => {
  const [cmd, setCmd] = useState("");
  const cmdRef = useRef("");
  const [history, setHistory] = useState([
    <Prompt key="hs0" />,
    <StdIn cmd={cmd} key="hs1" />,
  ]);

  const clearTerminal = () => {
    cmdRef.current = "";
    setCmd("");
    setHistory([<Prompt key="shs0" />, <StdIn cmd="" key="shs1" />]);
  };

  const handleCmdInput = (e) => {
    setCmd(e.target.value);
    cmdRef.current = e.target.value;
  };

  const handleRunCmd = (e) => {
    e.preventDefault();
    const newHistory = history.slice();
    newHistory.pop();
    newHistory.push(<StdIn cmd={cmdRef.current} />);
    try {
      const cmdOut = exec(cmdRef.current);
      if (cmdOut === "clear") {
        clearTerminal();
        return;
      }
      newHistory.push(<StdOut>{cmdOut}</StdOut>);
    } catch (error) {
      newHistory.push(<StdErr stdErr={error.message} />);
    }
    newHistory.push(<Prompt />);
    setCmd("");
    cmdRef.current = "";
    setHistory(newHistory);
    newHistory.push(<StdIn cmd={cmdRef.current} />);
  };

  useEffect(() => {
    const cmdIn = document.getElementById("cmd-input");
    document.addEventListener("keypress", () => {
      cmdIn.focus({ preventScroll: true });
    });
  }, []);

  return (
    <main>
      {history.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <div className="currentCmd">
        <span>{cmd}</span>
        <span id="cursor">█</span>
      </div>

      <form onSubmit={handleRunCmd} id="cmd-form">
        <input
          onChange={handleCmdInput}
          value={cmd}
          type="text"
          name="cmd-in"
          id="cmd-input"
          autoFocus
          autoComplete="off"
          aria-autocomplete="none"
        />
      </form>
    </main>
  );
};

export default Terminal;
