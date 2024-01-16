import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import AOS from "aos";

import "./motorsp.css";
import Owlcarousel from "./Owlcarousel";

const images = [
  {
    id: 1,
    image: [require("../../assets/research.png")],
    heading: "Research & Development",
    Description:
      "Revolutionizing racewear through cutting-edge R & D services, we use innovation with performance, crafting bespoke solutions that push the boundaries of speed and safety for the ultimate racing experience",
  },
  {
    id: 2,
    image: [require("../../assets/factory.png")],
    heading: "Global ecommerce focus",
    Description:
      "Experience precision and passion in our racewear manufacturing services. Elevate your brand with expert craftsmanships, delivering the top-notch performance gear for the track champions",
  },
  {
    id: 3,
    image: [require("../../assets/shipment.png")],
    heading: "Unrivaled quality and solutions      ",
    Description:
      "Seamless global delivery for every brands, our shipping service ensures your gear reaches the finish line faster.From track to doorstep, trust us to accelerate your products worldwide with unparalleled efficiency and reliability.",
  },
];
const Motorsp = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div>
        {/* banner image section */}
        <div>
          <Parallax
            className="parallax"
            blur={{ min: -5, max: 5 }}
            strength={100}
            bgImage={require("../../assets/bannermotorsp.jpg")}
            bgImageAlt="Banner image"
          >
            <div className="content1 ">
              <div className="text-content1">
                <h1 className="headingcontent text-white" data-aos="fade-right">
                  Made-to-order: made to grow
                </h1>
                <p
                  className="headingscndcontent text-white"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  Scale your business with a trusted on-demand manufacturer
                </p>
              </div>
            </div>
          </Parallax>
        </div>
        {/* Text heading section */}
        <div className="px-3  m-5">
          <h2>Get new unique RaceWear solutions for your brand</h2>
          <p className="text-black mt-4">
            With Snow Commerce as part of our team, we’re making ecommerce
            management and fandom engagement even easier and more powerful for
            our largest customers
          </p>
        </div>
        {/* card section */}
        <div className="row mx-5">
          {images.map((step, index) => (
            <div key={index} className="col-12 col-sm-12 col-md-4 col-lg-4">
              <div className="card p-3 mb-2">
                <div className="iconimg">
                  <img
                    src={step.image}
                    className="img-fluid"
                    width="40px"
                    alt="Cuircon International"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="headingresearch fw-bold">{step.heading}</h3>
                  <p className="text-black">{step.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Owlcarousel />
    </>
  );
};

export default Motorsp;
