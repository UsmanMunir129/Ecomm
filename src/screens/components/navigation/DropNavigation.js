import React from "react";
import "./Dropnav.css";

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

const DropNavigation = () => {
  return (
    <>
      <div class="d-none d-md-block">
        <div class="Headcont ">
          <a
            class="nav-link "
            href="#"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 class="heading">Race</h3>
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
                  src="https://www.royalapparel.net/img//1-KidsApparel.jpg"
                  class="img-fluid"
                  alt="image"
                />
              </div>
            </div>
          </div>
          {/* second link */}
          <a
            class="nav-link "
            href="#"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 class="heading">Race</h3>
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
            <h3 class="heading">Race</h3>
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
                  src="https://www.royalapparel.net/img//1-KidsApparel.jpg"
                  class="img-fluid"
                  alt="image"
                />
              </div>
            </div>
          </div>
          {/* Fourth Link */}
          <a
            class="nav-link "
            href="#"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            <h3 class="heading">Race</h3>
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
                  src="https://www.royalapparel.net/img//1-KidsApparel.jpg"
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
            <h3 class="heading">Race</h3>
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
                  src="https://www.royalapparel.net/img//1-KidsApparel.jpg"
                  class="img-fluid"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropNavigation;
