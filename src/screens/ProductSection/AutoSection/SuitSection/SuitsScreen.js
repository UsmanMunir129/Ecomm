import React from "react";
import "../../suitsscreen.css";
import NavAuto from "../NavAuto";
import KartComp from "../../../components/ProductComponent/KartComp";
import { suits } from "./ASuitData";

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

          <div className="col-12 col-lg-9">
            <KartComp images={suits} />
            {/* {products} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuitsScreen;
