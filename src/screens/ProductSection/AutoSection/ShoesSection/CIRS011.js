import React, { useState } from "react";
import "../../suitrs002.css";
import OrderButton from "../../../../constants/OrderButton";
import { useParams } from "react-router-dom";
import { shoes } from "./AShoesData";
// import OrderModal from "./OrderModal";
const CIRS011 = () => {
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
  const thisProduct = shoes.find((prod) => prod.id === productId);
  return (
    <div className=" p-0  my-5">
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
          )}
        </div>
        <div className="col-12 col-md-12 col-sm-12 col-lg-7 col-xl-7 col-xxl-7 mt-1">
          <h2 className="table-title">{thisProduct.detail}</h2>
          <div className="table-responsive rounded mt-1">
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
                    <strong>Leather:</strong>
                  </td>
                  <td className="col-11">{thisProduct.leather}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Inside Layer:</strong>
                  </td>
                  <td className="col-11">{thisProduct.insidelayer}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Laces:</strong>
                  </td>
                  <td className="col-11">{thisProduct.laces}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Velcro:</strong>
                  </td>
                  <td className="col-11">{thisProduct.strap}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sole:</strong>
                  </td>
                  <td className="col-11">{thisProduct.sole}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="mt-5">
            <NavLink
              to="http://cuirconintl.com/form/quotation.php"
              className="katelastbtn btn mx-3"
            >
              Order Form
            </NavLink>
          </div> */}
          <OrderButton />
        </div>
      </div>
    </div>
  );
};

export default CIRS011;
