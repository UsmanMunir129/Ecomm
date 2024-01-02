import React from "react";
import "../suitsscreen.css";
import { NavLink } from "react-router-dom";

const mechanic = [
  {
    id: 1,
    name: "KartSuits",
    link: "/M-Suits",
  },
  {
    id: 2,
    name: "Gloves",
    link: "/M-Gloves",
  },
];

const MecNavbar = () => {
  return (
    <div className="col-12 px-5 d-none d-lg-block">
      <div className="catecontainer ">
        <h2 className="categoryhead">Mechanic</h2>
        {mechanic.map((items, index) => (
          <NavLink key={index} to={items.link} className="catglinkbtn">
            <h3 className="categorylinktext">{items.name}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MecNavbar;
