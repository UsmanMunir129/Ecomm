import React from "react";
import "../../suitsscreen.css";
import OrderButton from "../../../../constants/OrderButton";
import NavKart from "../NavKart";

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
          <div className="row col-sm-12 col-md-9   ">
            {images.map((items, index) => (
              <div
                key={index}
                className="kartprodcards col-6 col-sm-6 col-md-4 col-lg-4"
              >
                {/* <NavLink to={items.link} className="kartlink"> */}
                <div className="kartproimg ">
                  <img
                    src={items.imgPath}
                    className="img-fluid "
                    alt="Suits"
                    style={{
                      height: "365px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="kartbodytext">
                  <h5 className=" protext ">{items.code}</h5>
                  <h5 className=" protext ">{items.detail}</h5>
                </div>
                {/* </NavLink> */}

                <OrderButton />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default KaccessoriesScreen;
