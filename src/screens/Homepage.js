import React from "react";
import TopNavigation from "./components/navigation/TopNavigation";

import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/footer/Contact";
import Endslider from "./components/Dashboard/Endslider";
import Kartrace from "./components/Kartrace";

const Homepage = () => {
  return (
    <div>
      <TopNavigation />
      <Dashboard />
      <Endslider />
      <Contact />
    </div>
  );
};

export default Homepage;
