import React from "react";
import "../../suitsscreen.css";
import OrderButton from "../../../../constants/OrderButton";
import NavKart from "../NavKart";
import Accessories from "../../../components/ProductComponent/Accessories";
import KartComp from "../../../components/ProductComponent/KartComp";

const images = [
  {
    // link: "/Mask-CiBlava1",
    code: "CI-Neck",
    detail: "Woven FRC Fabric",
    imgPath: [require("../../../../assets/neck.jpg")],
  },
  {
    // link: "/Mask-CiBlava",
    code: "CI-HMBG",
    detail: "Outer Ployster Inside Cotton Towel",
    imgPath: [require("../../../../assets/CI-RA0023.jpg")],
  },

  {
    // link: "/Mask-CiBlava",
    code: "CI-FLAG",
    detail: "Checkered Flag Made in Polyster",
    imgPath: [require("../../../../assets/CI-RA0027.jpg")],
  },
];
const KaccessoriesScreen = () => {
  return (
    <>
      <div>
        {/* Top Banner img */}
        <div className=" container-fluid kartbanner">
          <img
            className="img-fluid kartbannerimg"
            src={require("../../../../assets/ACCESSORIES.jpg")}
            alt="Bannerimage"
          />
        </div>
        {/* Left Bar and Product Section */}
        <div className="kartprodcont row mt-5">
          <div className="col-lg-3">
            <NavKart />
          </div>

          {/* Product Section */}
          <div className="col-12 col-lg-9 ">
            <KartComp images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default KaccessoriesScreen;
