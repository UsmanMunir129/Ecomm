import React from "react";
import "../../suitsscreen.css";
import { NavLink } from "react-router-dom";
import NavAuto from "../NavAuto";

const images = [
  {
    // link: "/Mask-CiBlava1",
    code: "CI-UNGMT",
    detail: "Knitted Nomex",
    imgPath: [require("../../../../assets/undergarment.jpg")],
  },
  {
    // link: "/Mask-CiBlava1",
    code: "CI-Neck",
    detail: "Woven FRC Fabric",
    imgPath: [require("../../../../assets/neck.jpg")],
  },
  {
    // link: "/Mask-CiBlava",
    code: "CI-HMBG",
    detail: "Outer in Ployster Inside Cotton Towel",
    imgPath: [require("../../../../assets/CI-RA0023.jpg")],
  },
  {
    // link: "/Mask-CiBlava1",
    code: "CI-Blava",
    detail: "Made in Knitted Nomex",
    imgPath: [require("../../../../assets/CI-RA001 Nomex Balaclava.jpg")],
  },

  {
    // link: "/Mask-CiBlava",
    code: "CI-FLAG",
    detail: "Checkered Flag Made in Polyster",
    imgPath: [require("../../../../assets/CI-RA0027.jpg")],
  },
  {
    // link: "/Mask-CiBlava1",
    code: "CI-Socks",
    detail: "Socks Made in Knitted Nomex",
    imgPath: [require("../../../../assets/CI-RA0022 socks - Copy copy.jpg")],
  },
];
const UnderGar = () => {
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
                {/* <NavLink to={items.link} className="kartlink"> */}
                <div className="kartproimg ">
                  <img
                    src={items.imgPath}
                    className="img-fluid "
                    alt="Suits"
                    style={{
                      height: "365px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="kartbodytext">
                  <h5 className=" protext ">{items.code}</h5>
                  <h5 className=" protext ">{items.detail}</h5>
                </div>
                {/* </NavLink> */}

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

export default UnderGar;
