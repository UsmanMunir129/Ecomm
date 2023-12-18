import React from "react";
import "./Dropnav.css";
const images = [
  {
    link: "/Suits",
    imgPath: [require("../../../assets/CI-RS001 (1).jpg")],
  },
  {
    link: "/Suits",
    imgPath: [require("../../../assets/RS002.jpg")],
  },
];
const navCate = [
  {
    id: 1,
    name: "Suits",
    link: "/Suits",
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
      <div className="d-none d-md-block ">
        <div className="Headcont ">
          <a
            className="nav-link "
            href="race"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 className="heading">Motorsport</h3>
          </a>
          <div id="dropnav" className="dropdown-menu  ">
            <div className="row px-5 ">
              <div className="row col-md-6 col-lg-6 p-2 col-xl-5 ">
                <div className="col col-md-6 col-lg-6 col-xl-6 px-5 ">
                  <h2>Men/Women</h2>
                  {manCate.map((items, index) => (
                    <a
                      key={index}
                      href={items.link}
                      style={{ textDecoration: "none" }}
                    >
                      <h3 className="catetext ">{items.name}</h3>
                    </a>
                  ))}
                </div>
                {/* <div className="col col-md-6 col-lg-6 col-xl-6 px-5 ">
                  <h2>Women</h2>
                  {womenCate.map((items, index) => (
                    <a
                      key={index}
                      href={items.link}
                      style={{ textDecoration: "none" }}
                    >
                      <h3 className="catetext">{items.name}</h3>
                    </a>
                  ))}
                </div> */}
              </div>
              <div className="col col-md-6 col-lg-6 p-2 col-xl-6 ">
                <div className="d-flex justify-content-between  ">
                  {images.map((items, index) => (
                    <a key={index} href={items.link}>
                      <img
                        src={items.imgPath}
                        className=" img-fluid dropnavimgs"
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
            className="nav-link "
            href="race"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 className="heading">Kart </h3>
          </a>
          <div id="dropnav" className="dropdown-menu  border-0  ">
            <div className="row px-5">
              <div className="col col-md-3 col-lg-2 col-xl-2 p-3  fit-content">
                {navCate.map((items, index) => (
                  <a
                    key={index}
                    href={items.link}
                    style={{ textDecoration: "none" }}
                  >
                    <h3 className="catetext">{items.name}</h3>
                  </a>
                ))}
              </div>
              <div className="col col-md-9 col-lg-7 p-2 col-xl-6  ">
                <div className="d-flex justify-content-between col-md-12 col-lg-12 col-xl-12  ">
                  {images.map((items, index) => (
                    <a key={index} href={items.link}>
                      <img
                        src={items.imgPath}
                        className=" img-fluid dropnavimgs"
                        alt="Items"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="col  col-lg-3 col-xl-5 bg-primary "></div>
            </div>
          </div>
          {/* Third Link */}
          {/* <a
            className="nav-link "
            href="race"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 className="heading">Rental </h3>
          </a>
          <div id="dropnav" className="dropdown-menu  border-0  ">
            <div className="row px-5">
              <div className="col col-md-3 col-lg-2 col-xl-2 p-3  fit-content">
                {navCate.map((items, index) => (
                  <a
                    key={index}
                    href={items.link}
                    style={{ textDecoration: "none" }}
                  >
                    <h3 className="catetext">{items.name}</h3>
                  </a>
                ))}
              </div>
              <div className="col col-md-9 col-lg-7 p-2 col-xl-6  ">
                <div className="d-flex justify-content-between col-md-12 col-lg-12 col-xl-12  ">
                  {images.map((items, index) => (
                    <a key={index} href={items.link}>
                      <img
                        src={items.imgPath}
                        className=" img-fluid dropnavimgs"
                        alt="Items"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="col  col-lg-3 col-xl-5 bg-primary "></div>
            </div>
          </div> */}
          {/* Fourth Link */}
          <a
            className="nav-link "
            href="race"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 className="heading">Mechanic</h3>
          </a>
          <div id="dropnav" className="dropdown-menu  border-0  ">
            <div className="row px-5">
              <div className="col col-md-3 col-lg-2 col-xl-2 p-3  fit-content">
                {navCate.map((items, index) => (
                  <a
                    key={index}
                    href={items.link}
                    style={{ textDecoration: "none" }}
                  >
                    <h3 className="catetext">{items.name}</h3>
                  </a>
                ))}
              </div>
              <div className="col col-md-9 col-lg-7 p-2 col-xl-6  ">
                <div className="d-flex justify-content-between col-md-12 col-lg-12 col-xl-12  ">
                  {images.map((items, index) => (
                    <a key={index} href={items.link}>
                      <img
                        src={items.imgPath}
                        className=" img-fluid dropnavimgs"
                        alt="Items"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="col  col-lg-3 col-xl-5 bg-primary "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropNavigation;
