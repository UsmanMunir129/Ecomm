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
import SuitRS001 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS001";
import SuitRS002 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS002";
import SuitRS004 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS004";
import SuitRS005 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS005";
import SuitRS003 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS003";
import SuitRS000 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS000";
import UnderGar from "../screens/ProductSection/AutoSection/UnderGarments/UnderGar";
import CiBlava from "../screens/ProductSection/AutoSection/UnderGarments/CiBlava";
import CiBlava1 from "../screens/ProductSection/AutoSection/UnderGarments/CiBlava1";
import GlovesScreen from "../screens/ProductSection/AutoSection/GlovesSection/GlovesScreen";
import CIRG20 from "../screens/ProductSection/AutoSection/GlovesSection/CIRG20";
import CIRG30 from "../screens/ProductSection/AutoSection/GlovesSection/CIRG30";
import CIRG003 from "../screens/ProductSection/AutoSection/GlovesSection/CIRG003";
import CIRG001 from "../screens/ProductSection/AutoSection/GlovesSection/CIRG001";
import ShoesScreen from "../screens/ProductSection/AutoSection/ShoesSection/ShoesScreen";
import CIRS011 from "../screens/ProductSection/AutoSection/ShoesSection/CIRS011";
import CIRS022 from "../screens/ProductSection/AutoSection/ShoesSection/CIRS022";
import CIRS012 from "../screens/ProductSection/AutoSection/ShoesSection/CIRS012";
import CIRS023 from "../screens/ProductSection/AutoSection/ShoesSection/CIRS023";
import CIRG41 from "../screens/ProductSection/AutoSection/GlovesSection/CIRG41";

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
        {/* MotorSport/Auto Screen Section */}
        {/* Auto Suits Route */}
        <Route path="/Suits" element={<SuitsScreen />} />
        <Route path="/Suits/RS001" element={<SuitRS001 />} />
        <Route path="/Suits/RS002" element={<SuitRS002 />} />
        <Route path="/Suits/RS004" element={<SuitRS004 />} />
        <Route path="/Suits/RS005" element={<SuitRS005 />} />
        <Route path="/Suits/RS003" element={<SuitRS003 />} />
        <Route path="/Suits/RS000" element={<SuitRS000 />} />
        {/* Auto Glove Route */}
        <Route path="/Gloves" element={<GlovesScreen />} />
        <Route path="/Gloves/CI-RG20" element={<CIRG20 />} />
        <Route path="/Gloves/CI-RG30" element={<CIRG30 />} />
        <Route path="/Gloves/CI-RG003" element={<CIRG003 />} />
        <Route path="/Gloves/CI-RG001" element={<CIRG001 />} />
        <Route path="/Gloves/CI-RG41" element={<CIRG41 />} />
        {/*Auto Shoes Routes */}
        <Route path="/Shoes" element={<ShoesScreen />} />
        <Route path="/Shoes/RS011" element={<CIRS011 />} />
        <Route path="/Shoes/RS022" element={<CIRS022 />} />
        <Route path="/Shoes/RS012" element={<CIRS012 />} />
        <Route path="/Shoes/RS023" element={<CIRS023 />} />
        {/*Auto Accessories Routes */}
        <Route path="/Accessories" element={<UnderGar />} />
        <Route path="/Mask-CiBlava" element={<CiBlava />} />
        <Route path="/Mask-CiBlava1" element={<CiBlava1 />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default Routees;
