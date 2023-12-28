import React from "react";

import "../../suitrs002.css";
import OrderButton from "../../../../constants/OrderButton";
// import OrderModal from "./OrderModal";
const CIRG41 = () => {
  return (
    <div className="container p-0  my-5">
      <div className="row m-0 px-3">
        <div className="col-12  col-md-12 col-sm-12 col-lg-5 col-xl-5 col-xxl-5 text-center my-2">
          <div id="contimagdetail">
            <img
              className="imagedetail"
              src={require("../../../../assets/CI-RG41.JPG")}
              alt="suits"
            />
          </div>
        </div>
        <div className="col-12 col-md-12 col-sm-12 col-lg-7 col-xl-7 col-xxl-7 mt-1">
          <h2 className="table-title">2 Layer Nomex Leather Gloves</h2>
          <div className="table-responsive rounded mt-5">
            <table className="table table-striped table-hover table-lg  table-bordered ">
              <tbody>
                <tr>
                  <td>
                    <strong>Item:</strong>
                  </td>
                  <td className="col-11">CI-RG40</td>
                </tr>
                <tr>
                  <td>
                    <strong>Material:</strong>
                  </td>
                  <td className="col-11">Nomex & FR Cotton</td>
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
                  <td className="col-11">Embroidery</td>
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

export default CIRG41;
