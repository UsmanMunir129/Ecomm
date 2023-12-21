import React from "react";
import "./sampleprogram.css";

const SampleProgram = () => {
  return (
    <>
      <div className="container-fluid kartbanner">
        <img
          className="img-fluid kartbannerimg"
          src={require("../../assets/sample program.jpg")}
          alt="Bannerimage"
        />
      </div>
      <div className="m-5">
        <h3 className="fw-bold">
          Exclusive Sample Program: Unleash the Power of Premium Products at a
          Fraction of the Cost!
        </h3>
        <span className="sampleparagrapgh1 ">
          At <b style={{ color: "red" }}>Cuircon International</b>, we
          understand the importance of ensuring our valued customers have the
          opportunity to experience the excellence of our products firsthand.
          Introducing our Approved Customer Sample Program – an exclusive offer
          tailored just for you!
        </span>
        <h3 className="fw-bold my-3 mx-3">How It Works:</h3>
        <div className="my-3 mx-5 w-75">
          <h4 className="headsample1">
            1.{" "}
            <b style={{ borderBottom: "2px solid red" }}>Fill up the Form:</b>
          </h4>
          <span className="sampleparagrapgh1">
            Dive into a seamless experience by completing our user-friendly
            form. We've simplified the process to make it quick and easy,
            ensuring you spends more time enjoying our products and less time
            navigating through paperwork.
          </span>
          <h4 className="headsample1">
            2.{" "}
            <b style={{ borderBottom: "2px solid red" }}>
              Select Your Samples:
            </b>
          </h4>
          <span className="sampleparagrapgh1">
            Choose up to 2 exquisite products from our diverse range, each
            identified by their unique Product Numbers. Indulge your senses and
            explore the magic that our offerings bring into your life.
          </span>
          <h4 className="headsample1">
            3.{" "}
            <b style={{ borderBottom: "2px solid red" }}>Enjoy 40% Discount:</b>
          </h4>
          <span className="sampleparagrapgh1">
            As a token of our appreciation for your loyalty, approved customers
            are entitled to an irresistible 40% discount on their sample order.
            Yes, you read it right – a whopping 40% off! This is your chance to
            experience luxury without breaking the bank.
          </span>
          <h4 className="headsample1">
            4.{" "}
            <b style={{ borderBottom: "2px solid red" }}>
              Limitless Potential:
            </b>
          </h4>
          <span className="sampleparagrapgh1">
            While the year unfolds, you can revel in the excitement of ordering
            up to 7 samples per calendar year. It's your golden ticket to a
            world of possibilities, allowing you to savor the essence of our
            premium products at an unbeatable value.
          </span>
        </div>
        <h3 className="fw-bold my-4 mx-3">Why Choose Our Sample Program?</h3>
        <div className="my-3 mx-5 w-75">
          <h4 className="headsample1">
            {/* 1.{" "} */}
            <b style={{ borderBottom: "2px solid red" }}>Curated Selection:</b>
          </h4>
          <span className="sampleparagrapgh1">
            Immerse yourself in a carefully curated selection of our finest
            products, handpicked to showcase the epitome of quality and
            innovation.
          </span>
          <h4 className="headsample1">
            {/* 2.{" "} */}
            <b style={{ borderBottom: "2px solid red" }}>Discounted Delight:</b>
          </h4>
          <span className="sampleparagrapgh1">
            Embrace the thrill of exploring our products with an exclusive 40%
            discount, making luxury more accessible than ever before.
          </span>
          <h4 className="headsample1">
            {/* 3.{" "} */}
            <b style={{ borderBottom: "2px solid red" }}>
              Customer-Centric Experience:
            </b>
          </h4>
          <span className="sampleparagrapgh1">
            We prioritize your satisfaction and aim to elevate your shopping
            experience. Our sample program is designed with your needs in mind,
            ensuring you get the most out of every order.
          </span>
        </div>
      </div>
    </>
  );
};

export default SampleProgram;
