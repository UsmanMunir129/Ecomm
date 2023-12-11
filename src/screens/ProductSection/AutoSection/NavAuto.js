import React from "react";
import "../suitsscreen.css";
import { NavLink } from "react-router-dom";
const navCate = [
  {
    id: 1,
    name: "Suit",
    link: "/Suits",
  },
  {
    id: 2,
    name: "Gloves",
    link: "/Gloves",
  },
  {
    id: 3,
    name: "Shoes",
    link: "/Shoes",
  },
  {
    id: 4,
    name: "Undergarments",
    link: "/Undergarments",
  },
];
const NavAuto = () => {
  return (
    <div className=" col-md-3 col-lg-3 col-xl-3  d-none d-lg-block">
      <div className="catecontainer ">
        <h2 className="categoryhead">Category</h2>
        {navCate.map((items, index) => (
          <NavLink key={index} to={items.link} className="catglinkbtn">
            <h3 className="categorylinktext">{items.name}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavAuto;
