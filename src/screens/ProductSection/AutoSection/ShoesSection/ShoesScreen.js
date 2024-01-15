import React from "react";
import "../../suitsscreen.css";
import NavAuto from "../NavAuto";
import { shoes } from "./AShoesData";
import { NavLink } from "react-router-dom";

const ShoesScreen = () => {
  return (
    <>
      <div>
        {/* Top Banner img */}
        <div className=" container-fluid kartbanner">
          <img
            className="img-fluid kartbannerimg"
            src={require("../../../../assets/MotorsportShoes.jpg")}
            alt="Bannerimage"
          />
        </div>
        {/* Left Bar and Product Section */}
        <div className="row ">
          <div className="col-lg-3">
            <NavAuto />
          </div>
          <div className="col-12 col-lg-9">
            <div className="row col-12 m-0 px-3">
              {shoes.map((items, index) => {
                return (
                  <div
                    key={items.id}
                    className="kartprodcards col-6 col-lg-4 my-2"
                  >
                    <NavLink to={`/Shoes/${items.id}`} className="kartlink">
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

                    <NavLink
                      to={`/Shoes/${items.id}`}
                      className="katelastbtn btn mx-3"
                    >
                      View Details
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoesScreen;
