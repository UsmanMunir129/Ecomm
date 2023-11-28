import React from "react";
import "./kartrace.css";
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
    link: "/ProductDetail",
    imgPath:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1619533394727-57d522857f89?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
];
const Kartrace = () => {
  return (
    <>
      <div>
        {/* <TopNavigation /> */}
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
          <div className=" bg-danger row col-sm-12 col-md-9 col-lg-9 col-xl-9  d-flex justify-content-center ">
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
                    <h5 className=" protext ">8080</h5>
                    <h5 className=" protext ">Lorem ipsum dolor sit amet</h5>
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

export default Kartrace;
