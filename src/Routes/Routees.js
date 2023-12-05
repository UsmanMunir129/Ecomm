import React from "react";
import Homepage from "../screens/components/Dashboard/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavigation from "../screens/components/navigation/TopNavigation";
import Contact from "../screens/components/footer/Contact";
import { GlobalStyle } from "../screens/GlobalStyle";
import About from "../screens/components/About";
import ContactUs from "../screens/components/ContactUs";

import Motorsport from "../screens/components/Motorsport";
import Motorsp from "../screens/components/Motorsp";
import SuitRS002 from "../screens/ProductSection/SuitSection/SuitRS002";
import SuitsScreen from "../screens/ProductSection/SuitsScreen";
import SuitKS002 from "../screens/ProductSection/SuitSection/SuitKS002";
import SuitRS004 from "../screens/ProductSection/SuitSection/SuitRS004";
import SuitKS001 from "../screens/ProductSection/SuitSection/SuitKS001";
import SuitRS003 from "../screens/ProductSection/SuitSection/SuitRS003";
import SuitRS000 from "../screens/ProductSection/SuitSection/SuitRS000";

const Routees = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TopNavigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Suits" element={<SuitsScreen />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/motorsport" element={<Motorsport />} />
        <Route path="/motorsp" element={<Motorsp />} />
        <Route path="/SuitRS002" element={<SuitRS002 />} />
        <Route path="/SuitKS002" element={<SuitKS002 />} />
        <Route path="/SuitRS004" element={<SuitRS004 />} />
        <Route path="/SuitKS001" element={<SuitKS001 />} />
        <Route path="/SuitRS003" element={<SuitRS003 />} />
        <Route path="/RS000" element={<SuitRS000 />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default Routees;
