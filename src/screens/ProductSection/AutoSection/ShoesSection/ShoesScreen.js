import React from "react";
import "../../suitsscreen.css";
import NavAuto from "../NavAuto";
import KartComp from "../../../components/ProductComponent/KartComp";

const shoes = [
  {
    link: "/Shoes/RS011",
    code: "CI-RS011",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/RS011.JPG")],
  },
  {
    link: "/Shoes/RS022",
    code: "CI-RS022",
    detail: "Double Layer Nomex Shoes",
    imgPath: [require("../../../../assets/RS022.JPG")],
  },
  {
    link: "/Shoes/RS012",
    code: "CI-KS012",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/RS012.JPG")],
  },
  {
    link: "/Shoes/RS023",
    code: "CI-RS023",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/RS023.JPG")],
  },
];
const ShoesScreen = () => {
  return (
    <>
      <div>
        {/* Top Banner img */}
        <div className=" container-fluid kartbanner">
          <img
            className="img-fluid kartbannerimg"
            src={require("../../../../assets/MotorsportShoes.jpg")}
            alt="Bannerimage"
          />
        </div>
        {/* Left Bar and Product Section */}
        <div className="row ">
          <div className="col-lg-3">
            <NavAuto />
          </div>
          <div className="col-12 col-lg-9">
            <KartComp images={shoes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoesScreen;
