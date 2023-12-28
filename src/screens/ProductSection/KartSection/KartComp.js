import React from "react";
import { NavLink } from "react-router-dom";

const KartComp = ({ images }) => {
  return (
    <div>
      <div className="row col-12 m-0 px-3">
        {images.map((items, index) => (
          <div
            key={index}
            className="kartprodcards col-6 col-sm-6 col-md-6 col-lg-4 my-2"
          >
            <NavLink to={items.link} className="kartlink">
              <div className="kartproimg ">
                <img src={items.imgPath} className="img-fluid " alt="Suits" />
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
  );
};

export default KartComp;
