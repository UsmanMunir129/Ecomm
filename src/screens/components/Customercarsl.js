import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./customercarsl.css";

const testiMonials = [
  {
    name: "Rekob Ramya",
    description:
      "We want to express our gratitude for the outstanding partnership with Cuircon in supplying premium race wear to our brand. The quality, innovation, and timely delivery of your products have significantly enhanced our offerings. Your commitment to excellence aligns seamlessly with our brand ethos, making Cuircon International a pivotal contributor to our success in the competitive market. We look forward to continuing this fruitful collaboration",
    address: "USA",
  },
  {
    name: "Brandon Savage",
    description:
      "We extend our sincerest appreciation for the remarkable B2B collaboration. Your commitment to crafting cutting-edge race wear has not only met but exceeded our expectations. The exceptional quality, attention to detail, and reliability in meeting deadlines have been instrumental in enhancing our brand's credibility and performance. Here's to continued success through our valued partnership.",
    address: "UK",
  },
  {
    name: "Steve Burns",
    description:
      "We would like to express our heartfelt gratitude for the outstanding B2B relationship we've cultivated. Your dedication to delivering top-tier race wear has significantly elevated our brand's image and performance in the market. The seamless collaboration, unmatched quality, and on-time deliveries have been instrumental in our joint success. We look forward to many more milestones together",
    address: "CANADA",
  },
  {
    name: "Kevin Canlas",
    description:
      "We want to extend our deepest appreciation for the exceptional B2B collaboration. Your commitment to providing high-quality race wear has played a pivotal role in enhancing our brand's identity and customer satisfaction. The seamless communication, attention to detail, and adherence to timelines showcase Cuircon's dedication to excellence. We are truly grateful for the positive impact on our business and eagerly anticipate a continued successful partnership",
    address: "ITALY",
  },
];
const Customercarsl = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    // Customer review
    <div>
      <div className="row cardsmaincont1">
        <div className="col-md-12">
          <div>
            <h2 className="text-center text-white my-5">
              See how others transformed their brands with on-demand fulfillment
            </h2>
          </div>
          <OwlCarousel
            id="customer-testimonoals"
            className="owl-carousel owl-theme"
            {...options}
          >
            {testiMonials.map((step, index) => (
              <div key={index} className="item ">
                <div className="shadow-effect">
                  {/* <img
                    className="img-circle img-fluid object-fit-cover"
                    src={step.img}
                    alt="Cuircon Intl"
                  /> */}
                  <h5 className="text-white customerdesc">
                    {step.description}
                  </h5>
                </div>
                <div className="testimonial-name">
                  <h5>{step.name}</h5>
                  <small>{step.address}</small>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Customercarsl;
