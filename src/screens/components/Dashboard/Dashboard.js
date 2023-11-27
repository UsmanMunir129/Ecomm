import React from "react";
import CarouselTop from "./CarouselTop";
import "./dashboard.css";
const images1 = [
  {
    link: "/ll",
    imgPath: [require("../../../assets/Think (5).png")],
  },
  {
    link: "/s",
    imgPath: [require("../../../assets/factory.png")],
  },
  {
    link: "/e",
    imgPath: [require("../../../assets/shipment.png")],
  },
  {
    link: "/w",
    imgPath: [require("../../../assets/supply.png")],
  },
];
const images2 = [
  {
    link: "/ll",
    imgPath: [require("../../../assets/Think (5).png")],
  },
  {
    link: "/s",
    imgPath: [require("../../../assets/factory.png")],
  },
];
const Dashboard = () => {
  return (
    <>
      <CarouselTop />
      <div className="container my-5">
        <div className="row mb-3 ">
          {images1.map((step, index) => (
            <div className="col-6 col-sm-6 col-md-3 col-lg-3 ">
              <a href="/">
                <div className="imgcont">
                  <img
                    className="img-fluid image1"
                    src={step.imgPath}
                    alt="Cuircon"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
        <div class="row">
          <div class="col">
            <a href="/">
              <div className="imgcont">
                <img
                  className="img-fluid image1"
                  src={require("../../../assets/sample.png")}
                  alt="Cuircon"
                />
              </div>
            </a>
          </div>

          <div class="col">
            <a href="/">
              <div className="imgcont">
                <img
                  className="img-fluid image1"
                  src={require("../../../assets/sample.png")}
                  alt="Cuircon"
                />
              </div>
            </a>
          </div>
          <div class="col-6">
            <div className="imgcont px-5">
              <h2 className="bg-danger">
                Choose from 341+ premium merchandise pieces
              </h2>

              {/* <a href="/">
                <p>Browse for catalog</p>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

{
  /* <Social />
<Trusted />
<Endslider />
<Services /> */
}
