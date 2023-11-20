import React, { useEffect } from "react";
import { Parallax } from "react-parallax";
import AOS from "aos";

import "./motorsp.css";

const images = [
  {
    id: 1,
    imgPath: "../assets/factory.png",
    heading: "Research & Development",
    Description:
      "Get seasoned experts to develop, run, supply, and market your ecommerce store",
  },
  {
    id: 2,
    imgPath:
      "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
    heading: "Global ecommerce focus",
    Description:
      "Offer a faster expansion to international fans thanks to production facilities worldwide",
  },
  {
    id: 3,
    imgPath:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
    heading: "Unrivaled quality and solutions      ",
    Description:
      "Have your business boosted by premium merch, data-driven strategies, and creative services",
  },
];
const Motorsp = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div>
        <div>
          <Parallax
            className="parallax"
            blur={{ min: -5, max: 5 }}
            strength={100}
            bgImage={require("../../assets/About.jpg")}
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
                  data-aos-duration="2000"
                >
                  Scale your business with a trusted on-demand manufacturer
                </p>
              </div>
            </div>
          </Parallax>
        </div>
        {/* card section */}
        <div className="mt-5">
          <div class="row px-5 ">
            {/* <div class="col-md-4">
              <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <div class="icon">
                      <img
                        src={require("../../assets/research.png")}
                        className="img-fluid"
                        width="40px"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="mt-5">
                  <h3 class="headingresearch fw-bold">
                    Research & Development
                  </h3>
                  <p>
                    Get seasoned experts to develop, run, supply, and market
                    your ecommerce store
                  </p>
                </div>
              </div>
            </div> */}
            {images.map((step, index) => (
              <div class="col-md-4">
                <div class="card p-3 mb-2">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                      <div key={step.id} class="icon">
                        <img
                          src={step.imgPath}
                          // src={require("../../assets/factory.png")}
                          className="img-fluid"
                          width="40px"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <h3 class="headingresearch fw-bold">{step.heading}</h3>
                    <p>{step.Description}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* <div class="col-md-4">
              <div class="card p-3 mb-2">
                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <div class="icon">
                      <img
                        src={require("../../assets/shipment.png")}
                        className="img-fluid"
                        width="40px"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="mt-5">
                  <h3 class="headingresearch fw-bold">
                    Research & Development
                  </h3>
                  <p>
                    Get seasoned experts to develop, run, supply, and market
                    your ecommerce store
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Motorsp;
