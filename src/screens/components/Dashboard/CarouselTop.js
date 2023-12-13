import Carousel from "react-bootstrap/Carousel";
import "./CarouselTop.css";
// Images for Wide Screens
const images = [
  {
    link: "/ll",
    imgPath: [require("../../../assets/desktop 1 web.jpg")],
  },
  {
    link: "/s",
    imgPath: [require("../../../assets/ELEGANCE 1.jpg")],
  },
  {
    link: "/e",
    imgPath: [require("../../../assets/CUSTOM 3.jpg")],
  },
  {
    link: "/w",
    imgPath: [require("../../../assets/GREEN.jpg")],
  },
];
// Images for Small Screens

const images1 = [
  {
    link: "/ll",
    imgPath: [require("../../../assets/3524.jpg")],
  },
  {
    link: "/s",
    imgPath: [require("../../../assets/ELEGANCE 2.jpg")],
  },
  {
    link: "/e",
    imgPath: [require("../../../assets/CUSTOM 2.jpg")],
  },
  {
    link: "/w",
    imgPath: [require("../../../assets/GREEN 1.jpg")],
  },
];
function CarouselTop() {
  return (
    <>
      <div className="carousel1 d-none d-md-block">
        <Carousel id="catalogueCarousel1" data-bs-theme="light">
          {images.map((step, index) => (
            <Carousel.Item interval={3000} key={index}>
              <a href={step.link}>
                <img
                  id="image"
                  className="img-fluid w-100"
                  src={step.imgPath}
                  alt="Curicon"
                />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* For Small Screen */}
      <div className="carousel1 d-md-none ">
        <Carousel id="catalogueCarousel2" data-bs-theme="light">
          {images1.map((step, index) => (
            <Carousel.Item interval={3000} key={index}>
              <a href={step.link}>
                <img
                  id="image2"
                  className="img-fluid object-fit-cover"
                  src={step.imgPath}
                  alt="Curicon"
                />
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default CarouselTop;
