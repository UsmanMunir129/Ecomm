import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./motorsport.css";
import { Parallax } from "react-parallax";

const Motorsport = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black">
      {/* Banner Image */}
      <Parallax
        blur={{ min: -15, max: 15 }}
        strength={100}
        bgImage={require("../../assets/bannermotorsp.jpg")}
        bgImageAlt="Banner image"
      >
        <div className="content" data-aos="zoom-in">
          <div className="text-content">
            <h2 className="fs-1 fw-bold">RACING WEAR</h2>
          </div>
        </div>
      </Parallax>
      {/* Second detail banner image */}
      <div className="row  ">
        <div className="col-12  col-md-6 col-lg-6 align-self-center p-5  ">
          <div>
            <div
              className="text-light"
              data-aos="fade-right"
              style={{ borderLeft: "3px solid red" }}
            >
              <p className="text-light fs-4 ms-4">
                We represent quality and we have the intention of maintaining
                our position at the top. We are continually developing new
                technologies, new solutions and new materials and we are the
                only manufacturer of racing products that owns a full testing
                laboratory which allows us to be constantly in line with FIA
                requests
              </p>
            </div>
            <div
              className="text-light"
              data-aos="fade-right"
              data-aos-duration="2000"
              style={{ borderLeft: "3px solid red" }}
            >
              <p className="text-light fs-4 ms-4">
                We represent quality and we have the intention of maintaining
                our position at the top. We are continually developing new
                technologies, new solutions and new materials and we are the
                only manufacturer of racing products that owns a full testing
              </p>
            </div>
            <div
              className="text-light"
              data-aos="fade-right"
              data-aos-duration="2500"
              style={{ borderLeft: "3px solid red" }}
            >
              <p className="text-light fs-4 ms-4">
                We represent quality and we have the intention of maintaining
                our position at the top. We are continually developing new
                technologies
              </p>
            </div>
          </div>
        </div>
        <div className="col-12  col-md-6 col-lg-6 " data-aos="fade-up">
          <img
            src={require("../../assets/About.jpg")}
            alt="hero-section"
            className="img-fluid imagescnd"
          />
        </div>
      </div>
      {/* First Image Desc */}
      <div className="row ">
        <div className="col-sm-12 col-md-12 col-lg-6 px-0 d-none d-sm-block imagecont">
          <img
            src={require("../../assets/a1.jpg")}
            alt="hero-section"
            className="dashboardimg img-fluid "
          />
        </div>
        <div
          className="col-12 col-sm-6 col-md-6 col-lg-6 align-self-center p-5"
          data-aos="fade-left"
        >
          <h2 className="text-light">AUTO SUITS</h2>
          <div className="">
            <p className="detailtext text-light">
              Accelerate your brand's performance with our elite B2B racing
              gloves, meticulously crafted for motorsports excellence. Unleash
              precision and control on the track with our high-performance
              gloves designed for professionals. Engineered for maximum grip,
              durability, and comfort, our customizable racing gloves set a new
              standard in B2B motorsports apparel. Elevate your team's
              experience with cutting-edge technology and superior
              craftsmanship. Partner with us for a seamless production journey,
              ensuring your brand races ahead with confidence and style.
              Discover the perfect blend of innovation and reliability – choose
              our B2B racing gloves for a competitive edge in the fast-paced
              world of motorsports.
            </p>
          </div>
        </div>
        {/* for small screen */}
        <div className="col-12 px-0 d-block d-sm-none imagecont">
          <img
            src={require("../../assets/a1.jpg")}
            alt="hero-section"
            className="dashboardimg img-fluid "
          />
        </div>
      </div>
      {/* Second image nd Desc */}
      <div className="row ">
        <div
          className="col-sm-12 col-md-12 col-lg-6 align-self-center  p-5"
          data-aos="fade-right"
        >
          <h2 className="text-light">AUTO GLOVES</h2>

          <div className="">
            <p className="detailtext text-light">
              Accelerate your brand's performance with our elite B2B racing
              gloves, meticulously crafted for motorsports excellence. Unleash
              precision and control on the track with our high-performance
              gloves designed for professionals. Engineered for maximum grip,
              durability, and comfort, our customizable racing gloves set a new
              standard in B2B motorsports apparel. Elevate your team's
              experience with cutting-edge technology and superior
              craftsmanship. Partner with us for a seamless production journey,
              ensuring your brand races ahead with confidence and style.
              Discover the perfect blend of innovation and reliability – choose
              our B2B racing gloves for a competitive edge in the fast-paced
              world of motorsports
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 bg-primary px-0 imagecont">
          <img
            src={require("../../assets/a4.jpg")}
            alt="hero-section"
            className="dashboardimg  img-fluid "
          />
        </div>
      </div>
      {/* Third image nd Desc */}

      <div className="row">
        {/* For Small and Wider Screens */}
        <div className="col-sm-12 col-md-12 col-lg-6 d-none d-sm-block px-0 imagecont">
          <img
            src={require("../../assets/a2.jpg")}
            alt="hero-section"
            className="dashboardimg  img-fluid"
          />
        </div>
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center p-5"
          data-aos="fade-left"
        >
          <h2 className="text-light">Masks</h2>

          <div className="">
            <p className="detailtext text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              iure delectus eveniet ipsam debitis earum consequuntur possimus
              blanditiis, dolorem voluptate atque nulla magnam omnis et corporis
              officia repudiandae quaerat. Laudantium rem quo tempora. Quam rem
              quis sunt, ipsa et deleniti, harum veniam, sit voluptates nulla
              aperiam nobis nihil sed fuga. Error, laboriosam recusandae
              voluptatibus numquam sed itaque praesentium, ut aperiam
              consectetur incidunt perferendis quis a voluptates. Porro
              dignissimos officiis iure dolorum perspiciatis expedita id,
              quisquam architecto, deleniti quia repellat consequuntur.
            </p>
          </div>
        </div>
        <div className="col-12 d-block d-sm-none  px-0 imagecont">
          <img
            src={require("../../assets/a2.jpg")}
            alt="hero-section"
            className="dashboardimg  img-fluid"
          />
        </div>
      </div>
      {/* Forth image nd Desc */}

      <div className="row">
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center p-5"
          data-aos="fade-right"
        >
          <h2 className="text-light">SEAT</h2>

          <div className="">
            <p className="detailtext text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              iure delectus eveniet ipsam debitis earum consequuntur possimus
              blanditiis, dolorem voluptate atque nulla magnam omnis et corporis
              officia repudiandae quaerat. Laudantium rem quo tempora. Quam rem
              quis sunt, ipsa et deleniti, harum veniam, sit voluptates nulla
              aperiam nobis nihil sed fuga. Error, laboriosam recusandae
              voluptatibus numquam sed itaque praesentium, ut aperiam
              consectetur incidunt perferendis quis a voluptates. Porro
              dignissimos officiis iure dolorum perspiciatis expedita id,
              quisquam architecto, deleniti quia repellat consequuntur.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 bg-primary px-0 imagecont">
          <img
            src={require("../../assets/a3.jpg")}
            alt="hero-section"
            className="dashboardimg  img-fluid "
          />
        </div>
      </div>
    </div>
  );
};

export default Motorsport;
