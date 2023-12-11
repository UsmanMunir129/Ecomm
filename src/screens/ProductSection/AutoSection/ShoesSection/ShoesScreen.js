import React from "react";
import "../../suitsscreen.css";
import { NavLink } from "react-router-dom";
import NavAuto from "../NavAuto";

const images = [
  {
    link: "/Shoes/CI-KSO11",
    code: "CI-KSO11",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/CI-KSO11.jpg")],
  },
  {
    link: "/Shoes/CI-KSO22",
    code: "CI-KSO22",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/CI-KSO22.jpg")],
  },
  {
    link: "/Shoes/CI-KSO33",
    code: "CI-KSO33",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/CI-KSO33.jpg")],
  },
  {
    link: "/Shoes/CI-KSO44",
    code: "CI-KSO44",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/CI-KSO44.JPG")],
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
          <div className="col-md-3 col-lg-3 col-xl-3 px-5 d-none d-md-block">
            <NavAuto />
          </div>
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

export default ShoesScreen;
