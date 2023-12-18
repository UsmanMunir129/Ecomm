import React from "react";
import "../../suitsscreen.css";
import { NavLink } from "react-router-dom";
import NavAuto from "../NavAuto";

const images = [
  {
    link: "/Gloves/CI-RG20",
    code: "CI-RG20",
    detail: "Skeleton Gloves SFI 3.3/5",
    imgPath: [require("../../../../assets/CI-RG20.jpg")],
  },
  {
    link: "/Gloves/CI-RG30",
    code: "CI-RG30",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-RG30.jpg")],
  },
  {
    link: "/Gloves/CI-RG003",
    code: "CI-RG003",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-RG31.JPG")],
  },
  {
    link: "/Gloves/CI-RG001",
    code: "CI-RG001",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-RG001.JPG")],
  },
  {
    link: "/Gloves/CI-RG41",
    code: "CI-RG41",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-RG41.JPG")],
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
          <div className=" row col-sm-12 col-md-12 col-lg-9 col-xl-9 d-flex justify-content-center">
            {images.map((items, index) => (
              <div
                key={index}
                className="kartprodcards col-6 col-sm-6 col-md-6 col-lg-4 my-2"
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

export default GlovesScreen;
