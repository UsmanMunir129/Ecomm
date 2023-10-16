import React from "react";
import TopNavigation from "./components/navigation/TopNavigation";

import Header from "./components/navigation/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/footer/Contact";

const Homepage = () => {
  return (
    <div>
      <TopNavigation />
      {/* <Header /> */}
      <Dashboard />
      <Contact />
    </div>
  );
};

export default Homepage;
