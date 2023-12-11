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
import SuitsScreen from "../screens/ProductSection/AutoSection/SuitSection/SuitsScreen";
import SuitRS002 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS002";
import SuitKS002 from "../screens/ProductSection/AutoSection/SuitSection/SuitKS002";
import SuitRS004 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS004";
import SuitKS001 from "../screens/ProductSection/AutoSection/SuitSection/SuitKS001";
import SuitRS003 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS003";
import SuitRS000 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS000";
import UnderGar from "../screens/ProductSection/AutoSection/UnderGarments/UnderGar";
import CiBlava from "../screens/ProductSection/AutoSection/UnderGarments/CiBlava";
import CiBlava1 from "../screens/ProductSection/AutoSection/UnderGarments/CiBlava1";
import GlovesScreen from "../screens/ProductSection/AutoSection/GlovesSection/GlovesScreen";
import CI1552 from "../screens/ProductSection/AutoSection/GlovesSection/CI1552";
import CI1730 from "../screens/ProductSection/AutoSection/GlovesSection/CI1730";
import CI1731 from "../screens/ProductSection/AutoSection/GlovesSection/CI1731";
import CI1732 from "../screens/ProductSection/AutoSection/GlovesSection/CI1732";
import ShoesScreen from "../screens/ProductSection/AutoSection/ShoesSection/ShoesScreen";
import CIKSO11 from "../screens/ProductSection/AutoSection/ShoesSection/CIKSO11";
import CIKSO22 from "../screens/ProductSection/AutoSection/ShoesSection/CIKSO22";
import CIKSO33 from "../screens/ProductSection/AutoSection/ShoesSection/CIKSO33";
import CIKSO44 from "../screens/ProductSection/AutoSection/ShoesSection/CIKSO44";

const Routees = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TopNavigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/motorsport" element={<Motorsport />} />
        <Route path="/motorsp" element={<Motorsp />} />
        <Route path="/Suits" element={<SuitsScreen />} />
        <Route path="/SuitRS002" element={<SuitRS002 />} />
        <Route path="/SuitKS002" element={<SuitKS002 />} />
        <Route path="/SuitRS004" element={<SuitRS004 />} />
        <Route path="/SuitKS001" element={<SuitKS001 />} />
        <Route path="/SuitRS003" element={<SuitRS003 />} />
        <Route path="/RS000" element={<SuitRS000 />} />

        <Route path="/Gloves" element={<GlovesScreen />} />
        <Route path="/Gloves/CI-1552" element={<CI1552 />} />
        <Route path="/Gloves/CI-1730" element={<CI1730 />} />
        <Route path="/Gloves/CI-1731" element={<CI1731 />} />
        <Route path="/Gloves/CI-1732" element={<CI1732 />} />
        <Route path="/Shoes" element={<ShoesScreen />} />
        <Route path="/Shoes/CI-KSO11" element={<CIKSO11 />} />
        <Route path="/Shoes/CI-KSO22" element={<CIKSO22 />} />
        <Route path="/Shoes/CI-KSO33" element={<CIKSO33 />} />
        <Route path="/Shoes/CI-KSO44" element={<CIKSO44 />} />
        <Route path="/Undergarments" element={<UnderGar />} />
        <Route path="/Mask-CiBlava" element={<CiBlava />} />
        <Route path="/Mask-CiBlava1" element={<CiBlava1 />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default Routees;
