import React from "react";
import Dashboard from "./Dashboard";
import CarouselTop from "./CarouselTop";
import Social from "./Social";
import Endslider from "./Endslider";
import ProductCarousel from "./ProductCarousel";
import Slider2 from "./Slider2";

const Homepage = () => {
  return (
    <div>
      <CarouselTop />
      <Dashboard />
      <ProductCarousel />
      <Slider2 />
      <Social />
      {/* <Trusted />
      <Services /> */}
      <Endslider />
    </div>
  );
};

export default Homepage;
