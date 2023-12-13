import React, { useState } from "react";
import { Button } from "reactstrap";
import OrderModal from "../../OrderModal";
import "../../suitrs002.css";

const SuitRS003 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <div className=" p-0  my-5">
      <div className="row  px-5">
        <div className="col-12  col-md-12 col-sm-12 col-lg-5 col-xl-5 col-xxl-4 text-center">
          <div id="contimagdetail">
            <img
              className="imagedetail"
              src={require("../../../../assets/RS003.jpg")}
              alt="suits"
            />
          </div>
        </div>
        <div className="col-12 col-md-12 col-sm-12 col-lg-7 col-xl-7 col-xxl-8 mt-3">
          <h2 className="table-title">2 Layer Sateen Nomex Suit</h2>
          <div className="table-responsive rounded ">
            <table className="table table-striped table-hover table-lg  table-bordered ">
              <tbody>
                <tr>
                  <td>
                    <strong>Item:</strong>
                  </td>
                  <td className="col-11">CI-RS003</td>
                </tr>
                <tr>
                  <td>
                    <strong>Material:</strong>
                  </td>
                  <td className="col-11">Nomex & FR Cotton</td>
                </tr>
                <tr>
                  <td>
                    <strong>Box Quilting:</strong>
                  </td>
                  <td className="col-11">
                    The meticulous box quilting design adds a touch of
                    sophistication to the suit. Choose between a matching or
                    contrasting color for a personalized look that reflects your
                    team's unique style.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Radial Knit Sleeves:</strong>
                  </td>
                  <td className="col-11">
                    Unrestricted movement is key to a successful race. Our suit
                    features radial knit sleeves, providing a full 360-degree
                    range of motion, ensuring you can maneuver effortlessly and
                    maintain peak performance.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Stretch Knit Waist:</strong>
                  </td>
                  <td className="col-11">
                    The hidden stretch knit waist ensures a secure fit while
                    accommodating movement. Experience unparalleled comfort and
                    flexibility, allowing you to focus on the race ahead.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Inset Pockets:</strong>
                  </td>
                  <td className="col-11">
                    Convenience meets functionality with strategically placed
                    inset pockets at the front of the pants. Easily access
                    essentials without compromising the aerodynamic design of
                    the suit.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Soft Knit Collar:</strong>
                  </td>
                  <td className="col-11">
                    The soft knit collar adds a touch of luxury and comfort.
                    Choose between a classic flap or mandarin style, tailoring
                    the suit to your preferences.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Regulay/Boot Cut Leys:</strong>
                  </td>
                  <td className="col-11">
                    Tailor your racing look with the option of regular or boot
                    cut legs. Hidden cuffs ensure a sleek appearance while
                    maintaining safety standards.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Color Knit Cuffs:</strong>
                  </td>
                  <td className="col-11">
                    Add a pop of color to your suit with our vibrant knit cuffs.
                    Personalize your racewear and showcase your team spirit with
                    a wide array of color options.
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

export default SuitRS003;
