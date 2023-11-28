// import React from "react";
import "./productdetail.css";
import React, { useState } from "react";
import { Button } from "reactstrap";
import OrderModal from "./OrderModal";
// import OrderModal from "./OrderModal";
const ProductDetail = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div className="container p-0  my-5">
      <div className="row m-0 px-3">
        <div className="col-12  col-md-5 col-sm-12  col-lg-5 text-center">
          <div id="contimagdetail">
            <img
              className="  imagedetail"
              src={require("../../assets/Product1.jpeg")}
              alt="suits"
            />
          </div>
        </div>
        <div className="col-12 col-md-7 col-sm-12 col-lg-7   mt-3">
          <h2 className="table-title">Lorem ipsum dolor sit amet.</h2>
          <div className="table-responsive rounded mt-5 ">
            <table className="table table-striped table-hover table-lg  table-bordered ">
              <tbody>
                <tr>
                  <td>
                    <strong>Item:</strong>
                  </td>
                  <td className="col-11">Lorem ipsum dolor sit</td>
                </tr>
                <tr>
                  <td>
                    <strong>Material:</strong>
                  </td>
                  <td className="col-11">
                    Cotton / Polyester, Customized Material (customer’s choice).
                  </td>
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
                  <td className="col-11">
                    Digital Printing, Sublimation, Screen Printing, Emboss
                    Printing, Metal Foil Printing, High-Density Printing, DTG
                    Printing, Heat Transfer, Crackle Printing, Reflective
                    Printing.
                  </td>
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
                  <td className="col-11">
                    Satin Stitching, Silk Printing, Normal Embroidery, 3D
                    Embroidery, Heat Transfer Print, Customized.
                  </td>
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
          <div className="mt-5">
            <Button color="dark" size="lg" onClick={toggleModal}>
              Open Order Form
            </Button>

            <OrderModal isOpen={isModalOpen} toggleModal={toggleModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
