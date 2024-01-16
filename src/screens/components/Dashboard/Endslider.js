import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./endslider.css";
const images = [
  {
    id: 1,
    link: "http://cuirconintl.com/qq/form.php",
    imgPath: [require("../../../assets/aa meeting.jpg")],
  },
  {
    id: 2,
    link: "http://cuirconintl.com/Blogs/",
    imgPath: [require("../../../assets/blog.jpg")],
  },
  {
    id: 3,
    link: "/CustomInfo",
    imgPath: [require("../../../assets/CUSTOM.jpg")],
  },
  {
    id: 4,
    link: "https://www.instagram.com/cuircon_international/",
    imgPath: [require("../../../assets/followus.jpg")],
  },

  {
    id: 5,
    link: [require("../../FabricInfo.pdf")],
    imgPath: [require("../../../assets/FABRIC PG.jpg")],
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
              <img
                className="sliderendimg img-fluid "
                src={step.imgPath}
                alt="Cuircon"
              />
            </a>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Endslider;
