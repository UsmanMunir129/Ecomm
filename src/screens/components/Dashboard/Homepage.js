import React from "react";
import Dashboard from "./Dashboard";
import CarouselTop from "./CarouselTop";
import Social from "./Social";
import Endslider from "./Endslider";

const Homepage = () => {
  return (
    <div>
      <CarouselTop />
      <Dashboard />
      <Social />
      {/* <Trusted />
      <Services /> */}
      <Endslider />
    </div>
  );
};

export default Homepage;
