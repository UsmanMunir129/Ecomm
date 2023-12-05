import React from "react";
import "./suitsscreen.css";
import { NavLink } from "react-router-dom";
const navCate = [
  {
    id: 1,
    name: "First",
    link: "/Kartrace",
  },
  {
    id: 2,
    name: "Lorem",
    link: "/about",
  },
  {
    id: 3,
    name: "Lorem",
    link: "/about",
  },
];
const images = [
  {
    link: "/SuitRS002",
    code: "CI-RS002",
    detail: "2 Layer Sateen Nomex Suit",
    imgPath: [require("../../assets/SuitRS002.jpeg")],
  },
  {
    link: "/SuitKS002",
    code: "CI-KS002",
    detail: "2 Layer Karting Suit",
    imgPath: [require("../../assets/KS002.JPG")],
  },
  {
    link: "/SuitRS004",
    code: "CI-RS004",
    detail: "2 Layer FR Cotton Suit",
    imgPath: [require("../../assets/RS004.JPG")],
  },
  {
    link: "/SuitKS001",
    code: "CI-KS001",
    detail: "2 Layer Karting Suit",
    imgPath: [require("../../assets/KS001.JPG")],
  },
  {
    link: "/SuitRS003",
    code: "CI-RS003",
    detail: "2 Layer Sateen Nomex Suit",
    imgPath: [require("../../assets/RS003.jpg")],
  },
  {
    link: "/RS000",
    code: "CU-0000",
    detail: "2 Layer Sateen Nomex Suit",
    imgPath: [require("../../assets/CU.JPG")],
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
            src={require("../../assets/carsl1.jpg")}
            alt="Bannerimage"
          />
        </div>
        {/* Left Bar and Product Section */}
        <div className="kartprodcont row mt-5">
          <div className=" col-md-3 col-lg-3 col-xl-3 px-5 d-none d-md-block">
            <div className="catecontainer ">
              <h2 className="categoryhead">Category</h2>
              {navCate.map((items, index) => (
                <a key={index} href={items.link} className="catglinkbtn">
                  <h3 className="categorylinktext">{items.name}</h3>
                </a>
              ))}
            </div>
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

export default SuitsScreen;
