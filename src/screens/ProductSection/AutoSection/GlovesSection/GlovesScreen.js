import React from "react";
import "../../suitsscreen.css";
import NavAuto from "../NavAuto";
import KartComp from "../../KartSection/KartComp";

const gloves = [
  {
    link: "/Gloves/CI-RG20",
    code: "CI-RG20",
    detail: "Skeleton Gloves SFI 3.3/5",
    imgPath: [require("../../../../assets/CI-RG20.jpg")],
  },
  {
    link: "/Gloves/CI-RG30",
    code: "CI-RG30",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/CI-RG30.jpg")],
  },
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
const GlovesScreen = () => {
  return (
    <>
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
            <NavAuto />
          </div>
          <div className="col-12 col-lg-9 ">
            <KartComp images={gloves} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlovesScreen;
