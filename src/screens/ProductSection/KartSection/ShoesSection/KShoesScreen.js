import React from "react";
import NavKart from "../NavKart";
import KartComp from "../KartComp";
const kShoes = [
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
];
const KShoesScreen = () => {
  return (
    <div>
      {/* Top Banner img */}
      <div className=" container-fluid kartbanner">
        <img
          className="img-fluid object-fit-cover kartbannerimg"
          src={require("../../../../assets/MotorsportShoes.jpg")}
          alt="Bannerimage"
        />
      </div>
      {/* Left Bar and Product Section */}
      <div className="row ">
        <div className="col-lg-3">
          <NavKart />
        </div>
        <div className="col-12 col-lg-9 ">
          <KartComp images={kShoes} />
        </div>
      </div>
    </div>
  );
};

export default KShoesScreen;
