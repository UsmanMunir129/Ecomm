import Carousel from "react-bootstrap/Carousel";
import "./CarouselTop.css";

const images = [
  {
    link: "/ll",
    imgPath: [require("../../../assets/carsl1.jpg")],
  },
  {
    link: "/s",
    imgPath: [require("../../../assets/carsl2.jpg")],
  },
  {
    link: "/e",
    imgPath: [require("../../../assets/carsl3.jpg")],
  },
  {
    link: "/w",
    imgPath: [require("../../../assets/carsl4.jpg")],
  },
];
const images1 = [
  {
    link: "/ll",
    imgPath: [require("../../../assets/a1.jpg")],
  },
  {
    link: "/s",
    imgPath: [require("../../../assets/a3.jpg")],
  },
  {
    link: "/e",
    imgPath: [require("../../../assets/a4.jpg")],
  },
  {
    link: "/w",
    imgPath: [require("../../../assets/a2.jpg")],
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
