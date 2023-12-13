import React from "react";
import "../../suitsscreen.css";
import { NavLink } from "react-router-dom";
import NavAuto from "../NavAuto";

const images = [
  {
    link: "/Suits/RS001",
    code: "CI-RS001",
    detail: "2 Layer Gabardine Nomex Suit",
    imgPath: [require("../../../../assets/SuitRS002.jpeg")],
  },
  {
    link: "/Suits/KS002",
    code: "CI-KS002",
    detail: "2 Layer Karting Suit",
    imgPath: [require("../../../../assets/KS002.JPG")],
  },
  {
    link: "/Suits/RS004",
    code: "CI-RS004",
    detail: "2 Layer FR Cotton Suit",
    imgPath: [require("../../../../assets/RS004.JPG")],
  },
  {
    link: "/Suits/KS001",
    code: "CI-KS001",
    detail: "2 Layer Karting Suit",
    imgPath: [require("../../../../assets/KS001.JPG")],
  },
  {
    link: "/Suits/RS003",
    code: "CI-RS003",
    detail: "2 Layer Sateen Nomex Suit",
    imgPath: [require("../../../../assets/RS003.jpg")],
  },
  {
    link: "/Suits/RS000",
    code: "CU-0000",
    detail: "2 Layer Sateen Nomex Suit",
    imgPath: [require("../../../../assets/CU.JPG")],
  },
];
const SuitsScreen = () => {
  return (
    <>
      <div>
        {/* Top Banner img */}
        <div className=" container-fluid kartbanner">
          <img
            className="img-fluid object-fit-cover kartbannerimg"
            src={require("../../../../assets/carsl1.jpg")}
            alt="Bannerimage"
          />
        </div>
        {/* Left Bar and Product Section */}
        <div className="kartprodcont row mt-5">
          <NavAuto />

          {/* Product Section */}
          <div className="row col-sm-12 col-md-9 col-lg-9 col-xl-9  d-flex justify-content-center ">
            {images.map((items, index) => (
              <div
                key={index}
                className="kartprodcards col-6 col-sm-6 col-md-4 col-lg-4 my-2"
              >
                <NavLink to={items.link} className="kartlink">
                  <div className="kartproimg ">
                    <img
                      src={items.imgPath}
                      className="img-fluid object-fit-cover"
                      alt="Suits"
                    />
                  </div>
                  <div className="kartbodytext">
                    <h5 className=" protext ">{items.code}</h5>
                    <h5 className=" protext ">{items.detail}</h5>
                  </div>
                </NavLink>

                <NavLink to={items.link} className="katelastbtn btn mx-3">
                  View Details
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuitsScreen;
