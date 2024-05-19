import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { HashRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
