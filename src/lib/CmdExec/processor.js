import { Cat, Echo, Help, Ls, Sudo, Whoami } from "../../components/Commands";

const process = (command, args) => {
  switch (command) {
    case "cat":
      return Cat({ fileName: args.join(" ") });
    case "clear":
      return "clear";
    case "echo":
      return Echo({ message: args.join(" ") });
    case "help":
      return Help();
    case "ls":
      return Ls();
    case "sudo":
      return Sudo();
    case "whoami":
      return Whoami();
    default:
      throw new Error(`Command Not Implemented: ${command}`);
  }
};

export default process;
