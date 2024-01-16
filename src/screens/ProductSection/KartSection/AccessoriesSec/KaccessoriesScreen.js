import React from "react";
import "../../suitsscreen.css";
import NavKart from "../NavKart";
import Accessories from "../../../components/ProductComponent/Accessories";

const images = [
  {
    code: "CI-BALA-R",
    detail: "180 GSM 100% Cotton",
    imgPath: [require("../../../../assets/blava.jpg")],
  },
  {
    code: "CI-BALA",
    detail: "180 GSM 100% Cotton",
    imgPath: [require("../../../../assets/blavam.jpg")],
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
            <Accessories data={images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default KaccessoriesScreen;
