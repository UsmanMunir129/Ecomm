import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./endslider.css";
const images = [
  {
    link: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1619533394727-57d522857f89?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1570",
  },
  {
    link: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1622497170185-5d668f816a56?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
];

//Owl Carousel Package Styling Properties
const options = {
  margin: 25,

  responsiveClass: true,
  dots: false,
  autoplay: true,
  smartSpeed: 1000,

  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
};

const Endslider = () => {
  return (
    <div class="headcont">
      <OwlCarousel
        className="owl-theme"
        loop
        {...options}
        autoplayHoverPause="true"
      >
        {images.map((step, index) => (
          <div class="item">
            <a href={step.link}>
              <img class="img" src={step.imgPath} alt="" />
            </a>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Endslider;
