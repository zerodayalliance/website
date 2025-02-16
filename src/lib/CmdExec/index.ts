import validate from "./validator";
import parse from "./parser";
import process from "./processor";

const exec = (cmd: string) => {
  try {
    validate(cmd);
  } catch (error: any) {
    throw new Error(error);
  }
  const [command, ...args] = parse(cmd);
  return process(command, args);
};

export { exec };
