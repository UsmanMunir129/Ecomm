import React from "react";
import "./Dropnav.css";
const images = [
  {
    link: "/",
    imgPath:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "/",
    imgPath:
      "https://hips.hearstapps.com/hmg-prod/images/el-womeninmotorsport-comp-abbi-64d0c0bc96198.jpg",
  },
];
const navCate = [
  {
    id: 1,
    name: "Suits",
    link: "/Kartrace",
  },
  {
    id: 2,
    name: "Gloves",
    link: "/About",
  },
  {
    id: 3,
    name: "Shoes",
    link: "/about",
  },
  {
    id: 4,
    name: "Under Garments",
    link: "/about",
  },
];

const manCate = [
  {
    id: 1,
    name: "Suits",
    link: "/Kartrace",
  },
  {
    id: 2,
    name: "Gloves",
    link: "/About",
  },
  {
    id: 3,
    name: "Shoes",
    link: "/about",
  },
  {
    id: 4,
    name: "Under Garments",
    link: "/about",
  },
  // {
  //   id: 5,
  //   name: "Lorem",
  //   link: "/about",
  // },
];
const womenCate = [
  {
    id: 1,
    name: "Suits",
    link: "/Kartrace",
  },
  {
    id: 2,
    name: "Gloves",
    link: "/About",
  },
  {
    id: 3,
    name: "Shoes",
    link: "/about",
  },
  {
    id: 4,
    name: "Under Garments",
    link: "/about",
  },
  // {
  //   id: 5,
  //   name: "Lorem",
  //   link: "/about",
  // },
];

const DropNavigation = () => {
  return (
    <>
      {/* For Wider Screen  */}
      <div class="d-none d-md-block">
        <div class="Headcont ">
          <a
            class="nav-link "
            href="race"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 class="heading">Auto</h3>
          </a>
          <div id="dropnav" class="dropdown-menu  border-0 ">
            <div class="row px-5 ">
              <div class="row col-md-6 col-lg-6 p-2 col-xl-5 ">
                <div class="col col-md-6 col-lg-6 col-xl-6 px-5 ">
                  <h2>Men</h2>
                  {manCate.map((items, index) => (
                    <a href={items.link} style={{ textDecoration: "none" }}>
                      <h3 class="catetext ">{items.name}</h3>
                    </a>
                  ))}
                </div>
                <div class="col col-md-6 col-lg-6 col-xl-6 px-5 ">
                  <h2>Women</h2>
                  {womenCate.map((items, index) => (
                    <a href={items.link} style={{ textDecoration: "none" }}>
                      <h3 class="catetext">{items.name}</h3>
                    </a>
                  ))}
                </div>
              </div>
              <div class="col col-md-6 col-lg-6 p-2 col-xl-6 ">
                <div class="d-flex justify-content-between  ">
                  {images.map((items, index) => (
                    <a href={items.link}>
                      <img
                        src={items.imgPath}
                        class=" img-fluid dropnavimgs"
                        alt="Items"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* second link */}
          <a
            class="nav-link "
            href="race"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 class="heading">Kart </h3>
          </a>
          <div id="dropnav" class="dropdown-menu  border-0  ">
            <div class="row px-5">
              <div class="col col-md-3 col-lg-2 col-xl-2 p-3  fit-content">
                {navCate.map((items, index) => (
                  <a href={items.link} style={{ textDecoration: "none" }}>
                    <h3 class="catetext">{items.name}</h3>
                  </a>
                ))}
              </div>
              <div class="col col-md-9 col-lg-7 p-2 col-xl-6  ">
                <div class="d-flex justify-content-between col-md-12 col-lg-12 col-xl-12  ">
                  {images.map((items, index) => (
                    <a href={items.link}>
                      <img
                        src={items.imgPath}
                        class=" img-fluid dropnavimgs"
                        alt="Items"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div class="col  col-lg-3 col-xl-5 bg-primary "></div>
            </div>
          </div>
          {/* Third Link */}
          <a
            class="nav-link "
            href="race"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 class="heading">Rental </h3>
          </a>
          <div id="dropnav" class="dropdown-menu  border-0  ">
            <div class="row px-5">
              <div class="col col-md-3 col-lg-2 col-xl-2 p-3  fit-content">
                {navCate.map((items, index) => (
                  <a href={items.link} style={{ textDecoration: "none" }}>
                    <h3 class="catetext">{items.name}</h3>
                  </a>
                ))}
              </div>
              <div class="col col-md-9 col-lg-7 p-2 col-xl-6  ">
                <div class="d-flex justify-content-between col-md-12 col-lg-12 col-xl-12  ">
                  {images.map((items, index) => (
                    <a href={items.link}>
                      <img
                        src={items.imgPath}
                        class=" img-fluid dropnavimgs"
                        alt="Items"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div class="col  col-lg-3 col-xl-5 bg-primary "></div>
            </div>
          </div>
          {/* Fourth Link */}
          <a
            class="nav-link "
            href="race"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 class="heading">Mechanic</h3>
          </a>
          <div id="dropnav" class="dropdown-menu  border-0  ">
            <div class="row px-5">
              <div class="col col-md-3 col-lg-2 col-xl-2 p-3  fit-content">
                {navCate.map((items, index) => (
                  <a href={items.link} style={{ textDecoration: "none" }}>
                    <h3 class="catetext">{items.name}</h3>
                  </a>
                ))}
              </div>
              <div class="col col-md-9 col-lg-7 p-2 col-xl-6  ">
                <div class="d-flex justify-content-between col-md-12 col-lg-12 col-xl-12  ">
                  {images.map((items, index) => (
                    <a href={items.link}>
                      <img
                        src={items.imgPath}
                        class=" img-fluid dropnavimgs"
                        alt="Items"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div class="col  col-lg-3 col-xl-5 bg-primary "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropNavigation;
