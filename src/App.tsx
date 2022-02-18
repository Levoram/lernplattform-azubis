import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <>
      <Navbar />
      <div className="connector-bar">
        <div className="connector-bar-inner"></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
