import React from "react";
import "./kartrace.css";
const navCate = [
  {
    id: 1,
    name: "First",
    link: "/Kartrace",
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
];
const images = [
  {
    link: "/ProductDetail",
    imgPath:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1619533394727-57d522857f89?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
  {
    link: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374",
  },
];
const Kartrace = () => {
  return (
    <>
      <div>
        {/* <TopNavigation /> */}
        {/* Top Banner img */}
        <div class=" container-fluid kartbanner">
          <img
            class=" img-fluid kartbannerimg"
            src={require("../../assets/C2.jpg")}
            alt="Bannerimage"
          />
        </div>
        {/* Left Bar and Product Section */}
        <div class=" kartprodcont row my-5">
          <div class=" col-md-3 col-lg-3 col-xl-3 px-5  d-none d-md-block">
            <div class="catecontainer ">
              <h2 class="categoryhead">Category</h2>
              {navCate.map((items, index) => (
                <a href={items.link} class="catglinkbtn">
                  <h3 class="categorylinktext">{items.name}</h3>
                </a>
              ))}
            </div>
          </div>

          <div class=" row col-sm-12 col-md-9 col-lg-9 col-xl-9 d-flex justify-content-center ">
            {images.map((items, index) => (
              <div class=" kartprodcards col col-sm-6  mt-2">
                <a href={items.link} class="kartlink">
                  <div class="kartproimg ">
                    <img src={items.imgPath} class="img-fluid" alt="Suits" />
                  </div>
                  <div class=" kartbodytext ">
                    <h5 class=" protext ">8080</h5>
                    <h5 class=" protext ">Lorem ipsum dolor sit amet</h5>
                  </div>
                </a>
                <a href={items.link} class="katelastbtn btn  my-2  ">
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Kartrace;
