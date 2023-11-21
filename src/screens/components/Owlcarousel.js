import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owlcarousel.css";
const images = [
  {
    id: 1,
    image: [require("../../assets/research.png")],
    heading: "Research & Development",
    Description:
      "Get seasoned experts to develop, run, supply, and market your ecommerce store",
  },
  {
    id: 2,

    image: [require("../../assets/factory.png")],
    heading: "Global ecommerce focus",
    Description:
      "Offer a faster expansion to international fans thanks to production facilities worldwide",
  },
  {
    id: 3,
    image: [require("../../assets/shipment.png")],
    heading: "Unrivaled quality and solutions      ",
    Description:
      "Have your business boosted by premium merch, data-driven strategies, and creative services",
  },
  {
    id: 4,
    image: [require("../../assets/research.png")],
    heading: "Research & Development",
    Description:
      "Get seasoned experts to develop, run, supply, and market your ecommerce store",
  },
  {
    id: 5,

    image: [require("../../assets/factory.png")],
    heading: "Global ecommerce focus",
    Description:
      "Offer a faster expansion to international fans thanks to production facilities worldwide",
  },
  {
    id: 6,
    image: [require("../../assets/shipment.png")],
    heading: "Unrivaled quality and solutions      ",
    Description:
      "Have your business boosted by premium merch, data-driven strategies, and creative services",
  },
];

//Owl Carousel Package Styling Properties
const options = {
  margin: 25,

  responsiveClass: true,
  dots: false,
  autoplay: false,
  smartSpeed: 1000,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>",
  ],

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

const Owlcarousel = () => {
  return (
    <div className="cardsmaincont my-5 p-5">
      <OwlCarousel
        className="owl-theme"
        {...options}
        loop
        items={4}
        margin={10}
        nav
      >
        <div className=" item cards ">
          <div className="">
            <div className="mx-5">
              <h2 className="text-white fs-1 fw-bold ">
                No inventry risk or invesment{" "}
              </h2>
              <p className="text-white fs-4 ">
                With Snow Commerce as part of our team, we’re making ecommerce
              </p>
            </div>
            <img
              src={require("../../assets/Think (1).png")}
              className=" bg-danger"
            />
          </div>
        </div>
        <div className="item bg-danger align-items-center ">
          <img src={require("../../assets/offer.png")} />
        </div>
        <div className="item">
          <img src={require("../../assets/call.png")} />
        </div>
        <div className="item">
          <img src={require("../../assets/Think (5).png")} />
        </div>
        <div className="item">
          <img src={require("../../assets/Mail.png")} />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Owlcarousel;
