import React from "react";
import Homepage from "../screens/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "@mui/material";

const Routees = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routees;
