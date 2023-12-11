import React from "react";
import "../../suitsscreen.css";
import { NavLink } from "react-router-dom";
import NavAuto from "../NavAuto";

const images = [
  {
    link: "/Gloves/CI-1552",
    code: "CI-1552",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-1552.JPG")],
  },
  {
    link: "/Gloves/CI-1730",
    code: "CI-1730",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-1730.jpg")],
  },
  {
    link: "/Gloves/CI-1731",
    code: "CI-1731",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-1731.jpg")],
  },
  {
    link: "/Gloves/CI-1732",
    code: "CI-1732",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-1732.jpg")],
  },
];
const GlovesScreen = () => {
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
          <div className=" row col-sm-12 col-md-12 col-lg-9 col-xl-9 d-flex justify-content-center ">
            {images.map((items, index) => (
              <div
                key={index}
                className="kartprodcards col-6 col-sm-6 col-md-6 col-lg-4 my-2"
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

export default GlovesScreen;
