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
        bgImage={require("../../assets/ecobanner.jpg")}
        bgImageAlt="Banner image"
      >
        <div className="content1 ">
          <div className="text-content1">
            <h2 className="headingcontent text-white" data-aos="fade-right">
              Welcome to Cuircon International
            </h2>
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
              <span className="ecoscndbanner">
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
        <div className="col-12 col-md-6 col-lg-6 p-0" data-aos="fade-up">
          <img
            src={require("../../assets/Fabric.jpg")}
            alt="hero-section"
            className="img-fluid ecofriendlyimg"
          />
        </div>
      </div>
      {/* First Image Desc */}
      <div className="row  ">
        <div className="col-12 col-md-6 col-lg-6 p-0" data-aos="fade-up">
          <img
            src={require("../../assets/eco.jpg")}
            alt="hero-section"
            className="img-fluid ecofriendlyimg"
          />
        </div>
        <div className="col-12  col-md-6 col-lg-6 align-self-center ">
          <div>
            <div className="text-light ms-5" data-aos="fade-left">
              <h3 className="text-light">Our Commitment to Sustainability</h3>
              <h4 className="headingeco ">Ethical Materials</h4>
              <span className="text-light textmotorsport ">
                We prioritize the use of eco-friendly materials in the
                production of our racewear products. From cutting-edge recycled
                fabrics to sustainable alternatives, every material is carefully
                selected to minimize environmental impact without compromising
                on performance or quality.
              </span>
              <h4 className="headingeco ">
                Innovative Manufacturing Processes
              </h4>
              <span className="text-light textmotorsport">
                Our manufacturing processes are designed to be as sustainable as
                possible. We employ state-of-the-art technologies that reduce
                energy consumption, water usage, and waste generation. By
                embracing innovation, we aim to set new standards for
                environmentally conscious manufacturing within the racewear
                industry.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Second image nd Desc */}
      <div className="row  ">
        <div className="col-12  col-md-6 col-lg-6 align-self-center ">
          <div>
            <div className="text-light ms-5" data-aos="fade-right">
              <h3 className="text-light">Eco-Friendly Product Line</h3>
              <h4 className="headingeco ">Recycled Race Suits</h4>
              <span className="text-light textmotorsport ">
                Discover our range of race suits crafted from recycled
                materials, offering uncompromised protection on the track while
                reducing the environmental footprint. These suits are a
                testament to our dedication to sustainability without
                compromising on the high-performance standards expected in
                motorsports.
              </span>
              <h4 className="headingeco ">Biodegradable Accessories</h4>
              <span className="text-light textmotorsport ">
                From gloves to balaclavas, our accessories are crafted with
                biodegradable materials, ensuring that every piece of gear
                serves its purpose on the track while being gentle on the
                planet.
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 p-0" data-aos="fade-up">
          <img
            src={require("../../assets/ecobanner3.jpg")}
            alt="hero-section"
            className="img-fluid ecofriendlyimg"
          />
        </div>
      </div>
      {/* Third image nd Desc */}

      <div className="row  ">
        <div className="col-12 col-md-6 col-lg-6 p-0" data-aos="fade-up">
          <img
            src={require("../../assets/ecobanner4.jpg")}
            alt="hero-section"
            className="img-fluid ecofriendlyimg"
          />
        </div>
        <div className="col-12  col-md-6 col-lg-6 align-self-center ">
          <div>
            <div className="text-light ms-5" data-aos="fade-left">
              <h3 className="text-light">Transparency and Accountability</h3>
              <h4 className="headingeco ">Traceable Supply Chain</h4>
              <span className="text-light textmotorsport ">
                We believe in transparency, and that starts with our supply
                chain. We meticulously trace the origin of every material used
                in our products, ensuring that they meet the highest ethical and
                environmental standards.
              </span>
              <h4 className="headingeco ">Certifications</h4>
              <span className="text-light textmotorsport ">
                Our commitment to sustainability is further solidified by
                certifications from reputable environmental organizations. These
                certifications validate our efforts and showcase our dedication
                to making a positive impact.
              </span>
              <h4 className="headingeco ">Join The Movement</h4>
              <span className="text-light textmotorsport ">
                By choosing [Your Company Name], you are not just selecting
                high-quality racewear; you are becoming a part of a movement
                towards a more sustainable and eco-friendly future for
                motorsports. Together, let's drive change on and off the track.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motorsport;
