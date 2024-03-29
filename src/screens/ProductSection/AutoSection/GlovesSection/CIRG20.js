import React, { useState } from "react";
import "../../suitrs002.css";
import OrderButton from "../../../../constants/OrderButton";
import { useParams } from "react-router-dom";
import { gloves } from "./AGlovesData";
const CIRG20 = () => {
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
  const thisProduct = gloves.find((prod) => prod.id === productId);
  return (
    <div className="container p-0  my-5">
      <div className="row m-0 px-3">
        <div className="col-12  col-md-12 col-sm-12 col-lg-5 col-xl-5 col-xxl-5 text-center my-2">
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
          )}{" "}
        </div>
        <div className="col-12 col-md-12 col-sm-12 col-lg-7 col-xl-7 col-xxl-7 mt-1">
          <h2 className="table-title">{thisProduct.detail}</h2>
          <div className="table-responsive rounded mt-3">
            <table className="table table-striped table-hover table-lg  table-bordered ">
              <tbody>
                <tr>
                  <td>
                    <strong>Item:</strong>
                  </td>
                  <td className="col-11">CI-RG20</td>
                </tr>
                <tr>
                  <td>
                    <strong>Material:</strong>
                  </td>
                  <td className="col-11">Nomex 3.3/5</td>
                </tr>
                <tr>
                  <td>
                    <strong>Inside Layer:</strong>
                  </td>
                  <td className="col-11">Nomex Lining</td>
                </tr>
                <tr>
                  <td>
                    <strong>Size:</strong>
                  </td>
                  <td className="col-11">
                    All Sizes Are Available (customer’s choice).
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Printing:</strong>
                  </td>
                  <td className="col-11">Screen/ Silicon</td>
                </tr>
                <tr>
                  <td>
                    <strong>Grip:</strong>
                  </td>
                  <td className="col-11">Ultra Palm Grip</td>
                </tr>
                <tr>
                  <td>
                    <strong>Design:</strong>
                  </td>
                  <td className="col-11">Any Design As Per Requirement.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Logo:</strong>
                  </td>
                  <td className="col-11">Fully Customized.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Branding:</strong>
                  </td>
                  <td className="col-11">
                    Company Logos, Patches, Badges, Labels Can Be Added As
                    Required.
                  </td>
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

export default CIRG20;
