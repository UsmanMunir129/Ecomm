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
      "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
];

const navCate = [
  {
    id: 1,
    name: "First",
    link: "/Kartrace",
  },
  {
    id: 2,
    name: "Second",
    link: "/About",
  },
  {
    id: 3,
    name: "Lorem",
    link: "/about",
  },
  // {
  //   id: 4,
  //   name: "Lorem",
  //   link: "/about",
  // },
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
            <h2 class="heading">Race</h2>
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
          {/* second link */}
          <a
            class="nav-link "
            href="race"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h2 class="heading">Race</h2>
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
            <h2 class="heading">Race</h2>
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
            <h2 class="heading">Race</h2>
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
