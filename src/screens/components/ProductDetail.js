import React from "react";
import "./productdetail.css";
const ProductDetail = () => {
  return (
    <div className="container  my-5">
      <div className="row ">
        <div className="col col-xs-12 col-md-5 col-sm-12  col-lg-5 text-center">
          <div id="contimagdetail">
            <img
              className="img-fluid  imagedetail"
              src={require("../../assets/Product1.jpeg")}
              alt="suits"
            />
          </div>
        </div>
        <div className="col col-xs-12 col-md-7 col-sm-12 col-lg-7   mt-3">
          <h2>Lorem ipsum dolor sit amet.</h2>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
