import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Cli from "./pages/Cli";
import FourZeroFour from "./pages/FourZeroFour";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/cli" element={<Cli />} />
      <Route path="*" element={<FourZeroFour />} />
    </Routes>
  );
}

export default App;
