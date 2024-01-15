import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./productCarousel.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 320 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    imgPath: [require("../../../assets/carouselimgs/33.jpg")],
  },
  {
    imgPath: [require("../../../assets/carouselimgs/44 (1).jpg")],
  },
  {
    imgPath: [require("../../../assets/carouselimgs/11-1.png")],
  },
  //Second image url
  {
    imgPath: [require("../../../assets/carouselimgs/222-1.png")],
  },
  //Third image url
  {
    imgPath: [require("../../../assets/carouselimgs/333-1.png")],
  },

  //Fourth image url
  {
    imgPath: [require("../../../assets/carouselimgs/555-1.png")],
  },
];
const ProductCarousel = () => {
  return (
    <div className="parent  bg-dark">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.imgPath} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default ProductCarousel;
