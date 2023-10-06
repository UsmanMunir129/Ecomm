import React from "react";
import Header from "./components/navigation/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import FirstStepper from "./components/Dashboard/FirstStepper";

const Homepage = () => {
  return (
    <div>
      <Header />
      <FirstStepper />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Homepage;
