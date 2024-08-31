import validate from "./validator";
import parse from "./parser";
import process from "./processor";

const exec = (cmd) => {
  try {
    validate(cmd);
  } catch (error) {
    throw new Error(error);
  }
  const [command, ...args] = parse(cmd);
  return process(command, args);
};

export { exec };
