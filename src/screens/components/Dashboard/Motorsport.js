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
      <Parallax
        blur={{ min: -15, max: 15 }}
        strength={100}
        bgImage={require("../../../assets/About.jpg")}
        bgImageAlt="Aboutimag"
      >
        <div className="content" data-aos="zoom-in">
          <div className="text-content">WELCOME</div>
        </div>
      </Parallax>
      <div className="row  ">
        <div class="col-12 col-md-6 align-self-center p-5  ">
          <div data-aos="fade-right">
            <div
              className="text-light "
              style={{ borderLeft: "3px solid red" }}
            >
              <p className="text-light fs-4">
                We represent quality and we have the intention of maintaining
                our position at the top. We are continually developing new
                technologies, new solutions and new materials and we are the
                only manufacturer of racing products that owns a full testing
                laboratory which allows us to be constantly in line with FIA
                requests
              </p>
            </div>
            <div className="text-light" style={{ borderLeft: "3px solid red" }}>
              <p className="text-light fs-4">
                We represent quality and we have the intention of maintaining
                our position at the top. We are continually developing new
                technologies, new solutions and new materials and we are the
                only manufacturer of racing products that owns a full testing
              </p>
            </div>
            <div className="text-light" style={{ borderLeft: "3px solid red" }}>
              <p className="text-light fs-4">
                We represent quality and we have the intention of maintaining
                our position at the top. We are continually developing new
                technologies
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 px-0" data-aos="fade-up">
          <img
            src={require("../../../assets/About.jpg")}
            alt="hero-section"
            className="imagescnd img-fluid"
          />
        </div>
      </div>

      <div className="row ">
        <div className="col-12 col-md-6   p-5">
          <h2 className="text-light" data-aos="fade-down">
            SEATBELT
          </h2>

          <div className="" data-aos="fade-right">
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
              quisquam architecto, deleniti quia repellat consequuntur. Pariatur
              impedit laborum assumenda! Totam quae eum quisquam, incidunt
              laboriosam labore, impedit odio perferendis est a quam officiis
              itaque perspiciatis iusto laborum at vel quaerat consectetur
              placeat ab nemo tempora cupiditate? Accusamus, aspernatur, totam
              vitae, nobis cum tempore dolorum quod beatae molestiae ut atque
              excepturi. Consequuntur voluptatem autem optio ab numquam. Sint
              quia velit corrupti excepturi, temporibus natus. Corrupti, beatae.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 px-0 imagecont">
          <img
            src={require("../../../assets/a1.jpg")}
            alt="hero-section"
            className="dashboardimg img-fluid "
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-12 col-md-6 bg-primary px-0 imagecont">
          <img
            src={require("../../../assets/a4.jpg")}
            alt="hero-section"
            className="dashboardimg  img-fluid "
          />
        </div>
        <div className="col-12 col-md-6 align-self-center  p-5">
          <h2 className="text-light" data-aos="fade-down">
            SEAT
          </h2>

          <div className="" data-aos="fade-right">
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
              quisquam architecto, deleniti quia repellat consequuntur. Pariatur
              impedit laborum assumenda! Totam quae eum quisquam, incidunt
              laboriosam labore, impedit odio perferendis est a quam officiis
              itaque perspiciatis iusto laborum at vel quaerat consectetur
              placeat ab nemo tempora cupiditate? Accusamus, aspernatur, totam
              vitae, nobis cum tempore dolorum quod beatae molestiae ut atque
              excepturi. Consequuntur voluptatem autem optio ab numquam. Sint
              quia velit corrupti excepturi, temporibus natus. Corrupti, beatae.
            </p>
          </div>
        </div>
      </div>
      <div className="row bg-black">
        <div
          className="col-12 col-md-6 align-self-center  p-5"
          // data-aos="fade-right"
        >
          <h2 className="text-light" data-aos="fade-down">
            SEATBELT
          </h2>

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
              quisquam architecto, deleniti quia repellat consequuntur. Pariatur
              impedit laborum assumenda! Totam quae eum quisquam, incidunt
              laboriosam labore, impedit odio perferendis est a quam officiis
              itaque perspiciatis iusto laborum at vel quaerat consectetur
              placeat ab nemo tempora cupiditate? Accusamus, aspernatur, totam
              vitae, nobis cum tempore dolorum quod beatae molestiae ut atque
              excepturi. Consequuntur voluptatem autem optio ab numquam. Sint
              quia velit corrupti excepturi, temporibus natus. Corrupti, beatae.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 bg-primary px-0 imagecont">
          <img
            src={require("../../../assets/a2.jpg")}
            alt="hero-section"
            className="dashboardimg  img-fluid "
          />
        </div>
      </div>
      <div className="row bg-black">
        <div className="col-12 col-md-6 bg-primary px-0 imagecont">
          <img
            src={require("../../../assets/a3.jpg")}
            alt="hero-section"
            className="dashboardimg  img-fluid "
          />
        </div>
        <div className="col-12 col-md-6 align-self-center  p-5">
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
              quisquam architecto, deleniti quia repellat consequuntur. Pariatur
              impedit laborum assumenda! Totam quae eum quisquam, incidunt
              laboriosam labore, impedit odio perferendis est a quam officiis
              itaque perspiciatis iusto laborum at vel quaerat consectetur
              placeat ab nemo tempora cupiditate? Accusamus, aspernatur, totam
              vitae, nobis cum tempore dolorum quod beatae molestiae ut atque
              excepturi. Consequuntur voluptatem autem optio ab numquam. Sint
              quia velit corrupti excepturi, temporibus natus. Corrupti, beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motorsport;
