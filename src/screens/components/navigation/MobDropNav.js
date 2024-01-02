import React from "react";
import { NavLink } from "react-router-dom";
import "./Dropnav.css";

const motorsport = [
  {
    id: 1,
    name: "Suits",
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
    name: "Accessories",
    link: "/Accessories",
  },
];

const kart = [
  {
    id: 1,
    name: "Suits",
    link: "/KartSuit",
  },
  {
    id: 2,
    name: "Gloves",
    link: "/KartGloves",
  },
  {
    id: 3,
    name: "Shoes",
    link: "/Kart-Shoes",
  },
  {
    id: 4,
    name: "Accessories",
    link: "/Kart-Accessories",
  },
];
const mechanic = [
  {
    id: 1,
    name: "Suits",
    link: "/M-Suits",
  },
  {
    id: 2,
    name: "Gloves",
    link: "/M-Gloves",
  },
];
const MobDropNav = () => {
  return (
    <div>
      {/* DropNavigation For Mobile Screen */}
      <div className="maindropcont d-md-none  d-flex">
        {/* First Link */}
        <a
          className="nav-link "
          href="/"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
        >
          <h6 className="dropnavtitle text-white">Motorsport</h6>
        </a>
        <div className="dropdown-menu  border-0 ">
          <div className="row justify-content-between py-3 px-5">
            <div className="catecont col-12 col-sm-4 col-md-2 ">
              {motorsport.map((items, index) => (
                <a
                  key={index}
                  href={items.link}
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="catetext fs-4">{items.name}</h4>
                </a>
              ))}
            </div>

            <div className="col-12  col-md-4  align-self-center">
              <NavLink to={"/Suits"}>
                <img
                  src={require("../../../assets/AutoSuitBanner.jpg")}
                  className="img-fluid"
                  alt="Cuircon intl"
                />
              </NavLink>
            </div>
          </div>
        </div>
        {/* Second Link */}
        <a
          className="nav-link "
          href="/"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
        >
          <h6 className="dropnavtitle text-white">Kart</h6>
        </a>
        <div className="dropdown-menu  border-0 ">
          <div className="row justify-content-between py-3 px-5">
            <div className="catecont col-12 col-sm-4 col-md-2 ">
              {kart.map((items, index) => (
                <a
                  key={index}
                  href={items.link}
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="catetext fs-4">{items.name}</h4>
                </a>
              ))}
            </div>

            <div className="col-12 col-sm-12 col-md-4 align-self-center">
              <img
                src={require("../../../assets/AutoSuitBanner.jpg")}
                className="img-fluid"
                alt="Cuircon"
              />
            </div>
          </div>
        </div>
        {/* Third Link */}

        <a
          className="nav-link "
          href="/"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
        >
          <h6 className="dropnavtitle text-white">Mechanic</h6>
        </a>
        <div className="dropdown-menu  border-0 ">
          <div className="row justify-content-between py-3 px-5">
            <div className="catecont col-12 col-sm-4 col-md-2 ">
              {mechanic.map((items, index) => (
                <a
                  key={index}
                  href={items.link}
                  style={{ textDecoration: "none" }}
                >
                  <h4 className="catetext fs-4">{items.name}</h4>
                </a>
              ))}
            </div>

            <div className="col-12  col-md-4  align-self-center">
              <img
                src={require("../../../assets/AutoSuitBanner.jpg")}
                className="img-fluid"
                alt="Cuircon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobDropNav;
