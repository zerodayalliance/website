import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Cli from "./pages/Cli";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/cli" element={<Cli />} />
    </Routes>
  );
}

export default App;
