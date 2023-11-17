import React from "react";
import Homepage from "../screens/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kartrace from "../screens/components/Kartrace";
import TopNavigation from "../screens/components/navigation/TopNavigation";
import Contact from "../screens/components/footer/Contact";
import { GlobalStyle } from "../screens/GlobalStyle";
import About from "../screens/components/About";
import ContactUs from "../screens/components/ContactUs";
import ProductDetail from "../screens/components/ProductDetail";
import Motorsport from "../screens/components/Motorsport";

const Routees = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TopNavigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Kartrace" element={<Kartrace />} />
        <Route path="//About" element={<About />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/motorsport" element={<Motorsport />} />

        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default Routees;
