import React from "react";
import "../../suitsscreen.css";
import { NavLink } from "react-router-dom";
import NavAuto from "../NavAuto";

const images = [
  {
    link: "/Shoes/RS011",
    code: "CI-RS011",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/RS011.JPG")],
  },
  {
    link: "/Shoes/RS022",
    code: "CI-RS022",
    detail: "Double Layer Nomex Shoes",
    imgPath: [require("../../../../assets/RS022.JPG")],
  },
  {
    link: "/Shoes/RS012",
    code: "CI-KS012",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/RS012.JPG")],
  },
  {
    link: "/Shoes/RS023",
    code: "CI-RS023",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/RS023.JPG")],
  },
];
const ShoesScreen = () => {
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
          <div className="row col-sm-12 col-md-12 col-lg-9 col-xl-9 d-flex justify-content-center">
            {images.map((items, index) => (
              <div
                key={index}
                className="kartprodcards col-6 col-sm-6 col-md-6 col-lg-4 my-2 "
              >
                <NavLink to={items.link} className="kartlink">
                  <div className="kartproimg ">
                    <img
                      src={items.imgPath}
                      className="img-fluid "
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

export default ShoesScreen;
