import names from "./names";

const randomName = names[Math.floor(Math.random() * names.length)];

const userName = randomName.toLowerCase().trim();
const hostName = window.location.host;
const defaultDir = "~";
const inCharacter = "❯";

export { userName, hostName, defaultDir, inCharacter };
