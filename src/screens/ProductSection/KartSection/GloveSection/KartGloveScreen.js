import React from "react";
import NavKart from "../NavKart";
import KartComp from "../KartComp";

const gloveimages = [
  {
    link: "/Gloves/CI-RG003",
    code: "CI-RG003",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-RG31.JPG")],
  },
  {
    link: "/Gloves/CI-RG001",
    code: "CI-RG001",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-RG001.JPG")],
  },
  {
    link: "/Gloves/CI-RG41",
    code: "CI-RG41",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-RG41.JPG")],
  },
];
const KartGloveScreen = () => {
  return (
    <div>
      {/* Top Banner img */}
      <div className="container-fluid kartbanner">
        <img
          className="img-fluid  kartbannerimg"
          src={require("../../../../assets/motorsportgloves.jpg")}
          alt="Bannerimage"
        />
      </div>
      {/* Left Bar and Product Section */}
      <div className="row ">
        <div className="col-lg-3">
          <NavKart />
        </div>
        <div className="col-12 col-lg-9 ">
          <KartComp images={gloveimages} />
        </div>
      </div>
    </div>
  );
};

export default KartGloveScreen;
