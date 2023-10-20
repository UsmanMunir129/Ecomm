import React from "react";
import Homepage from "../screens/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "@mui/material";
import Kartrace from "../screens/components/Kartrace";

const Routees = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Kartrace" element={<Kartrace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routees;
