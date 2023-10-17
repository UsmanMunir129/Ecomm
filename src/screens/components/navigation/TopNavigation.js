import React from "react";

// Importing Screen
import DropNavigation from "./DropNavigation";
import "./topnav.css";

const navCate = [
  {
    id: 1,
    name: "First",
    link: "/about",
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
  {
    id: 4,
    name: "Lorem",
    link: "/about",
  },
  {
    id: 5,
    name: "Lorem",
    link: "/about",
  },
];
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
    id: 2,
    itemname: "Sign in",
    link: "/",
  },
  {
    id: 2,
    itemname: "Help",
    link: "/",
  },
  {
    id: 2,
    itemname: "Chat",
    link: "/",
  },
];
const TopNavigation = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark "
        style={{ backgroundColor: "black" }}
      >
        <div class="container-fluid">
          {/* For Large Screen */}
          <a class="navbar-brand d-none d-md-block" href="#">
            WHOLESALE
          </a>
          {/* For Mobile Screen Image and Wholesale */}
          <div
            class="  d-md-none "
            style={{
              width: "75%",
              justifyContent: "center",
            }}
          >
            <a href="#">
              <img
                src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/nipimluadtvolo3jvrlr"
                alt="fdm4"
                style={{
                  maxWidth: "90px",
                }}
              />
            </a>
            <a href="#">
              <span
                style={{ color: "white", float: "right", fontSize: "15px" }}
              >
                WHOLESALE
              </span>
            </a>
          </div>
          {/* Drawer Button */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div
              class="navbar-nav  "
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {navbarTop.map((items, index) => (
                <a
                  class="nav-link me-3"
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
            <div class="align-self-center d-flex justify-content-center d-md-none   ">
              <div class="input-group w-40 ">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button type="button" class="btn btn-danger" aria-setsize={11}>
                  Search
                </button>
              </div>
            </div>
            {/* DropNavigation For Mobile Screen */}

            <div class="maindropcont d-md-none  d-flex">
              {/* First Link */}
              <a
                class="nav-link "
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <h3 class="title text-white">Race</h3>
              </a>
              <div class="dropdown-menu  border-0 ">
                <div class="row justify-content-between py-3 px-5">
                  <div class="catecont col-12 col-sm-4 col-md-2 ">
                    {navCate.map((items, index) => (
                      <a href={items.link} style={{ textDecoration: "none" }}>
                        <h4 class="catetext">{items.name}</h4>
                      </a>
                    ))}
                  </div>

                  <div class="col-12 col-sm-12 col-md-4  align-self-center">
                    <img
                      src="https://www.royalapparel.net/img/dropdowns/CAT_DDBanner_Wmn920.jpg"
                      class="img-fluid"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              {/* Second Link */}
              <a
                class="nav-link "
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <h3 class="title text-white">Race</h3>
              </a>
              <div class="dropdown-menu  border-0 ">
                <div class="row justify-content-between py-3 px-5">
                  <div class="catecont col-12 col-sm-4 col-md-2 ">
                    {navCate.map((items, index) => (
                      <a href={items.link} style={{ textDecoration: "none" }}>
                        <h4 class="catetext">{items.name}</h4>
                      </a>
                    ))}
                  </div>

                  <div class="col-12 col-sm-12 col-md-4  align-self-center">
                    <img
                      src="https://www.royalapparel.net/img/dropdowns/CAT_DDBanner_Wmn920.jpg"
                      class="img-fluid"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              {/* Third Link */}
              <a
                class="nav-link "
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <h3 class="title text-white">Race</h3>
              </a>
              <div class="dropdown-menu  border-0 ">
                <div class="row justify-content-between py-3 px-5">
                  <div class="catecont col-12 col-sm-4 col-md-2 ">
                    {navCate.map((items, index) => (
                      <a href={items.link} style={{ textDecoration: "none" }}>
                        <h4 class="catetext">{items.name}</h4>
                      </a>
                    ))}
                  </div>

                  <div class="col-12 col-sm-12 col-md-4  align-self-center">
                    <img
                      src="https://www.royalapparel.net/img/dropdowns/CAT_DDBanner_Wmn920.jpg"
                      class="img-fluid"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              {/* Forth Link */}
              <a
                class="nav-link "
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <h3 class="title text-white">Race</h3>
              </a>
              <div class="dropdown-menu  border-0 ">
                <div class="row justify-content-between py-3 px-5">
                  <div class="catecont col-12 col-sm-4 col-md-2 ">
                    {navCate.map((items, index) => (
                      <a href={items.link} style={{ textDecoration: "none" }}>
                        <h4 class="catetext">{items.name}</h4>
                      </a>
                    ))}
                  </div>

                  <div class="col-12 col-sm-12 col-md-4  align-self-center">
                    <img
                      src="https://www.royalapparel.net/img/dropdowns/CAT_DDBanner_Wmn920.jpg"
                      class="img-fluid"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              {/* Fifth Link */}
              <a
                class="nav-link "
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <h3 class="title text-white">Race</h3>
              </a>
              <div class="dropdown-menu  border-0 ">
                <div class="row justify-content-between py-3 px-5">
                  <div class="catecont col-12 col-sm-4 col-md-2 ">
                    {navCate.map((items, index) => (
                      <a href={items.link} style={{ textDecoration: "none" }}>
                        <h4 class="catetext">{items.name}</h4>
                      </a>
                    ))}
                  </div>

                  <div class="col-12 col-sm-12 col-md-4  align-self-center">
                    <img
                      src="https://www.royalapparel.net/img/dropdowns/CAT_DDBanner_Wmn920.jpg"
                      class="img-fluid"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/*Starting Header for wider Screen */}
      <div class="container-fluid d-none d-md-block my-3 ">
        <div class="row">
          <div class="col-3 col-lg-4 col-xl-3 col-md-6">
            <a href="#">
              <img
                src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/nipimluadtvolo3jvrlr"
                alt="fdm4"
                style={{ maxWidth: "290px" }}
              />
            </a>
          </div>
          <div
            class="col col-lg-4 col-xl-5  align-self-center justify-content-center d-md-none d-lg-block "
            style={{ borderLeft: "2px solid gray" }}
          >
            <span>
              <h1
                style={{ color: "gray", marginLeft: 15, alignItems: "center" }}
              >
                ECO
              </h1>
            </span>
          </div>
          <div class="col col-lg-4 col-xl-4 col-md-6 align-self-center d-flex justify-content-center ">
            <div class="input-group w-50 ">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" class="btn btn-dark" aria-setsize={11}>
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
