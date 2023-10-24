import React from "react";
import Homepage from "../screens/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kartrace from "../screens/components/Kartrace";
import About from "../screens/About";

const Routees = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Kartrace" element={<Kartrace />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routees;
