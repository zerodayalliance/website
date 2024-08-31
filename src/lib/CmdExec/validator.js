import parse from "./parser";
import { availableCommands } from "../../config/commands";

const validate = (cmd) => {
  cmd = cmd.trim();

  if (cmd === "") {
    throw new Error("No Command Provided");
  }

  const [command] = parse(cmd);

  if (availableCommands.includes(command)) {
    return cmd;
  } else {
    throw new Error(`Command Not Found: ${command}`);
  }
};

export default validate;
