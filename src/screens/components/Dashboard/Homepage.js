import React from "react";
import Dashboard from "./Dashboard";
import CarouselTop from "./CarouselTop";
import Social from "./Social";
import Trusted from "./Trusted";
import Services from "./Services";

const Homepage = () => {
  return (
    <div>
      <CarouselTop />
      <Dashboard />
      <Social />
      <Trusted />
      <Services />
    </div>
  );
};

export default Homepage;
