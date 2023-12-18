import React from "react";
import "./dashboard.css";

import { NavLink } from "react-router-dom";
const images1 = [
  {
    link: "/Suits",
    imgPath: [require("../../../assets/Shoes.jpg")],
    head: "MotorSport",
  },
  {
    link: "/motorsp",
    imgPath: [require("../../../assets/factory.png")],
    head: "Kart",
  },
  {
    link: "/e",
    imgPath: [require("../../../assets/shipment.png")],
    head: "Mechanic",
  },
  {
    link: "/w",
    imgPath: [require("../../../assets/supply.png")],
    head: "ECO",
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="my-5 px-5">
        <div className="row px-5">
          {images1.map((step, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-3 col-lg-3 mb-3">
              <NavLink to={step.link}>
                <div className="imgcont">
                  {/* <img
                    className="img-fluid object-fit-cover image1"
                    src={step.imgPath}
                    alt="Cuircon"
                  /> */}
                  <span className="dashboardheading">{step.head}</span>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className="row px-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <a href="/motorsport">
                  <div className="imgcont">
                    <img
                      className="img-fluid image1"
                      src={require("../../../assets/sample.png")}
                      alt="Cuircon"
                    />
                  </div>
                </a>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <a href="/">
                  <div className="imgcont">
                    <img
                      className="img-fluid image1"
                      src={require("../../../assets/factory.png")}
                      alt="Cuircon"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <NavLink to="/motorsp">
              <div className="imgcont px-5">
                <h2 className="">
                  Choose from 341+ premium merchandise pieces
                </h2>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
