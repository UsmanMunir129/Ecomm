// Component for non-clickable products
import React from "react";
import OrderButton from "../../../constants/OrderButton";

const Accessories = ({ data }) => {
  return (
    <div>
      <div className="row col-12 m-0 px-3">
        {data.map((items, index) => {
          return (
            <div key={items.id} className="kartprodcards col-6 col-lg-4 my-2">
              <div className="kartproimg ">
                <img
                  src={items.imgPath}
                  className="img-fluid "
                  alt="Cuirconintl"
                />
              </div>
              <div className="kartbodytext">
                <h5 className=" protext ">{items.code}</h5>
                <h5 className=" protext ">{items.detail}</h5>
              </div>
              <OrderButton />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accessories;
