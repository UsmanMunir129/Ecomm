import React from "react";
import NavKart from "../NavKart";
import KartComp from "../../../components/ProductComponent/KartComp";

const images = [
  {
    link: "/Suits/RS001",
    code: "CI-KS001",
    detail: "2 Layer Karting Suit",
    imgPath: [require("../../../../assets/kart1.jpg")],
  },
  {
    link: "/Suits/RS002",
    code: "CI-KS002",
    detail: "2 Layer Karting Suit",
    imgPath: [require("../../../../assets/kart2.jpg")],
  },
];
const KartSuitScreen = () => {
  return (
    <div>
      {/* Top Banner img */}
      <div className=" container-fluid kartbanner">
        <img
          className="img-fluid kartbannerimg"
          src={require("../../../../assets/AutoSuitBanner.jpg")}
          alt="Bannerimage"
        />
      </div>
      {/* Left Bar and Product Section */}
      <div className="row ">
        <div className="col-lg-3">
          <NavKart />
        </div>
        <div className="col-12 col-lg-9 ">
          <KartComp images={images} />
        </div>
      </div>
    </div>
  );
};

export default KartSuitScreen;
