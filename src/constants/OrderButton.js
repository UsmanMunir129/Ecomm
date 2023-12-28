import React from "react";
import { NavLink } from "react-router-dom";

const OrderButton = () => {
  return (
    <div className="mt-4">
      <NavLink
        to="http://cuirconintl.com/form/quotation.php"
        className="katelastbtn btn mx-3"
      >
        Order Form
      </NavLink>
    </div>
  );
};

export default OrderButton;
