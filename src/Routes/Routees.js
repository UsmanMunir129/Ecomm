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
import Products from "../screens/ProductSection/Products";
import ProductDetail from "../screens/ProductSection/ProductDetail";

const Routees = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TopNavigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/motorsport" element={<Motorsport />} />
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
        {/* <Route path="/Gloves/CI-RG30" element={<CIRG30 />} />
        <Route path="/Gloves/CI-RG003" element={<CIRG003 />} />
        <Route path="/Gloves/CI-RG001" element={<CIRG001 />} />
        <Route path="/Gloves/CI-RG41" element={<CIRG41 />} /> */}
        {/*Auto Shoes Routes */}
        <Route path="/Shoes" element={<ShoesScreen />} />
        <Route path="/Shoes/:productId" element={<CIRS011 />} />
        {/* <Route path="/Shoes/RS022" element={<CIRS022 />} />
        <Route path="/Shoes/RS012" element={<CIRS012 />} />
        <Route path="/Shoes/RS023" element={<CIRS023 />} /> */}
        {/*Auto Accessories Routes */}
        <Route path="/Accessories" element={<UnderGar />} />
        {/* Motorsport Routes End */}
        {/* Kart Routes Start */}
        {/* Kart Suits */}
        <Route path="/KartSuit" element={<KartSuitScreen />} />
        {/* Kart gloves */}
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

        {/*Mechanic Routes End */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default Routees;
