import React from "react";
import KartComp from "../../../components/ProductComponent/KartComp";
import MecNavbar from "../MecNavbar";

const mSuits = [
  {
    link: "/Shoes/RS011",
    code: "CI-RS011",
    detail: "2 Layer Nomex Leather Shoes",
    imgPath: [require("../../../../assets/M-suit.webp")],
  },
];
const MSuitSection = () => {
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
          <MecNavbar />
        </div>
        <div className="col-12 col-lg-9 ">
          <KartComp images={mSuits} />
        </div>
      </div>
      {/* <div className="row ">
        <div className="col-lg-3">
          <MecNavbar />
        </div>
        <div className="col-12 col-lg-9 ">
          <KartComp images={mSuits} />
        </div>
      </div> */}
    </div>
  );
};

export default MSuitSection;
