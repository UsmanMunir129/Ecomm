import React from "react";
import Homepage from "../screens/components/Dashboard/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavigation from "../screens/components/navigation/TopNavigation";
import Contact from "../screens/components/footer/Contact";
import { GlobalStyle } from "../screens/GlobalStyle";
import ContactUs from "../screens/components/ContactUs";

import Motorsport from "../screens/components/Motorsport";
import Motorsp from "../screens/components/Motorsp";
import SuitsScreen from "../screens/ProductSection/AutoSection/SuitSection/SuitsScreen";
import SuitRS001 from "../screens/ProductSection/AutoSection/SuitSection/SuitRS001";
import UnderGar from "../screens/ProductSection/AutoSection/UnderGarments/UnderGar";

import GlovesScreen from "../screens/ProductSection/AutoSection/GlovesSection/GlovesScreen";
import CIRG20 from "../screens/ProductSection/AutoSection/GlovesSection/CIRG20";

import ShoesScreen from "../screens/ProductSection/AutoSection/ShoesSection/ShoesScreen";
import CIRS011 from "../screens/ProductSection/AutoSection/ShoesSection/CIRS011";

import SampleProgram from "../screens/components/SampleProgram";
import CustomOrder from "../screens/components/CustomOrder";
import KartSuitScreen from "../screens/ProductSection/KartSection/SuitSection/KartSuitScreen";
import KartGloveScreen from "../screens/ProductSection/KartSection/GloveSection/KartGloveScreen";
import KShoesScreen from "../screens/ProductSection/KartSection/ShoesSection/KShoesScreen";
import KaccessoriesScreen from "../screens/ProductSection/KartSection/AccessoriesSec/KaccessoriesScreen";
import MGloves from "../screens/ProductSection/MechanicSection/GlovesSection/Mgloves";

import MSuitSection from "../screens/ProductSection/MechanicSection/SuitSection/MSuitSection";
import Aboutus from "../screens/components/About";

const Routees = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TopNavigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/ECO-Friendly" element={<Motorsport />} />
        <Route path="/motorsp" element={<Motorsp />} />
        <Route path="/Sample-program" element={<SampleProgram />} />
        <Route path="/CustomInfo" element={<CustomOrder />} />
        {/* MotorSport/Auto Screen Section */}
        {/* Auto Suits Route */}
        <Route path="/Suits" element={<SuitsScreen />} />
        <Route path="/Suits/:productId" element={<SuitRS001 />} />
        {/* Auto Glove Route */}
        <Route path="/Gloves" element={<GlovesScreen />} />
        <Route path="/Gloves/:productId" element={<CIRG20 />} />
        {/*Auto Shoes Routes */}
        <Route path="/Shoes" element={<ShoesScreen />} />
        <Route path="/Shoes/:productId" element={<CIRS011 />} />
        {/*Auto Accessories Routes */}
        <Route path="/Accessories" element={<UnderGar />} />
        <Route path="/KartSuit" element={<KartSuitScreen />} />{" "}
        <Route path="/KartGloves" element={<KartGloveScreen />} />
        {/* Kart Shoes */}
        <Route path="/Kart-Shoes" element={<KShoesScreen />} />
        {/* Kart Accessories */}
        <Route path="/Kart-Accessories" element={<KaccessoriesScreen />} />
        {/* Kart Routes End */}
        {/*Mechanic Routes Start */}
        {/*Mechanic Suits */}
        <Route path="/M-Suits" element={<MSuitSection />} />
        {/*Mechanic Gloves */}
        <Route path="/M-Gloves" element={<MGloves />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default Routees;
