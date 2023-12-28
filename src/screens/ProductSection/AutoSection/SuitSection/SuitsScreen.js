import React from "react";
import "../../suitsscreen.css";
import NavAuto from "../NavAuto";
import KartComp from "../../KartSection/KartComp";

const suits = [
  {
    link: "/Suits/RS001",
    code: "CI-RS001",
    detail: "2 Layer Gabardine Nomex Suit",
    imgPath: [require("../../../../assets/RS001.jpg")],
  },
  {
    link: "/Suits/RS002",
    code: "CI-RS002",
    detail: "2 Layer Sateen Nomex Suit",
    imgPath: [require("../../../../assets/RS002.jpg")],
  },
  {
    link: "/Suits/RS003",
    code: "CI-RS003",
    detail: "2 Layer Sateen Nomex Suit",
    imgPath: [require("../../../../assets/RS003.jpg")],
  },
  {
    link: "/Suits/RS004",
    code: "CI-RS004",
    detail: "2 Layer FR Cotton Suit",
    imgPath: [require("../../../../assets/RS004.jpg")],
  },
  {
    link: "/Suits/RS005",
    code: "CI-RS005",
    detail: "2 Layer FR Cotton Suit",
    imgPath: [require("../../../../assets/RS005.jpg")],
  },
  {
    link: "/Suits/RS000",
    code: "CU-0000",
    detail: "2 Layer Sateen Nomex Suit",
    imgPath: [require("../../../../assets/CU.jpg")],
  },
];
const SuitsScreen = () => {
  return (
    <>
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
            <NavAuto />
          </div>
          <div className="col-12 col-lg-9 ">
            <KartComp images={suits} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SuitsScreen;
