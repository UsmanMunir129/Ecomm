import React from "react";
import KartComp from "../../../components/ProductComponent/KartComp";
import MecNavbar from "../MecNavbar";
import Accessories from "../../../components/ProductComponent/Accessories";

const gloveimages = [
  {
    link: "/Gloves/CI-RG003",
    code: "CI-RG003",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/Mgloves1.jpg")],
  },
  {
    // link: "/Gloves/CI-RG001",
    code: "CI-RG001",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/Mgloves2.jpg")],
  },
  {
    link: "/Gloves/CI-RG41",
    code: "CI-RG41",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/Mgloves3.jpg")],
  },
  {
    link: "/Gloves/CI-RG41",
    code: "CI-RG41",
    detail: "2 Layer Nomex Leather Gloves",
    imgPath: [require("../../../../assets/Mgloves4.jpg")],
  },
];
const Mgloves = () => {
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
          {/* <NavKart /> */}
        </div>
        <div className="col-12 col-lg-9 ">
          <Accessories data={gloveimages} />
        </div>
      </div>
    </div>
  );
};

export default Mgloves;
