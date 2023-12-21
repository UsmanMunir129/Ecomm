import React from "react";
import Dashboard from "./Dashboard";
import CarouselTop from "./CarouselTop";
import Social from "./Social";
import Trusted from "./Trusted";
import Services from "./Services";
import Endslider from "./Endslider";

const Homepage = () => {
  return (
    <div>
      <CarouselTop />
      <Dashboard />
      <Social />
      <Trusted />
      <Services />
      <Endslider />
    </div>
  );
};

export default Homepage;
