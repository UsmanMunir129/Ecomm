import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./endslider.css";
const images = [
  {
    id: 1,
    link: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: [require("../../../assets/meeting.png")],
  },
  {
    id: 2,
    link: "Bird",
    imgPath: [require("../../../assets/Our Story.jpg")],
  },
  {
    id: 3,
    link: "Bali, Indonesia",
    imgPath: [require("../../../assets/custom 2 (1).jpg")],
  },
  {
    id: 4,
    link: "Goč, Serbia",
    imgPath: [require("../../../assets/instagram link.jpg")],
  },
  // {
  //   id: 5,
  //   link: "/Sample-program",
  //   imgPath: [require("../../../assets/sample.png")],
  // },
  {
    id: 6,
    link: [require("../../FabricInfo.pdf")],
    imgPath: [require("../../../assets/fabric info.jpg")],
  },
  // {
  //   id: 7,
  //   link: "/motorsport",
  //   imgPath: [require("../../../assets/ecoooo.jpg")],
  // },
  // {
  //   id: 8,
  //   link: "Goč, Serbia",
  //   imgPath: [require("../../../assets/customform.jpg")],
  // },
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
    <div className="headcont">
      <OwlCarousel
        className="owl-theme"
        loop
        {...options}
        autoplayHoverPause="true"
      >
        {images.map((step, index) => (
          <div key={index} className="item">
            <a href={step.link}>
              <img className="img " src={step.imgPath} alt="Cuircon" />
            </a>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Endslider;
