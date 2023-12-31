import React from "react";

// Importing Screen
import DropNavigation from "./DropNavigation";
import "./topnav.css";
import { NavLink } from "react-router-dom";
import MobDropNav from "./MobDropNav";
const navbarTop = [
  {
    id: 1,
    itemname: "See details for free shipping",
    link: "/",
  },
  {
    id: 2,
    itemname: "Tracking",
    link: "/",
  },
  {
    id: 3,
    itemname: "Sign in",
    link: "/",
  },
  {
    id: 4,
    itemname: "Help",
    link: "/",
  },
  {
    id: 5,
    itemname: "Chat",
    link: "/",
  },
];

const TopNavigation = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          {/* For Large Screen */}

          <NavLink className="navbar-brand d-none d-md-block" to="/">
            <h3>MANUFACTURE</h3>
          </NavLink>
          {/* For Mobile Screen (Image and Heading) */}
          <div
            className="  d-md-none "
            style={{
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink to="./">
              <img
                src={require("../../../assets/cuircon.webp")}
                alt="Cuircon Intl"
                style={{
                  maxWidth: "90px",
                }}
              />
            </NavLink>
            <NavLink to="/">
              <span
                style={{
                  color: "white",
                  float: "right",
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginTop: "3px",
                }}
              >
                MANUFACTURE
              </span>
            </NavLink>
          </div>
          {/* Drawer Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div
              className="navbar-nav  "
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {navbarTop.map((items, index) => (
                <a
                  key={index}
                  className="nav-link me-3"
                  href={items.link}
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontFamily: "sans-serif",
                    letterSpacing: -0.5,
                  }}
                >
                  {items.itemname}
                </a>
              ))}
            </div>
            {/* Search Bar For Mobile Screen */}
            {/* <div
              className="align-self-center d-flex justify-content-center d-md-none  "
              style={{ overflow: "hidden" }}
            >
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button type="button" className="btn btn-danger">
                  Search
                </button>
              </div>
            </div> */}
            {/* DropNavigation For Mobile Screen */}
            <MobDropNav />
          </div>
        </div>
      </nav>
      {/*Starting Header for wider Screen */}
      <div className="container-fluid d-none d-md-block my-3 ">
        <div className="row">
          <div className="col-3 col-lg-4 col-xl-3 col-md-6">
            <NavLink to="/">
              <img
                src={require("../../../assets/cuircon.webp")}
                alt="Cuircon"
                style={{ maxWidth: "290px" }}
              />
            </NavLink>
          </div>
          <div
            className="col col-lg-4 col-xl-5  align-self-center justify-content-center d-md-none d-lg-block "
            style={{ borderLeft: "2px solid gray" }}
          >
            <span>
              <h2
                style={{ color: "gray", marginLeft: 15, alignItems: "center" }}
              >
                ECO
              </h2>
            </span>
          </div>
          <div className="col col-lg-4 col-xl-4 col-md-6 align-self-center d-flex justify-content-center ">
            <div
              className="input-group w-50 "
              style={{ height: "38px", fontSize: "20px" }}
            >
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" className="btn btn-dark">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown Navbar */}
      {/* Screen */}
      <DropNavigation />
    </>
  );
};

export default TopNavigation;
