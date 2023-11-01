import React from "react";
import "./productleftnav.css";
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
const ProductLeftnav = () => {
  return (
    <div class=" col-md-3 col-lg-3 col-xl-3 px-5  d-none d-md-block">
      <div class="catecont ">
        <h2 class="categoryhead">Category</h2>
        {navCate.map((items, index) => (
          <a href={items.link} class="catglinkbtn">
            <h3 class="categorylinktext">{items.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductLeftnav;
