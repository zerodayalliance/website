const parse = (cmd) => {
  const command = cmd.split(" ")[0];
  const args = cmd.split(" ").slice(1);
  return [command, ...args];
};

export default parse;
