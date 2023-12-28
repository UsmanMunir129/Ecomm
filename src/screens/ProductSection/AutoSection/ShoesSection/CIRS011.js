// import React from "react";
import React from "react";
import "../../suitrs002.css";
import OrderButton from "../../../../constants/OrderButton";
// import OrderModal from "./OrderModal";
const CIRS011 = () => {
  return (
    <div className=" p-0  my-5">
      <div className="row m-0 px-3">
        <div className="col-12  col-md-12 col-sm-12 col-lg-5 col-xl-5 col-xxl-5 text-center my-2">
          <div id="contimagdetail">
            <img
              className="imagedetail"
              src={require("../../../../assets/RS011.JPG")}
              alt="suits"
            />
          </div>
        </div>
        <div className="col-12 col-md-12 col-sm-12 col-lg-7 col-xl-7 col-xxl-7 mt-1">
          <h2 className="table-title">Double Layer Nomex Shoes</h2>
          <div className="table-responsive rounded mt-1">
            <table className="table table-striped table-hover table-lg  table-bordered ">
              <tbody>
                <tr>
                  <td>
                    <strong>Item:</strong>
                  </td>
                  <td className="col-11">CI-RSO11</td>
                </tr>
                <tr>
                  <td>
                    <strong>Material:</strong>
                  </td>
                  <td className="col-11">Double Layer Nomex Shoes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Leather:</strong>
                  </td>
                  <td className="col-11">
                    Made of Leather Cow Hide and Suede Leather
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Inside Layer:</strong>
                  </td>
                  <td className="col-11">Inside Single Layer Nomex Lining</td>
                </tr>
                <tr>
                  <td>
                    <strong>Laces:</strong>
                  </td>
                  <td className="col-11">Nomex Laces</td>
                </tr>
                <tr>
                  <td>
                    <strong>Velcro:</strong>
                  </td>
                  <td className="col-11">Double Velcro Strap</td>
                </tr>
                <tr>
                  <td>
                    <strong>Sole:</strong>
                  </td>
                  <td className="col-11">Moulded Rubber Sole</td>
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
