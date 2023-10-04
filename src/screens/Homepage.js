import React from "react";
import Header from "./components/navigation/Header";
import Header2 from "./components/navigation/Header2";
import Nav from "./components/navigation/Nav";
import Dashboard from "./Dashboard/Dashboard";
import Social from "./Dashboard/Social";
import Footer from "./footer/Footer";
import Endfooter from "./footer/Endfooter";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <Nav />
      <Dashboard />
      <Social />
      <Footer />
      <Endfooter />
    </div>
  );
};

export default Homepage;
