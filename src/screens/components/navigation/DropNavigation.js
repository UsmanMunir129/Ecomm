import React from "react";
import "./Dropnav.css";
const images = [
  {
    link: "/Suits",
    imgPath: [require("../../../assets/RS001.jpg")],
  },
  {
    link: "/Suits",
    imgPath: [require("../../../assets/RS005.jpg")],
  },
];
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
    link: "/Mechanic-Suit",
  },
  {
    id: 2,
    name: "Gloves",
    link: "/Mechanic-Gloves",
  },
  {
    id: 3,
    name: "Shoes",
    link: "/Mechanic-Shoes",
  },
  {
    id: 4,
    name: "Accessories",
    link: "/Mechanic-Accessories",
  },
];

const DropNavigation = () => {
  return (
    <>
      {/* For Wider Screen  */}
      <div className="d-none d-md-block ">
        <div className="Headcont ">
          {/* First Link */}
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
                  {motorsport.map((items, index) => (
                    <a
                      key={index}
                      href={items.link}
                      style={{ textDecoration: "none" }}
                    >
                      <h3 className="catetext ">{items.name}</h3>
                    </a>
                  ))}
                </div>
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
          <div id="dropnav" className="dropdown-menu  ">
            <div className="row px-5 ">
              <div className="row col-md-6 col-lg-6 p-2 col-xl-5 ">
                <div className="col col-md-6 col-lg-6 col-xl-6 px-5 ">
                  <h2>Men/Women</h2>
                  {kart.map((items, index) => (
                    <a
                      key={index}
                      href={items.link}
                      style={{ textDecoration: "none" }}
                    >
                      <h3 className="catetext ">{items.name}</h3>
                    </a>
                  ))}
                </div>
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
          {/* Third Link */}
          <a
            className="nav-link "
            href="race"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 className="heading">Mechanic</h3>
          </a>
          <div id="dropnav" className="dropdown-menu  ">
            <div className="row px-5 ">
              <div className="row col-md-6 col-lg-6 p-2 col-xl-5 ">
                <div className="col col-md-6 col-lg-6 col-xl-6 px-5 ">
                  <h2>Men/Women</h2>
                  {mechanic.map((items, index) => (
                    <a
                      key={index}
                      href={items.link}
                      style={{ textDecoration: "none" }}
                    >
                      <h3 className="catetext ">{items.name}</h3>
                    </a>
                  ))}
                </div>
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
        </div>
      </div>
    </>
  );
};

export default DropNavigation;
