"use client";

import Terminal from "./_components/Terminal";
import WelcomeMsg from "./_components/WelcomeMsg";

import "./cli.modules.css";

export default function Cli() {
  return (
    <div id="cli-container">
      <div id="cli">
        <WelcomeMsg />
        <Terminal />
      </div>
    </div>
  );
}
