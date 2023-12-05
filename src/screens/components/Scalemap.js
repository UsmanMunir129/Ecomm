import React from "react";

const Scalemap = () => {
  return (
    <div className="container  my-5">
      <div className="container row">
        <div className="container my-5 col-12  col-md-6 col-lg-6">
          <h2 className="">Scale Your Can Trust</h2>
          <div className=" mt-5">
            <div>
              <h3>1M+</h3>
              <p>items fulfilled every month</p>
            </div>
            <div>
              <h3>15</h3>
              <p>facilities around the globe</p>
            </div>
            <div>
              <h3>72.5M</h3>
              <p>items fulfilled since 2013</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <img
            src="https://static.cdn.printful.com/static/v864/images/site/global-fulfillment-widget/map-new.svg?v=4"
            alt="Cuircon Intl"
            className="img-fluid object-fit-cover mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Scalemap;
