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
    imgPath: [require("../../../assets/carouselimgs/111.jpg")],
  },
  {
    imgPath: [require("../../../assets/carouselimgs/222.jpg")],
  },
  {
    imgPath: [require("../../../assets/carouselimgs/333.jpg")],
  },
  //Second image url
  {
    imgPath: [require("../../../assets/carouselimgs/666.jpg")],
  },
  //Third image url
  {
    imgPath: [require("../../../assets/carouselimgs/444.jpg")],
  },

  //Fourth image url
  {
    imgPath: [require("../../../assets/carouselimgs/555.jpg")],
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
