import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owlcarousel.css";
const images = [
  {
    id: 1,
    image: [require("../../assets/color-selection.png")],
    heading: "Custom Design and Manufacturing",
    Description:
      "Collaborate with racewear brands to create custom designs for racing suits, gloves, boots, and other gear. Utilize advanced materials and technologies to ensure the highest level of performance and safety",
  },
  {
    id: 2,
    image: [require("../../assets/sample.png")],
    heading: "Prototyping and Sampling",
    Description:
      "Develop prototypes and samples for racewear products to allow brands to evaluate and test the designs before full-scale production.",
  },
  {
    id: 3,
    image: [require("../../assets/onlin.png")],
    heading: "Technical Consultation",
    Description:
      "Provide technical expertise in materials, construction techniques, and safety standards to ensure that racewear meets industry regulations and standards.",
  },
  {
    id: 4,
    image: [require("../../assets/supply.png")],
    heading: "Supply Chain Management",
    Description:
      "Manage the supply chain efficiently to ensure timely production and delivery of racewear products.",
  },
  {
    id: 5,

    image: [require("../../assets/earth.png")],
    heading: "Sustainability Practices",
    Description:
      "Integrate sustainable and eco-friendly practices in manufacturing processes and materials to appeal to environmentally conscious racewear brands",
  },
  {
    id: 6,
    image: [require("../../assets/container.png")],
    heading: "Logistics and Distribution",
    Description:
      "Assist in logistics and distribution to ensure that racewear products reach their destinations in a timely and cost-effective manner.",
  },
  {
    id: 7,
    image: [require("../../assets/compliant.png")],
    heading: "Compliance and Certification",
    Description:
      "Ensure that racewear products meet industry regulations and obtain necessary certifications for safety and quality.",
  },
  {
    id: 8,
    image: [require("../../assets/analytics.png")],
    heading: "Research and Development",
    Description:
      "Invest in ongoing research and development to stay ahead of industry trends, technological advancements, and innovations in racewear design and materials",
  },
  {
    id: 9,
    image: [require("../../assets/online-training.png")],
    heading: "Education and Training",
    Description:
      "Provide training sessions or educational resources for racewear brands to keep them informed about the latest developments in materials, safety standards, and design techniques.",
  },
];

//Owl Carousel Package Styling Properties
const options = {
  margin: 25,

  responsiveClass: true,
  dots: false,
  autoplay: false,
  smartSpeed: 1000,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>",
  ],

  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
};

const Owlcarousel = () => {
  return (
    <div className="cardsmaincont my-5 py-3">
      <div>
        <h2 className="text-center text-white fst-italic my-5">SERVICES</h2>
      </div>
      <OwlCarousel
        className="owl-theme my-3"
        {...options}
        loop
        items={4}
        margin={10}
        nav
      >
        {images.map((step, index) => (
          <div className="container item cards">
            <div className="cont1">
              <h3 className="heading1">{step.heading}</h3>
              <p className="desc1">{step.Description}</p>
            </div>
            <div className="cont2 d-flex align-items-center justify-content-center">
              <img
                src={step.image}
                className="img-fluid cardbotmimg object-fit-cover"
                alt="Cuircon International"
              />
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Owlcarousel;
