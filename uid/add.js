import crypto from "crypto";
import fs from "fs";

const raw = fs.readFileSync("data.txt", "utf-8");

const parseData = () => {
  const students = raw.split("\r\n").filter(Boolean);
  return students.map((student) => {
    const [name, uid] = student.split("=");
    return {
      name,
      uid,
    };
  });
};

const data = parseData();

import teams from "../src/config/teams.js";
let newTeams = teams;

newTeams.forEach((team) => {
  team.members = team.members.map((member) => {
    const student = data.find((student) => student.name === member.name);
    if (student) {
      const uid = student.uid;
      const hash = crypto.createHash("md5").update(student.uid).digest("hex");
      const newMember = {
        uid,
        hash,
        ...member,
      };
      return newMember;
    }
  });
});

fs.writeFileSync(
  "../src/config/teams.js",
  `
  // Avatar Map: https://github.com/mantinedev/mantine/tree/master/.demo/avatars
  // M: 1 2 3            9 10
  // F:       4 5 6 7 8

  const teams = ${JSON.stringify(newTeams, null, 2)};

  export default teams;
  `
);

// console.log(JSON.stringify(newTeams, null, 2));
newTeams.forEach((team) => {
  console.log(team);
});
