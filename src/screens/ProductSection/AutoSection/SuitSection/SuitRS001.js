import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../suitrs002.css";
import OrderButton from "../../../../constants/OrderButton";
import { suits } from "./ASuitData";

const SuitRS001 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openFullScreen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeFullScreen = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };
  const { productId } = useParams();
  const thisProduct = suits.find((prod) => prod.id === productId);
  // console.log("Show data", thisProduct, productId);
  return (
    <div className="p-0 my-5">
      <div className="row  px-5">
        <div className="col-12  col-md-12 col-sm-12 col-lg-5 col-xl-5 col-xxl-4 text-center">
          <img
            className="imagedetail"
            src={thisProduct.imgPath}
            alt="suits"
            onClick={openFullScreen}
          />
          {/* For image section */}
          {isOpen && (
            <div className="fullscreen-overlay" onClick={closeFullScreen}>
              <div className="fullscreen-image-container">
                <img src={thisProduct.imgPath} alt="Product Full Screen" />
              </div>
            </div>
          )}
        </div>
        <div className="col-12 col-md-12 col-sm-12 col-lg-7 col-xl-7 col-xxl-8 mt-3">
          <h2 className="table-title">{thisProduct.detail}</h2>
          <div className="table-responsive rounded ">
            <table className="table table-striped table-hover table-lg  table-bordered ">
              <tbody>
                <tr>
                  <td>
                    <strong>Item:</strong>
                  </td>
                  <td className="col-11">{thisProduct.code}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Material:</strong>
                  </td>
                  <td className="col-11">{thisProduct.material}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Box Quilting:</strong>
                  </td>
                  <td className="col-11">{thisProduct.boxquality}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Radial Knit Sleeves:</strong>
                  </td>
                  <td className="col-11">{thisProduct.radial}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Stretch Knit Waist:</strong>
                  </td>
                  <td className="col-11">{thisProduct.stretch}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Inset Pockets:</strong>
                  </td>
                  <td className="col-11">{thisProduct.pockets}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Soft Knit Collar:</strong>
                  </td>
                  <td className="col-11">{thisProduct.collar}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Regulay/Boot Cut Leys:</strong>
                  </td>
                  <td className="col-11">{thisProduct.bootcut}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Color Knit Cuffs:</strong>
                  </td>
                  <td className="col-11">{thisProduct.cuffs}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <OrderButton />
        </div>
      </div>
    </div>
  );
};

export default SuitRS001;
