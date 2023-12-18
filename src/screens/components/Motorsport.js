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
        className="parallax"
        blur={{ min: -5, max: 5 }}
        strength={100}
        bgImage={require("../../assets/bannermotorsp.jpg")}
        bgImageAlt="Banner image"
      >
        <div className="content1 ">
          <div className="text-content1">
            <h1 className="headingcontent text-white" data-aos="fade-right">
              Welcome to Cuircon International
            </h1>
            <p
              className="headingscndcontent text-white"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              - Crafting Excellence in Eco-Friendly Racewear
            </p>
          </div>
        </div>
      </Parallax>
      {/* Second detail banner image */}
      <div className="row  ">
        <div className="col-12  col-md-6 col-lg-6 align-self-center ">
          <div>
            <div
              className="text-light ms-5"
              data-aos="fade-right"
              style={{ borderLeft: "3px solid red", paddingLeft: "20px" }}
            >
              <span className="text-light textmotorsport ">
                At Cuircon International, we take pride in revolutionizing the
                racewear industry by seamlessly blending performance with
                sustainability. As avid enthusiasts of motorsports, we
                understand the importance of not only excelling on the track but
                also leaving a positive impact on the environment. Our
                commitment to eco-friendly practices and sustainable
                manufacturing sets us apart as leaders in the racewear industry.
              </span>
            </div>
          </div>
        </div>
        <div className="col-12  col-md-6 col-lg-6 " data-aos="fade-up">
          <img
            src={require("../../assets/Fabric.jpg")}
            alt="hero-section"
            className="img-fluid dashboardimg"
          />
        </div>
      </div>
      {/* First Image Desc */}
      <div className="row  ">
        <div className="col-12 col-md-6 col-lg-6 " data-aos="fade-up">
          <img
            src={require("../../assets/Fabric.jpg")}
            alt="hero-section"
            className="img-fluid dashboardimg"
          />
        </div>
        <div className="col-12  col-md-6 col-lg-6 align-self-center ">
          <div>
            <div
              className="text-light ms-5"
              data-aos="fade-right"
              style={{ borderLeft: "3px solid red", paddingLeft: "20px" }}
            >
              <span className="text-light textmotorsport ">
                At Cuircon International, we take pride in revolutionizing the
                racewear industry by seamlessly blending performance with
                sustainability. As avid enthusiasts of motorsports, we
                understand the importance of not only excelling on the track but
                also leaving a positive impact on the environment. Our
                commitment to eco-friendly practices and sustainable
                manufacturing sets us apart as leaders in the racewear industry.
              </span>
            </div>
          </div>
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

      {/* <div className="row">
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
      </div> */}
    </div>
  );
};

export default Motorsport;
