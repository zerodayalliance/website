"use client";

import Terminal from "@/components/pages/cli/Terminal";
import WelcomeMsg from "@/components/pages/cli/WelcomeMsg";

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
