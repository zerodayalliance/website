import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Cli from "./pages/Cli";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cli" element={<Cli />}></Route>
    </Routes>
  );
}

export default App;
